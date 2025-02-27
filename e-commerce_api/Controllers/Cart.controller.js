import { Cart } from "../Models/Cart.model.js";

//add to cart
export const addToCartController = async (req, res) => {
  const { productId, title, price, qty } = req.body;
  const userId = req.user;
  console.log("addtocart");
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }
    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() == productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].qty += qty;
      cart.items[itemIndex].price += price * qty;
    } else {
      cart.items.push({ productId, title, price, qty });
    }
    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    console.log("Error in addToCartController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get user cart
export const getUserCartController = async (req, res) => {
  const userId = req.user;
  console.log("addtocart");
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) return res.status(400).json({ message: "Cart not found" });
    return res.json({ message: "user cart", cart });
  } catch (error) {
    console.log("Error in getUserCartController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//remove product from cart

export const removeProductController = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user;
    console.log(userId);
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(400).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );
    await cart.save();
    return res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    console.log("Error in removeProductController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
