import { TableOfContents } from "@/components/table-of-contents"

export default function PythonOopPage() {
  const tocItems = [
    { id: "classes", title: "Classes & Objects", level: 2 },
    { id: "inheritance", title: "Inheritance", level: 2 },
    { id: "encapsulation", title: "Encapsulation", level: 2 },
    { id: "polymorphism", title: "Polymorphism", level: 2 },
    { id: "special-methods", title: "Special Methods", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Object-Oriented Programming in Python</h1>

          {/* Classes & Objects */}
          <section id="classes">
            <h2>Classes & Objects</h2>
            <p>Define custom types grouping data and behavior:</p>
            <pre >{`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name}, {self.age} years old."

# Instantiate and use
p = Person("Alice", 30)
print(p.greet())  # Hi, I'm Alice, 30 years old.
`} </pre>
          </section>

          {/* Inheritance */}
          <section id="inheritance">
            <h2>Inheritance</h2>
            <p>Create subclasses inheriting attributes and methods, overriding when needed:</p>
            <pre >{`class Employee(Person):
    def __init__(self, name, age, role):
        super().__init__(name, age)
        self.role = role

    def greet(self):
        base = super().greet()
        return f"{base} I work as a {self.role}."

e = Employee("Bob", 28, "Developer")
print(e.greet())  # Hi, I'm Bob, 28 years old. I work as a Developer.
`} </pre>
          </section>

          {/* Encapsulation */}
          <section id="encapsulation">
            <h2>Encapsulation</h2>
            <p>Use private attributes (<code>_</code> or <code>__</code>) and <code>@property</code>:</p>
            <pre >{`class Account:
    def __init__(self, balance=0):
        self.__balance = balance

    @property
    def balance(self):
        return self.__balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

acct = Account(100)
print(acct.balance)  # 100
# acct.__balance  # AttributeError
`} </pre>
          </section>

          {/* Polymorphism */}
          <section id="polymorphism">
            <h2>Polymorphism</h2>
            <p>Different classes can implement the same method name:</p>
            <pre >{`class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

for animal in (Dog(), Cat()):
    print(animal.speak())  # Woof! Meow!
`} </pre>
          </section>

          {/* Special Methods */}
          <section id="special-methods">
            <h2>Special Methods</h2>
            <p>Customize behavior with methods like <code>__str__</code>, <code>__repr__</code>, <code>__eq__</code>:</p>
            <pre >{`class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1, v2 = Vector(1, 2), Vector(3, 4)
print(v1 + v2)  # Vector(4, 6)
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