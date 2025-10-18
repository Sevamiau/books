const myLibrary = [];
const showBtn = document.querySelector("#show-btn");
const bookForm = document.getElementById("form-info"); 
const addBookFormButton = bookForm.querySelector("button[type='button']"); 

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

showBtn.addEventListener("click", function showBooks(){
    for (let i = 0; i < myLibrary.length; i++) {};
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