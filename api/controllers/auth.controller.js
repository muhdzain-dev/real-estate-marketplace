import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10); // 10 is mixed with our password for hashing
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User Created Successfully");
  } catch (error) {
    next(error);

    //Imagine if i dont have any error but i have to create a new custom error
    // next(errorHandler(550, "Error from the custom function."));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isUserValid = await User.findOne({ email });
    if (!isUserValid) {
      return next(errorHandler(404, "User is not found"));
    }
    const validPassword = bcryptjs.compareSync(password, isUserValid.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials!"));
    }
    const token = jwt.sign({ id: isUserValid._id }, process.env.JWT_SECRET);
    // if we want to return specific details then we have to destructure the data like this
    const { password: pass, ...rest } = isUserValid._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
