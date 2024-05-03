const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(
  " AIzaSyBNXGIMacH2OKQa_7qJ0FjybzDz_AAIgrQ",
);

async function run() {
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
  console.log(text);
}

run();
