import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const footer = () => {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li>
          <Link to="" className="a">
            <FaFacebookSquare />
          </Link>
        </li>
        <li>
          <Link to="" className="a">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link className="a">
            <FaLinkedin />
          </Link>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <Link className="a" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="a" to="/book">
            Books
          </Link>
        </li>
        <li>
          <Link className="a" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <Link className="a" to="/sell">
            Add Book
          </Link>
        </li>
        <li>
          <Link className="a" to="/sell">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link className="a">Ownership of Content</Link>
        </li>
        <li>
          <Link className="a">Intellectual Property</Link>
        </li>
        <li>
          <Link className="a">Privacy Policy</Link>
        </li>
      </ul>
      <p>©2023 BookStop | All Right Reserved</p>
    </footer>
  );
};

export default footer;
