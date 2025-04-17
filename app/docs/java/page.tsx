import { TableOfContents } from "@/components/table-of-contents"

export default function JavaDocsPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Java", level: 2 },
    { id: "getting-started", title: "Getting Started with Java", level: 2 },
    { id: "topics", title: "Java Topics", level: 2 },
  ]
  const javaTopics = [
    { title: "Java Basics", description: "Learn basic Java syntax and OOP", link: "/docs/java/basics" },
    { title: "Collections", description: "Overview of Java Collections Framework", link: "/docs/java/collections" },
    { title: "Streams API", description: "Functional-style operations on collections", link: "/docs/java/streams" },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Java Documentation</h1>
          <section id="intro">
            <h2>Introduction to Java</h2>
            <p>Java is a high-level, class-based, object-oriented programming language designed for portability.</p>
          </section>
          <section id="getting-started">
            <h2>Getting Started with Java</h2>
            <p>Install the JDK, set up your IDE, and write your first Hello World program.</p>
          </section>
          <h2 id="topics">Java Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {javaTopics.map(topic => (
              <div key={topic.title} className="border p-4 rounded">
                <a href={topic.link} className="text-lg font-semibold hover:text-primary">
                  {topic.title}
                </a>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}