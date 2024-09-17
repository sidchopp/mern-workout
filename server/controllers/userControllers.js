import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// login user
const loginUser = async (req, res) => {
  res.json({ message: "login user" });
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Using the static signup method created in user model
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
