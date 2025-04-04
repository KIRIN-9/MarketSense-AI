"use client"

import { MarketPulse } from "./market-pulse"
import { ResearchMonitor } from "./research-monitor"
import { TrendSpotlight } from "./trend-spotlight"
import { FinancialCards } from "./financial-cards"
import { NewsFeed } from "./news-feed"
import { useEffect, useState } from "react"

export function MainDashboard() {
  const [refreshTime, setRefreshTime] = useState(new Date())

  // Update refresh time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshTime(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto p-6 gradient-bg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Market Research Dashboard</h1>
        <div className="text-xs text-muted-foreground">
          Last updated: {refreshTime.toLocaleTimeString()} | Data powered by Gemini
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <MarketPulse />
        <div className="col-span-2 space-y-6">
          <ResearchMonitor />
          <TrendSpotlight />
        </div>
        <div className="space-y-6">
          <FinancialCards />
        </div>
        <NewsFeed />
      </div>
    </div>
  )
}

