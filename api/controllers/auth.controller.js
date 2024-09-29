import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); // 10 is mixed with our password for hashing
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  res.status(201).json("User Created Successfully");
};
