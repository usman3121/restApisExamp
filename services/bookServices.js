const booksData = [
  { id: "1", title: "Book 1", author: "Author 1" },
  { id: "2", title: "Book 2", author: "Author 2" },
];

const getAllBooks = (data) => {
  return booksData;
};

const getBooksById = (data) => {
  const search = booksData.find((x) => x.id === data);
  if (!search) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(search);
};

const createBooks = (data) => {
  const create = {
    id: booksData.length + 1,
    title: data.title,
    author: data.author,
  };
  booksData.push(create);
  return create;
};
const updateBook = (id, data) => {
  const course = booksData.find((x) => x.id === id);
  if (!course) {
    return "The title with the given ID was not found."; //404
  } else {
    course.title = data.title;
    course.author = data.author;
    return course;
  }
};
const deleteBook = (data) => {
  const course = booksData.find((c) => c.id === data);
  if (!course) {
    return "The course with the given ID was not found."; //404
  } else {
    const index = booksData.indexOf(course);
    booksData.splice(index, 1);
    return course;
  }
};
module.exports = {
  getAllBooks,
  createBooks,
  deleteBook,
  getBooksById,
  updateBook,
};
