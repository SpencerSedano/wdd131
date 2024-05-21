const input = document.querySelector("#favchap");
const button = document.querySelector("#my-button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value != "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete");
  li.append(deletebutton); // Append the delete button to the li first
  list.append(li); // Then append the li (containing the delete button)
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // removes from array and localStorage
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter); // filter constructs a new array
  setChapterList();
}

/* function addLiAndRemoveButton() {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    li.append(deleteButton);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();

    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });
  }
} */

/* button.addEventListener("click", addLiAndRemoveButton); */
