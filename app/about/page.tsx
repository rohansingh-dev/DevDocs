import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User2, BookOpen, Code2, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">About DevDocs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our mission is to provide high-quality, accessible programming documentation for developers at all skill
          levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              DevDocs was created with a simple goal: to make programming knowledge accessible to everyone. We believe
              that clear, comprehensive documentation is essential for learning and mastering programming languages and
              frameworks.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Code2 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We focus on creating documentation that is beginner-friendly yet comprehensive enough for advanced
              developers. Each topic includes clear explanations, practical examples, and best practices to help you
              apply what you learn.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Our Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              DevDocs is supported by a community of developers who contribute to our documentation. We welcome
              feedback, corrections, and contributions from anyone who shares our passion for quality documentation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <User2 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We believe in creating content that is accurate, up-to-date, and accessible to all. We strive to maintain
              high standards of quality and to continuously improve our documentation based on user feedback.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
