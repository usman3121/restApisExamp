const booksData = require("../services/bookServices");
const uuid = require("uuid");

const getAllBooks = (req, res) => {
  res.json(booksData);
};

const getBooksById = (req, res) => {
  const bookId = req.params.id;
  const search = booksData.find((x) => x.id === bookId);
  if (!search) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(search);
};

const createBooks = (req, res) => {
  const newBook = req.body;

  newBook.id = uuid.v4();

  if (!newBook || !newBook.title || !newBook.author) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  booksData.push(newBook);

  res.json(newBook);
};

const updateBook = (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const bookIndex = booksData.findIndex((x) => x.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (!updatedBook || !updatedBook.title || !updatedBook.author) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  // Update the book in the dataStore array
  booksData[bookIndex] = { ...booksData[bookIndex], ...updatedBook };

  res.json(booksData[bookIndex]);
};

const deleteBook = (req, res) => {
  try {
    const bookId = req.params.id;
    const bookIndex = booksData.findIndex((x) => x.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Remove the book using splice
    booksData.splice(bookIndex, 1);

    res.json({ message: "Book deleted" });
  } catch (error) {
    // Handle unexpected errors
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  getBooksById,
  updateBook,
  createBooks,
  deleteBook,
};
