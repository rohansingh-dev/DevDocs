import { TableOfContents } from "@/components/table-of-contents"

export default function CSSLayoutPage() {
  const tocItems = [
    { id: "layout-intro", title: "Introduction to CSS Layout", level: 2 },
    { id: "box-model", title: "Box Model", level: 2 },
    { id: "flexbox", title: "Flexbox", level: 2 },
    { id: "grid", title: "Grid Layout", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">CSS Layout</h1>
          <section id="layout-intro">
            <h2>Introduction to CSS Layout</h2>
            <p>Learn how to structure and position elements using CSS layout techniques.</p>
          </section>
          <section id="box-model">
            <h2>Box Model</h2>
            <p>Understand margin, border, padding, and content in the CSS box model.</p>
          </section>
          <section id="flexbox">
            <h2>Flexbox</h2>
            <p>Create flexible, responsive layouts using CSS Flexbox.</p>
          </section>
          <section id="grid">
            <h2>Grid Layout</h2>
            <p>Build complex grid-based layouts quickly with CSS Grid.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}