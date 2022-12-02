// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  const bookListAdded = [...bookList]; // 記得要用淺層複製！不然會動到 bookList array 內容
  bookListAdded.push(bookName);
  return bookListAdded;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const bookListRemoved = [...bookList];
  const book_index = bookListRemoved.indexOf(bookName);
  if (book_index >= 0) {

    bookListRemoved.splice(book_index, 1);
    return bookListRemoved;

    // Change code above this line
    }
}

console.log(add(bookList, "A Brief History of Time")); // [ 'The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time' ]
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies")); // ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
console.log(bookList); // ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]