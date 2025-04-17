import { TableOfContents } from "@/components/table-of-contents"

export default function ReactBasicsPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to React Basics", level: 2 },
    { id: "jsx", title: "JSX Syntax", level: 2 },
    { id: "components-props", title: "Components & Props", level: 2 },
    { id: "state-hooks", title: "State & Hooks", level: 2 },
    { id: "events", title: "Event Handling", level: 2 },
    { id: "conditional-rendering", title: "Conditional Rendering", level: 2 },
    { id: "lists-keys", title: "Lists & Keys", level: 2 },
    { id: "forms", title: "Forms & Controlled Components", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">React Basics</h1>
          <section id="intro">
            <h2>Introduction to React Basics</h2>
            <p>React is a declarative, component-based JavaScript library for building interactive user interfaces. It leverages a virtual DOM to efficiently update UI on data changes.</p>
            <p>You'll learn core concepts: JSX, components, props, state, event handling, and rendering lists.</p>
          </section>
          <section id="jsx">
            <h2>JSX Syntax</h2>
            <p>JSX lets you write HTML-like code within JavaScript:</p>
            <pre >{`// Hello.js
function Hello() {
  return <h1>Hello, React!</h1>;
}
export default Hello;`} </pre>
            <p>JSX expressions must have a single parent element, and you can embed JS with curly braces: <code>{`{expression}`}</code>.</p>
          </section>
          <section id="components-props">
            <h2>Components & Props</h2>
            <p>Components are reusable building blocks. Props pass data into components:</p>
            <pre >{`function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

// Usage:
<Greeting name="Rohan" />`} </pre>
          </section>
          <section id="state-hooks">
            <h2>State & Hooks</h2>
            <p>State stores dynamic data in functional components using the <code>useState</code> hook:</p>
            <pre >{`import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(c => c + 1)}>Click me</button>
    </div>
  );
}`} </pre>
          </section>
          <section id="events">
            <h2>Event Handling</h2>
            <p>React events use camelCase and pass event handlers directly:</p>
            <pre >{`function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`} </pre>
          </section>
          <section id="conditional-rendering">
            <h2>Conditional Rendering</h2>
            <p>Render elements based on conditions:</p>
            <pre >{`function UserStatus({ isLoggedIn }) {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
}`} </pre>
          </section>
          <section id="lists-keys">
            <h2>Lists & Keys</h2>
            <p>Render lists with <code>map</code> and provide a unique <code>key</code> for each item:</p>
            <pre >{`function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map(n => <li key={n}>{n}</li>)}
    </ul>
  );
}

<NumberList numbers={[1,2,3]} />`} </pre>
          </section>
          <section id="forms">
            <h2>Forms & Controlled Components</h2>
            <p>Use state to control form inputs:</p>
            <pre >{`function NameForm() {
  const [name, setName] = useState('');
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}`} </pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}