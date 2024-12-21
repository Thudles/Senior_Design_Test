import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    diningHallId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DiningHall",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
