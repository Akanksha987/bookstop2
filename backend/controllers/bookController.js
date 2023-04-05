const Book = require("../model/Book");
const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ msg: "No result found" });
  }
  return res.status(200).json({ books });
};
const getById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByID(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ msg: "No book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res) => {
  const { bookname, author, course, contact, edition, year, cover_id } =
    req.body;
  let book;
  try {
    book = new Book({
      bookname,
      author,
      course,
      edition,
      contact,
      year,
      cover_id,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
