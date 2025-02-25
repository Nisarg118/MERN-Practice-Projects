import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const app = express();

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dwuajomdq",
  api_key: "541312134399291",
  api_secret: "mZ0-KT_9hSq8HsWXrhq8xX8MkvA",
});
mongoose
  .connect("mongodb://localhost:27017/image-uploader")
  .then(() => console.log("MongoDb Connected..!"));
// rendering ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

const storage = multer.diskStorage({
  // destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  // const response = await cloudinary.uploader
  //   .upload(file, { folder: "Nodejs_Mastery" })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  res.json({ file });
});

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
