import { TableOfContents } from "@/components/table-of-contents"

export default function PythonDataTypesPage() {
  const tocItems = [
    { id: "intro", title: "Python Data Types", level: 2 },
    { id: "numbers", title: "Numbers", level: 3 },
    { id: "strings", title: "Strings", level: 3 },
    { id: "collections", title: "Lists, Tuples, Dicts", level: 3 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Python Data Types</h1>
          <section id="intro">
            <h2>Python Data Types</h2>
            <p>Python provides a variety of built-in data types to handle different kinds of data. These include:
              <ul className="list-disc ml-6">
                <li><strong>Numbers</strong>: int, float, complex</li>
                <li><strong>Strings</strong>: text sequences</li>
                <li><strong>Collections</strong>: list, tuple, dict, set</li>
              </ul>
            </p>
          </section>
          <section id="numbers">
            <h3>Numbers</h3>
            <p>Numeric types support arithmetic operations:</p>
            <pre >{`# Integer
x = 42
# Float
y = 3.14
# Complex
z = 1 + 2j

# Operations
sum_val = x + y       # 45.14
product = x * 2       # 84
magnitude = abs(z)    # sqrt(1^2 + 2^2)
`} </pre>
          </section>
          <section id="strings">
            <h3>Strings</h3>
            <p>Strings are immutable sequences. Common operations:</p>
            <pre >{`s = "Hello, World!"
# Length and indexing
length = len(s)
first = s[0]          # 'H'
# Slicing
sub = s[7:12]         # 'World'
# Methods
upper = s.upper()     # 'HELLO, WORLD!'
contains = "World" in s  # True
# f-strings for formatting
name = "Alice"
greeting = f"Welcome, {name}!"
`} </pre>
          </section>
          <section id="collections">
            <h3>Lists, Tuples, Dicts</h3>
            <div>
              <h4>List (mutable)</h4>
              <pre >{`items = [1, 2, 3]
items.append(4)
items[0] = 0            # [0, 2, 3, 4]
`} </pre>
              <h4>Tuple (immutable)</h4>
              <pre >{`coords = (10.0, 20.0)
# coords[0] = 5.0  # raises TypeError
`} </pre>
              <h4>Dict (key-value)</h4>
              <pre >{`config = {"debug": True, "timeout": 30}
value = config.get("timeout")   # 30
for key, val in config.items():
    print(key, val)
`} </pre>
            </div>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}