import { TableOfContents } from "@/components/table-of-contents"

export default function CSSBasicsPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to CSS Basics", level: 2 },
    { id: "selectors", title: "CSS Selectors", level: 2 },
    { id: "box-model", title: "Box Model", level: 2 },
    { id: "colors", title: "Colors & Backgrounds", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">CSS Basics</h1>
          <section id="intro">
            <h2>Introduction to CSS Basics</h2>
            <p>Learn how to apply styles to HTML elements using CSS.</p>
          </section>
          <section id="selectors">
            <h2>CSS Selectors</h2>
            <p>Use selectors to target HTML elements based on tag, class, id, and attributes.</p>
          </section>
          <section id="box-model">
            <h2>Box Model</h2>
            <p>Understand margin, border, padding, and content of elements.</p>
          </section>
          <section id="colors">
            <h2>Colors & Backgrounds</h2>
            <p>Apply colors, backgrounds, and gradients to elements.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}
