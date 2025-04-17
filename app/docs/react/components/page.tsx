import { TableOfContents } from "@/components/table-of-contents"

export default function ReactComponentsPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Components", level: 2 },
    { id: "function-vs-class", title: "Function vs Class Components", level: 2 },
    { id: "props-children", title: "Props & Children", level: 2 },
    { id: "lifecycle", title: "Lifecycle & Effects", level: 2 },
    { id: "composition", title: "Composition & Patterns", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">React Components</h1>

          <section id="intro">
            <h2>Introduction to Components</h2>
            <p>Components are the building blocks of React applications. They let you split UI into independent, reusable pieces.</p>
          </section>

          <section id="function-vs-class">
            <h2>Function vs Class Components</h2>
            <p>Function components are plain JS functions that return JSX. Class components extend <code>React.Component</code>:</p>
            <pre >{`// Function component
function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>
}

// Class component
import React from 'react';
class WelcomeClass extends React.Component {
  render() {
    return <h2>Welcome, {this.props.name}!</h2>
  }
}
`} </pre>
          </section>

          <section id="props-children">
            <h2>Props & Children</h2>
            <p>Props are inputs to components. The special <code>children</code> prop contains nested elements:</p>
            <pre >{`function Box({ title, children }) {
  return (
    <div className="box">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

// Usage
<Box title="Note">
  <p>This is a child paragraph.</p>
</Box>
`} </pre>
          </section>

          <section id="lifecycle">
            <h2>Lifecycle & Effects</h2>
            <p>Class components have lifecycle methods (<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>). Function components use <code>useEffect</code> instead:</p>
            <pre >{`import { useEffect } from 'react';
function Timer() {
  useEffect(() => {
    const id = setInterval(() => console.log('tick'), 1000);
    return () => clearInterval(id);
  }, []); // empty deps = mount/unmount
  return <p>Timer running in console</p>;
}
`} </pre>
          </section>

          <section id="composition">
            <h2>Composition & Patterns</h2>
            <p>Compose components instead of inheritance. Common patterns:</p>
            <ul className="list-disc ml-6">
              <li>Render Prop</li>
              <li>Higher-Order Component (HOC)</li>
              <li>Compound Components</li>
            </ul>
            <pre >{`// Render prop example
function DataLoader({ render }) {
  const data = fetchData();
  return render(data);
}

<DataLoader render={data => <div>{data}</div>} />
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