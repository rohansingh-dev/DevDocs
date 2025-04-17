import { TableOfContents } from "@/components/table-of-contents"

export default function PythonModulesPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Modules & Packages", level: 2 },
    { id: "custom-modules", title: "Creating Custom Modules", level: 2 },
    { id: "packages", title: "Using Packages", level: 2 },
    { id: "pip-venv", title: "pip & Virtual Environments", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Python Modules & Packages</h1>
          <section id="intro">
            <h2>Introduction to Modules & Packages</h2>
            <p>Modules are Python files (.py) that group related code. Packages are directories containing an <code>__init__.py</code> to organize modules.</p>
          </section>
          <section id="custom-modules">
            <h2>Creating Custom Modules</h2>
            <p>Create a file <code>indian_utils.py</code> with reusable functions:</p>
            <pre >{`# indian_utils.py
def greet(name):
    return f"Namaste, {name}!"

# main.py
from indian_utils import greet
print(greet("Rahul"))  # Namaste, Rahul!
`} </pre>
          </section>
          <section id="packages">
            <h2>Using Packages</h2>
            <p>Packages let you group modules in directories. Example structure:</p>
            <pre >{`bharat_tools/
  __init__.py
  maths.py       # add functions
greetings.py   # wish functions
`} </pre>
            <pre >{`# greetings.py
def wish():
    return "Happy Diwali!"

# maths.py
def add(x, y):
    return x + y

# usage in main.py
from bharat_tools import maths, greetings
print(maths.add(10, 20))    # 30
print(greetings.wish())      # Happy Diwali!
`} </pre>
          </section>
          <section id="pip-venv">
            <h2>pip & Virtual Environments</h2>
            <p>Use <code>venv</code> to isolate dependencies:</p>
            <pre >{`# Create and activate venv (Windows)
python -m venv env
env\Scripts\activate

# Install packages
pip install requests
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