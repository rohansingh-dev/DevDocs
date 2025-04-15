export interface Article {
  id: string
  title: string
  description: string | null
  content: string | null
  url: string | null
  image_url: string | null
  source: string
  category: string | null
  published_at: string
}
