const container = document.querySelector(".wrapper");
const modal = document.querySelector("#modal  ");
const newBtn = document.querySelector("#add-btn");
const confirmBtn = document.querySelector("confirm-btn");
const closeBtn = document.querySelector("close-btn");

const myLibrary = [];

newBtn.addEventListener("click", () => {
  modal.showModal();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

function Book(name) {
  this.name = name; 
}

function addBookToLibrary() {
  let nameOfBook = prompt("New book: ");

  myLibrary.push(new Book(nameOfBook));
}

function displayBooks() {
  for (const element of myLibrary) {
    const newDiv = document.createElement("div");
    newDiv.textContent = element.name;
    container.appendChild(newDiv);
  }
}
