import express from "express";
import {
  requestTransaction,
  donateTransaction,
} from "../controllers/transactionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/request").post(protect, requestTransaction);
router.route("/donate").post(protect, donateTransaction);

export default router;
