import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./css/BookList.css";
import { useState } from "react";

const Book = (book) => {
  const { user } = useAuth0();
  const handleClick = () => {
    console.log(book);
  };
  // console.log(user);
  const [filteredBooks, setFilteredBooks] = useState([]);
  return (
    <div id="main-content">
      {filteredBooks.length > 0 && (
        <ul className="book-list">
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <div className="book-item flex flex-column flex-sb">
                <div className="book-item-img">
                  <img src={book.image} alt="cover" />
                </div>
                <div className="book-item-info text-center">
                  <Link to={`/book/${book.id}`} {...book}>
                    <div className="book-item-info-item title fw-7 fs-18">
                      <span>{book.bookname}</span>
                    </div>
                  </Link>
                  <div className="book-item-info-item author fs-15">
                    <span className="text-capitalize fw-7">Author: </span>
                    <span>{book.author}</span>
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
  );
};

export default Book;
