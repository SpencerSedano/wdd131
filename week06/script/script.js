const imagesSources = [
  "img/elderlycellphone.jpg",
  "img/elderlyexercise.jpg",
  "img/elderlyhelp.jpg",
];
let currentIndex = 0;

function changeImage() {
  const img = document.querySelector(".banner");
  img.src = imagesSources[currentIndex];
  currentIndex = (currentIndex + 1) % imagesSources.length;
}

changeImage(currentIndex);

const ellipses = document.querySelectorAll("svg ellipse");
ellipses.forEach((ellipse, index) => {
  ellipse.addEventListener("click", () => {
    changeImage(index);
  });
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  localStorage.setItem(
    "contactForm",
    JSON.stringify(Object.fromEntries(formData))
  );
  alert("Form submitted!");
});

// Handle hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
