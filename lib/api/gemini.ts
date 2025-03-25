import { GoogleGenerativeAI } from "@google/generative-ai";
import { Article } from "./news";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateMarketInsights(
  query: string,
  articles: Article[]
): Promise<string> {
  try {
    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prepare the prompt with the articles data
    const articlesText = articles
      .map(
        (article) => `Title: ${article.title}
        Source: ${article.source.name}
        Date: ${article.publishedAt}
        Description: ${article.description || "N/A"}
        `
      )
      .join("\n\n");

    const prompt = `
    I need you to analyze the following market news articles about "${query}" and provide insights:

    ${articlesText}

    Please provide:
    1. A summary of the key market trends
    2. Potential business implications
    3. Sentiment analysis (positive, negative, or neutral)
    4. Actionable insights for businesses in this market

    Format your response in a clear, structured way with headings and bullet points.
    `;

    // Call the model and get the response
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating market insights:", error);
    throw error;
  }
}
