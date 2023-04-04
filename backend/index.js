const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/BookStop", {
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
