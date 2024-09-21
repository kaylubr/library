const container = document.querySelector(".wrapper");
const modal = document.querySelector("#modal");
const newBtn = document.querySelector("#add-btn");
const confirmBtn = document.querySelector("#confirm-btn");
const myLibrary = [];

function Book(author, title, pages, isRead) {
  this.author = author; 
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

newBtn.addEventListener("click", () => {
  modal.showModal();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addBookToLibrary();
  modal.close();  
});

function addBookToLibrary() {
  const authorInput = document.querySelector("#author");
  const titleInput = document.querySelector("#title");
  const pagesInput = document.querySelector("#num-of-pages");
  const isReadInput = document.querySelector("#read");

  const author = authorInput.value;
  const title = titleInput.value;
  const pages = pagesInput.value;
  const isRead = isReadInput.value;

  myLibrary.push(new Book(author, title, pages, isRead));
}

function displayBooks() {
  
}
