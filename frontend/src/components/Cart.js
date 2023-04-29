// import React, { useState } from "react";
import Navbar from "./Navbar";
import "./css/App.css";
// import CoverNotFound from "../images/cover_not_found.jpg";
const Cart = ({ cartItems }) => {
  // const [books, setBooks] = useState([]);
  const handleClick = () => {};
  return (
    <div className="cart-div">
      <Navbar />
      <form className="cart-temp" onClick={handleClick}>
        <div className="image-div">
          {/* <img src={CoverNotFound} alt="image" /> */}
          <h3>Bookname</h3>
          <h4>Author</h4>
          <h4>Contact</h4>
          {/* {books.map((filtered) => {
            <img src={filtered.image} alt="image" />;
            <h3>{filtered.bookname}</h3>;
            <h4>{filtered.author}</h4>;
            <h4>{filtered.contact}</h4>;
          })} */}
        </div>
      </form>
    </div>
  );
};

export default Cart;
