var express = require("express");
var router = express.Router();
const booksController = require("../controller/booksController");

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBooksById);
router.post("/", booksController.createBooks);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
