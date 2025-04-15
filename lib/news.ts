import axios from "axios"
import fs from "fs"
import path from "path"
import type { Article } from "@/lib/types"

// Define the data directory path
const DATA_DIR = path.join(process.cwd(), "data")
const NEWS_FILE = path.join(DATA_DIR, "news.json")

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

// Initialize news file if it doesn't exist
if (!fs.existsSync(NEWS_FILE)) {
  fs.writeFileSync(NEWS_FILE, JSON.stringify({ articles: [] }), "utf-8")
}

// Define the interface for news API response
interface NewsApiResponse {
  status: string
  totalResults: number
  results: any[]
}

// Define the interface for news query parameters
interface NewsQueryParams {
  query?: string
  category?: string
  page?: number
  pageSize?: number
}

// Update the fetchNewsFromApi function to use correct API parameters
export async function fetchNewsFromApi(): Promise<Article[]> {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY

    if (!apiKey) {
      console.error("NEWSDATA_API_KEY is not defined in environment variables")
      return getMockNewsData() // Return mock data if API key is missing
    }

    try {
      // Using correct parameters according to NewsData.io documentation
      const response = await axios.get<NewsApiResponse>("https://newsdata.io/api/1/news", {
        params: {
          apikey: apiKey,
          language: "en",
          // Removed the 'size' parameter as it's not supported
          // According to documentation, we should use 'page' and possibly other parameters
        },
      })

      if (response.data.status !== "success") {
        console.error(`API returned status: ${response.data.status}`, response.data)
        return getMockNewsData() // Return mock data if API returns error
      }

      // Transform the API response to our Article format
      const articles: Article[] = response.data.results.map((item, index) => ({
        id: item.article_id || `article-${index}`,
        title: item.title,
        description: item.description,
        content: item.content,
        url: item.link,
        image_url: item.image_url,
        source: item.source_id,
        category: item.category?.[0] || null,
        published_at: item.pubDate,
      }))

      return articles
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error fetching news:", error.message, error.response?.data)
      } else {
        console.error("Error fetching news from API:", error)
      }
      return getMockNewsData() // Return mock data on error
    }
  } catch (error) {
    console.error("Unexpected error in fetchNewsFromApi:", error)
    return getMockNewsData() // Return mock data on any error
  }
}

