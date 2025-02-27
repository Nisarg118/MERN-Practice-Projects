import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { strict: false });

const Product = mongoose.model("product", productSchema);

export default Product;
