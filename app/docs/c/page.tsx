import { TableOfContents } from "@/components/table-of-contents"

export default function CLanguagePage() {
  const tocItems = [
    { id: "intro", title: "Introduction to C", level: 2 },
    { id: "history", title: "History of C", level: 2 },
    { id: "features", title: "Features of C", level: 2 },
    { id: "applications", title: "Applications of C", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">C Language</h1>
          <section id="intro">
            <h2>Introduction to C</h2>
            <p>C is a general-purpose, procedural programming language developed by Dennis Ritchie.</p>
          </section>
          <section id="history">
            <h2>History of C</h2>
            <p>C was developed in 1972 at Bell Labs by Dennis Ritchie as an evolution of the B programming language. It was designed to develop the UNIX operating system and has since become one of the most widely used programming languages.</p>
          </section>
          <section id="features">
            <h2>Features of C</h2>
            <ul>
              <li>Simple and efficient</li>
              <li>Supports low-level programming</li>
              <li>Rich set of built-in operators and functions</li>
              <li>Portable and machine-independent</li>
              <li>Extensible through libraries</li>
            </ul>
          </section>
          <section id="applications">
            <h2>Applications of C</h2>
            <ul>
              <li>Operating systems (e.g., UNIX, Linux)</li>
              <li>Embedded systems</li>
              <li>Compilers and interpreters</li>
              <li>Database systems</li>
              <li>Game development</li>
            </ul>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}