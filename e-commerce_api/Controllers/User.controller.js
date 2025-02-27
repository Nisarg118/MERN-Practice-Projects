import User from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register user
export const registerController = async (req, res) => {
  let { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json({ message: "User successfully created", user });
  } catch (error) {
    console.log("Error in registerController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//user login
export const loginController = async (req, res) => {
  let { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "default_secret",
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.log("Error in loginController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
