"use client";

import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecentQueries from "./components/RecentQueries";
import ArticleList from "./components/ArticleList";
import InsightsPanel from "./components/InsightsPanel";
import { Article } from "@/lib/api/news";

interface Query {
  id: number;
  query: string;
  createdAt: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [insights, setInsights] = useState("");
  const [recentQueries, setRecentQueries] = useState<Query[]>([]);

  // Fetch recent queries on page load
  useEffect(() => {
    fetchRecentQueries();
  }, []);

  const fetchRecentQueries = async () => {
    try {
      const response = await fetch("/api/queries");
      const data = await response.json();
      setRecentQueries(data.queries);
    } catch (error) {
      console.error("Error fetching recent queries:", error);
    }
  };

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setCurrentQuery(query);
    setArticles([]);
    setInsights("");

    try {
      // Step 1: Fetch news articles
      const newsResponse = await fetch(
        `/api/news?query=${encodeURIComponent(query)}`
      );
      const newsData = await newsResponse.json();

      if (newsData.articles && newsData.articles.length > 0) {
        setArticles(newsData.articles);

        // Step 2: Generate insights using Gemini AI
        const insightsResponse = await fetch(
          `/api/insights?query=${encodeURIComponent(query)}`
        );
        const insightsData = await insightsResponse.json();

        if (insightsData.insights) {
          setInsights(insightsData.insights);
        }
      }

      // Refresh recent queries
      fetchRecentQueries();
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            MarketSense AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get AI-powered market research insights based on the latest trends
            and news.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        <RecentQueries queries={recentQueries} onSelectQuery={handleSearch} />

        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {!isLoading && insights && (
          <InsightsPanel insights={insights} query={currentQuery} />
        )}

        {!isLoading && articles.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
            <ArticleList articles={articles} />
          </div>
        )}

        {!isLoading && currentQuery && articles.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">
              No results found for "{currentQuery}"
            </p>
            <p className="text-gray-500 mt-2">
              Try a different search term or broaden your query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
