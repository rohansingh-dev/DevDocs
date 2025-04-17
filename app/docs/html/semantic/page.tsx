import { TableOfContents } from "@/components/table-of-contents"

export default function HTMLSemanticPage() {
  const tocItems = [
    { id: "semantic-intro", title: "Introduction to Semantic HTML", level: 2 },
    { id: "semantic-tags", title: "Semantic Tags", level: 2 },
    { id: "accessibility-benefits", title: "Accessibility Benefits", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Semantic HTML</h1>
          <section id="semantic-intro">
            <h2>Introduction to Semantic HTML</h2>
            <p>Semantic HTML uses meaningful tags to structure web content.</p>
          </section>
          <section id="semantic-tags">
            <h2>Semantic Tags</h2>
            <p>Learn tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, and more.</p>
          </section>
          <section id="accessibility-benefits">
            <h2>Accessibility Benefits</h2>
            <p>Semantic markup improves accessibility and SEO.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}