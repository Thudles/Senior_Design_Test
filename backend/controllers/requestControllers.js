import asyncHandler from "express-async-handler";
import RequestFlex from "../models/requestFlexModel.js";

// @desc User Requests
// route GET /api/request
// @access Public
const getRequest = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;

  // Calculate the number of documents to skip
  const skip = (page - 1) * limit;

  // Fetch paginated data
  const requests = await RequestFlex.find().skip(skip).limit(Number(limit));

  res.json(requests);
});

// @desc User Requests
// route GET /api/request:id
// @access Public
const getUserRequest = asyncHandler(async (req, res) => {
  const requests = await RequestFlex.find({ userID: req.params.id });

  if (!requests) {
    res.status(404).json({ message: "Request not found" });
  }

  res.status(200).json(requests);
});

// @desc Create a new request
// @route POST /api/request
// @access Public
const createRequest = asyncHandler(async (req, res) => {
  const { userID, diningHallID, type, amount, description } = req.body;

  const newRequest = await RequestFlex.create({
    userID,
    diningHallID,
    amount,
    description,
  });

  if (newRequest) {
    // Emit the new request to all connected clients
    // req.io.emit("newRequest", newRequest);

    res.status(201).json(newRequest);
  } else {
    res.status(500).json({ message: "Failed to create the request" });
  }
});

export { getRequest, getUserRequest, createRequest };
