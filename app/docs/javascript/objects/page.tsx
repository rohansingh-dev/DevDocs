import { TableOfContents } from "@/components/table-of-contents"

export default function JavaScriptObjectsPage() {
  const tocItems = [
    { id: "objects-intro", title: "Introduction to Objects", level: 2 },
    { id: "properties-methods", title: "Properties & Methods", level: 2 },
    { id: "prototypes", title: "Prototypes", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">JavaScript Objects</h1>
          <section id="objects-intro">
            <h2>Introduction to Objects</h2>
            <p>
              Objects in JavaScript are collections of key-value pairs. They allow you to group related data and functions together. Here's an example of creating and using an object:
            </p>
            <pre><code>{`const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("The car has started.");
  }
};

// Accessing properties
console.log(car.brand); // "Toyota"

// Calling methods
car.start(); // "The car has started."`}</code></pre>
          </section>
          <section id="properties-methods">
            <h2>Properties & Methods</h2>
            <p>Learn how to define and access properties and methods on objects.</p>
          </section>
          <section id="prototypes">
            <h2>Prototypes</h2>
            <p>
              Every JavaScript object has a prototype, which is another object from which it inherits properties and methods. This is the basis of JavaScript's prototype chain. Here's an example:
            </p>
            <pre><code>{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

const john = new Person("John", 30);
john.greet(); // "Hello, my name is John"`}</code></pre>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}