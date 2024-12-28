import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema
      required: true,
    },
    diningHallID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DiningHall", // Reference to the User schema
      required: true,
    },
    type: {
      type: String,
      enum: ["flexpass", "points"], // Types of requests
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 250, // Limit the length of the description
    },
    status: {
      type: String,
      enum: ["pending", "inProgress", "resolved"], // Status of the request
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"], // Priority level
      default: "medium",
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
