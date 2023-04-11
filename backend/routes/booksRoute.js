const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");

// Create
router.post("/", async (req, res) => {
  const { bookname, author, edition, contact, year, course, photograph } =
    req.body;
  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(photograph, {
        upload_preset: "bookStop",
      });
      if (uploadRes) {
        const product = new Books({
          bookname,
          author,
          edition,
          contact,
          year,
          course,
          photograph: uploadRes,
        });
        const savedProduct = await product.save();

        req.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    re.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Books.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    re.status(500).send(error);
  }
});

module.exports = router;
