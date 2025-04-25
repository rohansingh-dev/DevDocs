import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User2, BookOpen, Code2, Users } from "lucide-react"
import { AdBanner } from "@/components/ad-banner";

export default function AboutPage() {
  return (
    <div className="container py-8 mx-auto space-y-12">
      <div>
        <h1 className="mb-4 text-4xl font-bold">About DevDocs</h1>
        <p className="max-w-3xl text-xl text-muted-foreground">
          Our mission is to provide high-quality, accessible programming documentation for developers at all skill
          levels.
        </p>
      </div>

      <AdBanner slot="4987094295" format="auto" className="my-4" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <BookOpen className="w-8 h-8 mb-2 text-primary" />
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
            <Code2 className="w-8 h-8 mb-2 text-primary" />
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
            <Users className="w-8 h-8 mb-2 text-primary" />
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
            <User2 className="w-8 h-8 mb-2 text-primary" />
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
