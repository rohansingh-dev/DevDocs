import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsGrid } from "@/components/news-grid"
import { SearchFilters } from "@/components/search-filters"
import { NewsGridSkeleton } from "@/components/news-grid-skeleton"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold mb-8 text-center">Latest News from Around the World</h1>

        <SearchFilters />

        <Suspense fallback={<NewsGridSkeleton />}>
          <NewsGrid />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
