import { TableOfContents } from "@/components/table-of-contents"

export default function CSSResponsivePage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Responsive Design", level: 2 },
    { id: "media-queries", title: "Media Queries", level: 2 },
    { id: "fluid-layouts", title: "Fluid Layouts", level: 2 },
    { id: "flexible-images", title: "Flexible Images", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Responsive Design</h1>
          <section id="intro">
            <h2>Introduction to Responsive Design</h2>
            <p>Learn how to create layouts that adapt to different screen sizes.</p>
          </section>
          <section id="media-queries">
            <h2>Media Queries</h2>
            <p>Use media queries to apply CSS rule sets based on device characteristics.</p>
          </section>
          <section id="fluid-layouts">
            <h2>Fluid Layouts</h2>
            <p>Create flexible grid and layout systems using percentage-based widths.</p>
          </section>
          <section id="flexible-images">
            <h2>Flexible Images</h2>
            <p>Make images responsive with max-width and auto height.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}