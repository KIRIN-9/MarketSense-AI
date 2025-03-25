import axios from "axios";

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export async function fetchNewsArticles(query: string): Promise<Article[]> {
  try {
    const response = await axios.get<NewsAPIResponse>(
      `${process.env.NEWS_API_BASE_URL}/everything`,
      {
        params: {
          q: query,
          language: "en",
          sortBy: "publishedAt",
          pageSize: 10,
        },
        headers: {
          "X-Api-Key": process.env.NEWS_API_KEY,
        },
      }
    );

    if (response.data.status !== "ok") {
      throw new Error(`NewsAPI error: ${response.data.status}`);
    }

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news articles:", error);
    throw error;
  }
}
