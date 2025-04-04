"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, Sparkles, FileText, BarChart3, Globe, History } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useSearchParams } from "next/navigation"

interface Message {
  role: "user" | "assistant"
  content: string
  sources?: Array<{ title: string; url: string }>
  charts?: Array<{ type: string; title: string }>
}

export function ResearchInterface() {
  const searchParams = useSearchParams()
  const initialTopic = searchParams.get("topic") || ""

  const [messages, setMessages] = useState<Message[]>(
    initialTopic
      ? [
          {
            role: "user",
            content: `I'd like to research about: ${initialTopic}`,
          },
        ]
      : [],
  )

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim() && messages.length === 0) return

    // Add user message
    const userMessage = { role: "user" as const, content: input || `I'd like to research about: ${initialTopic}` }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const assistantMessage = {
        role: "assistant" as const,
        content: generateResponse(userMessage.content),
        sources: [
          { title: "Financial Times - Market Analysis", url: "https://ft.com/markets" },
          { title: "Bloomberg Technology Report", url: "https://bloomberg.com/technology" },
          { title: "Harvard Business Review", url: "https://hbr.org/research" },
        ],
        charts: [{ type: "line", title: "Market Growth Trends (2020-2025)" }],
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 2000)
  }

  // If there's an initial topic from URL params and no messages yet, trigger research
  useEffect(() => {
    if (initialTopic && messages.length === 0) {
      setTimeout(handleSend, 100)
    }
  }, [initialTopic])

  const generateResponse = (query: string) => {
    // This is a placeholder. In a real implementation, this would call the Gemini API
    return (
      `Based on the latest market data, I can provide the following insights on "${query}":\n\n` +
      "The market has shown significant growth in this sector over the past quarter, with a 23% increase in investment compared to the same period last year. Key players in this space include established companies like TechCorp and InnoSystems, as well as emerging startups such as AI Solutions.\n\n" +
      "Three major trends are currently shaping this market:\n" +
      "1. Increased regulatory scrutiny, particularly in Europe and North America\n" +
      "2. Consolidation through mergers and acquisitions\n" +
      "3. Rapid technological advancement driving competitive differentiation\n\n" +
      "Analysts project continued growth at a CAGR of 18.7% through 2027, though this may be affected by macroeconomic factors including interest rates and supply chain constraints."
    )
  }

  return (
    <div className="container mx-auto p-6 gradient-bg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Deep Research Interface</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-card border-border/50 hover:bg-secondary">
            <History className="h-4 w-4 mr-2" />
            Research History
          </Button>
          <Button variant="outline" size="sm" className="bg-card border-border/50 hover:bg-secondary">
            <FileText className="h-4 w-4 mr-2" />
            Save Research
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2 card-gradient border-[#1e293b]">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium">Research Conversation</CardTitle>
            <CardDescription className="text-muted-foreground">
              Ask detailed questions about markets, trends, and companies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] pr-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Sparkles className="h-12 w-12 text-primary/50 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Start Your Research</h3>
                  <p className="text-muted-foreground max-w-md">
                    Ask detailed questions about markets, companies, or trends to get comprehensive analysis powered by
                    Gemini.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.role === "user"
                            ? "bg-primary/20 border border-primary/30"
                            : "bg-card border border-border/50"
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.content}</div>

                        {message.sources && (
                          <div className="mt-4">
                            <div className="text-xs font-semibold mb-2 text-muted-foreground">SOURCES</div>
                            <div className="space-y-2">
                              {message.sources.map((source, idx) => (
                                <div key={idx} className="flex items-center text-xs">
                                  <Badge variant="outline" className="mr-2 bg-secondary/30 border-secondary/50">
                                    Source
                                  </Badge>
                                  <a
                                    href={source.url}
                                    className="text-primary hover:text-primary/80 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {source.title}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {message.charts && (
                          <div className="mt-4">
                            <div className="text-xs font-semibold mb-2 text-muted-foreground">VISUALIZATIONS</div>
                            <div className="space-y-2">
                              {message.charts.map((chart, idx) => (
                                <div key={idx} className="bg-card/50 rounded-md p-3 border border-border/30">
                                  <div className="flex items-center text-xs mb-2">
                                    <BarChart3 className="h-3 w-3 mr-1 text-primary" />
                                    <span>{chart.title}</span>
                                  </div>
                                  <div className="h-32 bg-card rounded flex items-center justify-center text-xs text-muted-foreground">
                                    [Interactive {chart.type} chart visualization]
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-4 bg-card border border-border/50">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce"></div>
                          <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce delay-75"></div>
                          <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>

            <div className="flex items-center space-x-2 mt-4">
              <Input
                placeholder="Ask about market trends, companies, or economic indicators..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 bg-card border-border/50"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading && messages.length > 0}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="card-gradient border-[#1e293b]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Research Parameters</CardTitle>
              <CardDescription className="text-muted-foreground">Customize your research experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="depth">
                <TabsList className="grid grid-cols-2 mb-4 bg-card">
                  <TabsTrigger
                    value="depth"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Depth
                  </TabsTrigger>
                  <TabsTrigger
                    value="region"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Region
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="depth" className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2 text-muted-foreground">Research Depth</div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        Overview
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="justify-start bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Standard
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        Deep Dive
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2 text-muted-foreground">Time Horizon</div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        Short-term
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="justify-start bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Medium
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        Long-term
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="region" className="space-y-4">
                  <div>
                    <div className="text-sm font-medium mb-2 text-muted-foreground">Focus Region</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="justify-start bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Globe className="h-3 w-3 mr-2" />
                        Global
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        North America
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        Europe
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-card border-border/50 hover:bg-secondary"
                      >
                        Asia Pacific
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <Separator className="my-4 bg-border/30" />

              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground">Data Sources</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-primary/10 text-primary border-primary/20">
                        Primary
                      </Badge>
                      <span className="text-sm">Financial Reports</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-secondary/50">
                      <FileText className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-primary/10 text-primary border-primary/20">
                        Primary
                      </Badge>
                      <span className="text-sm">Market Analysis</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-secondary/50">
                      <FileText className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="mr-2 bg-secondary/30 text-muted-foreground border-secondary/50"
                      >
                        Secondary
                      </Badge>
                      <span className="text-sm">News Articles</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-secondary/50">
                      <FileText className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-[#1e293b]">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Related Topics</CardTitle>
              <CardDescription className="text-muted-foreground">Explore connected research areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  Market Trends
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  Competitive Analysis
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  Industry Forecasts
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  Regulatory Impact
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  Investment Opportunities
                </Badge>
                <Badge
                  variant="secondary"
                  className="cursor-pointer bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  Technology Adoption
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

