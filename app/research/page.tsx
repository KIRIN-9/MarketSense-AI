import { MainSidebar } from "@/components/main-sidebar";
import { ResearchInterface } from "@/components/research/research-interface";
import { Suspense } from "react";

export default function ResearchPage() {
  return (
    <div className="flex h-screen">
      <MainSidebar />
      <main className="flex-1 overflow-auto">
        <Suspense fallback={<div>Loading research interface...</div>}>
          <ResearchInterface />
        </Suspense>
      </main>
    </div>
  );
}
