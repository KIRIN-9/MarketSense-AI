# MarketSense AI - Market Research Assistant

MarketSense AI is an application that provides AI-powered market research insights based on the latest news and trends. It leverages NewsAPI for data collection and Google's Gemini AI for generating insights.

## Features

- **Real-time News Analysis**: Fetch and analyze the latest market news for any search term
- **AI-Generated Insights**: Get intelligent market trend analysis from Gemini AI
- **Responsive UI**: Clean, modern interface that works on all devices
- **Data Persistence**: Save search history and insights for future reference

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API Routes with Express
- **Database**: PostgreSQL (NeonDB)
- **AI**: Google Gemini AI
- **APIs**: NewsAPI for market news
- **ORM**: Prisma for database operations
- **Deployment**: Vercel

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- NewsAPI API Key (get it from [newsapi.org](https://newsapi.org))
- Google Gemini API Key (get it from [Google AI Studio](https://makersuite.google.com/app/apikey))
- NeonDB PostgreSQL database (or any PostgreSQL database)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd market-sence-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   # Database
   DATABASE_URL="your_postgres_connection_string"

   # NewsAPI
   NEWS_API_KEY="your_newsapi_key"
   NEWS_API_BASE_URL="https://newsapi.org/v2"

   # Google Gemini API
   GEMINI_API_KEY="your_gemini_api_key"

   # Application
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. Set up the database with Prisma:

   ```bash
   npx prisma db push
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository.

2. Connect your repository to Vercel.

3. Configure the environment variables in the Vercel dashboard.

4. Deploy the application.

## Future Enhancements

- Add competitor analysis features with SEO and social media tracking
- Enhance AI-generated insights with sentiment analysis and predictive modeling
- Implement user authentication for personalized market research dashboards
- Add report generation features for exporting insights as PDFs or CSVs

## License

This project is licensed under the MIT License - see the LICENSE file for details.
