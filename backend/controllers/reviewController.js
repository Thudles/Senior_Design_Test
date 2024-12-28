import asyncHandler from "express-async-handler";
import Review from "../models/reviewModel.js";

// @desc User Reviews
// route GET /api/review
// @access Public
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({});
  res.status(200).json(reviews);
});

export { getReviews };
