import { TableOfContents } from "@/components/table-of-contents"

export default function CSSVariablesPage() {
  const tocItems = [
    { id: "variables-intro", title: "Introduction to CSS Variables", level: 2 },
    { id: "syntax", title: "Syntax", level: 2 },
    { id: "usage", title: "Using Variables", level: 2 },
    { id: "fallbacks", title: "Fallbacks", level: 2 },
    { id: "benefits", title: "Benefits", level: 2 },
    { id: "scope", title: "Scope", level: 2 },
    { id: "javascript", title: "JavaScript Interaction", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">CSS Variables</h1>
          <section id="variables-intro">
            <h2>Introduction to CSS Variables</h2>
            <p>Custom properties (variables) allow you to store reusable values in CSS.</p>
          </section>
          <section id="syntax">
            <h2>Syntax</h2>
            <p>Define variables using <code>--variable-name</code> inside a selector: <code>:root {'{'} '--main-color': '#3490dc' {'}'}</code>.</p>
          </section>
          <section id="usage">
            <h2>Using Variables</h2>
            <p>Use a variable with the <code>var()</code> function: <code>color: var(--main-color);</code></p>
          </section>
          <section id="fallbacks">
            <h2>Fallbacks</h2>
            <p>Provide a fallback value: <code>color: var(--undefined, black);</code></p>
          </section>
          <section id="benefits">
            <h2>Benefits</h2>
            <p>CSS variables improve code readability, maintainability, and enable dynamic theming.</p>
            <ul>
              <li><strong>DRY (Don't Repeat Yourself):</strong> Define a value once, reuse it everywhere.</li>
              <li><strong>Easier Theming:</strong> Change themes by updating a few variables.</li>
              <li><strong>Dynamic Updates:</strong> Variables can be updated with JavaScript.</li>
            </ul>
          </section>
          <section id="scope">
            <h2>Scope</h2>
            <p>Variables defined in <code>:root</code> are global. Variables defined within a specific selector are local to that selector and its descendants.</p>
            <pre><code>
{`:root {
  --global-color: blue; /* Global */
}

.element {
  --local-color: red; /* Local to .element and children */
  color: var(--local-color);
  border-color: var(--global-color);
}`}
            </code></pre>
          </section>
          <section id="javascript">
            <h2>JavaScript Interaction</h2>
            <p>You can get and set CSS variables using JavaScript.</p>
            <pre><code>
{`// Get a variable from the :root element
const rootStyles = getComputedStyle(document.documentElement);
const mainColor = rootStyles.getPropertyValue('--main-color');

// Set a variable on an element
const element = document.querySelector('.my-element');
element.style.setProperty('--custom-bg', 'lightblue');`}
            </code></pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}