import mongoose from "mongoose";

const mongoose = require("mongoose");

const diningHallSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    breakfast: {
      open: { type: String, required: true }, // e.g., "07:00"
      close: { type: String, required: true }, // e.g., "09:30"
    },
    lunch: {
      open: { type: String, required: true }, // e.g., "11:00"
      close: { type: String, required: true }, // e.g., "14:00"
    },
    dinner: {
      open: { type: String, required: true }, // e.g., "17:00"
      close: { type: String, required: true }, // e.g., "20:00"
    },
    features: {
      type: [String],
      default: [],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review", // Reference to the Review schema
    },
  },
  {
    timestamps: true,
  }
);

const DiningHall = mongoose.model("DiningHall", diningHallSchema);

export default DiningHall;
