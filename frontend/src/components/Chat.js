import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the server
    const newSocket = io("http://localhost:3009");
    setSocket(newSocket);

    // Handle incoming chat messages
    newSocket.on("chatMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up the socket connection on component unmount
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageInput = e.target.elements.message;
    const message = messageInput.value;

    // Send the message to the server
    socket.emit("chatMessage", message);

    // Clear the input field
    messageInput.value = "";

    console.log(message);
  };

  return (
    <div>
      <h1>Socket.IO Chat</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Enter message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
