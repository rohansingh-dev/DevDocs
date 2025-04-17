import { TableOfContents } from "@/components/table-of-contents"

export default function CSSAnimationsPage() {
  const tocItems = [
    { id: "animations-intro", title: "Introduction to CSS Animations", level: 2 },
    { id: "transitions", title: "Transitions", level: 2 },
    { id: "keyframes", title: "Keyframes", level: 2 },
    { id: "animation-properties", title: "Animation Properties", level: 2 },
  ]
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="md:w-3/4 docs-content">
          <h1 className="text-4xl font-bold">CSS Animations</h1>
          <section id="animations-intro">
            <h2>Introduction to CSS Animations</h2>
            <p>Learn how to add movement and interactivity with CSS animations and transitions.</p>
          </section>
          <section id="transitions">
            <h2>Transitions</h2>
            <p>Animate changes to CSS properties over time using <code>transition</code>.</p>
          </section>
          <section id="keyframes">
            <h2>Keyframes</h2>
            <p>Define complex multi-step animations using <code>@keyframes</code>.</p>
          </section>
          <section id="animation-properties">
            <h2>Animation Properties</h2>
            <p>Control timing, delay, iteration count and direction of animations.</p>
          </section>
        </main>
        <aside className="md:w-1/4 sticky top-20">
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  )
}