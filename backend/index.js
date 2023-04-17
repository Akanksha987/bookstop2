require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const BookRoute = require("./routes/booksRoute");
const app = express();
const DB = process.env.DB;
const cors = require("cors");
mongoose.set("strictQuery", false);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.use("/api", BookRoute);
mongoose
  .connect(DB, {
    family: 4,
  })
  .then(() => {
    app.listen(3004, () => {
      console.log("Connection is successful");
    });
  })
  .catch((err) => {
    console.log(err);
  });
