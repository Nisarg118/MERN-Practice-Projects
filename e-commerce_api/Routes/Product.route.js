import express from "express";
import {
  addProductController,
  getProductsController,
} from "../Controllers/Product.controller.js";

const router = express.Router();

//addproduct route
router.post("/add-product", addProductController);
//getall products
router.get("/get", getProductsController);
export default router;
