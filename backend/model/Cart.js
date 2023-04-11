const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  photograph: {
    type: String,
    required: true,
  },
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
