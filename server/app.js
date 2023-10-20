import express from "express";
import router from "./routes/payment.js";
import cors from "cors";
import { config } from "dotenv";

config({ path: "./config/config.env" });
export const app = express();

// Configuring CORS
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use('/api', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});
