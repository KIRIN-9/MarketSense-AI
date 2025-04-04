"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface NewsItem {
  title: string
  summary: string
  impact: "High" | "Medium" | "Low"
  category: string
  time: string
}

const initialNewsItems: NewsItem[] = [
  {
    title: "Tech Giants Announce Collaborative AI Safety Framework",
    summary:
      "Major tech companies have agreed on a unified approach to AI safety standards, potentially reshaping industry regulations.",
    impact: "High",
    category: "Regulation",
    time: "2 hours ago",
  },
  {
    title: "New Semiconductor Manufacturing Process Breakthrough",
    summary:
      "Revolutionary 2nm chip manufacturing process announced, promising 30% efficiency improvements for AI applications.",
    impact: "Medium",
    category: "Technology",
    time: "4 hours ago",
  },
  {
    title: "Central Bank Signals Interest Rate Strategy Shift",
    summary: "Federal Reserve hints at potential policy adjustments in response to changing economic indicators.",
    impact: "High",
    category: "Economy",
    time: "6 hours ago",
  },
  {
    title: "Major Acquisition in AI Healthcare Sector",
    summary:
      "Leading healthcare provider acquires AI diagnostics startup for $3.2B, signaling increased investment in medical AI.",
    impact: "Medium",
    category: "M&A",
    time: "8 hours ago",
  },
]

const additionalNewsItems: NewsItem[] = [
  {
    title: "AI Startup Secures Record Series B Funding",
    summary: "Emerging AI company raises $420M in Series B, marking the largest funding round in the sector this year.",
    impact: "Medium",
    category: "Funding",
    time: "Just now",
  },
  {
    title: "New EU AI Regulations Take Effect",
    summary:
      "Comprehensive AI regulatory framework now enforced across EU member states, impacting global tech operations.",
    impact: "High",
    category: "Regulation",
    time: "1 hour ago",
  },
  {
    title: "Quantum Computing Milestone Achieved",
    summary:
      "Research team demonstrates practical quantum advantage for machine learning tasks, potentially accelerating AI development.",
    impact: "High",
    category: "Research",
    time: "3 hours ago",
  },
  {
    title: "Major Cloud Provider Announces AI Infrastructure Expansion",
    summary:
      "Leading cloud service announces $5B investment in specialized AI computing infrastructure across global data centers.",
    impact: "Medium",
    category: "Infrastructure",
    time: "5 hours ago",
  },
]

export function NewsFeed() {
  const router = useRouter()
  const [newsItems, setNewsItems] = useState<NewsItem[]>(initialNewsItems)

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-500/10 text-red-400 border-red-500/20"
      case "Medium":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20"
      case "Low":
        return "bg-green-500/10 text-green-400 border-green-500/20"
      default:
        return ""
    }
  }

  // Simulate real-time news updates
  useEffect(() => {
    const interval = setInterval(() => {
      // 30% chance to add a new news item
      if (Math.random() > 0.7) {
        // Get a random news item from additionalNewsItems
        const randomIndex = Math.floor(Math.random() * additionalNewsItems.length)
        const newItem = { ...additionalNewsItems[randomIndex] }

        // Update the time to make it seem fresh
        const times = ["Just now", "1 min ago", "5 mins ago", "10 mins ago", "30 mins ago", "1 hour ago"]
        newItem.time = times[Math.floor(Math.random() * 3)] // Use one of the more recent times

        // Add to the beginning of the list and remove the last item if we have more than 4
        setNewsItems((prev) => {
          const updated = [newItem, ...prev]
          if (updated.length > 4) {
            return updated.slice(0, 4)
          }
          return updated
        })
      }

      // Otherwise, just update the times to make them seem more recent
      else {
        setNewsItems((prev) =>
          prev.map((item) => {
            // Parse the time and make it more recent
            if (item.time.includes("hours")) {
              const hours = Number.parseInt(item.time)
              return { ...item, time: hours > 1 ? `${hours - 1} hours ago` : "1 hour ago" }
            } else if (item.time.includes("hour ago")) {
              return { ...item, time: "30 mins ago" }
            }
            return item
          }),
        )
      }
    }, 12000) // Update every 12 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="col-span-2 card-gradient border-[#1e293b]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Market News Feed</CardTitle>
        <CardDescription className="text-muted-foreground">Curated market-impacting headlines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <div key={index}>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.summary}</div>
                  <div className="flex items-center pt-1 text-xs text-muted-foreground">
                    <span>{item.time}</span>
                    <span className="mx-2">•</span>
                    <Badge variant="secondary" className="mr-1 bg-secondary/30 border-secondary/50">
                      {item.category}
                    </Badge>
                    <Badge variant="outline" className={getImpactColor(item.impact)}>
                      {item.impact} Impact
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-1 text-primary hover:bg-primary/10"
                  onClick={() => router.push(`/research?topic=${encodeURIComponent(item.title)}`)}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              {index < newsItems.length - 1 && <Separator className="mt-4 bg-border/30" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

