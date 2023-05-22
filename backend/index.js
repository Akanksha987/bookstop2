require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const BookRoute = require("./routes/booksRoute");
const CartRoute = require("./routes/cartRoute");
const app = express();
const cors = require("cors");
const DB = process.env.DB;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
mongoose
  .connect(DB, { family: 4 })
  .then(() => app.listen(3004, () => console.log(`Listening at Port 3004`)))
  .catch((error) => console.log(`${error} did not connect`));
app.use("/api", BookRoute);
app.use("/api", CartRoute);
