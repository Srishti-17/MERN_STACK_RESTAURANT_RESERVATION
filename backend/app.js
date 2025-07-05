import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

// ✅ Step 1: CORS (hardcoded for now)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Step 2: Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Step 3: Your routes
app.use("/reservation", reservationRouter);

// ✅ Step 4: Connect DB
dbConnection();

// ✅ Step 5: Error handler
app.use(errorMiddleware);

export default app;
