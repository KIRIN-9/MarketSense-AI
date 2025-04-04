"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface Trend {
  title: string
  description: string
  growth: string
  category: string
}

const initialTrends: Trend[] = [
  {
    title: "Multimodal AI Integration",
    description:
      "Companies are rapidly adopting multimodal AI systems that combine text, vision, and audio capabilities for enhanced customer experiences.",
    growth: "+37%",
    category: "Enterprise",
  },
  {
    title: "AI Regulation Compliance",
    description:
      "Organizations investing in AI governance frameworks to ensure compliance with emerging global AI regulations.",
    growth: "+62%",
    category: "Governance",
  },
  {
    title: "Edge AI Deployment",
    description: "Shift towards deploying AI models directly on edge devices to reduce latency and enhance privacy.",
    growth: "+41%",
    category: "Technology",
  },
]

const additionalTrends: Trend[] = [
  {
    title: "AI-Powered Cybersecurity",
    description:
      "Rapid adoption of AI-based threat detection systems that can identify and respond to novel attack vectors in real-time.",
    growth: "+53%",
    category: "Security",
  },
  {
    title: "Generative AI for Design",
    description:
      "Creative industries leveraging generative AI to accelerate product design, architectural planning, and content creation.",
    growth: "+78%",
    category: "Creative",
  },
  {
    title: "AI in Healthcare Diagnostics",
    description:
      "Healthcare providers implementing AI diagnostic tools that demonstrate higher accuracy rates than traditional methods.",
    growth: "+45%",
    category: "Healthcare",
  },
]

export function TrendSpotlight() {
  const [trends, setTrends] = useState<Trend[]>(initialTrends)
  const [currentTrend, setCurrentTrend] = useState(0)

  const nextTrend = () => {
    setCurrentTrend((prev) => (prev === trends.length - 1 ? 0 : prev + 1))
  }

  const prevTrend = () => {
    setCurrentTrend((prev) => (prev === 0 ? trends.length - 1 : prev - 1))
  }

  // Auto-rotate trends
  useEffect(() => {
    const interval = setInterval(() => {
      nextTrend()
    }, 10000) // Change trend every 10 seconds

    return () => clearInterval(interval)
  }, [trends.length])

  // Occasionally add new trends
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // Add a random trend from additionalTrends that isn't already in trends
        const availableTrends = additionalTrends.filter((t) => !trends.some((existing) => existing.title === t.title))

        if (availableTrends.length > 0) {
          const randomTrend = availableTrends[Math.floor(Math.random() * availableTrends.length)]
          setTrends((prev) => [...prev, randomTrend])
        }

        // If we've added all additional trends, occasionally update growth numbers
        else if (Math.random() > 0.5) {
          setTrends((prev) =>
            prev.map((trend) => ({
              ...trend,
              growth: `+${(Number.parseInt(trend.growth.replace("+", "")) + Math.floor(Math.random() * 5)).toString()}%`,
            })),
          )
        }
      }
    }, 15000) // Check for new trends every 15 seconds

    return () => clearInterval(interval)
  }, [trends])

  return (
    <Card className="card-gradient border-[#1e293b]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">AI Trend Spotlight</CardTitle>
          <Badge className="bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20">{trends[currentTrend].category}</Badge>
        </div>
        <CardDescription className="text-muted-foreground">Emerging trends in the AI landscape</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="space-y-2 min-h-[150px]">
            <div className="text-xl font-bold text-foreground">{trends[currentTrend].title}</div>
            <div className="text-sm text-muted-foreground">{trends[currentTrend].description}</div>
            <div className="flex items-center mt-2">
              <span className="text-sm font-medium mr-2 text-muted-foreground">YoY Growth:</span>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
                {trends[currentTrend].growth}
              </Badge>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTrend}
              className="bg-card border-border/50 hover:bg-secondary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-xs text-muted-foreground">
              {currentTrend + 1} of {trends.length}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTrend}
              className="bg-card border-border/50 hover:bg-secondary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

