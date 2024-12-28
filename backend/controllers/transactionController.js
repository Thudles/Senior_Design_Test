import asyncHandler from "express-async-handler";
import Request from "../models/requestModel.js";
import mongoose from "mongoose";


// @desc User Transaction
// route GET /api/transaction
// @access Private
const transactionHistory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Transaction" });
});

export { transactionHistory };