import React from "react";
import Navbar from "./Navbar";



const Sell = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <label>
            <h3>Bookname</h3>
            <input type="text" className="block" />
          </label>
          <label>
            <h3>Author</h3>
            <input type="text" className="block" />
          </label>
          <label>
            <h3>Edition</h3>
            <input type="number" className="block" />
          </label>
          <label>
            <h3>Year Associated</h3>
            <input type="number" className="block" />
          </label>
          <label>
            <h3>Course Associated</h3>
            <input type="text" className="block" />
          </label>
          <label>
            <h3>Contact Number</h3>
            <input type="number" className="block" />
          </label>
          <label>
            <h3>Description(optional)</h3>
            <input type="text" className="description block" />
          </label>
        </div>
        <div>
          <h3>Photograph</h3>
          <input type="file" id="imageHere" accept=".jpeg, .jpg,.png " />
        </div>
      </div>
      <div>Submit</div>
    </div>
  );
};

export default Sell;
