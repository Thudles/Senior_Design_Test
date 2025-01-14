import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";

// @desc User Request Transaction
// route GET /api/transaction/flex
// @access Private
const requestFlexTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "flex request" });
});

// @desc User Request Transaction
// route GET /api/transaction/points
// @access Private
const requestPointsTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "points request" });
});

// @desc User Donate Transaction
// route GET /api/transaction/donate
// @access Private
const donateTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "donate" });
});

export { requestFlexTransaction, requestPointsTransaction, donateTransaction };
