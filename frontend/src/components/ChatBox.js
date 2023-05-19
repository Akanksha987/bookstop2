import React, { useEffect, useState } from "react";

const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    console.log("Id: ", currentUser);
    console.log("Uid: ", userId);
    fetch(`http://localhost:3009/api/product/email/${userId}`)
      .then((response) => response.json())
      .then((chat) => {
        setUserData(chat);
        console.log(chat);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [chat, currentUser]);

  return (
    <>
      <div className="ChatBox-container"></div>
    </>
  );
};

export default ChatBox;
