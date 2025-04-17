import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CSSDocsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to CSS", level: 2 },
    { id: "getting-started", title: "Getting Started with CSS", level: 2 },
    { id: "topics", title: "CSS Topics", level: 2 },
    { id: "resources", title: "Additional Resources", level: 2 },
  ]

  const cssTopics = [
    {
      title: "CSS Basics",
      description: "Learn the fundamentals of CSS styling",
      link: "/docs/css/basics",
    },
    {
      title: "CSS Layout",
      description: "Master CSS layout techniques including Flexbox and Grid",
      link: "/docs/css/layout",
    },
    {
      title: "Responsive Design",
      description: "Create websites that work on all devices and screen sizes",
      link: "/docs/css/responsive",
    },
    {
      title: "CSS Animations",
      description: "Add movement and interactivity with CSS animations",
      link: "/docs/css/animations",
    },
    {
      title: "CSS Variables",
      description: "Use CSS custom properties for more maintainable code",
      link: "/docs/css/variables",
    },
    {
      title: "CSS Frameworks",
      description: "Learn about popular CSS frameworks and when to use them",
      link: "/docs/css/frameworks",
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">CSS Documentation</h1>
            <p className="text-xl text-muted-foreground">Learn CSS from the basics to advanced techniques</p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to CSS</h2>
            <p>
              CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document
              written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other
              media.
            </p>
            <p>
              CSS is one of the core languages of the web and is standardized across browsers according to the W3C
              specification. It is used to control the layout of multiple web pages all at once, enabling responsive
              designs and visually engaging user interfaces.
            </p>

            <h2 id="getting-started">Getting Started with CSS</h2>
            <p>
              If you're new to CSS, we recommend starting with our{" "}
              <Link href="/docs/css/basics" className="text-primary hover:underline">
                CSS Basics
              </Link>{" "}
              guide. This will introduce you to the fundamental concepts of CSS, including:
            </p>
            <ul>
              <li>CSS syntax and selectors</li>
              <li>The CSS box model</li>
              <li>Working with colors and backgrounds</li>
              <li>Text formatting and typography</li>
              <li>CSS specificity and the cascade</li>
            </ul>
            <div className="my-6">
              <Button asChild>
                <Link href="/docs/css/basics">Start Learning CSS Basics</Link>
              </Button>
            </div>

            <h2 id="topics">CSS Topics</h2>
            <p>
              Our CSS documentation covers a wide range of topics, from basic to advanced. Explore the following
              sections to deepen your understanding of CSS:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {cssTopics.map((topic) => (
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
            <p>In addition to our documentation, here are some valuable resources for learning CSS:</p>
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  MDN Web Docs - CSS
                </a>
              </li>
              <li>
                <a
                  href="https://css-tricks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  CSS-Tricks
                </a>
              </li>
              <li>
                <a
                  href="https://caniuse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Can I Use
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
