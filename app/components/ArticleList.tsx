"use client";

import { Article } from "@/lib/api/news";
import Image from "next/image";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p>No articles found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {articles.map((article, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {article.urlToImage && (
            <div className="relative h-48 w-full">
              <Image
                src={article.urlToImage}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {article.source.name} •{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">
              {article.description || "No description available"}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read Full Article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
