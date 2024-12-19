import express from "express";
import dotenv from "dotenv";
dotenv.config();
import apiRoutes from "./Routes/apiRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;

// Database Connection
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api", apiRoutes);
app.get("/", (req, res) => res.send("Server is ready"));

// Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
