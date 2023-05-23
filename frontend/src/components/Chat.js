import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Chat = ({ contact }) => {
  const handleChatClick = () => {
    const message = "Hello, I'm interested in purchasing your book.";
    const whatsappURL = `https://wa.me/${encodeURIComponent(
      "+" + contact
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="chat-container">
      <button onClick={handleChatClick}>
        <WhatsAppIcon style={{ fontSize: 50 }} />
      </button>
    </div>
  );
};

export default Chat;
