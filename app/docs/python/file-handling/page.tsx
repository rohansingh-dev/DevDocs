import { TableOfContents } from "@/components/table-of-contents"

export default function PythonFileHandlingPage() {
  const tocItems = [
    { id: "intro", title: "Introduction to File Handling", level: 2 },
    { id: "reading", title: "Reading Files", level: 2 },
    { id: "writing", title: "Writing Files", level: 2 },
    { id: "csv", title: "Working with CSV", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">Python File Handling</h1>
          <section id="intro">
            <h2>Introduction to File Handling</h2>
            <p>File handling allows you to read from and write to files on disk. Python provides built-in <code>open()</code> function for this.</p>
            <p>Common modes: <code>r</code> (read), <code>w</code> (write), <code>a</code> (append).</p>
          </section>
          <section id="reading">
            <h2>Reading Files</h2>
            <p>Use <code>open</code> and <code>read()</code>/<code>readlines()</code> to fetch content.</p>
            <pre >{`# Example: Reading list of Indian states from states.txt
with open('states.txt', 'r', encoding='utf-8') as f:
    states = [line.strip() for line in f.readlines()]
print(states)
`} </pre>
          </section>
          <section id="writing">
            <h2>Writing Files</h2>
            <p>Use <code>w</code> or <code>a</code> mode to write or append.</p>
            <pre >{`# Example: Writing train ticket info to file
tickets = ['PNR: 1234567890 - Name: Rahul Kumar', 'PNR: 9876543210 - Name: Priya Singh']
with open('tickets.txt', 'w', encoding='utf-8') as f:
    for t in tickets:
        f.write(t + '\n')
`} </pre>
          </section>
          <section id="csv">
            <h2>Working with CSV</h2>
            <p>Use <code>csv</code> module to parse and write CSV files.</p>
            <pre >{`import csv

# Read student marks from CSV
with open('students.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(f"{row['Name']} scored {row['Marks']}")

# Write new data
fields = ['Name','Marks']
rows = [{'Name':'Anjali','Marks':88},{'Name':'Vikram','Marks':92}]
with open('results.csv','w', newline='', encoding='utf-8') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fields)
    writer.writeheader()
    writer.writerows(rows)
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