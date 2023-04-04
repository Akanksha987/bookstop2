import React from "react";
import page from "../images/404page.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const NotFound = () => {
  return (
    <div className="notfound-div">
      <div className="notfound-content">
        <h1>Ruh roh!</h1>
        <p className="context">
          We looked all over, but that page seems to havegotten away from us.
          Try one of these links to get back on track.
          <br />
          <Link to="/book">
            Go Back <AiOutlineArrowRight size={22} />
          </Link>
        </p>
      </div>
      <div>
        <img src={page} alt="404Page" className="page" />
      </div>
    </div>
  );
};

export default NotFound;
