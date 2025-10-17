const myLibrary = [];
const uuid = crypto.randomUUID();

function Books(name, author, pages, id) {
    if(!new.target) {
        throw Error("ponele new siome");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary() {
    let book = new Books (prompt("libro?: " + uuid));
    // let book1 = prompt("otro?" + uuid);
    // const book = new Books("lotr", "JRR Tolkien", 1216, "not read yet");
    // const book1 = new Books("100 anios de soledad", "marquez", 1234, "read");
    myLibrary.push(book);
    console.log(` ${this.name}  ${this.id} `);
    // console.log(` ${book1} ${uuid} id number`);
}

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
};

addBookToLibrary();




