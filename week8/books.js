import express from 'express';

const router = express.Router();

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

router.get('/books', (req, res) => {
  res.json(books);
});

router.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(book => book.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(book);
});

router.get('/books/search', (req, res) => {
  const { name, age } = req.query;
  console.log('searching query:', req.query);

  res.json(filteredBooks);
});

router.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };

  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books[bookIndex] = { ...books[bookIndex], title, author };
  res.json(books[bookIndex]);
});

router.patch('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  if (title) {
    books[bookIndex].title = title;
  }

  if (author) {
    books[bookIndex].author = author;
  } 

  res.json(books[bookIndex]);
});

router.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(bookIndex, 1);
  res.status(204).send();
});

export { router as booksRouter };

