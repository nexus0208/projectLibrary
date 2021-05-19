const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addBookToLibrary);

const newBook = document.querySelector('#newBook');
newBook.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');

const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function displayBooks() {
  const bookList = document.querySelector('#table-body');
  bookList.textContent = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const bookRow = document.createElement('tr');
    bookRow.classList.add('book-info');
    bookList.appendChild(bookRow);

    const bookTitle = document.createElement('th');
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);

    const bookAuthor = document.createElement('th');
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);

    const bookPages = document.createElement('th');
    bookPages.textContent = myLibrary[i].pages;
    bookRow.appendChild(bookPages);

    const bookStatus = document.createElement('th');
    bookStatus.textContent = myLibrary[i].status;
    bookRow.appendChild(bookStatus);
  }
}

addBookToLibrary("Atomic Habits","James Clear", 320, true);
addBookToLibrary("The Hobbit","J.R.R. Tolkien", 295,"not reaawd yet");
addBookToLibrary("No Longer Human","Osamu Dazai", 271," not wdread yet");
addBookToLibrary("American Psycho","Bret Easton Ellis", 399," not awread yet");


displayBooks();
