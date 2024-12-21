import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generataeToken from "../utils/genrerateToken.js";

// @desc Auth user/set token
// route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    generataeToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register a new user
// route POST /api/users
// @access Public
const resgisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if name was entered
  if (!name) {
    res.status(400);
    throw new Error("name is required");
  }

  // Check if password is good
  if (!password || password.length <= 6) {
    res.status(400);
    throw new Error("Password required and should be more than six character");
  }

  // Check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generataeToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Logout a user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User Logged out" });
});

// @desc Get user proflie
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
  };
  res.status(200).json({ user });
});

// @desc Update user proflie
// route PUT /api/users/profile
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

export { loginUser, resgisterUser, logoutUser, getUserProfile, updateProfile };
