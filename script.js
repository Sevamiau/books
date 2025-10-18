const myLibrary = [];
const idBtn = document.querySelector("#id-btn")

function Books(name, author, pages, id) {
    if(!new.target) {
        throw Error("ponele new siome");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

// function showBooks() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.table(myLibrary[i]);
//     }
// };

idBtn.addEventListener("click",  
    function addBookToLibrary() {
        const uuid = crypto.randomUUID();
        let book = new Books (prompt("nombre?: "), 
            prompt("autor?"), 
            prompt("paginas?"), uuid);
        myLibrary.push(book);
        console.table(myLibrary);
}
);

// addBookToLibrary();
// showBooks(); 

// console.table(myLibrary);


