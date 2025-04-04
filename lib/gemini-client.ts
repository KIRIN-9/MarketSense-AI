import { google } from "@ai-sdk/google";
import { generateText, streamText } from "ai";

export async function generateMarketResearch(prompt: string) {
  try {
    const { text } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: prompt,
      system:
        "You are a professional market research analyst specializing in AI, technology, and financial markets. Provide detailed, data-driven insights with proper citations to reliable sources. Focus on current trends, market dynamics, and future projections.",
    });

    return text;
  } catch (error) {
    console.error("Error generating market research:", error);
    return "I apologize, but I encountered an error while researching this topic. Please try again later.";
  }
}

export async function streamMarketResearch(
  prompt: string,
  onChunk: (chunk: string) => void,
  onFinish: (fullText: string) => void
) {
  try {
    const result = streamText({
      model: google("gemini-1.5-pro"),
      prompt: prompt,
      system:
        "You are a professional market research analyst specializing in AI, technology, and financial markets. Provide detailed, data-driven insights with proper citations to reliable sources. Focus on current trends, market dynamics, and future projections.",
      onChunk: ({ chunk }) => {
        if (chunk.type === "text-delta") {
          onChunk(chunk.text);
        }
      },
    });

    result.text.then((fullText) => {
      onFinish(fullText);
    });

    return result;
  } catch (error) {
    console.error("Error streaming market research:", error);
    onChunk(
      "I apologize, but I encountered an error while researching this topic. Please try again later."
    );
    onFinish(
      "I apologize, but I encountered an error while researching this topic. Please try again later."
    );
    return null;
  }
}
