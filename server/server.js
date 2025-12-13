import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({ credentials: true }));
app.use(express.json()); // parse JSON bodies
app.use(cookieParser());

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Auth Server is running 🚀" });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
