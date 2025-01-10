import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";

// @desc User Request Transaction
// route GET /api/transaction/request
// @access Private
const requestTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "request" });
});

// @desc User Donate Transaction
// route GET /api/transaction/donate
// @access Private
const donateTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "donate" });
});

export { requestTransaction, donateTransaction };
