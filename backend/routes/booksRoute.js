const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const cloudinary = require("../utils/cloudinary");
const mongoose = require("mongoose");

// Create
router.post("/product", async (req, res) => {
  const { bookname, author, edition, contact, year, course, image, price } =
    req.body;
  try {
    let result = null;
    if (image) {
      result = await cloudinary.uploader.upload(image, {
        folder: "Book_Stop",
        width: 500,
      });
    }
    const product = await Book.create({
      bookname,
      author,
      edition,
      contact,
      year,
      course,
      price,
      image: result ? result.secure_url : "",
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/product", async (req, res) => {
  try {
    const products = await Book.find(req.query);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/product/bookname/:bookname", async (req, res) => {
  try {
    const bookName = req.params.bookname;
    const books = await Book.find({
      bookname: { bookName },
    });
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id parameter" });
  }
  const product = await Book.findById(id);
  if (!product) {
    return res.status(404).json({ error: "No book found with that id" });
  }
  res.status(200).json(product);
});

module.exports = router;
