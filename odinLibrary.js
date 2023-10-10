const addBookButton = document.querySelector("#add-book-button");
const addBookForm = document.querySelector("#add-book-form");
const bookListContainer = document.getElementById('book-list');

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(e) {
    e.preventDefault();

    const book = Object.create(Book);
    let allBooks = Array.from(document.querySelectorAll('.book-card'));
    
    

    console.log(allBooks);

    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('pages').value;
    book.read = document.getElementById('read').checked;
    myLibrary.push(book);
    addBookForm.reset();
    addBookForm.style.display = "none";
    displayBooks();
    allBooks = Array.from(document.querySelectorAll('.book-card'));
    console.log(allBooks);
}

addBookButton.addEventListener("click", () => {
    addBookForm.style.display = "block";
});

addBookForm.addEventListener("submit", addBookToLibrary);

function displayBooks() {
    

    // Clear the existing content
    bookListContainer.innerHTML = '';

    // Iterate through myLibrary and create a card for each book
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        // Customize the card content based on your design
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="edit-button" data-index="${index}">Edit</button>`;

        bookListContainer.appendChild(bookCard);
    });
}

window.addEventListener('load', displayBooks);