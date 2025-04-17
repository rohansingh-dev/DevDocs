import { TableOfContents } from "@/components/table-of-contents"

export default function ReactServerComponentsPage() {
  const tocItems = [
    { id: "prerequisites", title: "Prerequisites", level: 2 },
    { id: "intro", title: "Introduction to Server Components", level: 2 },
    { id: "benefits", title: "Benefits", level: 2 },
    { id: "usage", title: "Usage and Syntax", level: 2 },
    { id: "data-fetching", title: "Data Fetching Patterns", level: 2 },
    { id: "example", title: "Example Server Component", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 2 },
    { id: "caveats", title: "Caveats and Limitations", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">React Server Components</h1>

          <section id="prerequisites">
            <h2>Prerequisites</h2>
            <ul>
              <li>React 18 or later</li>
              <li>Next.js 13+ with the <code>app/</code> directory enabled</li>
              <li>Familiarity with basic React concepts</li>
            </ul>
          </section>

          <section id="intro">
            <h2>Introduction to Server Components</h2>
            <p>Server Components allow you to render components on the server by default, sending fully rendered HTML to the client. This improves performance and reduces bundle size.</p>
            <p>Introduced in React 18, Server Components enable selective server-side rendering without sacrificing interactivity. They fetch data on the server and ship only HTML, minimizing client JavaScript.</p>
            <p><strong>Key characteristics:</strong></p>
            <ul>
              <li>Rendered entirely on the server</li>
              <li>No client-side JavaScript for pure UI</li>
              <li>Stateless and pure functions</li>
            </ul>
          </section>

          <section id="benefits">
            <h2>Benefits</h2>
            <p>Server Components bring several advantages:</p>
            <ul>
              <li><strong>Performance:</strong> Faster initial loads with pre-rendered HTML.</li>
              <li><strong>Bundle Size:</strong> Smaller client bundles by excluding server-only logic.</li>
              <li><strong>SEO:</strong> Enhanced search indexing with full HTML on load.</li>
              <li><strong>Security:</strong> Keep sensitive operations on the server.</li>
            </ul>
            <p>They integrate seamlessly with Client Components, so you can hydrate interactive parts as needed.</p>
          </section>

          <section id="usage">
            <h2>Usage and Syntax</h2>
            <p>By default, files under the <code>app/</code> directory are Server Components. To convert a file into a Client Component, add <code>"use client"</code> at the top.</p>
            <pre>{`// ServerComponent.tsx (default)
export default function ServerComponent() {
  return <p>Server-rendered content</p>;
}`}</pre>
            <pre>{`// ClientComponent.tsx
"use client"
import { useState } from 'react'
export default function ClientComponent() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
}`}</pre>
            <p>You can nest Client Components inside Server Components:</p>
            <pre>{`export default function Page() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}`}</pre>
          </section>

          <section id="data-fetching">
            <h2>Data Fetching Patterns</h2>
            <p>Server Components can fetch data directly using <code>fetch</code> without increasing client bundle size. Next.js supports built-in caching and streaming:</p>
            <pre>{`export default async function UserList() {
  const res = await fetch('https://api.example.com/users', { cache: 'force-cache' });
  if (!res.ok) throw new Error('Failed to fetch');
  const users = await res.json();
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`}</pre>
            <p>Use <code>revalidate</code> or Next.js data fetching options for incremental updates.</p>
          </section>

          <section id="example">
            <h2>Example Server Component</h2>
            <p>Here's a full example with data loading and rendering:</p>
            <pre>{`// app/docs/react/server-components/posts.tsx
import React from 'react';

async function fetchPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Error fetching posts');
  return res.json();
}

export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}`}</pre>
          </section>

          <section id="best-practices">
            <h2>Best Practices</h2>
            <ul>
              <li>Keep Server Components stateless and free of side-effects.</li>
              <li>Fetch only necessary data and handle errors gracefully.</li>
              <li>Leverage Suspense for loading states.</li>
              <li>Defer interactivity to Client Components.</li>
            </ul>
          </section>

          <section id="caveats">
            <h2>Caveats and Limitations</h2>
            <p>Server Components cannot use browser-only APIs or React hooks like <code>useState</code> or <code>useEffect</code>. They must be pure functions.</p>
            <p>Debugging requires server logs rather than browser devtools.</p>
          </section>
        </main>

        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}