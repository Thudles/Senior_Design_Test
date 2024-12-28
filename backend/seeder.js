import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import request from "./Data/dummyRequest.js";
import diningHall from "./Data/dummyDiningHall.js";
import reviews from "./Data/dummyReviews.js";
import Request from "./models/requestModel.js";
import DiningHall from "./models/diningHallModel.js";
import Review from "./models/reviewModel.js";
import User from "./models/userModel.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await DiningHall.deleteMany();
    await Request.deleteMany();
    await Review.deleteMany();

    const createdDiningHall = await DiningHall.insertMany(diningHall);

    // Function to get a random dining hall ID
    const getRandomDiningHallID = () => {
      const randomIndex = Math.floor(Math.random() * createdDiningHall.length);
      return createdDiningHall[randomIndex]._id;
    };

    // Fetch existing users
    const users = await User.find();
    if (users.length === 0) {
      throw new Error("No users found. Please seed users first.");
    }

    // Helper function to get a random user ID
    const getRandomUserID = () => {
      const randomIndex = Math.floor(Math.random() * users.length);
      return users[randomIndex]._id;
    };

    const sampleRequest = request.map((req) => {
      return {
        ...req,
        diningHallID: getRandomDiningHallID(),
        userID: getRandomUserID(),
      };
    });

    const sampleReview = reviews.map((rev) => {
      return {
        ...rev,
        diningHallID: getRandomDiningHallID(),
        userID: getRandomUserID(),
      };
    });

    await Request.insertMany(sampleRequest);
    await Review.insertMany(sampleReview);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await DiningHall.deleteMany();
    await Request.deleteMany();
    await Review.deleteMany();

    console.log("Data Destroyed".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
