require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/booksRoute");
const app = express();
const DB = process.env.DB;
const products = require("./products");

app.use(express.json());

app.get("/products", (req, res) => {
  res.send(products);
});
app.use("/api/products", productRoute);
mongoose
  .connect(DB, {
    family: 4,
  })
  .then(() => {
    app.listen(8000, () => {
      console.log("Connection is successful");
    });
  })
  .catch((err) => {
    console.log(err);
  });
