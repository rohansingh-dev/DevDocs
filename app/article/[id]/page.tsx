import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchArticleById, fetchRelatedArticles } from "@/lib/news-api"
import NewsCard from "@/components/news-card"
import { formatDate } from "@/lib/utils"

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 md:px-6 py-6">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>

        <Suspense fallback={<ArticleSkeleton />}>
          <ArticleContent id={params.id} />
        </Suspense>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <Suspense fallback={<RelatedArticlesSkeleton />}>
            <RelatedArticles id={params.id} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

async function ArticleContent({ id }: { id: string }) {
  const article = await fetchArticleById(id)

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-xl font-semibold mb-2">Article not found</h2>
        <p className="text-muted-foreground mb-4">The article you're looking for doesn't exist or has been removed</p>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
        {article.author && (
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{article.author}</span>
          </div>
        )}
        {article.publishedAt && (
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        )}
        <div className="flex items-center">
          <Clock className="mr-1 h-4 w-4" />
          <span>5 min read</span>
        </div>
      </div>

      {article.urlToImage && (
        <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
          <Image src={article.urlToImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <p className="text-lg font-medium mb-4">{article.description}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content || article.description }} />

        {article.url && (
          <div className="mt-8">
            <Button asChild>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read Full Article
              </a>
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}

async function RelatedArticles({ id }: { id: string }) {
  const articles = await fetchRelatedArticles(id)

  if (articles.length === 0) {
    return <p className="text-muted-foreground">No related articles found</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.slice(0, 3).map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  )
}

function ArticleSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Skeleton className="h-10 w-3/4" />
      <div className="flex gap-4">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-[400px] w-full rounded-lg" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-4/5" />
        <div className="space-y-2 pt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  )
}

function RelatedArticlesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-10 w-28" />
          </div>
        ))}
    </div>
  )
}
