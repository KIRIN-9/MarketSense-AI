"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, type TooltipProps } from "recharts"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const initialMarketData = [
  { name: "Jan", value: 4000, ai: 2400 },
  { name: "Feb", value: 3000, ai: 2210 },
  { name: "Mar", value: 2000, ai: 2290 },
  { name: "Apr", value: 2780, ai: 3200 },
  { name: "May", value: 1890, ai: 3500 },
  { name: "Jun", value: 2390, ai: 3800 },
  { name: "Jul", value: 3490, ai: 4300 },
]

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 border border-border rounded-md shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-primary">
          Market: <span className="font-medium">${payload[0].value}</span>
        </p>
        <p className="text-sm text-emerald-400">
          AI Sector: <span className="font-medium">${payload[1].value}</span>
        </p>
      </div>
    )
  }

  return null
}

export function MarketPulse() {
  const [marketData, setMarketData] = useState(initialMarketData)
  const [marketSentiment, setMarketSentiment] = useState("Bullish")
  const [sentimentChange, setSentimentChange] = useState("+2.3%")
  const [aiGrowth, setAiGrowth] = useState("+12.7%")

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update the last data point with a random value
      setMarketData((prevData) => {
        const newData = [...prevData]
        const lastIndex = newData.length - 1

        // Random fluctuation between -300 and +300
        const marketFluctuation = Math.floor(Math.random() * 600) - 300
        const aiFluctuation = Math.floor(Math.random() * 400) - 100 // AI tends to grow more

        newData[lastIndex] = {
          ...newData[lastIndex],
          value: Math.max(1500, newData[lastIndex].value + marketFluctuation),
          ai: Math.max(2000, newData[lastIndex].ai + aiFluctuation),
        }

        return newData
      })

      // Occasionally update sentiment
      if (Math.random() > 0.7) {
        const sentiments = ["Bullish", "Neutral", "Cautious", "Bearish"]
        const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)]
        setMarketSentiment(randomSentiment)

        // Random sentiment change
        const changeValue = (Math.random() * 5).toFixed(1)
        const direction = Math.random() > 0.5 ? "+" : "-"
        setSentimentChange(`${direction}${changeValue}%`)
      }

      // Update AI growth
      if (Math.random() > 0.8) {
        const growthValue = (10 + Math.random() * 8).toFixed(1)
        setAiGrowth(`+${growthValue}%`)
      }
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="col-span-2 row-span-2 card-gradient border-[#1e293b]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">Market Pulse Center</CardTitle>
          <CardDescription className="text-muted-foreground">Key market indicators powered by Gemini</CardDescription>
        </div>
        <Badge variant="outline" className="ml-auto bg-primary/10 text-primary border-primary/20">
          Live
        </Badge>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={marketData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
              <XAxis dataKey="name" tick={{ fill: "#94a3b8" }} axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }} />
              <YAxis tick={{ fill: "#94a3b8" }} axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorValue)"
                activeDot={{ r: 6, fill: "#3b82f6", stroke: "#0f172a", strokeWidth: 2 }}
              />
              <Area
                type="monotone"
                dataKey="ai"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#colorAi)"
                activeDot={{ r: 6, fill: "#10b981", stroke: "#0f172a", strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-card rounded-md p-3 border border-[#1e293b]">
            <div className="text-sm font-medium mb-1 text-muted-foreground">Market Sentiment</div>
            <div className="text-2xl font-bold">{marketSentiment}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {sentimentChange.startsWith("+") ? (
                <span className="text-green-400">{sentimentChange}</span>
              ) : (
                <span className="text-red-400">{sentimentChange}</span>
              )}{" "}
              from yesterday
            </div>
          </div>
          <div className="bg-card rounded-md p-3 border border-[#1e293b]">
            <div className="text-sm font-medium mb-1 text-muted-foreground">AI Sector Growth</div>
            <div className="text-2xl font-bold text-emerald-400">{aiGrowth}</div>
            <div className="text-xs text-muted-foreground mt-1">YTD performance</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

