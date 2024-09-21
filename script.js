const myLibrary = [];

function Book(name) {
  this.name = name;
}

function addBookToLibrary() {
  let nameOfBook = prompt("New book: ");

  myLibrary.push(new Book(nameOfBook));
}