const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = 5000;

// Middleware to parse JSON body
app.use(express.json());

// Endpoint to handle sentiment analysis request
app.post("/sentiment-analysis", async (req, res) => {
  try {
    const { comment } = req.body;

    // Make request to Gemini API for sentiment analysis
    const response = await axios.post(
      "https://api.gemini.com/sentiment-analysis",
      {
        comment,
        apiKey: process.env.GEMINI_API_KEY,
      },
    );

    // Return sentiment analysis result to client
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
