const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  edition: {
    type: Number,
    required: true,
    maxlength: 4,
    minlength: 4,
  },
  contact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  year: {
    type: Number,
    required: true,
    maxlength: 1,
  },
  course: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
