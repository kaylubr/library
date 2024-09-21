const container = document.querySelector(".wrapper");
const modal = document.querySelector("#modal");
const newBtn = document.querySelector("#add-btn");
const closeBtn = document.querySelector("#close-btn");
const confirmBtn = document.querySelector("#confirm-btn");
const authorInput = document.querySelector("#author");
const titleInput = document.querySelector("#title");
const pagesInput = document.querySelector("#num-of-pages");
const isReadInput = document.querySelector("#read");
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
  confirmBtn.toggleAttribute("disabled", "");

  addBookToLibrary();
  removeAllBooks(); // Remove the existing books before printing all
  displayBooks(); 
  modal.close();  
});

modal.addEventListener("close", () => {
  // Resets the input values when modal is closed
  authorInput.value = "";
  titleInput.value = "";
  pagesInput.value = "";
  isReadInput.value = "No";
});

function addBookToLibrary() {
  const author = authorInput.value;
  const title = titleInput.value;
  const pages = pagesInput.value;
  const isRead = isReadInput.value;

  if (author != "" && title != "" && pages != "") {
    myLibrary.push(new Book(author, title, pages, isRead));
  }
}

function displayBooks() {
  for (const element of myLibrary) {
    const book = document.createElement('div');
    const authorSection = document.createElement('div');
    const titleSection = document.createElement('div');
    const pagesSection = document.createElement('div');
    const isReadSection = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    container.appendChild(book);
    book.appendChild(authorSection);
    book.appendChild(titleSection);
    book.appendChild(pagesSection);
    book.appendChild(isReadSection);
    book.appendChild(removeBtn);
    book.appendChild(readBtn);

    authorSection.textContent = element.author;
    titleSection.textContent = element.title;
    pagesSection.textContent = element.pages;
    isReadSection.textContent = element.isRead;
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("id", "removeBtn");
    readBtn.textContent = "Read";
    readBtn.setAttribute("id", "readBtn");
  }
}

function removeAllBooks() {
  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }
}




