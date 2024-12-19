import express from "express";
import authRoutes from "./authRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes); // Prefix /auth for auth routes

export default router;