// Add a function to provide mock news data as fallback
function getMockNewsData(): Article[] {
  const currentDate = new Date().toISOString()

  return [
    {
      id: "mock-1",
      title: "Global Tech Conference Announces Breakthrough in AI Research",
      description:
        "Leading researchers unveiled new advancements in artificial intelligence at the annual Global Tech Summit.",
      content:
        "The annual Global Tech Summit saw major announcements in the field of artificial intelligence, with researchers demonstrating systems capable of more human-like reasoning and problem-solving. These breakthroughs could have significant implications for industries ranging from healthcare to transportation.",
      url: "https://example.com/tech-conference",
      image_url: "https://source.unsplash.com/random/800x600/?tech",
      source: "Tech Daily",
      category: "technology",
      published_at: currentDate,
    },
    {
      id: "mock-2",
      title: "New Study Reveals Benefits of Mediterranean Diet",
      description:
        "Research confirms that following a Mediterranean diet can reduce the risk of heart disease and improve longevity.",
      content:
        "A comprehensive study published in the Journal of Nutrition has provided further evidence that the Mediterranean diet, rich in olive oil, nuts, fruits, and vegetables, can significantly reduce the risk of cardiovascular disease and increase lifespan. The study followed participants for over 10 years.",
      url: "https://example.com/mediterranean-diet",
      image_url: "https://source.unsplash.com/random/800x600/?food",
      source: "Health News",
      category: "health",
      published_at: currentDate,
    },
    {
      id: "mock-3",
      title: "Global Markets React to Central Bank Announcements",
      description:
        "Stock markets worldwide showed volatility following unexpected policy changes from major central banks.",
      content:
        "Financial markets experienced significant fluctuations today as central banks in several major economies announced changes to monetary policy. Analysts suggest these moves could signal concerns about inflation and economic growth in the coming quarters.",
      url: "https://example.com/market-news",
      image_url: "https://source.unsplash.com/random/800x600/?finance",
      source: "Financial Times",
      category: "business",
      published_at: currentDate,
    },
    {
      id: "mock-4",
      title: "Olympic Committee Announces Host City for 2032 Games",
      description:
        "After a competitive bidding process, the International Olympic Committee has selected the host city for the 2032 Summer Olympics.",
      content:
        "The International Olympic Committee (IOC) has announced the host city for the 2032 Summer Olympic Games. The selection comes after a thorough evaluation of infrastructure, transportation, accommodation, and environmental impact plans submitted by candidate cities.",
      url: "https://example.com/olympics-2032",
      image_url: "https://source.unsplash.com/random/800x600/?olympics",
      source: "Sports Network",
      category: "sports",
      published_at: currentDate,
    },
    {
      id: "mock-5",
      title: "Renewable Energy Capacity Surpasses Fossil Fuels in Developing Nations",
      description:
        "For the first time, developing countries have installed more renewable energy capacity than fossil fuel power.",
      content:
        "A new report from the International Energy Agency shows that developing nations have reached a significant milestone, with new renewable energy installations exceeding fossil fuel power capacity additions for the first time. Solar and wind power are leading this transition.",
      url: "https://example.com/renewable-energy",
      image_url: "https://source.unsplash.com/random/800x600/?solar",
      source: "Climate Report",
      category: "science",
      published_at: currentDate,
    },
    {
      id: "mock-6",
      title: "Major Film Studio Announces New Superhero Franchise",
      description:
        "Hollywood is set for another superhero saga as a major studio reveals plans for a new cinematic universe.",
      content:
        "One of Hollywood's biggest studios has announced plans to develop a new superhero franchise based on popular comic book characters. The multi-film project will feature A-list actors and directors, with the first installment scheduled for release next summer.",
      url: "https://example.com/superhero-franchise",
      image_url: "https://source.unsplash.com/random/800x600/?movie",
      source: "Entertainment Weekly",
      category: "entertainment",
      published_at: currentDate,
    },
    {
      id: "mock-7",
      title: "Diplomatic Breakthrough in Middle East Peace Talks",
      description: "After months of negotiations, regional leaders have reached a preliminary agreement on key issues.",
      content:
        "Diplomats announced a significant breakthrough in peace negotiations today, with parties agreeing to a framework addressing several longstanding points of contention. International observers have cautiously welcomed the development while acknowledging that challenges remain.",
      url: "https://example.com/peace-talks",
      image_url: "https://source.unsplash.com/random/800x600/?diplomacy",
      source: "World News Network",
      category: "politics",
      published_at: currentDate,
    },
    {
      id: "mock-8",
      title: "Scientists Discover New Species in Amazon Rainforest",
      description:
        "An expedition to remote areas of the Amazon has identified several previously unknown plant and animal species.",
      content:
        "Biologists conducting research in the Amazon rainforest have discovered several new species, including a type of frog with unique coloration and a flowering plant with potential medicinal properties. The findings highlight the importance of conservation efforts in biodiversity hotspots.",
      url: "https://example.com/amazon-discovery",
      image_url: "https://source.unsplash.com/random/800x600/?rainforest",
      source: "Nature Journal",
      category: "science",
      published_at: currentDate,
    },
    {
      id: "mock-9",
      title: "Tech Giant Unveils Revolutionary Smartphone Design",
      description:
        "The latest smartphone release features groundbreaking technology and a completely reimagined form factor.",
      content:
        "A leading technology company has unveiled its newest smartphone, featuring an innovative folding display, advanced camera system, and unprecedented battery life. Industry analysts suggest the design could influence smartphone development for years to come.",
      url: "https://example.com/new-smartphone",
      image_url: "https://source.unsplash.com/random/800x600/?smartphone",
      source: "Tech Review",
      category: "technology",
      published_at: currentDate,
    },
    {
      id: "mock-10",
      title: "Global Initiative Launched to Combat Plastic Pollution",
      description:
        "Major countries and corporations have joined forces in a new effort to reduce plastic waste in oceans.",
      content:
        "A coalition of governments, businesses, and environmental organizations has announced a comprehensive initiative to address plastic pollution in the world's oceans. The program includes funding for cleanup efforts, research into alternatives, and commitments to reduce single-use plastics.",
      url: "https://example.com/plastic-initiative",
      image_url: "https://source.unsplash.com/random/800x600/?ocean",
      source: "Environmental Report",
      category: "world",
      published_at: currentDate,
    },
    {
      id: "mock-11",
      title: "Historic Artwork Sells for Record Price at Auction",
      description:
        "A previously unknown painting by a renowned artist has fetched an unprecedented sum at a major auction house.",
      content:
        "Art collectors were stunned when a recently discovered painting sold for a record-breaking price at auction yesterday. The artwork, authenticated as a genuine creation by a famous 19th-century master, had been stored in a private collection for generations before coming to market.",
      url: "https://example.com/art-auction",
      image_url: "https://source.unsplash.com/random/800x600/?art",
      source: "Arts & Culture",
      category: "entertainment",
      published_at: currentDate,
    },
    {
      id: "mock-12",
      title: "Medical Researchers Report Progress on Vaccine Development",
      description:
        "Scientists have announced promising results from clinical trials of a vaccine for a widespread disease.",
      content:
        "A team of medical researchers has published encouraging data from Phase III clinical trials of a new vaccine. The results show high efficacy rates with minimal side effects, potentially representing a significant advancement in public health efforts to combat the disease.",
      url: "https://example.com/vaccine-progress",
      image_url: "https://source.unsplash.com/random/800x600/?medical",
      source: "Medical Journal",
      category: "health",
      published_at: currentDate,
    },
  ]
}

