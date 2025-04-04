"use client"

import { useSidebar } from "./sidebar-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  ChevronLeft,
  Clock,
  Compass,
  Home,
  LineChart,
  MessageSquare,
  PanelLeft,
  Search,
  Settings,
  Star,
} from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { Input } from "./ui/input"

export function MainSidebar() {
  const { isOpen, toggleSidebar } = useSidebar()
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/",
    },
    {
      title: "Deep Research",
      icon: MessageSquare,
      href: "/research",
    },
    {
      title: "Market Explorer",
      icon: Compass,
      href: "/explorer",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/analytics",
    },
  ]

  const savedResearch = [
    { title: "AI Market Trends Q2 2025", href: "/saved/ai-trends-q2-2025" },
    { title: "Crypto Market Analysis", href: "/saved/crypto-analysis" },
    { title: "Tech Sector Overview", href: "/saved/tech-sector" },
    { title: "Renewable Energy Forecast", href: "/saved/renewable-energy" },
  ]

  const recentSearches = [
    { title: "GenAI Market Size 2025", href: "/research?q=genai-market-size" },
    { title: "Semiconductor Industry", href: "/research?q=semiconductor-industry" },
    { title: "EV Battery Technology", href: "/research?q=ev-battery-tech" },
    { title: "Cloud Computing Growth", href: "/research?q=cloud-computing" },
  ]

  return (
    <div
      className={cn(
        "bg-sidebar-background text-sidebar-foreground h-screen relative transition-all duration-300 border-r border-border",
        isOpen ? "w-64" : "w-16",
      )}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && (
          <div className="font-bold text-lg flex items-center">
            <LineChart className="mr-2 h-5 w-5 text-primary" />
            MarketAI
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          {isOpen ? <ChevronLeft /> : <PanelLeft />}
        </Button>
      </div>

      <Separator className="bg-sidebar-border opacity-30" />

      {isOpen && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search markets..."
              className="pl-8 bg-sidebar-accent text-sidebar-foreground border-sidebar-border"
            />
          </div>
        </div>
      )}

      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  pathname === item.href && "bg-sidebar-accent text-primary font-medium",
                  !isOpen && "justify-center px-0",
                )}
                onClick={() => router.push(item.href)}
              >
                <item.icon className={cn("h-5 w-5", isOpen && "mr-2", pathname === item.href && "text-primary")} />
                {isOpen && <span>{item.title}</span>}
              </Button>
            ))}
          </div>

          {isOpen && (
            <>
              <div className="pt-6">
                <div className="flex items-center px-3 mb-2">
                  <Star className="h-4 w-4 mr-1 text-amber-400" />
                  <span className="text-xs font-medium text-muted-foreground">SAVED RESEARCH</span>
                </div>
                <div className="space-y-1">
                  {savedResearch.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm px-3"
                      onClick={() => router.push(item.href)}
                    >
                      <span className="truncate">{item.title}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <div className="flex items-center px-3 mb-2">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">RECENT SEARCHES</span>
                </div>
                <div className="space-y-1">
                  {recentSearches.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm px-3"
                      onClick={() => router.push(item.href)}
                    >
                      <span className="truncate">{item.title}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </ScrollArea>

      <div className="absolute bottom-0 w-full border-t border-sidebar-border p-4 opacity-30">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            !isOpen && "justify-center px-0",
          )}
        >
          <Settings className={cn("h-5 w-5", isOpen && "mr-2")} />
          {isOpen && <span>Settings</span>}
        </Button>
      </div>
    </div>
  )
}

