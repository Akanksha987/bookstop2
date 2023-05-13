import { useState, useEffect } from "react";
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
        setLoading(false);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredBooks = books.filter((book) => {
      if (
        book.bookname.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return book;
      }
      return book;
    });
    setBooks(filteredBooks);
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
        contact: book.contact,
        image: book.image,
        price: book.price,
        rating: book.rating,
      },
    };
    const response = await fetch(process.env.REACT_APP_CART, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = response.json();
    if (response.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
  };
  return (
    <section className="booklist">
      <div className="navbar"></div>
      <div className="filter-section">
        {/* Search bar to search the name of the book */}
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
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="booklist-content grid">
          {/* Indivisual Book element being displayed */}
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
