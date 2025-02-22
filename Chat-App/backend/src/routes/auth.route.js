import express from "express";
import {
  signupController,
  signinController,
  logoutController,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupController);

router.post("/signin", signinController);

router.post("/logout", logoutController);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);
export default router;
