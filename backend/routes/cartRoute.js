const express = require("express");
const router = express.Router();
const Cart = require("../model/User");
// Post the data to cart
router.post("/cart", async (req, res) => {
  const { given_name, email, cart } = req.body;
  try {
    const Cart = await Cart.create({
      given_name,
      email,
      cart,
    });
    console.log(req.body);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/cart", async (req, res) => {
  try {
    const cart = await Cart.find(req.query);

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
