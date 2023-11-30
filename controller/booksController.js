const uuid = require("uuid");
const bookService = require("../services/bookServices");

module.exports = {
  getAllBooks: (req, res) => {
    const data = bookService.getAllBooks(req.body);
    res.send(data);
  },

  getBooksById: (req, res) => {
    const data = bookService.getBooksById(req.body);
    res.send(data);
  },

  updateBooks: (req, res) => {
    const data = bookService.updateBook(req.params.id, req.body);
    res.send(data);
  },

  deleteBooks: (req, res) => {
    const id = req.params.id; // Extract the ID from URL parameters
    const data = bookService.deleteBook(id); // Pass the ID as an object
    res.send(data);
  },

  createBooks: (req, res) => {
    const data = bookService.createBooks(req.body);
    res.send(data);
  },
};
