import { TableOfContents } from "@/components/table-of-contents"

export default function JavaScriptFunctionsPage() {
  const tocItems = [
    { id: "functions-intro", title: "Introduction to Functions", level: 2 },
    { id: "declarations", title: "Function Declarations", level: 2 },
    { id: "expressions", title: "Function Expressions", level: 2 },
    { id: "arrow", title: "Arrow Functions", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">JavaScript Functions</h1>
          <section id="functions-intro">
            <h2>Introduction to Functions</h2>
            <p>
              Functions are reusable blocks of code that perform specific tasks. They can take inputs (parameters) and return outputs. Here's an example:
            </p>
            <pre><code>{`function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5`}</code></pre>
          </section>
          <section id="declarations">
            <h2>Function Declarations</h2>
            <p>Define named functions using the <code>function</code> keyword.</p>
          </section>
          <section id="expressions">
            <h2>Function Expressions</h2>
            <p>Create anonymous functions assigned to variables.</p>
          </section>
          <section id="arrow">
            <h2>Arrow Functions</h2>
            <p>
              Arrow functions provide a concise syntax for writing functions. They also have a lexical <code>this</code> binding, which means they inherit <code>this</code> from their surrounding context:
            </p>
            <pre><code>{`const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20`}</code></pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}