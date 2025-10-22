const myLibrary = [
    { id: 'initial-1', name: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true },
    { id: 'initial-2', name: "Pride and Prejudice", author: "Jane Austen", pages: 432, read: false },
    { id: 'initial-3', name: "1984", author: "George Orwell", pages: 328, read: true }
];

const bookForm = document.getElementById("form-info");
const addBookFormButton = bookForm.querySelector("button[type='button']");

const dialogElem = document.getElementById("dialog");
const showButton = document.querySelector(".show"); 
const closeButton = document.querySelector(".close"); 

const create = document.querySelector("#create");
const booksContainer = document.getElementById("books-container");

function Books(name, author, pages, read, id) {
    if(!new.target) {
        throw Error("ponele new siome"); 
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id; 
}

function addBookToLibrary(event) {
    event.preventDefault(); 

    const formData = new FormData(bookForm);

    const name = formData.get('book-name');
    const author = formData.get('author');
    const pages = parseInt(formData.get('pages'));
    const readValue = formData.get('read');
    const read = (readValue === 'leido');
    const uuid = crypto.randomUUID(); 

    let book = new Books(name, author, pages, read, uuid);
    myLibrary.push(book);

    bookForm.reset(); 
    dialogElem.close(); 
    renderLibrary();
};

function createBookCardElement(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.id = `book-card-${book.id}`; 

    const titlePara = document.createElement("p");
    titlePara.textContent = `Name: ${book.name}`;

    const authorPara = document.createElement("p");
    authorPara.textContent = `Author: ${book.author}`;

    const pagesPara = document.createElement("p");
    pagesPara.textContent = `Pages: ${book.pages}`;

    const readStatusPara = document.createElement("p");
    readStatusPara.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.bookId = book.id; 

    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = `Mark as ${book.read ? 'Unread' : 'Read'}`;
    toggleReadButton.classList.add("toggle-read-button");
    toggleReadButton.dataset.bookId = book.id;


    bookCard.appendChild(titlePara);
    bookCard.appendChild(authorPara);
    bookCard.appendChild(pagesPara);
    bookCard.appendChild(readStatusPara);
    bookCard.appendChild(deleteButton); 
    bookCard.appendChild(toggleReadButton);

    return bookCard;
}

function renderLibrary() {
    if (booksContainer) {
        booksContainer.innerHTML = ''; 

    }

    myLibrary.forEach(book => {
        const bookCardElement = createBookCardElement(book);
        booksContainer.appendChild(bookCardElement);
    });
}

addBookFormButton.addEventListener("click", addBookToLibrary);

create.addEventListener("click", () => {
    renderLibrary();
});


booksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        const bookIdToDelete = event.target.dataset.bookId;
        deleteBook(bookIdToDelete);
    } else if (event.target.classList.contains("toggle-read-button")) {
        const bookIdToToggle = event.target.dataset.bookId;
        toggleReadStatus(bookIdToToggle);
    }
});



showButton.addEventListener("click", () => {
    dialogElem.showModal();
});

closeButton.addEventListener("click", () => {
  dialogElem.close();
});


function deleteBook(bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id == bookId);

    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
        renderLibrary(); 
    }
}

function toggleReadStatus(bookId) {
    const bookToToggle = myLibrary.find(book => book.id == bookId);

    if (bookToToggle) {
        bookToToggle.read = !bookToToggle.read;
        renderLibrary(); 
    }
}



document.addEventListener("DOMContentLoaded", renderLibrary);