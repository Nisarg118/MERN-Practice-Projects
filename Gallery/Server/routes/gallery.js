import express from "express";
import galleryController from "../controllers/galleryController.js";
import multer from "multer";

const router = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {},
});

router.post("/upload/image", galleryController.uploadImage);

export default router;
