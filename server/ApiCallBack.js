// apicallback.js

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateContentWithAI() {
  const genAI = new GoogleGenerativeAI("api keys ");

  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const User_input =
    "virat kohli's Strike rate is falling down sad to see   he can play big shot's in upcoming t20 world coup ";
  const prompt =
    "analyze this X sentiment in terms of positive and positive and give answers only using keyword such as positive and negative  and answer should be in the form of boolean positive or negative    " +
    User_input;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}


async function run() {
  const text = await generateContentWithAI();
  console.log(text);
}

run();

module.exports = generateContentWithAI;


AIzaSyBNXGIMacH2OKQa_7qJ0FjybzDz_AAIgrQ


