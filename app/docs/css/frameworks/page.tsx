import { TableOfContents } from "@/components/table-of-contents"

export default function CSSFrameworksPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to CSS Frameworks", level: 2 },
    { id: "bootstrap", title: "Bootstrap", level: 3 },
    { id: "tailwind", title: "Tailwind CSS", level: 3 },
    { id: "foundation", title: "Foundation", level: 3 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">CSS Frameworks</h1>
          <section id="intro">
            <h2>Introduction to CSS Frameworks</h2>
            <p>CSS frameworks provide pre-built components and utilities for faster development.</p>
          </section>
          <section id="bootstrap">
            <h3>Bootstrap</h3>
            <p>A popular framework with a comprehensive set of components and grid system.</p>
          </section>
          <section id="tailwind">
            <h3>Tailwind CSS</h3>
            <p>A utility-first framework for custom designs without leaving your HTML.</p>
          </section>
          <section id="foundation">
            <h3>Foundation</h3>
            <p>An advanced responsive front-end framework for building websites and apps.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}