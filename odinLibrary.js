const addBookButton = document.querySelector("#add-book-button");
const addBookForm = document.querySelector("#add-book-form");
const bookListContainer = document.getElementById('book-list');
const dialog = document.querySelector("dialog");

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
    //creates the book with its properties and add it to the library
    const book = Object.create(Book);

    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('pages').value;
    book.read = document.getElementById('read').checked;

    myLibrary.push(book);
    addBookForm.reset();
    addBookForm.style.display = "none";
    dialog.close();
    displayBooks();
    console.log(myLibrary)
}

addBookButton.addEventListener("click", () => {
    dialog.showModal();
    // this would help if I want the books to not being shown anywhere when filling the form 
    /*let allBooks = Array.from(document.querySelectorAll('.book-card'));

    if (allBooks.length > 0) {
        for (let card of allBooks) {
            card.style.display="none";
        }
    }*/
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
            <button class="delete-button" data-index="${index}">Delete</button>
            <button class="read-button" data-index="${index}">Change read</button>`;
            
        bookListContainer.appendChild(bookCard);
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', deleteBook);
    });

    const readButtons = document.querySelectorAll('.read-button');
    readButtons.forEach((button) => {
        button.addEventListener('click', changeReadBook);
    });
}

function deleteBook(e) {
    const index = e.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayBooks(); // Refresh the book list
}


function changeReadBook(e) {
    const index = e.target.getAttribute('data-index');
    myLibrary[index].read===false ? myLibrary[index].read = true: myLibrary[index].read = false;

    displayBooks(); // Refresh the book list
}

window.addEventListener('load', displayBooks);