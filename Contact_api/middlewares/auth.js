import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  const token = req.header("Auth");
  if (!token) return res.json({ message: "login first" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const id = decoded.id;

  let user = await User.findById(id);
  if (!user) res.status(400).json({ message: "user not found" });

  req.user = user;

  next();
};
