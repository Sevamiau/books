const myLibrary = [];

function Books(name, author, pages, read) {
    if(!new.target) {
        throw Error("ponele new siome");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const book = new Books("lotr", "JRR Tolkien", 1216, "not read yet");
    const book1 = new Books("100 anios de soledad", "marquez", 1234, "read");
    myLibrary.push(book, book1)
    // console.log(book);
}

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }
}


addBookToLibrary();
showBooks()

// console.log(addBookToLibrary());
// console.log(showBooks());