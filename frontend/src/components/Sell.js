import React from "react";
import Navbar from "./Navbar";
import "./css/Sell.css";

const Sell = () => {
  const handleFormSubmit = () => {};
  return (
    <div className="content">
      <Navbar />
      <div className=" box black">
        <div className="fun">
          <h3>Bookname</h3>
          <input type="text" className="block" />
          <br />
          <h3>Author</h3>
          <input type="text" className="block" />
          <br />
          <h3>Edition</h3>
          <input type="number" className="block" />
          <br />
          <h3>Year Associated</h3>
          <input type="number" className="block" />
          <br />
          <h3>Course Associated</h3>
          <input type="text" className="block" />
          <br />
          <h3>Contact Number</h3>
          <input type="number" className="block" />
          <br />
        </div>
        <div id="image">
          <h3>Photograph</h3>
          <div
            className="photograph"
            onClick={() => document.getElementById("imageHere").click()}
          ></div>
          <input type="file" id="imageHere" accept=".jpeg, .jpg,.png " />
        </div>
      </div>
      <button
        type="submit"
        className="submit_button"
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Sell;
