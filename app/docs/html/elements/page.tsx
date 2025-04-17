import { TableOfContents } from "@/components/table-of-contents"

export default function HTMLElementsPage() {
  const tocItems = [
    { id: "introduction", title: "HTML Elements Overview", level: 2 },
    { id: "structure", title: "Document Structure Elements", level: 2 },
    { id: "text", title: "Text Content Elements", level: 2 },
    { id: "inline", title: "Inline Text Elements", level: 2 },
    { id: "multimedia", title: "Multimedia Elements", level: 2 },
    { id: "forms", title: "Form Elements", level: 2 },
    { id: "tables", title: "Table Elements", level: 2 },
    { id: "semantic", title: "Semantic Elements", level: 2 },
    { id: "best-practices", title: "Best Practices", level: 2 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <div className="space-y-2 mb-8">
            <h1 className="text-4xl font-bold">HTML Elements</h1>
            <p className="text-xl text-muted-foreground">A comprehensive guide to HTML elements and their usage</p>
          </div>

          <div className="docs-content">
            <h2 id="introduction">HTML Elements Overview</h2>
            <p>
              HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some
              content, and an end tag. HTML elements can be nested (elements can contain elements). All HTML documents
              consist of nested HTML elements.
            </p>
            <p>The browser does not display the HTML tags, but uses them to determine how to display the content.</p>

            <h2 id="structure">Document Structure Elements</h2>
            <p>These elements define the structure of an HTML document:</p>
            <ul>
              <li>
                <code>&lt;!DOCTYPE html&gt;</code> - Defines the document type and version
              </li>
              <li>
                <code>&lt;html&gt;</code> - The root element of an HTML page
              </li>
              <li>
                <code>&lt;head&gt;</code> - Contains meta information about the document
              </li>
              <li>
                <code>&lt;title&gt;</code> - Specifies a title for the document
              </li>
              <li>
                <code>&lt;meta&gt;</code> - Provides metadata about the HTML document
              </li>
              <li>
                <code>&lt;link&gt;</code> - Defines the relationship between the current document and an external
                resource
              </li>
              <li>
                <code>&lt;style&gt;</code> - Contains style information for the document
              </li>
              <li>
                <code>&lt;script&gt;</code> - Contains client-side JavaScript
              </li>
              <li>
                <code>&lt;body&gt;</code> - Contains the visible page content
              </li>
            </ul>

            <h2 id="text">Text Content Elements</h2>
            <p>These elements are used to organize blocks or sections of content:</p>
            <ul>
              <li>
                <code>&lt;h1&gt; to &lt;h6&gt;</code> - Headings from most important (h1) to least important (h6)
              </li>
              <li>
                <code>&lt;p&gt;</code> - Defines a paragraph
              </li>
              <li>
                <code>&lt;hr&gt;</code> - Creates a thematic break (horizontal rule)
              </li>
              <li>
                <code>&lt;pre&gt;</code> - Defines preformatted text
              </li>
              <li>
                <code>&lt;blockquote&gt;</code> - Defines a section that is quoted from another source
              </li>
              <li>
                <code>&lt;div&gt;</code> - Defines a division or section
              </li>
            </ul>

            <h2 id="inline">Inline Text Elements</h2>
            <p>These elements define the meaning, structure, or style of a part of text:</p>
            <ul>
              <li>
                <code>&lt;a&gt;</code> - Defines a hyperlink
              </li>
              <li>
                <code>&lt;strong&gt;</code> - Defines important text
              </li>
              <li>
                <code>&lt;em&gt;</code> - Defines emphasized text
              </li>
              <li>
                <code>&lt;span&gt;</code> - Defines a section in a document
              </li>
              <li>
                <code>&lt;br&gt;</code> - Inserts a single line break
              </li>
              <li>
                <code>&lt;code&gt;</code> - Defines a piece of computer code
              </li>
              <li>
                <code>&lt;q&gt;</code> - Defines a short quotation
              </li>
              <li>
                <code>&lt;sub&gt;</code> - Defines subscripted text
              </li>
              <li>
                <code>&lt;sup&gt;</code> - Defines superscripted text
              </li>
              <li>
                <code>&lt;time&gt;</code> - Defines a date/time
              </li>
            </ul>

            <h2 id="multimedia">Multimedia Elements</h2>
            <p>These elements are used to embed multimedia content:</p>
            <ul>
              <li>
                <code>&lt;img&gt;</code> - Defines an image
              </li>
              <li>
                <code>&lt;audio&gt;</code> - Embeds sound content
              </li>
              <li>
                <code>&lt;video&gt;</code> - Embeds video content
              </li>
              <li>
                <code>&lt;canvas&gt;</code> - Used to draw graphics via JavaScript
              </li>
              <li>
                <code>&lt;svg&gt;</code> - Defines a container for SVG graphics
              </li>
              <li>
                <code>&lt;figure&gt;</code> - Specifies self-contained content
              </li>
              <li>
                <code>&lt;figcaption&gt;</code> - Defines a caption for a figure element
              </li>
            </ul>

            <h2 id="forms">Form Elements</h2>
            <p>These elements are used to create forms for user input:</p>
            <ul>
              <li>
                <code>&lt;form&gt;</code> - Defines an HTML form for user input
              </li>
              <li>
                <code>&lt;input&gt;</code> - Defines an input control
              </li>
              <li>
                <code>&lt;textarea&gt;</code> - Defines a multiline input control
              </li>
              <li>
                <code>&lt;button&gt;</code> - Defines a clickable button
              </li>
              <li>
                <code>&lt;select&gt;</code> - Defines a drop-down list
              </li>
              <li>
                <code>&lt;option&gt;</code> - Defines an option in a drop-down list
              </li>
              <li>
                <code>&lt;label&gt;</code> - Defines a label for an input element
              </li>
              <li>
                <code>&lt;fieldset&gt;</code> - Groups related elements in a form
              </li>
              <li>
                <code>&lt;legend&gt;</code> - Defines a caption for a fieldset element
              </li>
            </ul>

            <h2 id="tables">Table Elements</h2>
            <p>These elements are used to create tables:</p>
            <ul>
              <li>
                <code>&lt;table&gt;</code> - Defines a table
              </li>
              <li>
                <code>&lt;tr&gt;</code> - Defines a table row
              </li>
              <li>
                <code>&lt;th&gt;</code> - Defines a table header cell
              </li>
              <li>
                <code>&lt;td&gt;</code> - Defines a table data cell
              </li>
              <li>
                <code>&lt;caption&gt;</code> - Defines a table caption
              </li>
              <li>
                <code>&lt;thead&gt;</code> - Groups the header content in a table
              </li>
              <li>
                <code>&lt;tbody&gt;</code> - Groups the body content in a table
              </li>
              <li>
                <code>&lt;tfoot&gt;</code> - Groups the footer content in a table
              </li>
              <li>
                <code>&lt;colgroup&gt;</code> - Specifies a group of columns for formatting
              </li>
              <li>
                <code>&lt;col&gt;</code> - Specifies column properties for each column within a colgroup
              </li>
            </ul>

            <h2 id="semantic">Semantic Elements</h2>
            <p>Semantic elements clearly describe their meaning to both the browser and the developer:</p>
            <ul>
              <li>
                <code>&lt;article&gt;</code> - Defines an article
              </li>
              <li>
                <code>&lt;section&gt;</code> - Defines a section in a document
              </li>
              <li>
                <code>&lt;header&gt;</code> - Defines a header for a document or section
              </li>
              <li>
                <code>&lt;footer&gt;</code> - Defines a footer for a document or section
              </li>
              <li>
                <code>&lt;nav&gt;</code> - Defines navigation links
              </li>
              <li>
                <code>&lt;aside&gt;</code> - Defines content aside from the page content
              </li>
              <li>
                <code>&lt;main&gt;</code> - Specifies the main content of a document
              </li>
              <li>
                <code>&lt;figure&gt;</code> - Specifies self-contained content
              </li>
              <li>
                <code>&lt;figcaption&gt;</code> - Defines a caption for a figure element
              </li>
              <li>
                <code>&lt;details&gt;</code> - Defines additional details that the user can view or hide
              </li>
              <li>
                <code>&lt;summary&gt;</code> - Defines a visible heading for a details element
              </li>
              <li>
                <code>&lt;mark&gt;</code> - Defines marked/highlighted text
              </li>
              <li>
                <code>&lt;time&gt;</code> - Defines a date/time
              </li>
            </ul>

            <h2 id="best-practices">Best Practices</h2>
            <p>When using HTML elements, follow these best practices:</p>
            <ul>
              <li>Use semantic elements whenever possible to improve accessibility and SEO</li>
              <li>Always close your tags properly</li>
              <li>Use lowercase for tag names</li>
              <li>Quote attribute values</li>
              <li>
                Specify the <code>alt</code> attribute for images
              </li>
              <li>Use the correct doctype declaration</li>
              <li>
                Use the <code>title</code> attribute for additional information
              </li>
              <li>Validate your HTML using the W3C Validator</li>
              <li>Keep your HTML structure clean and well-organized</li>
              <li>Use comments to explain complex sections of code</li>
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
