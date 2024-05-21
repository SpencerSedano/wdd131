const myInput = document.querySelector("#my-input");
const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", function () {
  if (myInput.value != "") {
    console.log(myInput.value);
  }
});
