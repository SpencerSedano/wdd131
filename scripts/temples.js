const gettingYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

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
  } else {
    templesp.removeEventListener("click", toggleLinks);
  }
}

addOrRemoveToggleListener();

window.addEventListener("resize", addOrRemoveToggleListener);
