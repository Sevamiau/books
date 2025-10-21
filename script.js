const myLibrary = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, read: false },
    { title: "1984", author: "George Orwell", pages: 328, read: true }
];
const showLibraryButton = document.querySelector("#show-library-button");
const bookForm = document.getElementById("form-info"); 
const addBookFormButton = bookForm.querySelector("button[type='button']"); 
const dialogElem = document.getElementById("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector(".close");
const libraryDisplay = document.querySelector("#library-display");
const create = document.querySelector("#create");

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

addBookFormButton.addEventListener("click", addBookToLibrary); 

function addBookToLibrary() {
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
}


// create.addEventListener("click", () => {

//     myLibrary.forEach(book => {
//         const bookCard = document.createElement("div");
//         bookCard.classList.add("book-card");

//         const titlePara = document.createElement("p");
//         titlePara.textContent = `Name: ${book.name}`;

//         const authorPara = document.createElement("p");
//         authorPara.textContent = `Author ${book.author}`

//         const pagesPara = document.createElement("p");
//         pagesPara.textContent = `pages ${book.pages}`;

//         const readStatusPara = document.createElement("p");
//         readStatusPara.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

//         const idNumber = document.createElement("p");
//         idNumber.textContent = `id Number ${book.id}`;

//         bookCard.appendChild(titlePara);
//         bookCard.appendChild(authorPara);
//         bookCard.appendChild(pagesPara);
//         bookCard.appendChild(readStatusPara);
//         bookCard.appendChild(idNumber);

//         const currentDiv = document.getElementById("divperro1");

//         if (currentDiv) {
//             document.body.insertBefore(bookCard, currentDiv);
//         } else {
//             document.body.appendChild(bookCard);
//         }
//     })
// } );

function addBookToLibrary() {
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
}




myLibrary.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const titlePara = document.createElement("p");
    titlePara.textContent = `Name: ${book.name}`;

    const authorPara = document.createElement("p");
    authorPara.textContent = `Author ${book.author}`

    const pagesPara = document.createElement("p");
    pagesPara.textContent = `pages ${book.pages}`;

    const readStatusPara = document.createElement("p");
    readStatusPara.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    const idNumber = document.createElement("p");
    idNumber.textContent = `id Number ${book.id}`;

    bookCard.appendChild(titlePara);
    bookCard.appendChild(authorPara);
    bookCard.appendChild(pagesPara);
    bookCard.appendChild(readStatusPara);
    bookCard.appendChild(idNumber);

    const currentDiv = document.getElementById("divperro1");

    if (currentDiv) {
        document.body.insertBefore(bookCard, currentDiv);
    } else {
        document.body.appendChild(bookCard);
    }
})




showLibraryButton.addEventListener("click", () => {
    console.table(myLibrary);
});

showButton.addEventListener("click", () => {
    dialogElem.showModal();
});

closeButton.addEventListener("click", () => {
  dialogElem.close();
});







