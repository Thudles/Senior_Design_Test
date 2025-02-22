import mongoose from "mongoose";

const requestFlexSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema
    },
    diningHallID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DiningHall", // Reference to the User schema
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
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

const RequestFlex = mongoose.model("RequestFlex", requestFlexSchema);

export default RequestFlex;
