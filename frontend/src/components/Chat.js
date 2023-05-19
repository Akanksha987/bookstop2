import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/Chat.css";
import Conversation from "./Conversation";
import ChatBox from "./ChatBox";
const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { user } = useAuth0();
  let values = {};

  if (user) values = { email: user.email };
  console.log(values.email);
  useEffect(() => {
    const userEmail = values.email;
    fetch(`http://localhost:3009/chat/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setChats(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chat</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUserId={user.email}
                  // online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <ChatBox chat={currentChat} currentUser={values.email} />
      </div>
    </div>
  );
};

export default Chat;