// Function to save news to the file
export async function saveNewsToFile(articles: Article[]): Promise<void> {
  try {
    fs.writeFileSync(NEWS_FILE, JSON.stringify({ articles, last_updated: new Date().toISOString() }), "utf-8")
  } catch (error) {
    console.error("Error saving news to file:", error)
  }
}

// Function to get news from the file
export async function getNewsFromFile(): Promise<Article[]> {
  try {
    const data = fs.readFileSync(NEWS_FILE, "utf-8")
    const parsedData = JSON.parse(data)
    return parsedData.articles || []
  } catch (error) {
    console.error("Error reading news from file:", error)
    return []
  }
}

// Update the getNews function to handle the case when no articles are found
export async function getNews({
  query = "",
  category = "",
  page = 1,
  pageSize = 12,
}: NewsQueryParams): Promise<{ articles: Article[]; total: number }> {
  try {
    // Get news from file
    let articles = await getNewsFromFile()

    // Check if we need to refresh the data (e.g., if it's empty or old)
    if (articles.length === 0) {
      articles = await fetchNewsFromApi()
      await saveNewsToFile(articles)
    }

    // If we still have no articles (both file and API failed), use mock data
    if (articles.length === 0) {
      articles = getMockNewsData()
    }

    // Filter by query if provided
    if (query) {
      const lowerQuery = query.toLowerCase()
      articles = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerQuery) ||
          (article.description && article.description.toLowerCase().includes(lowerQuery)),
      )
    }

    // Filter by category if provided
    if (category && category !== "all") {
      articles = articles.filter((article) => article.category?.toLowerCase() === category.toLowerCase())
    }

    // Get total count before pagination
    const total = articles.length

    // Apply pagination
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedArticles = articles.slice(startIndex, endIndex)

    return { articles: paginatedArticles, total }
  } catch (error) {
    console.error("Error getting news:", error)
    // Return mock data as a last resort
    const mockData = getMockNewsData()
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    return {
      articles: mockData.slice(startIndex, endIndex),
      total: mockData.length,
    }
  }
}

// Function to get a single news article by ID
export async function getNewsById(id: string): Promise<Article | null> {
  try {
    const articles = await getNewsFromFile()
    const article = articles.find((a) => a.id === id)

    // If article not found in file, check mock data
    if (!article) {
      const mockArticles = getMockNewsData()
      const mockArticle = mockArticles.find((a) => a.id === id)
      return mockArticle || null
    }

    return article
  } catch (error) {
    console.error(`Error getting news with ID ${id}:`, error)
    // Try to find the article in mock data as fallback
    const mockArticles = getMockNewsData()
    const mockArticle = mockArticles.find((a) => a.id === id)
    return mockArticle || null
  }
}
