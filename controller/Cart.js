const { Cart } = require("../model/Cart");

exports.fetchCartByUser = async (req, res) => {
  const { id } = req.user;
  try {
    const cartItems = await Cart.find({ user: id }).populate("product");

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
  const { id } = req.user;
  const cart = new Cart({ ...req.body, user: id });
  try {
    const doc = await cart.save();
    const result = await doc.populate("product");
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
  // const { quantity, product, user } = req.body;

  // try {
  //   // Validate input
  //   if (!quantity || !product || !user) {
  //     console.log(user);
  //     return res.status(400).json({ error: "All fields are required." });
  //   }

  //   // Create a new cart item
  //   const cart = new Cart({ quantity, product, user });
  //   const doc = await cart.save();
  //   const result = await doc.populate("product").execPopulate();
  //   res.status(201).json(result);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
};

exports.deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const res = await cart.populate("product");
    res.status(200).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
  // const { id } = req.params;
  // const newData = req.body;

  // try {
  //   // Validate input
  //   if (!newData.quantity || !newData.product || !newData.user) {
  //     return res.status(400).json({ error: "All fields are required." });
  //   }

  //   const cart = await Cart.findByIdAndUpdate(id, newData, { new: true });
  //   res.status(200).json(cart);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
};
