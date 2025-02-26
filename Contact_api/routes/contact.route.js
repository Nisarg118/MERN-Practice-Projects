import express from "express";
import {
  deleteContactById,
  getAllContactController,
  getContactById,
  getContactByUserId,
  newContactController,
  updateContactById,
} from "../Controllers/contact.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new-contact", isAuthenticated, newContactController);
router.get("/", getAllContactController);
router.get("/:id", getContactById);
router.put("/:id", isAuthenticated, updateContactById);
router.delete("/:id", isAuthenticated, deleteContactById);
//get user specific contact
router.get("/userId/:id", getContactByUserId);
export default router;
