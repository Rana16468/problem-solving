const books = [
  { title: "The City Of God", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1992", author: "George Orwell", year: 1949 },
  { title: "Point of Value", author: "Jane Austen", year: 1813 },
  { title: "Last Night", author: "J.D. Salinger", year: 1951 },
];

const extractBookTitles = (books) => {
  return books.map((book) => book.title);
};

const bookTitles = extractBookTitles(books);
console.log(bookTitles);
