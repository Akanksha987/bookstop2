import React from "react";
import logoImg from "../images/B.png";
import books from "../images/cover.png";
import "./css/App.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing">
      {/* Image of the cover */}
      <img id="cover" src={books} alt="cover" />
      {/* Logo of my website */}
      <img src={logoImg} alt="site logo" id="landing-logo" />
      {/* Signup button */}
      <Link to="/user/signup">
        <button id="signup">SignUp</button>
      </Link>
      {/* Linking text with the login page */}
      <p>
        Already have an account? <Link to="/user/Login">Login</Link>
      </p>
    </div>
  );
};

export default LandingPage;
