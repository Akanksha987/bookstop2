import React from "react";
import Navbar from "./Navbar";
import "./css/App.css";
const Login = () => {
  return (
    <div className="login-div">
      <Navbar />
      <div className="content">
        <h2>Login</h2>
        <label>
          <h4>Email:</h4>
          <input type="text" />
        </label>
        <label>
          <h4>Password:</h4>
          <input type="text" />
        </label>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
