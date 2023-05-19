import React, { useState } from "react";
import "./css/Sell.css";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
const Sell = () => {
  const [image, setImage] = useState("");
  const history = useNavigate();
  const [values, setValues] = useState({
    bookname: "",
    author: "",
    edition: "",
    year: "",
    course: "",
    emailId: "",
    price: "",
    rating: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_PRODUCT_API, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(values),
    });

    const json = response.json();
    if (response.ok) {
      console.log(json);
    } else {
      console.log(json);
    }
    history("/book");
  };
  const convertTobase64 = (files) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    const base64 = await convertTobase64(file);
    setValues({ ...values, image: base64 });
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className=" box black">
          <div className="fun">
            <h3>Bookname</h3>
            <input
              type="text"
              className="block"
              name="bookname"
              onChange={(e) =>
                setValues({ ...values, bookname: e.target.value })
              }
            />
            <br />
            <h3>Author</h3>
            <input
              type="text"
              className="block"
              name="author"
              onChange={(e) => setValues({ ...values, author: e.target.value })}
            />
            <br />
            <h3>Edition</h3>
            <input
              type="number"
              className="block"
              name="edition"
              onChange={(e) =>
                setValues({ ...values, edition: e.target.value })
              }
            />
            <br />
            <h3>Year Associated</h3>
            <input
              type="number"
              className="block"
              name="year"
              onChange={(e) => setValues({ ...values, year: e.target.value })}
            />
            <br />
            <h3>Course Associated</h3>
            <input
              type="text"
              className="block"
              name="course"
              onChange={(e) => setValues({ ...values, course: e.target.value })}
            />
            <br />
            <h3>OwnerEmail</h3>
            <input
              type="email"
              className="block"
              name="emailId"
              onChange={(e) =>
                setValues({ ...values, emailId: e.target.value })
              }
            />
            <br />
            <h3>Price</h3>
            <input
              type="number"
              className="block"
              name="price"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
            <br />
            <h3>Rate Your Book</h3>
            <input
              type="number"
              className="block"
              name="rating"
              onChange={(e) => setValues({ ...values, rating: e.target.value })}
            />
            <br />
          </div>
          <div id="image" onChange={handleFileInput}>
            <h3>Photograph</h3>
            <div
              className="photograph"
              onClick={() => document.getElementById("imageHere").click()}
            >
              <input
                type="file"
                id="imageHere"
                name="image"
                accept=".jpeg, .jpg, .png "
              />
              {image !== "" && (
                <img src={image} className="photograph" alt="img" />
              )}
            </div>
          </div>
        </div>
        <button className="submit_button">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Sell;
