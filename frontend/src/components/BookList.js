import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
const URL = process.env.REACT_APP_PRODUCT;

const BookList = () => {
  const handleClick = () => {};
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilteredBooks(data);
      });
  }, [setFilteredBooks]);

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
            <SearchForm />
          </div>
        </div>
        <div className="booklist-content grid">
          {/* Indivisual Book element being displayed */}

          <div id="main-content">
            {filteredBooks.length > 0 && (
              <ul className="book-list">
                {filteredBooks.map((filtered) => (
                  <li key={filtered.id}>
                    <div className="book-item flex flex-column flex-sb">
                      <div className="book-item-img">
                        <img src={filtered.image} alt="cover" />
                      </div>
                      <div className="book-item-info text-center">
                        {/* <Link to={`/book/${book.id}`} {...book}> */}
                        <div className="book-item-info-item title fw-7 fs-18">
                          <span>{filtered.bookname}</span>
                        </div>
                        {/* </Link> */}
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
      </div>
    </section>
  );
};
export default BookList;
