const myLibrary = [];
const container = document.querySelector(".wrapper");

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
