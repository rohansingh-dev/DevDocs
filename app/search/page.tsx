"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCode, FileJson, Flame, Globe, Server } from "lucide-react"

// Mock search results data
const mockSearchData = [
  {
    title: "HTML Basics",
    description: "Learn the fundamentals of HTML markup language",
    url: "/docs/html/basics",
    category: "HTML",
    icon: FileCode,
    iconColor: "text-orange-500",
  },
  {
    title: "CSS Layout",
    description: "Master CSS layout techniques including Flexbox and Grid",
    url: "/docs/css/layout",
    category: "CSS",
    icon: FileCode,
    iconColor: "text-blue-500",
  },
  {
    title: "JavaScript Functions",
    description: "Understanding JavaScript functions and their usage",
    url: "/docs/javascript/functions",
    category: "JavaScript",
    icon: FileJson,
    iconColor: "text-yellow-500",
  },
  {
    title: "Python Data Types",
    description: "Explore Python's built-in data types and their operations",
    url: "/docs/python/data-types",
    category: "Python",
    icon: Flame,
    iconColor: "text-green-500",
  },
  {
    title: "React Hooks",
    description: "Learn how to use React Hooks for state management",
    url: "/docs/react/hooks",
    category: "React",
    icon: Globe,
    iconColor: "text-cyan-500",
  },
  {
    title: "Node.js File System",
    description: "Working with files and directories in Node.js",
    url: "/docs/node/file-system",
    category: "Node.js",
    icon: Server,
    iconColor: "text-emerald-500",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<typeof mockSearchData>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate search API call
    setIsLoading(true)
    setTimeout(() => {
      if (query) {
        const filteredResults = mockSearchData.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()),
        )
        setResults(filteredResults)
      } else {
        setResults([])
      }
      setIsLoading(false)
    }, 500)
  }, [query])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-2">Search Results</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {query ? `Showing results for "${query}"` : "Enter a search term to find documentation"}
      </p>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-6 bg-muted rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-muted rounded w-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result) => (
            <Link key={result.url} href={result.url}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <result.icon className={`h-5 w-5 ${result.iconColor}`} />
                    {result.title}
                  </CardTitle>
                  <CardDescription>{result.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{result.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          {query ? (
            <div>
              <h2 className="text-2xl font-bold mb-2">No results found</h2>
              <p className="text-muted-foreground">
                We couldn't find any documentation matching "{query}". Try different keywords or browse our
                documentation categories.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-2">Enter a search term</h2>
              <p className="text-muted-foreground">
                Use the search bar above to find documentation on programming languages, frameworks, and more.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
