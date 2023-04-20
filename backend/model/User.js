const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  given_name: {
    type: "String",
    required: "true",
  },
  email: {
    type: "String",
  },
  cart: [
    {
      id: {
        type: "String",
      },
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
