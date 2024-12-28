import express from "express";
import { transactionHistory } from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, transactionHistory);


export default router;
