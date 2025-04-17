import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HTMLDocsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to HTML", level: 2 },
    { id: "getting-started", title: "Getting Started with HTML", level: 2 },
    { id: "topics", title: "HTML Topics", level: 2 },
    { id: "resources", title: "Additional Resources", level: 2 },
  ]

  const htmlTopics = [
    {
      title: "HTML Basics",
      description: "Learn the fundamentals of HTML markup language",
      link: "/docs/html/basics",
    },
    {
      title: "HTML Elements",
      description: "Explore the various HTML elements and their usage",
      link: "/docs/html/elements",
    },
    {
      title: "HTML Forms",
      description: "Learn how to create interactive forms with HTML",
      link: "/docs/html/forms",
    },
    {
      title: "HTML5 Features",
      description: "Discover the new features introduced in HTML5",
      link: "/docs/html/html5",
    },
    {
      title: "Semantic HTML",
      description: "Understand the importance of semantic markup",
      link: "/docs/html/semantic",
    },
    {
      title: "HTML Accessibility",
      description: "Learn how to make your HTML accessible to all users",
      link: "/docs/html/accessibility",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">HTML Documentation</h1>
            <p className="text-xl text-muted-foreground">Learn HTML from the basics to advanced techniques</p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to HTML</h2>
            <p>
              HTML (HyperText Markup Language) is the standard markup language for creating web pages and web
              applications. With HTML, you can create structured documents by denoting structural semantics for text
              such as headings, paragraphs, lists, links, quotes, and other items.
            </p>
            <p>
              HTML is the backbone of any webpage, providing the structure that is then styled with CSS and made
              interactive with JavaScript. Understanding HTML is essential for anyone looking to work in web development
              or design.
            </p>

            <h2 id="getting-started">Getting Started with HTML</h2>
            <p>
              If you're new to HTML, we recommend starting with our{" "}
              <Link href="/docs/html/basics" className="text-primary hover:underline">
                HTML Basics
              </Link>{" "}
              guide. This will introduce you to the fundamental concepts of HTML, including:
            </p>
            <ul>
              <li>HTML document structure</li>
              <li>Basic HTML elements</li>
              <li>HTML attributes</li>
              <li>Creating links and adding images</li>
              <li>Building lists and tables</li>
            </ul>
            <div className="my-6">
              <Button asChild>
                <Link href="/docs/html/basics">Start Learning HTML Basics</Link>
              </Button>
            </div>

            <h2 id="topics">HTML Topics</h2>
            <p>
              Our HTML documentation covers a wide range of topics, from basic to advanced. Explore the following
              sections to deepen your understanding of HTML:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {htmlTopics.map((topic) => (
                <Card key={topic.title} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>
                      <Link href={topic.link} className="hover:text-primary transition-colors">
                        {topic.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 id="resources">Additional Resources</h2>
            <p>In addition to our documentation, here are some valuable resources for learning HTML:</p>
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  MDN Web Docs - HTML
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/html52/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  W3C HTML 5.2 Specification
                </a>
              </li>
              <li>
                <a
                  href="https://validator.w3.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  W3C Markup Validation Service
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
