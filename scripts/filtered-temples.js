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
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-968002-wallpaper.jpg",
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 30000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-lds-585274-wallpaper.jpg",
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-795045-wallpaper.jpg",
  },
];

// Loop through the array and create temple cards
temples.forEach((temple) => {
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

  mainElement.appendChild(templeCard);
});
