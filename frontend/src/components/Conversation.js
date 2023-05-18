import React, { useEffect, useState } from "react";

const Connect = ({ data, currentUser }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUser);
    console.log(userId);
  }, []);
  return <div>Connect</div>;
};

export default Connect;
