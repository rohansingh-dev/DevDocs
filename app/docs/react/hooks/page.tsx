import { TableOfContents } from "@/components/table-of-contents"
import { useState, useEffect, useContext, createContext } from 'react'

export default function ReactHooksPage() {
  const tocItems = [
    { id: "use-state", title: "useState", level: 2 },
    { id: "use-effect", title: "useEffect", level: 2 },
    { id: "use-context", title: "useContext", level: 2 },
    { id: "custom-hooks", title: "Custom Hooks", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">React Hooks</h1>
          <section id="use-state">
            <h2>useState</h2>
            <p>Local state in function components:</p>
            <pre >
{`const [value, setValue] = useState(initialValue);
setValue(newValue);`} 
            </pre>
          </section>
          <section id="use-effect">
            <h2>useEffect</h2>
            <p>Side effects on mount, update, unmount:</p>
            <pre >
{`useEffect(() => {
  // run on mount/update
  return () => {
    // cleanup on unmount
  }
}, [deps]);`} 
            </pre>
          </section>
          <section id="use-context">
            <h2>useContext</h2>
            <p>Consume context values:</p>
            <pre >
{`const MyContext = createContext(defaultValue);
function Component() {
  const value = useContext(MyContext);
  return <span>{value}</span>;
}`} 
            </pre>
          </section>
          <section id="custom-hooks">
            <h2>Custom Hooks</h2>
            <p>Encapsulate logic in reusable functions:</p>
            <pre >
{`function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  return width;
}`} 
            </pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}