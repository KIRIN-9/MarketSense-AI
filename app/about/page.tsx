export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        About MarketSense AI
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          MarketSense AI is designed to provide businesses and researchers with
          quick, AI-powered insights into market trends based on the latest news
          and information. Our goal is to democratize access to market research
          by combining the power of AI with real-time news data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="list-decimal pl-5 space-y-4">
            <li className="text-gray-700">
              <span className="font-medium">Enter a query</span> - Type in any
              market, industry, or product you want to research.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Data collection</span> - Our system
              fetches the latest news articles related to your query from
              trusted sources.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">AI analysis</span> - Google's Gemini
              AI processes the articles to extract key trends, sentiment, and
              business implications.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Insights generation</span> - The AI
              provides structured insights with actionable information for your
              business decisions.
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium mb-2">Next.js</h3>
            <p className="text-sm text-gray-600">
              React framework for the frontend
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium mb-2">TailwindCSS</h3>
            <p className="text-sm text-gray-600">Utility-first CSS framework</p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium mb-2">NewsAPI</h3>
            <p className="text-sm text-gray-600">News article data provider</p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium mb-2">Google Gemini AI</h3>
            <p className="text-sm text-gray-600">
              AI model for insights generation
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium mb-2">PostgreSQL</h3>
            <p className="text-sm text-gray-600">
              Database for storing market trends
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h3 className="font-medium mb-2">Prisma</h3>
            <p className="text-sm text-gray-600">ORM for database access</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Competitor analysis features</li>
          <li>Enhanced AI-generated insights with sentiment analysis</li>
          <li>User authentication for personalized research dashboards</li>
          <li>Report generation for exporting insights as PDFs or CSVs</li>
          <li>Historical trend analysis and predictive modeling</li>
        </ul>
      </section>
    </div>
  );
}
