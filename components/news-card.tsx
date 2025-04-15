"use client"

import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Article } from "@/lib/types"
import React from "react"

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  const formattedDate = formatDistanceToNow(new Date(article.published_at), {
    addSuffix: true,
  })

  // Handle potential image loading errors
  const [imageError, setImageError] = React.useState(false)

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        {article.image_url && !imageError ? (
          <Image
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <Image
            src="/placeholder.svg?height=192&width=384"
            alt="News placeholder"
            fill
            className="object-cover bg-muted"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {article.category && <Badge className="absolute top-2 right-2">{article.category}</Badge>}
      </div>

      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-semibold line-clamp-2">{article.title}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-2">
          {article.description || "No description available"}
        </p>
        <p className="text-xs text-muted-foreground">
          {article.source} • {formattedDate}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/news/${article.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
