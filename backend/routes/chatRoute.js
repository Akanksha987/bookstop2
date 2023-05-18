const express = require("express");
const router = express.Router();
const Chat = require("../model/ChatModel");

// Route for sending a chat message
router.post("/", async (req, res) => {
  try {
    const { sender, recipient, message } = req.body;

    // Create a new chat message
    const chat = new Chat({
      sender,
      recipient,
      message,
    });

    // Save the chat message to the database
    await chat.save();

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ error: "Failed to send chat message" });
  }
});

// Route for getting chat messages between two users
router.get("/chat", async (req, res) => {
  try {
    const { sender, recipient } = req.query;

    // Retrieve chat messages based on sender and recipient
    const chats = await Chat.find({
      $or: [
        { sender, recipient },
        { sender: recipient, recipient: sender },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve chat messages" });
  }
});

module.exports = router;
