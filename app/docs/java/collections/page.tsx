import { TableOfContents } from "@/components/table-of-contents"

export default function JavaCollectionsPage() {
  const tocItems = [
    { id: "collections-intro", title: "Java Collections Framework", level: 2 }
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Java Collections Framework</h1>
          <section id="collections-intro">
            <h2>Introduction to the Collections Framework</h2>
            <p>The Java Collections Framework provides data structures like List, Set, and Map for storing objects.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}