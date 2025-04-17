"use client"

import Link from "next/link"
import { TableOfContents } from "@/components/table-of-contents"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ReactDocsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to React", level: 2 },
    { id: "getting-started", title: "Getting Started with React", level: 2 },
    { id: "topics", title: "React Topics", level: 2 },
    { id: "resources", title: "Additional Resources", level: 2 },
  ]

  const reactTopics = [
    { title: "React Basics", description: "Learn the fundamentals of React development", link: "/docs/react/basics" },
    { title: "Components", description: "Understand React components and their lifecycle", link: "/docs/react/components" },
    { title: "Hooks", description: "Master React Hooks for state and side effects", link: "/docs/react/hooks" },
    { title: "State Management", description: "Learn different approaches to state management in React", link: "/docs/react/state-management" },
    { title: "Routing", description: "Implement navigation in your React applications", link: "/docs/react/routing" },
    { title: "Server Components", description: "Explore React Server Components for better performance", link: "/docs/react/server-components" },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">React Documentation</h1>
            <p className="text-xl text-muted-foreground">Learn React from the basics to advanced.</p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to React</h2>
            <p>
              React is a popular JavaScript library for building interactive user interfaces. It allows you to
              build reusable UI components and efficiently update the DOM when data changes.
            </p>

            <h2 id="getting-started">Getting Started with React</h2>
            <p>
              To get started, you can use Create React App, Vite, or next.js. For example, with Create React App:
            </p>
            <pre>
              <code>{`npx create-react-app my-app
cd my-app
npm start`}</code>
            </pre>
            <div className="my-6">
              <Button asChild>
                <Link href="/docs/react/basics">Start Learning React Basics</Link>
              </Button>
            </div>

            <h2 id="topics">React Topics</h2>
            <p>
              Explore the following topics to deepen your understanding of React:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {reactTopics.map((topic) => (
                <Card key={topic.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>
                      <Link href={topic.link} className="hover:text-primary transition-colors">
                        {topic.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {topic.description}
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 id="resources">Additional Resources</h2>
            <ul>
              <li>
                <a
                  href="https://reactjs.org/docs/getting-started.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Official React Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/tutorial/tutorial.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  React Tutorial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
