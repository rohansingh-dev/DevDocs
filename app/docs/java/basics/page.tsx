import { TableOfContents } from "@/components/table-of-contents"

export default function JavaBasicsPage() {
  const tocItems = [
    { id: "basics-intro", title: "Java Basics", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Java Basics</h1>
          <section id="basics-intro">
            <h2>Introduction to Java Basics</h2>
            <p>Learn basic Java syntax, data types, and object-oriented concepts.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}