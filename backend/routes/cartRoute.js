const express = require("express");
const router = express.Router();
const Cart = require("../model/Cart");
const { addBook, getBook } = require("../controllers/cartController")

router.post("/cart", addBook);
router.get("/cart", getBook);

module.exports = router;
