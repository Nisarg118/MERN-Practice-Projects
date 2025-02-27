import express from "express";
import {
  addToCartController,
  getUserCartController,
  removeProductController,
} from "../Controllers/Cart.controller.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const router = express.Router();

//addproduct route
router.post("/add", isAuthenticated, addToCartController);
//getusercart route
router.get("/user", isAuthenticated, getUserCartController);
//delete product from cart
router.delete("/remove/:productId", isAuthenticated, removeProductController);
export default router;
