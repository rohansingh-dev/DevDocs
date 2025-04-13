import { Suspense } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchTopHeadlines } from "@/lib/news-api"
import CategoryFilter from "@/components/category-filter"
import NewsCard from "@/components/news-card"

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = typeof searchParams.category === "string" ? searchParams.category : "general"
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const q = typeof searchParams.q === "string" ? searchParams.q : undefined

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Stay Informed with the Latest News
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get the latest news from around the world, updated in real-time.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2" action="/" method="GET">
                <Input className="flex-1" placeholder="Search for news..." type="search" name="q" defaultValue={q} />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-6">
        <CategoryFilter activeCategory={category} />

        <Suspense fallback={<NewsCardSkeleton count={9} />}>
          <NewsList category={category} page={page} q={q} />
        </Suspense>
      </section>
    </main>
  )
}

async function NewsList({
  category,
  page,
  q,
}: {
  category: string
  page: number
  q?: string
}) {
  const { articles, totalResults } = await fetchTopHeadlines({ category, page, q })
  const totalPages = Math.ceil(totalResults / 9)

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-xl font-semibold mb-2">No articles found</h2>
        <p className="text-muted-foreground">Try a different search term or category</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      <div className="flex justify-center gap-2 py-6">
        {page > 1 && (
          <Button variant="outline" asChild>
            <Link href={{ query: { category, page: page - 1, q } }}>Previous</Link>
          </Button>
        )}
        {page < totalPages && (
          <Button variant="outline" asChild>
            <Link href={{ query: { category, page: page + 1, q } }}>Next</Link>
          </Button>
        )}
      </div>
    </>
  )
}

function NewsCardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-0">
              <Skeleton className="h-48 w-full rounded-none" />
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-20 w-full" />
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-20" />
            </CardFooter>
          </Card>
        ))}
    </div>
  )
}
