import { TableOfContents } from "@/components/table-of-contents"

export default function HTML5Page() {
  const tocItems = [
    { id: "html5-intro", title: "Introduction to HTML5", level: 2 },
    { id: "semantic-tags", title: "Semantic Tags", level: 2 },
    { id: "new-apis", title: "New APIs", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">HTML5 Features</h1>
          <section id="html5-intro">
            <h2>Introduction to HTML5</h2>
            <p>HTML5 introduces new semantic elements, multimedia support, and powerful web APIs.</p>
          </section>
          <section id="semantic-tags">
            <h2>Semantic Tags</h2>
            <p>Learn about <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and more.</p>
          </section>
          <section id="new-apis">
            <h2>New APIs</h2>
            <p>Explore APIs like Canvas, Geolocation, Web Storage, and Offline support.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}