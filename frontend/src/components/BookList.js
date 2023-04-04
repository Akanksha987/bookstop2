import { useGlobalContext } from "./context";
import Book from "./Book";
import coverImg from "../images/cover_not_found.jpg";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";

const BookList = () => {
  const { books, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });
  return (
    <section className="booklist">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="filter-section">
          <div>
            <h2>{resultTitle}</h2>
          </div>
          {/* Search bar to search the name of the book */}
          <div>
            <SearchForm />
          </div>
        </div>
        <div className="booklist-content grid">
          {/* Indivisual Book element being displayed */}
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book id key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
