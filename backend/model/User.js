const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: "String",
  },
  userCart: [
    {
      id: {
        type: "String",
      },
      bookname: {
        type: "String",
      },
      author: {
        type: "String",
      },
      contact: {
        type: "String",
      },
      image: {
        type: "String",
      },
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
