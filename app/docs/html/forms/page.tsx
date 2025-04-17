import { TableOfContents } from "@/components/table-of-contents"

export default function HTMLFormsPage() {
  const tocItems = [
    { id: "forms-intro", title: "Introduction to Forms", level: 2 },
    { id: "input-types", title: "Input Types", level: 2 },
    { id: "form-elements", title: "Form Elements", level: 2 },
    { id: "validation", title: "Form Validation", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">HTML Forms</h1>
          <section id="forms-intro">
            <h2>Introduction to Forms</h2>
            <p>Learn how to collect user input using HTML forms.</p>
          </section>
          <section id="input-types">
            <h2>Input Types</h2>
            <p>Explore various <code>&lt;input&gt;</code> types like text, email, checkbox, and radio.</p>
          </section>
          <section id="form-elements">
            <h2>Form Elements</h2>
            <p>Use <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>, and more.</p>
          </section>
          <section id="validation">
            <h2>Form Validation</h2>
            <p>Learn built-in HTML5 validation and custom validation techniques.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}
