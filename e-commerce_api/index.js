import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/User.route.js";
import productRoutes from "./Routes/Product.route.js";
import cartRoutes from "./Routes/Cart.route.js";

const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongodb"));

// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//user routes
app.use("/api/user", userRoutes);
//product routes
app.use("/api/product", productRoutes);
//cart routes
app.use("/api/cart", cartRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
