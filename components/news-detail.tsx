"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Article } from "@/lib/types"

interface NewsDetailProps {
  article: Article
}

export function NewsDetail({ article }: NewsDetailProps) {
  const [imageError, setImageError] = React.useState(false)

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4">
            &larr; Back to News
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
          <span>Source: {article.source}</span>
          <span>•</span>
          <span>Published: {formatDate(article.published_at)}</span>
          {article.category && (
            <>
              <span>•</span>
              <Badge variant="secondary">{article.category}</Badge>
            </>
          )}
        </div>
      </div>

      {article.image_url && !imageError ? (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden bg-muted">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        {article.content ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <>
            <p className="lead">{article.description}</p>
            <p>This article is available on the original source. Click the button below to read the full article.</p>
          </>
        )}
      </div>

      {article.url && (
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read Original Article
            </a>
          </Button>
        </div>
      )}
    </article>
  )
}
