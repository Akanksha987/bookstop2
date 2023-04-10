const Book = require("../model/Book");
const addBook = async (req, res) => {
  const { bookname, author, edition, contact, year, course, photograph } =
    req.body;
  let books;
  try {
    books = new Book({
      bookname,
      author,
      edition,
      contact,
      year,
      course,
      photograph,
    });
    await books.save();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(500).json({ msg: "Unable to add" });
  }
  return res.status(201).json({ books });
};

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
  let books;
  try {
    books = await Book.findByID(id);
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ msg: "No book found" });
  }
  return res.status(200).json({ books });
};

exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getById = getById;
