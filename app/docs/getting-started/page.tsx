import { TableOfContents } from "@/components/table-of-contents"

export default function GettingStartedPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction", level: 2 },
    { id: "how-to-use", title: "How to Use This Documentation", level: 2 },
    { id: "learning-path", title: "Recommended Learning Path", level: 2 },
    { id: "web-fundamentals", title: "Web Fundamentals", level: 3 },
    { id: "programming", title: "Programming Languages", level: 3 },
    { id: "frameworks", title: "Frameworks", level: 3 },
    { id: "contributing", title: "Contributing", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">Getting Started</h1>
            <p className="text-xl text-muted-foreground">
              Welcome to DevDocs - your comprehensive resource for developer documentation
            </p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction</h2>
            <p>
              DevDocs is a comprehensive documentation platform designed to help developers of all skill levels learn
              and master various programming languages, frameworks, and technologies. Whether you're just starting your
              coding journey or you're an experienced developer looking to expand your knowledge, our documentation
              provides clear, concise, and practical information to help you succeed.
            </p>

            <h2 id="how-to-use">How to Use This Documentation</h2>
            <p>
              Our documentation is organized into different sections based on technologies and skill levels. You can
              navigate through the documentation using the sidebar on the left, which categorizes content by technology.
              Each technology section is further divided into beginner, intermediate, and advanced topics.
            </p>
            <p>Every documentation page includes:</p>
            <ul>
              <li>Clear explanations of concepts</li>
              <li>Code examples that you can copy and run</li>
              <li>Best practices and common pitfalls to avoid</li>
              <li>Links to related topics for further learning</li>
            </ul>

            <h2 id="learning-path">Recommended Learning Path</h2>
            <p>
              If you're new to programming, we recommend following a structured learning path to build a solid
              foundation before moving on to more advanced topics.
            </p>

            <h3 id="web-fundamentals">Web Fundamentals</h3>
            <ol>
              <li>
                Start with <a href="/docs/html">HTML</a> to learn how to structure web content
              </li>
              <li>
                Move on to <a href="/docs/css">CSS</a> to style your HTML content
              </li>
              <li>
                Learn <a href="/docs/javascript">JavaScript</a> to add interactivity to your web pages
              </li>
            </ol>

            <h3 id="programming">Programming Languages</h3>
            <p>
              Once you're comfortable with web fundamentals, you might want to explore general-purpose programming
              languages:
            </p>
            <ul>
              <li>
                <a href="/docs/python">Python</a> - Known for its readability and versatility
              </li>
              <li>
                <a href="/docs/java">Java</a> - Popular for enterprise applications
              </li>
              <li>
                <a href="/docs/c">C Language</a> - Fundamental language that provides insights into how computers work
              </li>
            </ul>

            <h3 id="frameworks">Frameworks</h3>
            <p>After mastering the basics, frameworks can help you build more complex applications more efficiently:</p>
            <ul>
              <li>
                <a href="/docs/react">React</a> - For building interactive user interfaces
              </li>
              <li>
                <a href="/docs/node">Node.js</a> - For server-side JavaScript applications
              </li>
            </ul>

            <h2 id="contributing">Contributing</h2>
            <p>
              DevDocs is an open community that welcomes contributions. If you find an error, want to suggest an
              improvement, or would like to add new content, please visit our{" "}
              <a href="https://github.com/devdocs/devdocs" target="_blank" rel="noopener noreferrer">
                GitHub repository
              </a>
              .
            </p>
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
