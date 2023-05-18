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
        emailId: {
          type:String,
        },
        image: {
          type: String,
        },
        price: {
          type: Number,
        },
        rating: {
          type: Number,
        },
      },
    ],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
