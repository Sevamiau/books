const myLibrary = [];
const idBtn = document.querySelector("#id-btn");
const showBtn = document.querySelector("#show-btn");

function Books(name, author, pages, id) {
    if(!new.target) {
        throw Error("ponele new siome");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

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

showBtn.addEventListener("click", function showBooks(){
    for (let i = 0; i < myLibrary.length; i++) {};
    console.table(myLibrary);
});




