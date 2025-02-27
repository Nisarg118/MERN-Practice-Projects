import jwt from "jsonwebtoken";
import User from "../Models/User.model.js";

export const isAuthenticated = async (req, res, next) => {
  console.log("Middleware is working");

  // Extract token from Authorization header
  const token = req.header("Auth");

  if (!token) return res.status(401).json({ message: "Login first" });

  try {
    console.log("JWT Secret used for verification:", process.env.JWT_SECRET);
    console.log("Token received:", token);

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    // Fetch user from DB
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(400).json({ message: "User not found" });

    // Attach user to request object
    req.user = user;

    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res
      .status(401)
      .json({ message: "Invalid token", error: err.message });
  }
};
