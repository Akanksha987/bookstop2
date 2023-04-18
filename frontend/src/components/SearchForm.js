import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:3004/api/product";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(books);
    const filtered = books.filter((book) => {
      return book.bookname.toLowerCase().includes(searchText);
    });
    console.log(filtered);
    navigate("/book");
  };
  return (
    <div className="search-form">
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
          <button type="submit" className="flex flex-c" onClick={handleSubmit}>
            <FaSearch className="text-black" size={25} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
