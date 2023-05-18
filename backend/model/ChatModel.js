// const mongoose = require("mongoose");
// const ChatSchema = new mongoose.Schema(
//   {
//     members: {
//       type: Array,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// const ChatModel = mongoose.model("ChatModel", ChatSchema);
// module.exports = ChatModel;
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  sender: {
    type: String, // Assuming the user identifier from Auth0 is a string
    required: true,
  },
  recipient: {
    type: String, // Assuming the user identifier from Auth0 is a string
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
