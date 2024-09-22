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
let bookIndex = 0; //Identifier for each book

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

  // Won't push the new object if the contents are empty
  if (author != "" && title != "" && pages != "") {
    myLibrary.push(new Book(author, title, pages, isRead));

  }
}

function displayBooks() {
  // Loop through the array to display the books
  for (const element of myLibrary) {
    const book = document.createElement('div');
    const authorSection = document.createElement('div');
    const titleSection = document.createElement('div');
    const pagesSection = document.createElement('div');
    const isReadSection = document.createElement('div');  
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    container.appendChild(book);
    book.appendChild(titleSection);
    book.appendChild(authorSection);
    book.appendChild(pagesSection);
    book.appendChild(isReadSection);
    book.appendChild(removeBtn);
    book.appendChild(readBtn);

    authorSection.textContent = element.author;
    titleSection.textContent = element.title;
    titleSection.style.fontWeight = 900; // Make the title bold
    pagesSection.textContent = element.pages + " pages";
    isReadSection.textContent = "Have read: " + element.isRead;
    isReadSection.setAttribute("class", "read-status");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("id", "removeBtn");
    readBtn.textContent = "Read";
    readBtn.setAttribute("id", "readBtn");

    removeBtn.addEventListener("click", removeBook);
    readBtn.addEventListener("click", changeReadStatus);
  }

  // Handles the IDs of the new displayed books
  handleBookId();
}

function handleBookId() {
  const bookList = document.querySelectorAll(".wrapper > div");
  bookIndex = 0;
  bookList.forEach(book => {
    book.setAttribute("id", `${bookIndex.toString()}`)
    bookIndex++;
  });
}

function removeBook(event) {
  let book = event.target.parentNode;
  let index = parseInt(book.getAttribute("id"));
  myLibrary.splice(index, 1);
  bookIndex--;
  container.removeChild(book);
  handleBookId();
}

function removeAllBooks() {
  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function changeReadStatus(event) {
  let targetBook = event.target.parentNode;
  let targetBookID = targetBook.getAttribute("id");
  let specificBook = document.getElementById(targetBookID);
  let readStatus = specificBook.querySelector(".read-status");
  
  if (readStatus.textContent === "Have Read: Yes") {
    readStatus.textContent = "Have Read: No";
  } else {
    readStatus.textContent = "Have Read: Yes";
  }
}




