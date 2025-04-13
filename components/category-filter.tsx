"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  { id: "general", name: "General" },
  { id: "business", name: "Business" },
  { id: "technology", name: "Technology" },
  { id: "entertainment", name: "Entertainment" },
  { id: "sports", name: "Sports" },
  { id: "science", name: "Science" },
  { id: "health", name: "Health" },
]

export default function CategoryFilter({ activeCategory }: { activeCategory: string }) {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/?category=${category.id}`}
          className={cn(
            "px-3 py-1 text-sm rounded-full border transition-colors",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-muted",
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
