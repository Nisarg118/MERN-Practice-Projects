import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import contactRoutes from "./routes/contact.route.js";
import dotenv from "dotenv";
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
//contact routes
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
