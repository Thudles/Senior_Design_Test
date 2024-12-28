import express from "express";
import {
  getRequest,
  getUserRequest,
} from "../controllers/requestControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRequest);
router.get("/:id", protect, getUserRequest);

export default router;