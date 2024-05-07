const gettingYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const date = new Date();

yearVar = date.getFullYear();

gettingYear.innerHTML = "© " + yearVar;

// Starting Last Modified Object

let lastModification = new Date(document.lastModified);
lastModified.innerHTML = lastModification;

//Cusco Letter

const cuscoLink = document.getElementById("cusco-link");
const letters = document.querySelectorAll(".letter");

cuscoLink.addEventListener("click", function (event) {
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add("clicked");
    }, index * 100);
  });
});
