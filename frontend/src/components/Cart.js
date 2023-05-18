import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Cart.css";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./footer";
import emptyCart from "../images/EmptyCart.webp";
import { CiCircleRemove } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import Loader from "./Loader";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_CART;
  const { user } = useAuth0();
  let values = {};

  if (user) values = { email: user.email };
  console.log(user);
  useEffect(() => {
    const userEmail = values.email;
    fetch(`${apiUrl}/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data.userCart);
        setLoading(false);
      });
  }, [values]);

  const handleClick = (id) => {
    const userEmail = values.email;
    if (userEmail) {
      fetch(`${apiUrl}/${userEmail}/${id}`, {
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

  const navigate = useNavigate();

  const handleChatClick = (filtered) => {
    const userEmail = values.email;
    const bookOwnerEmail = filtered.emailId;
    console.log(bookOwnerEmail);
    navigate("/chat", { state: { userEmail, bookOwnerEmail } });
  };

  return (
    <div className="cart-div">
      <div className="cart-content">
        {loading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : cart.length > 0 ? (
          <ul>
            {cart.map((filtered) => {
              return (
                <li key={filtered._id} className="cart-li">
                  <div className="cart-item">
                    <div className="cart-image">
                      <img src={filtered.image} alt="cover" />
                    </div>
                    <div className="cart-text">
                      <div className="cart-info  fw-7 fs-18">
                        <span>{filtered.bookname}</span>
                      </div>
                      <div className="cart-info fs-15">
                        <span className="text-capitalize fw-7">Author: </span>
                        <span>{filtered.author}</span>
                      </div>
                      <div className="cart-info fs-15">
                        <span className="text-capitalize fw-7">
                          OwnerEmail:{" "}
                        </span>
                        <span>{filtered.emailId}</span>
                      </div>
                      <div className="cart-info fs-15">
                        <span className="text-capitalize fw-7">Price: ₹</span>
                        <span>{filtered.price}</span>
                      </div>
                      <div className="star">
                        <span className="text-capitalize fw-6">
                          {filtered.rating}
                        </span>
                        <span>
                          <AiFillStar size={20} />
                        </span>
                      </div>
                    </div>
                    <div className="cart-remove">
                      {user && (
                        <button
                          title="Remove"
                          onClick={() => handleClick(filtered._id)}
                        >
                          <CiCircleRemove id="cart-remove" size={40} />
                        </button>
                      )}
                      <button
                        className="chat-button"
                        onClick={() => handleChatClick(filtered)}
                      >
                        Chat box
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="cart">
            <img src={emptyCart} alt="" />
            <h1>Your Cart Is Empty.</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
