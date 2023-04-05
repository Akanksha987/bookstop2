const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/bookController");

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getById);
router.post("/", booksController.addBook);

module.exports = router;
