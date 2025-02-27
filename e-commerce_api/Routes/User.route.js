import express from "express";
import {
  loginController,
  registerController,
} from "../Controllers/User.controller.js";

const router = express.Router();

//register route
router.post("/register", registerController);
//login route
router.post("/login", loginController);

export default router;
