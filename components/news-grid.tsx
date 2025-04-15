import { getNews } from "@/lib/news"
import { NewsCard } from "@/components/news-card"

interface NewsGridProps {
  query?: string
  category?: string
  page?: number
  pageSize?: number
}

export async function NewsGrid({ query = "", category = "", page = 1, pageSize = 12 }: NewsGridProps) {
  const news = await getNews({ query, category, page, pageSize })

  if (news.articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No articles found</h2>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {news.articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  )
}
