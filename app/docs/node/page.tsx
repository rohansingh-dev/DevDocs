import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/table-of-contents";

export default function NodeDocsPage() {
  const tocItems = [
    { id: 'prerequisites', title: 'Prerequisites', level: 2 },
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'setup', title: 'Setup & Installation', level: 2 },
    { id: 'modules', title: 'Modules & Package Management', level: 2 },
    { id: 'event-loop', title: 'Event Loop & Asynchronous I/O', level: 2 },
    { id: 'filesystem', title: 'File System', level: 2 },
    { id: 'networking', title: 'Networking', level: 2 },
    { id: 'frameworks', title: 'Popular Frameworks', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
    { id: 'resources', title: 'Further Resources', level: 2 }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="lg:w-3/4 docs-content space-y-8">
          <h1 className="text-4xl font-bold">Node.js Documentation</h1>
          <section id="prerequisites">
            <h2>Prerequisites</h2>
            <ul>
              <li>Basic JavaScript knowledge</li>
              <li>Node.js LTS version installed</li>
              <li>Familiarity with command-line tools</li>
            </ul>
          </section>
          <section id="introduction">
            <h2>Introduction</h2>
            <p>Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for building fast and scalable network applications.</p>
          </section>
          <section id="setup">
            <h2>Setup & Installation</h2>
            <p>Install via the official installer or package manager:</p>
            <pre>{`# macOS with Homebrew
brew install node

# Windows installer from nodejs.org`}</pre>
          </section>
          <section id="modules">
            <h2>Modules & Package Management</h2>
            <p>Node.js uses CommonJS modules by default. Use <code>require()</code> or ES Modules with <code>import/export</code>:</p>
            <pre>{`// CommonJS
const fs = require('fs')

// ES Module
import fs from 'fs';`}</pre>
            <p>Manage packages with npm or pnpm:</p>
            <pre>{`npm init
npm install express --save`}</pre>
          </section>
          <section id="event-loop">
            <h2>Event Loop & Asynchronous I/O</h2>
            <p>The event loop handles asynchronous operations. Use callbacks, promises, or async/await:</p>
            <pre>{`setTimeout(() => console.log('tick'), 1000);

async function read() {
  const data = await fs.promises.readFile('file.txt');
}`}</pre>
          </section>
          <section id="filesystem">
            <h2>File System</h2>
            <p>Interact with the file system using the <code>fs</code> module:</p>
            <pre>{`import { promises as fs } from 'fs';

async function save() {
  await fs.writeFile('data.json', JSON.stringify(obj));
}`}</pre>
          </section>
          <section id="networking">
            <h2>Networking</h2>
            <p>Create HTTP servers:</p>
            <pre>{`import http from 'http';

http.createServer((req, res) => {
  res.end('Hello World');
}).listen(3000);`}</pre>
          </section>
          <section id="frameworks">
            <h2>Popular Frameworks</h2>
            <ul>
              <li>Express.js</li>
              <li>Koa.js</li>
              <li>Fastify</li>
            </ul>
          </section>
          <section id="best-practices">
            <h2>Best Practices</h2>
            <ul>
              <li>Handle errors gracefully.</li>
              <li>Avoid blocking the event loop.</li>
              <li>Use environment variables for configuration.</li>
            </ul>
          </section>
          <section id="resources">
            <h2>Further Resources</h2>
            <ul>
              <li><a href="https://nodejs.org/en/docs/">Official Docs</a></li>
              <li><a href="https://expressjs.com/">Express Guide</a></li>
            </ul>
          </section>
        </main>
        <aside className="lg:w-1/4 sticky top-16">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  );
}