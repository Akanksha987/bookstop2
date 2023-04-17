const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const cloudinary = require("../utils/cloudinary");

// Create
router.post("/product", async (req, res) => {
  const { bookname, author, edition, contact, year, course, image } = req.body;
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
      image: result ? result.secure_url : "",
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.get("/product", async (req, res) => {});

router.get("/product", async (req, res) => {
  try {
    const products = await Book.find(req.query);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
