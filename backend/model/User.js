const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  userCart: {
    type: [
      {
        bookname: {
          type: String,
        },
        author: {
          type: String,
        },
        contact: {
          type: Number,
        },
        image: {
          type: String,
        },
      },
    ],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
