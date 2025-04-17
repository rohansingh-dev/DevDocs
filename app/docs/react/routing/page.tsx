import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { TableOfContents } from "@/components/table-of-contents"

export default function ReactRoutingPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to Routing", level: 2 },
    { id: "installation", title: "Installation", level: 2 },
    { id: "basic-routing", title: "Basic Routing", level: 2 },
    { id: "links", title: "Navigation with Link", level: 2 },
    { id: "params", title: "Route Parameters", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Routing in React</h1>
          <section id="intro">
            <h2>Introduction to Routing</h2>
            <p>Routing allows single-page applications to update the URL and render different components without a full page reload.</p>
          </section>
          <section id="installation">
            <h2>Installation</h2>
            <pre >{`# Next.js routing comes built-in; no extra install needed`} </pre>
          </section>
          <section id="basic-routing">
            <h2>Basic Routing</h2>
            <pre >{`// With Next.js App Router
// app/page.tsx (Home)
export default function HomePage() {
  return <h1>Home</h1>
}

// app/about/page.tsx
export default function AboutPage() {
  return <h1>About</h1>
}`}</pre>
          </section>
          <section id="links">
            <h2>Navigation with Link</h2>
            <p>Use <code>Link</code> to navigate without full reload:</p>
            <pre >{`import Link from 'next/link';
 
 function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
`} </pre>
          </section>
          <section id="params">
            <h2>Route Parameters</h2>
            <p>Capture dynamic segments from the URL:</p>
            <pre >{`// app/user/[id]/page.tsx
import { useParams } from 'next/navigation';

export default function UserPage() {
  const params = useParams();
  return <p>User ID: {params.id}</p>;
}
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