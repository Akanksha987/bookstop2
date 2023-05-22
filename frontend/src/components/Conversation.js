import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Conversation = ({ data, currentUserId }) => {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth0();
  let values = {};
  if (user)
    values = {
      picture: user.picture,
      firstname: user.given_name,
      lastname: user.family_name,
    };
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    console.log("Id: ", currentUserId);
    console.log("Uid: ", userId);

    fetch(`http://localhost:3009/api/product/email/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data.emailId);
      })
      .catch((error) => {
        console.error(error);
      });
      
  }, []);

  return (
    <>
      <div className="follower conversation">
        <div>
          <div className="online-dot"></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={values.picture}
              alt="Profile"
              className="followerImage"
              style={{ width: "50px", height: "50px" }}
            />
            <div
              className="name"
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "1.3rem",
              }}
            >
              <span className="fullname">
                {values.firstname} {values.lastname}
              </span>
              <span
              // style={{ color: online ? "#51e200" : "" }}
              >
                {/* {online ? "Online" : "Offline"} */}Online
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
