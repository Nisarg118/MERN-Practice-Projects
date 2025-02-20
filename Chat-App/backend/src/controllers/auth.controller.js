import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signupController = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    //hash password
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already esists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });
  } catch (error) {}
};

export const signinController = (req, res) => {
  res.send("signup");
};
export const logoutController = (req, res) => {
  res.send("signup");
};
