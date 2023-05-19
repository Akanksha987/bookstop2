const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/cart", async (req, res) => {
  const { email, userCart } = req.body;
  try {
    let cart = await User.findOne({ email });
    if (cart) {
      cart.userCart.push(userCart);
    } else {
      cart = new Cart({ email, userCart: [userCart] });
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ e: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.put("/cart", async (req, res) => {
  const { email, userCart } = req.body;
  try {
    let cart = await User.findOne({ email });
    if (cart) {
      cart.userCart.push(userCart);
    } else {
      cart = new Cart({ email, userCart: [userCart] });
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/cart", async (req, res) => {
  try {
    const cart = await User.find(req.query);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// getting the data on the basis of email id
router.get("/cart/:email", async (req, res) => {
  try {
    const cart = await User.findOne({ email: req.params.email });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a specific item from the userCart array
router.delete("/cart/:email/:id", async (req, res) => {
  try {
    const { email, id } = req.params;
    const result = await User.updateOne(
      { email },
      { $pull: { userCart: { _id: id } } }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
