import React from "react";
import logoImg from "../images/B.png";
import books from "../images/cover.png";
import "./css/App.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing">
      {/* Image of the cover */}
      <img src={books} alt="cover" id="cover" />
      {/* Logo of my website */}
      <img src={logoImg} alt="site logo" id="landing-logo" />
      {/* Explore button */}
      <button id="explore">
        <Link to="/home" className="explore">
          Explore
        </Link>
      </button>
    </div>
  );
};

export default LandingPage;
