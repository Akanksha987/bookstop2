require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB = process.env.DB;
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
