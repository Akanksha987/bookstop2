require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const BookRoute = require("./routes/booksRoute");
const CartRoute = require("./routes/cartRoute");
const ChatRoute = require("./routes/chatRoute");
const app = express();
const DB = process.env.DB;
const cors = require("cors");
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({ origin: "*" }));

// Connect to MongoDB database
mongoose
  .connect(DB, {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB:", err);
  });

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chatMessage", (message) => {
    console.log("Received message:", message);

    // Save the message to MongoDB or perform any other necessary operations

    // Broadcast the message to all connected sockets
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use("/api", BookRoute);
app.use("/api", CartRoute);
app.use("/chat", ChatRoute);

server.listen(3004, () => {
  console.log("Server listening on port 3004");
});
