import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function JavaScriptDocsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to JavaScript", level: 2 },
    { id: "getting-started", title: "Getting Started with JavaScript", level: 2 },
    { id: "topics", title: "JavaScript Topics", level: 2 },
    { id: "resources", title: "Additional Resources", level: 2 },
  ]

  const jsTopics = [
    {
      title: "JavaScript Basics",
      description: "Learn the fundamentals of JavaScript programming",
      link: "/docs/javascript/basics",
    },
    {
      title: "DOM Manipulation",
      description: "Learn how to interact with the Document Object Model",
      link: "/docs/javascript/dom",
    },
    {
      title: "ES6+ Features",
      description: "Explore modern JavaScript features and syntax",
      link: "/docs/javascript/es6",
    },
    {
      title: "Asynchronous JavaScript",
      description: "Master promises, async/await, and callbacks",
      link: "/docs/javascript/async",
    },
    {
      title: "JavaScript Objects",
      description: "Understand objects, prototypes, and inheritance",
      link: "/docs/javascript/objects",
    },
    {
      title: "JavaScript Functions",
      description: "Learn about functions, closures, and scope",
      link: "/docs/javascript/functions",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">JavaScript Documentation</h1>
            <p className="text-xl text-muted-foreground">Learn JavaScript from the basics to advanced techniques</p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to JavaScript</h2>
            <p>
              JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class
              functions. While it is most well-known as the scripting language for Web pages, many non-browser
              environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat.
            </p>
            <p>
              JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting
              object-oriented, imperative, and declarative (e.g., functional programming) styles. It is one of the core
              technologies of the web, alongside HTML and CSS.
            </p>
            <p>
              JavaScript is a versatile programming language that powers the interactivity and functionality of modern web applications. It enables developers to create dynamic content, control multimedia, animate images, and much more. JavaScript is supported by all major browsers and is an essential skill for web developers.
            </p>
            <p>
              JavaScript's ecosystem includes a wide range of libraries and frameworks, such as React, Angular, and Vue.js, which simplify the development of complex applications. Additionally, JavaScript is used in server-side development with Node.js, making it a full-stack language.
            </p>

            <h2 id="getting-started">Getting Started with JavaScript</h2>
            <p>
              If you're new to JavaScript, we recommend starting with our{" "}
              <Link href="/docs/javascript/basics" className="text-primary hover:underline">
                JavaScript Basics
              </Link>{" "}
              guide. This will introduce you to the fundamental concepts of JavaScript, including:
            </p>
            <ul>
              <li>Variables and data types</li>
              <li>Operators and expressions</li>
              <li>Control flow (conditionals and loops)</li>
              <li>Functions and scope</li>
              <li>Objects and arrays</li>
            </ul>
            <p>
              To begin your JavaScript journey, it's important to understand the basics. JavaScript can be written directly in HTML files or in separate .js files. Below is an example of how to include JavaScript in your HTML:
            </p>
            <pre><code>{`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1>Welcome to JavaScript</h1>
  <button onclick="alert('Hello, World!')">Click Me</button>
  <script>
    console.log('JavaScript is running!');
  </script>
</body>
</html>`}</code></pre>
            <p>
              Once you're comfortable with the basics, explore topics like variables, functions, and control structures to build a strong foundation.
            </p>
            <div className="my-6">
              <Button asChild>
                <Link href="/docs/javascript/basics">Start Learning JavaScript Basics</Link>
              </Button>
            </div>

            <h2 id="topics">JavaScript Topics</h2>
            <p>
              Our JavaScript documentation covers a wide range of topics, from basic to advanced. Explore the following
              sections to deepen your understanding of JavaScript:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {jsTopics.map((topic) => (
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
            <p>
              JavaScript is constantly evolving, with new features introduced in ECMAScript (ES) specifications. Modern JavaScript (ES6+) includes features like arrow functions, template literals, destructuring, and modules, which make coding more efficient and readable.
            </p>

            <h2 id="resources">Additional Resources</h2>
            <p>In addition to our documentation, here are some valuable resources for learning JavaScript:</p>
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  MDN Web Docs - JavaScript
                </a>
              </li>
              <li>
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  JavaScript.info
                </a>
              </li>
              <li>
                <a
                  href="https://eloquentjavascript.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Eloquent JavaScript
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
