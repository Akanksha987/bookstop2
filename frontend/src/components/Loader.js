import React from "react";
import { ReactComponent as BookLoader } from "./book-loader.svg";
import "./loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <BookLoader className="book-loader" />
      </div>
    </>
  );
};

export default Loader;
