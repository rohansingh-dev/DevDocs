import { TableOfContents } from "@/components/table-of-contents"

export default function JavaScriptES6Page() {
  const tocItems = [
    { id: "es6-intro", title: "Introduction to ES6+", level: 2 },
    { id: "let-const", title: "let & const", level: 2 },
    { id: "arrow-functions", title: "Arrow Functions", level: 2 },
    { id: "destructuring", title: "Destructuring", level: 2 },
    { id: "template-literals", title: "Template Literals", level: 2 },
    { id: "modules", title: "Modules", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">ES6+ Features</h1>
          <section id="es6-intro">
            <h2>Introduction to ES6+</h2>
            <p>Modern JavaScript syntax introduced in ES6 and beyond.</p>
          </section>
          <section id="let-const">
            <h2>let & const</h2>
            <p>Block-scoped variable declarations.</p>
          </section>
          <section id="arrow-functions">
            <h2>Arrow Functions</h2>
            <p>Concise function expressions using the <code>=&gt;</code> syntax.</p>
          </section>
          <section id="destructuring">
            <h2>Destructuring</h2>
            <p>Extract values from arrays and objects into variables.</p>
          </section>
          <section id="template-literals">
            <h2>Template Literals</h2>
            <p>
              Template literals allow you to embed expressions and variables directly into strings using backticks:
            </p>
            <pre><code>{`const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // "Hello, Alice!"`}</code></pre>
          </section>
          <section id="modules">
            <h2>Modules</h2>
            <p>
              JavaScript modules allow you to split your code into separate files and import/export functionality between them:
            </p>
            <pre><code>{`// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5`}</code></pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}