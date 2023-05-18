import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import "./css/BookList.css";
import { FaSearch } from "react-icons/fa";
import Loader from "./Loader";

const BookList = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();
  const { user, loginWithRedirect } = useAuth0();
  let values = {};
  if (user) values = { given_name: user.name, email: user.email };

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_PRODUCT_API)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = books.filter((book) => {
      const bookNameLower = book.bookname.toLowerCase();
      const authorLower = book.author.toLowerCase();
      const searchTextLower = searchText.toLowerCase();

      return (
        bookNameLower.includes(searchTextLower) ||
        authorLower.includes(searchTextLower)
      );
    });
    setFilteredBooks(filtered);
    navigate("/book");
  };

  const handleClick = async (e, book) => {
    e.preventDefault();

    if (!user) {
      loginWithRedirect();
      return;
    }

    const data = {
      email: user.email,
      userCart: {
        bookname: book.bookname,
        author: book.author,
        emailId: book.emailId,
        image: book.image,
        price: book.price,
        rating: book.rating,
      },
    };

    try {
      const response = await fetch(process.env.REACT_APP_CART, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await response.json();

      if (response.ok) {
        console.log(json);
      } else {
        console.log(json);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <section className="booklist">
      <div className="navbar"></div>
      <div className="filter-section">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-form-elem flex flex-sb">
            <input
              type="text"
              value={searchText}
              className="form-control"
              placeholder="Search your book..."
              onChange={(e) => setSearchText(e.target.value)}
            />
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
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="booklist-content grid">
          {filteredBooks.length > 0 && (
            <ul className="book-list">
              {filteredBooks.map((filtered) => (
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
                      <div className="book-item-info-item author fs-15">
                        <button
                          id="explore"
                          onClick={(e) => handleClick(e, filtered)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <Footer />
    </section>
  );
};

export default BookList;
