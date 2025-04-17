import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const trendingTopics = [
  {
    title: "JavaScript ES6+ Features",
    description: "Learn about the modern JavaScript features that will improve your code.",
    link: "/docs/javascript/es6",
    tags: ["JavaScript", "ES6", "Modern"],
  },
  {
    title: "CSS Grid Layout",
    description: "Master the powerful CSS Grid system for complex layouts.",
    link: "/docs/css/layout",
    tags: ["CSS", "Layout", "Grid"],
  },
  {
    title: "React Hooks",
    description: "Understand how to use React Hooks to manage state and side effects.",
    link: "/docs/react/hooks",
    tags: ["React", "Hooks", "State"],
  },
  {
    title: "Python Data Science",
    description: "Get started with data analysis and visualization in Python.",
    link: "/docs/python/data-science",
    tags: ["Python", "Data Science", "Analysis"],
  },
]

export function TrendingTopics() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Trending Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trendingTopics.map((topic) => (
          <Card key={topic.title} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>
                <Link href={topic.link} className="hover:text-primary transition-colors">
                  {topic.title}
                </Link>
              </CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
