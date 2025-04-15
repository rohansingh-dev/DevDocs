"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [query, setQuery] = useState(searchParams.get("query") || "")
  const [category, setCategory] = useState(searchParams.get("category") || "")

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
    { value: "politics", label: "Politics" },
    { value: "world", label: "World" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(() => {
      // Create new URLSearchParams
      const params = new URLSearchParams()

      // Add query and category if they exist
      if (query) params.set("query", query)
      if (category) params.set("category", category)

      // Navigate to the new URL
      router.push(`/?${params.toString()}`)
    })
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)

    startTransition(() => {
      // Create new URLSearchParams
      const params = new URLSearchParams(searchParams)

      // Update or remove category
      if (value && value !== "all") {
        params.set("category", value)
      } else {
        params.delete("category")
      }

      // Navigate to the new URL
      router.push(`/?${params.toString()}`)
    })
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search news..."
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-48">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  )
}
