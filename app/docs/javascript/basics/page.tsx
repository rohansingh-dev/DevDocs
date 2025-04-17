import { Button } from "@/components/ui/button"
import { SidebarFooter } from "@/components/ui/sidebar"
import { SidebarMenuSubButton } from "@/components/ui/sidebar"
import { SidebarMenuSubItem } from "@/components/ui/sidebar"
import { SidebarMenuSub } from "@/components/ui/sidebar"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { SidebarMenuItem } from "@/components/ui/sidebar"
import { SidebarMenu } from "@/components/ui/sidebar"
import { SidebarGroupContent } from "@/components/ui/sidebar"
import { SidebarGroupLabel } from "@/components/ui/sidebar"
import { SidebarGroup } from "@/components/ui/sidebar"
import { SidebarContent } from "@/components/ui/sidebar"
import Link from "next/link"
import { SidebarHeader } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/ui/sidebar"
import { TableOfContents } from "@/components/table-of-contents"

export default function JavaScriptBasicsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to JavaScript", level: 2 },
    { id: "adding-js", title: "Adding JavaScript to HTML", level: 2 },
    { id: "variables", title: "Variables and Data Types", level: 2 },
    { id: "operators", title: "Operators", level: 2 },
    { id: "arithmetic", title: "Arithmetic Operators", level: 3 },
    { id: "comparison", title: "Comparison Operators", level: 3 },
    { id: "logical", title: "Logical Operators", level: 3 },
    { id: "conditionals", title: "Conditional Statements", level: 2 },
    { id: "loops", title: "Loops", level: 2 },
    { id: "functions", title: "Functions", level: 2 },
    { id: "objects", title: "Objects", level: 2 },
    { id: "arrays", title: "Arrays", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">JavaScript Basics</h1>
            <p className="text-xl text-muted-foreground">
              Learn the fundamentals of JavaScript programming
            </p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to JavaScript</h2>
            <p>
              JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat.
            </p>
            <p>
              JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g., functional programming) styles.
            </p>

            <h2 id="adding-js">Adding JavaScript to HTML</h2>
            <p>
              JavaScript can be added to your HTML in several ways:
            </p>
            <p>1. Inline JavaScript:</p>
            <pre><code>{`<button onclick="alert('Hello World!')">Click Me</button>`}</code></pre>
            
            <p>2. Internal JavaScript (using the script tag):</p>
            <pre><code>{`<script>
  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
  }
</script>`}</code></pre>
            
            <p>3. External JavaScript (linking to an external .js file):</p>
            <pre><code>{`<script src="script.js"></script>`}</code></pre>
            
            <p>
              It's generally best practice to place your JavaScript at the bottom of the body element or use the <code>defer</code> attribute to ensure the HTML is fully loaded before the JavaScript runs.
            </p>

            <h2 id="variables">Variables and Data Types</h2>
            <p>
              In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>:
            </p>
            <pre><code>{`// Using var (older way, function-scoped)
var name = "John";

// Using let (block-scoped, can be reassigned)
let age = 30;

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;`}</code></pre>
            
            <p>JavaScript has several data types:</p>
            <ul>
              <li><strong>String</strong>: <code>"Hello World"</code> or <code>'Hello World'</code></li>
              <li><strong>Number</strong>: <code>42</code> or <code>3.14</code></li>
              <li><strong>Boolean</strong>: <code>true</code> or <code>false</code></li>
              <li><strong>Undefined</strong>: <code>undefined</code> (a variable that has been declared but not assigned a value)</li>
              <li><strong>Null</strong>: <code>null</code> (represents the intentional absence of any object value)</li>
              <li><strong>Object</strong>: <code>{"{ name: \"John\", age: 30 }"}</code></li>
              <li><strong>Array</strong>: <code>[1, 2, 3, 4]</code> (a special type of object)</li>
              <li><strong>Symbol</strong>: Used for creating unique identifiers</li>
              <li><strong>BigInt</strong>: For integers larger than the Number type can handle</li>
            </ul>

            <h2 id="operators">Operators</h2>
            <p>
              JavaScript includes various operators for performing operations on values.
            </p>

            <h3 id="arithmetic">Arithmetic Operators</h3>
            <pre><code>{`let a = 10;
let b = 5;

// Addition
let sum = a + b; // 15

// Subtraction
let difference = a - b; // 5

// Multiplication
let product = a * b; // 50

// Division
let quotient = a / b; // 2

// Modulus (remainder)
let remainder = a % b; // 0

// Increment
a++; // a is now 11

// Decrement
b--; // b is now 4

// Exponentiation
let power = a ** 2; // 121 (11^2)`}</code></pre>

            <h3 id="comparison">Comparison Operators</h3>
            <pre><code>{`let x = 5;
let y = "5";

// Equal to (value only)
console.log(x == y); // true

// Equal to (value and type)
console.log(x === y); // false

// Not equal to (value only)
console.log(x != y); // false

// Not equal to (value and type)
console.log(x !== y); // true

// Greater than
console.log(x > 3); // true

// Less than
console.log(x < 10); // true

// Greater than or equal to
console.log(x >= 5); // true

// Less than or equal to
console.log(x <= 4); // false`}</code></pre>

            <h3 id="logical">Logical Operators</h3>
            <pre><code>{`let isAdult = true;
let hasLicense = false;

// AND operator
console.log(isAdult && hasLicense); // false

// OR operator
console.log(isAdult || hasLicense); // true

// NOT operator
console.log(!isAdult); // false`}</code></pre>

            <h2 id="conditionals">Conditional Statements</h2>
            <p>
              Conditional statements are used to perform different actions based on different conditions.
            </p>
            <pre><code>{`let age = 18;

// if statement
if (age >= 18) {
  console.log("You are an adult");
}

// if-else statement
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// if-else if-else statement
if (age < 13) {
  console.log("You are a child");
} else if (age < 18) {
  console.log("You are a teenager");
} else {
  console.log("You are an adult");
}

// switch statement
let day = 2;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}`}</code></pre>

            <h2 id="loops">Loops</h2>
            <p>
              Loops are used to execute a block of code multiple times.
            </p>
            <pre><code>{`// for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

// do-while loop
let j = 0;
do {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
} while (j < 5);

// for...of loop (for iterating over array values)
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
}

// for...in loop (for iterating over object properties)
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(key + ": " + person[key]); // "name: John", "age: 30"
}`}</code></pre>

            <h2 id="functions">Functions</h2>
            <p>
              Functions are blocks of code designed to perform a particular task and are executed when "called".
            </p>
            <pre><code>{`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const sayHello = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function
const welcome = (name) => {
  return "Welcome, " + name + "!";
};

// Simplified arrow function (for single expressions)
const goodbye = name => "Goodbye, " + name + "!";

// Calling functions
console.log(greet("John")); // "Hello, John!"
console.log(sayHello("Jane")); // "Hello, Jane!"
console.log(welcome("Bob")); // "Welcome, Bob!"
console.log(goodbye("Alice")); // "Goodbye, Alice!"`}</code></pre>

            <h2 id="objects">Objects</h2>
            <p>
              Objects are collections of key-value pairs and are used to store multiple values in a single variable.
            </p>
            <pre><code>{`// Creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  
  // Method
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing object properties
console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"

// Calling object methods
console.log(person.fullName()); // "John Doe"

// Adding new properties
person.address = "123 Main St";

// Deleting properties
delete person.email;`}</code></pre>

            <h2 id="arrays">Arrays</h2>
            <p>
              Arrays are used to store multiple values in a single variable.
            </p>
            <pre><code>{`// Creating an array
const fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing array elements
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Orange"

// Array length
console.log(fruits.length); // 4

// Adding elements to an array
fruits.push("Strawberry"); // Adds to the end
fruits.unshift("Pineapple"); // Adds to the beginning

// Removing elements from an array
fruits.pop(); // Removes from the end
fruits.shift(); // Removes from the beginning

// Finding elements
console.log(fruits.indexOf("Banana")); // 1

// Iterating over an array
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Mapping an array
const upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});

// Filtering an array
const longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});

// Sorting an array
fruits.sort();`}</code></pre>

            <h2 id="best-practices">Best Practices</h2>
            <p>
              Here are some best practices to follow when writing JavaScript:
            </p>
            <ul>
              <li>Use <code>const</code> for variables that don't change, and <code>let</code> for variables that do</li>
              <li>Avoid using <code>var</code> in modern JavaScript</li>
              <li>Use strict equality (<code>===</code>) instead of loose equality (<code>==</code>)</li>
              <li>Use meaningful variable and function names</li>
              <li>Comment your code, but focus on why rather than what</li>
              <li>Keep functions small and focused on a single task</li>
              <li>Use arrow functions for short, simple functions</li>
              <li>Use template literals for string concatenation</li>
              <li>Use destructuring for cleaner code</li>
              <li>Handle errors with try/catch blocks</li>
              <li>Use modern ES6+ features when possible</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </div>
  )
}
