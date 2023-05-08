import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./css/BookList.css";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/App.css";
import Footer from "./footer";
import emptyCart from "../images/EmptyCart.webp";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth0();
  let values = {};
  if (user) values = { given_name: user.name, email: user.email };

  useEffect(() => {
    const userEmail = values.email;
    fetch(`http://localhost:3004/api/cart/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data.userCart);
      });
  }, [values]);

  const handleClick = (id) => {
    const userEmail = values.email;
    if (userEmail) {
      fetch(`http://localhost:3004/api/cart/${userEmail}/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setCart((prevState) => {
              const updatedCart = prevState.filter(
                (cartItem) => cartItem._id !== id
              );
              return updatedCart;
            });
          } else {
            console.log(data.message);
          }
        });
    }
  };

  return (
    <div className="cart-div">
      <Navbar />
      <div className="booklist-content grid">
        <div id="main-content">
          {cart.length > 0 ? (
            <ul className="book-list">
              {cart.map((filtered) => {
                return (
                  <li key={filtered._id}>
                    <div className="book-item flex flex-column flex-sb">
                      <div className="book-item-img">
                        <img src={filtered.image} alt="cover" />
                      </div>
                      <div className="book-item-info text-center">
                        <div className="book-item-info-item title fw-7 fs-18">
                          <span>{filtered.bookname}</span>
                        </div>
                        <div className="book-item-info-item author fs-15">
                          <span className="text-capitalize fw-7">Author: </span>
                          <span>{filtered.author}</span>
                        </div>
                        <div className="book-item-info-item author fs-15">
                          <span className="text-capitalize fw-7">
                            Contact:{" "}
                          </span>
                          <span>{filtered.contact}</span>
                        </div>
                        {user && (
                          <button
                            onClick={() => handleClick(filtered._id)}
                            id="explore"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>
              <h1>Your Cart Is Empty.</h1>
              <img src={emptyCart} alt="" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
