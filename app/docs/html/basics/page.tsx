import { TableOfContents } from "@/components/table-of-contents"

export default function HTMLBasicsPage() {
  const tocItems = [
    { id: "introduction", title: "Introduction to HTML", level: 2 },
    { id: "structure", title: "HTML Document Structure", level: 2 },
    { id: "elements", title: "Basic HTML Elements", level: 2 },
    { id: "headings", title: "Headings", level: 3 },
    { id: "paragraphs", title: "Paragraphs", level: 3 },
    { id: "links", title: "Links", level: 3 },
    { id: "images", title: "Images", level: 3 },
    { id: "lists", title: "Lists", level: 3 },
    { id: "attributes", title: "HTML Attributes", level: 2 },
    { id: "comments", title: "HTML Comments", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">HTML Basics</h1>
            <p className="text-xl text-muted-foreground">
              Learn the fundamentals of HTML to create structured web content
            </p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">Introduction to HTML</h2>
            <p>
              HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the
              structure of a web page and consists of a series of elements that tell the browser how to display the
              content.
            </p>
            <p>
              HTML elements are represented by tags, written using angle brackets. For example, <code>&lt;p&gt;</code>{" "}
              represents a paragraph. Tags usually come in pairs like <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code>
              , where the first tag is the start tag and the second tag is the end tag (also called closing tag).
            </p>

            <h2 id="structure">HTML Document Structure</h2>
            <p>A basic HTML document has the following structure:</p>
            <pre>
              <code>{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}</code>
            </pre>
            <p>Let's break down this structure:</p>
            <ul>
              <li>
                <code>&lt;!DOCTYPE html&gt;</code>: Declaration that defines the document type and version of HTML
              </li>
              <li>
                <code>&lt;html&gt;</code>: The root element of an HTML page
              </li>
              <li>
                <code>&lt;head&gt;</code>: Contains meta-information about the document
              </li>
              <li>
                <code>&lt;title&gt;</code>: Specifies a title for the document
              </li>
              <li>
                <code>&lt;meta&gt;</code>: Provides metadata about the HTML document
              </li>
              <li>
                <code>&lt;body&gt;</code>: Contains the visible page content
              </li>
            </ul>

            <h2 id="elements">Basic HTML Elements</h2>
            <p>
              HTML elements are the building blocks of HTML pages. Here are some of the most commonly used elements:
            </p>

            <h3 id="headings">Headings</h3>
            <p>
              HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags, where{" "}
              <code>&lt;h1&gt;</code> is the most important and <code>&lt;h6&gt;</code> is the least important.
            </p>
            <pre>
              <code>{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>`}</code>
            </pre>

            <h3 id="paragraphs">Paragraphs</h3>
            <p>
              The <code>&lt;p&gt;</code> element defines a paragraph:
            </p>
            <pre>
              <code>{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}</code>
            </pre>

            <h3 id="links">Links</h3>
            <p>
              The <code>&lt;a&gt;</code> element defines a hyperlink, which is used to link from one page to another:
            </p>
            <pre>
              <code>{`<a href="https://www.example.com">This is a link</a>`}</code>
            </pre>
            <p>
              The <code>href</code> attribute specifies the destination address of the link.
            </p>

            <h3 id="images">Images</h3>
            <p>
              The <code>&lt;img&gt;</code> element is used to embed an image in an HTML page:
            </p>
            <pre>
              <code>{`<img src="image.jpg" alt="Description of the image">`}</code>
            </pre>
            <p>
              The <code>src</code> attribute specifies the path to the image, and the <code>alt</code> attribute
              provides an alternate text for the image if it cannot be displayed.
            </p>

            <h3 id="lists">Lists</h3>
            <p>HTML supports ordered lists, unordered lists, and definition lists:</p>
            <p>Unordered list:</p>
            <pre>
              <code>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}</code>
            </pre>
            <p>Ordered list:</p>
            <pre>
              <code>{`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}</code>
            </pre>

            <h2 id="attributes">HTML Attributes</h2>
            <p>HTML attributes provide additional information about HTML elements:</p>
            <ul>
              <li>All HTML elements can have attributes</li>
              <li>Attributes provide additional information about elements</li>
              <li>Attributes are always specified in the start tag</li>
              <li>Attributes usually come in name/value pairs like: name="value"</li>
            </ul>
            <p>Common attributes include:</p>
            <ul>
              <li>
                <code>id</code>: Specifies a unique id for an element
              </li>
              <li>
                <code>class</code>: Specifies one or more class names for an element
              </li>
              <li>
                <code>style</code>: Specifies an inline CSS style for an element
              </li>
              <li>
                <code>title</code>: Specifies extra information about an element (displayed as a tooltip)
              </li>
            </ul>

            <h2 id="comments">HTML Comments</h2>
            <p>HTML comments are not displayed in the browser, but they can help document your HTML source code:</p>
            <pre>
              <code>{`<!-- This is a comment -->

<!-- 
  This is a 
  multi-line comment 
-->`}</code>
            </pre>

            <h2 id="best-practices">Best Practices</h2>
            <p>Here are some best practices to follow when writing HTML:</p>
            <ul>
              <li>
                Always declare the document type with <code>&lt;!DOCTYPE html&gt;</code>
              </li>
              <li>Use lowercase tag names</li>
              <li>Close all HTML elements</li>
              <li>Use lowercase attribute names</li>
              <li>Always quote attribute values</li>
              <li>
                Always specify <code>alt</code> attribute for images
              </li>
              <li>Avoid using inline styles (use CSS instead)</li>
              <li>
                Use semantic HTML elements (<code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
                <code>&lt;nav&gt;</code>, etc.)
              </li>
              <li>Validate your HTML using the W3C Validator</li>
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
