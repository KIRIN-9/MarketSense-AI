import { NextRequest, NextResponse } from "next/server";
import { generateMarketInsights } from "@/lib/api/gemini";
import { fetchNewsArticles } from "@/lib/api/news";
import { prisma } from "@/lib/db/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get the query from the URL
    const url = new URL(request.url);
    const query = url.searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }

    // Fetch news articles
    const articles = await fetchNewsArticles(query);

    if (articles.length === 0) {
      return NextResponse.json(
        { error: "No articles found for the given query" },
        { status: 404 }
      );
    }

    // Generate insights using Gemini AI
    const insights = await generateMarketInsights(query, articles);

    // Save the query and response to the database
    const userQuery = await prisma.userQuery.create({
      data: {
        query,
        response: insights,
      },
    });

    // Update market trends with AI analysis
    await Promise.all(
      articles.map(async (article) => {
        const marketTrend = await prisma.marketTrend.findFirst({
          where: {
            title: article.title,
            query,
          },
        });

        if (marketTrend) {
          await prisma.marketTrend.update({
            where: { id: marketTrend.id },
            data: { aiAnalysis: insights },
          });
        }
      })
    );

    return NextResponse.json({ insights, articles });
  } catch (error) {
    console.error("Error in insights API route:", error);
    return NextResponse.json(
      { error: "Failed to generate insights" },
      { status: 500 }
    );
  }
}
