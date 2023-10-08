const addBookButton = document.querySelector("#add-book-button");
const addBookForm = document.querySelector("#add-book-form");

const myLibrary = [];

class Book {
    constructor(title, author, pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(e) {
    e.preventDefault();
    const book = Object.create(Book);
    book.title = "Les miserables";
    book.author = "Victor Hugo";
    book.pages = 594;
    book.read = true;
    myLibrary.push(book);
    console.log(myLibrary[0]);
}

addBookButton.addEventListener("click", () => {
  addBookForm.style.display = "block";
});

addBookForm.addEventListener("submit", addBookToLibrary);

