import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
// const URL = "http://openlibrary.org/search.json?title=";
const URL="http://localhost:3004/api/product/"
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            _id,
            author,
            edition,
            bookname,
            contact,
            year,
            // key,
            // author_name,
            // cover_i,
            // edition_count,
            // first_publish_year,
            // title,
          } = bookSingle;

          return {
            id: _id,
            author: author,
            // cover_id: cover_i,
            edition_count: edition,
            first_publish_year: year,
            title: bookname,
            contact:contact,
          };
        });

        setBooks(newBooks);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        books,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
