import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./css/BookList.css";
import { FaSearch } from "react-icons/fa";
// const URL = "http://localhost:3004/api/product";

const BookList = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth0();

  let values = {};
  if (user) values = { given_name: user.name, email: user.email };
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_CART, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await response.json();
    console.log(values);
    if (response.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
    // e.preventDefault();
    // const response = await fetch("http://localhost:3004/api/cart", {
    //   method: "PUT",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(values),
    // });
    // const json = await response.json();
    // console.log(values);
    // if (response.ok) {
    //   console.log(json);
    // } else {
    //   console.log(json);
    // }
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCT_API)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(books);
    setBooks(
      books.filter((book) => {
        return book.bookname.toLowerCase().includes(searchText);
      })
    );
    navigate("/book");
  };
  return (
    <section className="booklist">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="filter-section">
          <div>
            <h2>Search the book of your need.....</h2>
          </div>
          {/* Search bar to search the name of the book */}
          <div>
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="search-form-elem flex flex-sb">
                {/* Input field of search bar */}
                <input
                  type="text"
                  value={searchText}
                  className="form-control"
                  placeholder="Search your book..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
                {/* Search icon button */}
                <button
                  type="submit"
                  className="flex flex-c"
                  onClick={handleSubmit}
                >
                  <FaSearch className="text-black" size={25} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="booklist-content grid">
        {/* Indivisual Book element being displayed */}

        <div id="main-content">
          {books.length > 0 && (
            <ul className="book-list">
              {books.map((filtered) => (
                <li key={filtered.id}>
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
                      <button onClick={handleClick} className="cart-button">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
export default BookList;
