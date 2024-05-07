const gettingYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();

yearVar = date.getFullYear();

gettingYear.innerHTML = "© " + yearVar;

// Starting Last Modified Object

let lastModification = new Date(document.lastModified);
lastModified.innerHTML = lastModification;
