import { TableOfContents } from "@/components/table-of-contents"

export default function PythonBasicsPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Python Basics", level: 2 },
    { id: "syntax", title: "Python Syntax", level: 2 },
    { id: "variables", title: "Variables & Data Types", level: 2 },
    { id: "control-flow", title: "Control Flow", level: 2 },
    { id: "functions", title: "Functions", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Python Basics</h1>
          <section id="intro">
            <h2>Introduction</h2>
            <p>Learn the fundamental concepts of Python programming.</p>
            <p>Python is a high-level, interpreted language with dynamic typing and automatic memory management. It supports multiple paradigms, including procedural, object-oriented, and functional programming.</p>
            <pre><code>print("Hello, World!")</code></pre>
          </section>
          <section id="syntax">
            <h2>Python Syntax</h2>
            <p>Python uses indentation to define blocks instead of braces. Comments start with <code>#</code> and can be single-line or multi-line inside triple quotes.</p>
            <ul>
              <li>Indentation: 4 spaces per level is standard.</li>
              <li>Comments: <code># This is a comment</code>.</li>
              <li>Multi-line comments: <code>"""This is a docstring"""</code>.</li>
            </ul>
            <pre>{`def greet(name):
    print(f"Hello, {name}")
`}</pre>
          </section>
          <section id="variables">
            <h2>Variables & Data Types</h2>
            <p>Variables are dynamically typed. Common data types:</p>
            <ul>
              <li><strong>int</strong>: integers, e.g., <code>x = 10</code></li>
              <li><strong>float</strong>: floats, e.g., <code>pi = 3.14</code></li>
              <li><strong>str</strong>: strings, e.g., <code>name = "Python"</code></li>
              <li><strong>bool</strong>: booleans, <code>True</code> or <code>False</code></li>
              <li><strong>list</strong>, <strong>tuple</strong>, <strong>dict</strong>, <strong>set</strong></li>
            </ul>
            <pre>{`count = 5
items = [1, 2, 3]
config = {"debug": True}
`}</pre>
          </section>
          <section id="control-flow">
            <h2>Control Flow</h2>
            <p>Control flows guide program execution:</p>
            <pre>{`# if statement
if x > 0:
    print("Positive")
else:
    print("Non-positive")

# for loop
for i in range(5):
    print(i)

# while loop
while condition:
    do_something()
`}</pre>
          </section>
          <section id="functions">
            <h2>Functions</h2>
            <p>Functions are defined with <code>def</code> and can have default or keyword arguments:</p>
            <pre >{`def add(a, b=0):
    """Return the sum of a and b."""
    return a + b

# lambda expression
square = lambda x: x * x
print(square(5))
`} </pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}