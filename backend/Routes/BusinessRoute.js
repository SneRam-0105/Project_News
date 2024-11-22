import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

router.get("/", async (req, res) => {
  const totalResults = req.query.totalResults;
  const articles = req.query.articles;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`
    );

    res.json({
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch business news" });
  }
});

export default router;
