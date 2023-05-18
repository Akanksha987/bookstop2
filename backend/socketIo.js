const socketIO = require("socket.io");

const socketConnection = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chatMessage", (data) => {
      console.log("Received message:", data);

      // Save the message to MongoDB or perform any other necessary operations

      const { recipient, message } = data;
      // Find the socket connection of the recipient
      const recipientSocket = Object.values(io.sockets.sockets).find(
        (socket) => socket.user === recipient
      );

      if (recipientSocket) {
        // Send the message to the recipient
        recipientSocket.emit("chatMessage", message);
      } else {
        console.log("Recipient not found");
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = socketConnection;
