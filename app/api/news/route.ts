import { NextRequest, NextResponse } from "next/server";
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

    // Store the market trends in the database
    const marketTrends = await Promise.all(
      articles.map(async (article) => {
        return prisma.marketTrend.create({
          data: {
            query,
            title: article.title,
            description: article.description || "",
            source: article.source.name,
            url: article.url,
            publishedAt: article.publishedAt
              ? new Date(article.publishedAt)
              : null,
            imageUrl: article.urlToImage,
          },
        });
      })
    );

    return NextResponse.json({ articles, marketTrends });
  } catch (error) {
    console.error("Error in news API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch news articles" },
      { status: 500 }
    );
  }
}
