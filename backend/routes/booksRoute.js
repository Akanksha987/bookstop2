const express = require("express");
const router = express.Router();
const booksController = require("../controllers/bookController");

router.get("/add", booksController.getAllBooks);
router.get("/:id", booksController.getById);
router.post("/add", booksController.addBook);

module.exports = router;
