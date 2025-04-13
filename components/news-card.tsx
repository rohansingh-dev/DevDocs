import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatDate, truncateText } from "@/lib/utils"
import type { Article } from "@/lib/types"

export default function NewsCard({ article }: { article: Article }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={article.urlToImage || "/placeholder.svg?height=192&width=384"}
            alt={article.title}
            fill
            className="object-cover"
          />
          {article.source?.name && <Badge className="absolute top-2 left-2">{article.source.name}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-muted-foreground line-clamp-3">{truncateText(article.description || "", 120)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {article.publishedAt && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        )}
        <Button size="sm" asChild>
          <Link href={`/article/${encodeURIComponent(article.title)}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
