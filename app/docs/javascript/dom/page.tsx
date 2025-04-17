import { TableOfContents } from "@/components/table-of-contents"

export default function JavaScriptDOMPage() {
  const tocItems = [
    { id: "dom-intro", title: "Introduction to DOM", level: 2 },
    { id: "dom-structure", title: "Understanding DOM Structure", level: 2 },
    { id: "selecting-elements", title: "Selecting Elements", level: 2 },
    { id: "manipulating-elements", title: "Manipulating Elements", level: 2 },
    { id: "event-handling", title: "Event Handling", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">DOM Manipulation</h1>
          <section id="dom-intro">
            <h2>Introduction to the DOM</h2>
            <p>
              The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing developers to interact with and manipulate the content, structure, and styles of a webpage dynamically.
            </p>
          </section>
          <section id="dom-structure">
            <h2>Understanding DOM Structure</h2>
            <p>
              The DOM represents an HTML document as a tree of nodes. Each element, attribute, and piece of text is a node in this tree. For example:
            </p>
            <pre>
              <code>
                {`<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </body>
</html>`}
              </code>
            </pre>
            <p>
              This structure is represented in the DOM as a hierarchy of nodes, with <code>html</code> as the root node.
            </p>
          </section>
          <section id="selecting-elements">
            <h2>Selecting Elements</h2>
            <p>
              To interact with elements in the DOM, you first need to select them. Common methods include:
            </p>
            <ul>
              <li>
                <code>document.getElementById("id")</code>: Selects an element by its ID.
              </li>
              <li>
                <code>document.querySelector("selector")</code>: Selects the first element matching a CSS selector.
              </li>
              <li>
                <code>document.querySelectorAll("selector")</code>: Selects all elements matching a CSS selector.
              </li>
            </ul>
            <p>Example:</p>
            <pre>
              <code>
                {`const heading = document.getElementById("main-heading");
const paragraphs = document.querySelectorAll("p");`}
              </code>
            </pre>
          </section>
          <section id="manipulating-elements">
            <h2>Manipulating Elements</h2>
            <p>
              Once elements are selected, you can manipulate their content, attributes, and styles. Examples include:
            </p>
            <ul>
              <li>
                Changing content: <code>element.textContent = "New Content";</code>
              </li>
              <li>
                Modifying attributes: <code>element.setAttribute("class", "new-class");</code>
              </li>
              <li>
                Updating styles: <code>element.style.color = "blue";</code>
              </li>
            </ul>
            <p>Example:</p>
            <pre>
              <code>
                {`const heading = document.getElementById("main-heading");
heading.textContent = "Updated Heading";
heading.style.color = "red";`}
              </code>
            </pre>
          </section>
          <section id="event-handling">
            <h2>Event Handling</h2>
            <p>
              Events allow you to respond to user interactions such as clicks, key presses, or mouse movements. Use <code>addEventListener</code> to attach event listeners to elements.
            </p>
            <p>Example:</p>
            <pre>
              <code>
                {`const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});`}
              </code>
            </pre>
          </section>
          <section id="best-practices">
            <h2>Best Practices</h2>
            <ul>
              <li>Minimize direct DOM manipulation to improve performance.</li>
              <li>Use event delegation for better efficiency with dynamic elements.</li>
              <li>Keep your JavaScript code modular and reusable.</li>
            </ul>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}