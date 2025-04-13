import type { Article, NewsApiResponse } from "./types"

// You'll need to add your NewsAPI key as an environment variable
const API_KEY = process.env.NEWS_API_KEY
const BASE_URL = "https://newsapi.org/v2"

// Cache for articles to simulate a database
let articlesCache: Article[] = []

export async function fetchTopHeadlines({
  category = "general",
  page = 1,
  pageSize = 9,
  q,
}: {
  category?: string
  page?: number
  pageSize?: number
  q?: string
}) {
  try {
    // Build the API URL
    let url = `${BASE_URL}/top-headlines?country=us&page=${page}&pageSize=${pageSize}`

    if (category && category !== "general") {
      url += `&category=${category}`
    }

    if (q) {
      url += `&q=${encodeURIComponent(q)}`
    }

    // Add the API key
    url += `&apiKey=${API_KEY}`

    // Fetch the data
    const response = await fetch(url, { next: { revalidate: 3600 } }) // Cache for 1 hour

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`)
    }

    const data: NewsApiResponse = await response.json()

    // Update the cache
    if (data.articles && data.articles.length > 0) {
      articlesCache = [
        ...articlesCache,
        ...data.articles.filter((article) => !articlesCache.some((cached) => cached.title === article.title)),
      ]
    }

    return {
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
    }
  } catch (error) {
    console.error("Error fetching news:", error)

    // Return empty data in case of error
    return {
      articles: [],
      totalResults: 0,
    }
  }
}

export async function fetchArticleById(id: string) {
  // In a real app, you would fetch this from a database
  // For this example, we'll use the cache or fetch new articles if needed

  if (articlesCache.length === 0) {
    // If cache is empty, fetch some articles
    await fetchTopHeadlines({})
  }

  // Find the article by title (used as ID)
  const article = articlesCache.find((article) => encodeURIComponent(article.title) === id)

  if (article) {
    return {
      ...article,
      // In a real app, you would fetch the full content
      // NewsAPI free tier doesn't provide full content
      content: article.content || article.description,
    }
  }

  return null
}

export async function fetchRelatedArticles(id: string) {
  // In a real app, you would use tags or categories to find related articles
  // For this example, we'll just return other articles from the cache

  if (articlesCache.length < 4) {
    // If cache doesn't have enough articles, fetch some
    await fetchTopHeadlines({ pageSize: 10 })
  }

  // Exclude the current article and return up to 3 others
  const currentArticle = articlesCache.find((article) => encodeURIComponent(article.title) === id)

  if (!currentArticle) {
    return articlesCache.slice(0, 3)
  }

  // Try to find articles from the same source
  const sameSourceArticles = articlesCache.filter(
    (article) => article.source?.name === currentArticle.source?.name && article.title !== currentArticle.title,
  )

  // If we have enough from the same source, return those
  if (sameSourceArticles.length >= 3) {
    return sameSourceArticles.slice(0, 3)
  }

  // Otherwise, return any other articles
  const otherArticles = articlesCache.filter((article) => article.title !== currentArticle.title)

  return otherArticles.slice(0, 3)
}

export async function searchArticles(query: string, page = 1, pageSize = 9) {
  try {
    const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`

    const response = await fetch(url, { next: { revalidate: 3600 } })

    if (!response.ok) {
      throw new Error(`News API error: ${response.status}`)
    }

    const data: NewsApiResponse = await response.json()

    // Update the cache
    if (data.articles && data.articles.length > 0) {
      articlesCache = [
        ...articlesCache,
        ...data.articles.filter((article) => !articlesCache.some((cached) => cached.title === article.title)),
      ]
    }

    return {
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
    }
  } catch (error) {
    console.error("Error searching news:", error)

    // Return empty data in case of error
    return {
      articles: [],
      totalResults: 0,
    }
  }
}
