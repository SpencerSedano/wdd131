const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append(deleteButton);

// .append accepts Node objects and DOMStrings
// .appendChild accepts only Node objects

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    list.append(li);
    input.value = "";
    input.focus();
  }
});

deleteButton.addEventListener("click", function () {
  list.removeChild(li);
  input.focus();
});
