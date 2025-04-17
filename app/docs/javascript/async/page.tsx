import { TableOfContents } from "@/components/table-of-contents"

export default function JavaScriptAsyncPage() {
  const tocItems = [
    { id: "async-intro", title: "Introduction to Asynchronous JS", level: 2 },
    { id: "callbacks", title: "Callbacks", level: 2 },
    { id: "promises", title: "Promises", level: 2 },
    { id: "async-await", title: "async/await", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Asynchronous JavaScript</h1>
          <section id="async-intro">
            <h2>Introduction to Asynchronous JavaScript</h2>
            <p>Understanding how JavaScript handles asynchronous operations.</p>
          </section>
          <section id="callbacks">
            <h2>Callbacks</h2>
            <p>Functions passed as arguments to handle async results.</p>
          </section>
          <section id="promises">
            <h2>Promises</h2>
            <p>
              Promises represent the eventual completion (or failure) of an asynchronous operation. Here's an example:
            </p>
            <pre><code>{`const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully!");
  }, 2000);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });`}</code></pre>
          </section>
          <section id="async-await">
            <h2>async/await</h2>
            <p>
              The <code>async</code> and <code>await</code> keywords simplify working with promises:
            </p>
            <pre><code>{`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

fetchData();`}</code></pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}