const gettingYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const mainElement = document.getElementById("temples-container");

const date = new Date();
const yearVar = date.getFullYear();

gettingYear.innerHTML = "© " + yearVar;

let lastModification = new Date(document.lastModified);
lastModified.innerHTML = lastModification;

const templesp = document.querySelector("#templesp");
const myLinks = document.querySelectorAll(".myLinks");

function toggleLinks() {
  myLinks.forEach((link) => {
    if (link.style.display === "none") {
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  });
}

function addOrRemoveToggleListener() {
  if (window.matchMedia("(max-width: 415px)").matches) {
    templesp.addEventListener("click", toggleLinks);
    myLinks.forEach((link) => {
      link.style.display = "none";
    });
  } else {
    templesp.removeEventListener("click", toggleLinks);
    myLinks.forEach((link) => {
      link.style.display = "block";
    });
  }
}

addOrRemoveToggleListener();

window.addEventListener("resize", addOrRemoveToggleListener);

//week 4
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Additional temple objects
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 107000,
    imageUrl:
      "https://churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/250%2C/0/default",
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 30000,
    imageUrl:
      "https://churchofjesuschrist.org/imgs/8dd109cda45dda79ebe30b0461d5d0afba41f653/full/320%2C/0/default",
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default",
  },
];

function createTempleCard(temple) {
  const templeCard = document.createElement("div");
  templeCard.classList.add("temple-card");

  const templeName = document.createElement("h2");
  templeName.textContent = temple.templeName;

  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;

  const dedicatedDate = document.createElement("p");
  dedicatedDate.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area} square feet`;

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = "lazy";

  templeCard.appendChild(templeName);
  templeCard.appendChild(location);
  templeCard.appendChild(dedicatedDate);
  templeCard.appendChild(area);
  templeCard.appendChild(image);

  return templeCard;
}

function displayTemples(filter) {
  mainElement.innerHTML = "";
  let filteredTemples = [];

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() <= 2000
      );
      break;
    case "new":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 50000);
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area <= 50000);
      break;
    default:
      filteredTemples = temples;
      break;
  }

  filteredTemples.forEach((temple) => {
    const templeCard = createTempleCard(temple);
    mainElement.appendChild(templeCard);
  });
}

document.querySelectorAll(".myLinks a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.getAttribute("data-filter");

    document
      .querySelectorAll(".myLinks a")
      .forEach((link) => link.classList.remove("active"));
    link.classList.add("active");

    displayTemples(filter);
  });
});

displayTemples("all");
