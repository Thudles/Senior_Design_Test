import asyncHandler from "express-async-handler";
import Request from "../models/requestModel.js";

// @desc User Requests
// route GET /api/request
// @access Public
const getRequest = asyncHandler(async (req, res) => {
  const requests = await Request.find({});
  res.status(200).json(requests);
});

// @desc User Requests
// route GET /api/request:id
// @access Public
const getUserRequest = asyncHandler(async (req, res) => {
  const requests = await Request.find({ userID: req.params.id });

  if (!requests) {
    res.status(404).json({ message: "Request not found" });
  }

  res.status(200).json(requests);
});

export { getRequest, getUserRequest };
