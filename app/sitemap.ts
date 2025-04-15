import { getNews } from "@/lib/news"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://newshub.vercel.app"

  // Get all news articles for the sitemap
  const news = await getNews({ page: 1, pageSize: 100 })

  // Create sitemap entries for news articles
  const newsEntries = news.articles.map((article) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.published_at),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }))

  // Add static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]

  return [...staticPages, ...newsEntries]
}
