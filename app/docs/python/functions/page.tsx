import { TableOfContents } from "@/components/table-of-contents"

export default function PythonFunctionsPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Functions", level: 2 },
    { id: "docstrings", title: "Docstrings", level: 2 },
    { id: "parameters", title: "Parameters & Arguments", level: 2 },
    { id: "lambda", title: "Lambda Expressions", level: 2 },
    { id: "decorators", title: "Decorators", level: 2 },
    { id: "closures", title: "Closures", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Python Functions</h1>
          <section id="intro">
            <h2>Introduction to Functions</h2>
            <p>Functions encapsulate reusable logic. Use <code>def</code> to declare a function, grouping statements under a name:</p>
            <pre >{`def greet(name):
    print(f"Hello, {name}!")

# Calling the function
greet("Alice")  # Hello, Alice!
`}</pre>
          </section>

          <section id="docstrings">
            <h2>Docstrings</h2>
            <p>Document your functions using triple-quoted strings immediately after the <code>def</code> line:</p>
            <pre >{`def add(a, b):
    """Return the sum of a and b.

    Args:
        a (int): First number.
        b (int): Second number.

    Returns:
        int: Sum of a and b.
    """
    return a + b
`} </pre>
          </section>

          <section id="parameters">
            <h2>Parameters & Arguments</h2>
            <p>Functions support:</p>
            <ul>
              <li>Positional arguments</li>
              <li>Default values: <code>def fn(x, y=0)</code></li>
              <li>Keyword-only args: <code>def fn(*, flag=True)</code></li>
              <li>Arbitrary args: <code>*args</code> and <code>**kwargs</code></li>
            </ul>
            <pre >{`def combo(*args, **kwargs):
    print(args, kwargs)

combo(1,2, a=3, b=4)
`} </pre>
          </section>

          <section id="lambda">
            <h2>Lambda Expressions</h2>
            <p>Anonymous functions using <code>lambda</code> for simple operations:</p>
            <pre >{`square = lambda x: x * x
print(square(5))  # 25
`} </pre>
          </section>

          <section id="decorators">
            <h2>Decorators</h2>
            <p>Modify or wrap functions using decorators:</p>
            <pre >{`def timer(fn):
    import time
    def wrapper(*args, **kw):
        start = time.time()
        result = fn(*args, **kw)
        print(f"Elapsed: {time.time()-start:.4f}s")
        return result
    return wrapper

@timer
def compute(n):
    return sum(range(n))

compute(1000000)
`} </pre>
          </section>

          <section id="closures">
            <h2>Closures</h2>
            <p>Inner functions capturing outer scope variables:</p>
            <pre >{`def make_multiplier(m):
    def multiply(x):
        return x * m
    return multiply

double = make_multiplier(2)
print(double(5))  # 10
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