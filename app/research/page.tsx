import { MainSidebar } from "@/components/main-sidebar"
import { ResearchInterface } from "@/components/research/research-interface"

export default function ResearchPage() {
  return (
    <div className="flex h-screen">
      <MainSidebar />
      <main className="flex-1 overflow-auto">
        <ResearchInterface />
      </main>
    </div>
  )
}

