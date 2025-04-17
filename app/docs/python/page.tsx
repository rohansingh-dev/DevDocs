import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PythonDocsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to Python", level: 2 },
    { id: "getting-started", title: "Getting Started with Python", level: 2 },
    { id: "topics", title: "Python Topics", level: 2 },
    { id: "resources", title: "Additional Resources", level: 2 },
  ]

  const pythonTopics = [
    {
      title: "Python Basics",
      description: "Learn the fundamentals of Python programming",
      link: "/docs/python/basics",
    },
    {
      title: "Data Types",
      description: "Explore Python's built-in data types and their operations",
      link: "/docs/python/data-types",
    },
    {
      title: "Functions",
      description: "Learn how to define and use functions in Python",
      link: "/docs/python/functions",
    },
    {
      title: "Object-Oriented Programming",
      description: "Understand classes, objects, and inheritance in Python",
      link: "/docs/python/oop",
    },
    {
      title: "File Handling",
      description: "Work with files and directories in Python",
      link: "/docs/python/file-handling",
    },
    {
      title: "Modules and Packages",
      description: "Learn how to organize and reuse code with modules and packages",
      link: "/docs/python/modules",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">Python Documentation</h1>
            <p className="text-xl text-muted-foreground">Learn Python from the basics to advanced techniques</p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to Python</h2>
            <p>
              Python is a high-level, interpreted programming language known for its readability, simplicity, and
              versatility. Created by Guido van Rossum and first released in 1991, Python has become one of the most
              popular programming languages in the world.
            </p>
            <p>
              Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its
              language constructs and object-oriented approach aim to help programmers write clear, logical code for
              small and large-scale projects.
            </p>

            <h2 id="getting-started">Getting Started with Python</h2>
            <p>
              If you're new to Python, we recommend starting with our Python Basics guide. This will introduce you to
              the fundamental concepts of Python, including:
            </p>
            <ul>
              <li>Installing Python and setting up your development environment</li>
              <li>Python syntax and basic programming concepts</li>
              <li>Variables, data types, and operators</li>
              <li>Control flow (conditionals and loops)</li>
              <li>Functions and modules</li>
            </ul>
            <div className="my-6">
              <Button asChild>
                <Link href="/docs/python/basics">Start Learning Python Basics</Link>
              </Button>
            </div>

            <h2 id="topics">Python Topics</h2>
            <p>
              Our Python documentation covers a wide range of topics, from basic to advanced. Explore the following
              sections to deepen your understanding of Python:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {pythonTopics.map((topic) => (
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
            <p>In addition to our documentation, here are some valuable resources for learning Python:</p>
            <ul>
              <li>
                <a
                  href="https://docs.python.org/3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Official Python Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://www.python.org/dev/peps/pep-0008/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  PEP 8 - Style Guide for Python Code
                </a>
              </li>
              <li>
                <a
                  href="https://realpython.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Real Python
                </a>
              </li>
              <li>
                <a
                  href="https://www.codecademy.com/learn/learn-python-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Codecademy Python Course
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
            <div className="mt-8 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
