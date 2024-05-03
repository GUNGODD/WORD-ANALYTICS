import React, { useState } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import SentimentDisplay from './SentimentDisplay';

const API_KEY = "AIzaSyCDbwP14I-PFbgd2xZXTyB1HiuDDt7eI8I";

export default function SentimentAnalyzer() {
  const [userInput, setUserInput] = useState("");
  const [sentimentResult, setSentimentResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const analyzeSentiment = async () => {
    if (!userInput) return; // Don't analyze empty input
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = userInput;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const sentimentText = response.text();

      const sentimentResult = processSentimentText(sentimentText);
      setSentimentResult(sentimentResult);
    } catch (error) {
      setError("Error analyzing sentiment.");
      console.error("Error analyzing sentiment:", error);
    } finally {
      setLoading(false);
    }
  };

  const processSentimentText = (sentimentText) => {
    if (sentimentText.includes("positive")) {
      return "Positive";
    } else if (sentimentText.includes("negative")) {
      return "Negative";
    } else {
      return "Neutral";
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Sentiment Analyzer</h1>
      <textarea
        className="w-full h-40 p-4 border rounded-md resize-none mb-4"
        maxLength={300}
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleInputChange}
        value={userInput}
      ></textarea>
      <button
        className={`block w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 mb-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={analyzeSentiment}
        disabled={loading} // Disable button during analysis
      >
        {loading ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>
      <SentimentDisplay sentimentResult={sentimentResult} error={error} />
    </div>
  );
}
