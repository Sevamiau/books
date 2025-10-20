const myLibrary = [];
const showLibraryButton = document.querySelector("#show-library-button");
const bookForm = document.getElementById("form-info"); 
const addBookFormButton = bookForm.querySelector("button[type='button']"); 
const dialogElem = document.getElementById("dialog");
const showButton = document.querySelector(".show");
const closeButton = document.querySelector(".close");
const libraryDisplay = document.querySelector("#library-display");
const create = document.querySelector("#create");



create.addEventListener("click", () => {
    
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("perros");

    newDiv.appendChild(newContent);

    const currentDiv =  document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

} )


showButton.addEventListener("click", () => {
  dialogElem.showModal();
});

closeButton.addEventListener("click", () => {
  dialogElem.close();
});

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


showLibraryButton.addEventListener("click", () => {
    // for (let i =0; i < myLibrary.length; i++) {
    //     const listLibrary = document.createElement("div");
    //     listLibrary.textContent = myLibrary[i];
    //     libraryDisplay.appendChild(listLibrary);
    // }
    // for (let key in myLibrary) {
    //     console.log(key);1
    //     console.log(myLibrary[key])
    // }
    console.table(myLibrary);
});


addBookFormButton.addEventListener("click", submitForm); 

function submitForm() {
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