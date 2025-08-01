import express from "express";
import cors from "cors";
import { userData, leaderboardData } from "./data.js";

const app = express();
app.use(cors());

// API routes
app.get("/api/user", (req, res) => {
  res.json(userData);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
