import mongoose from "mongoose";

import User from "../models/userModel.js";

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

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { loginUser, signupUser };
