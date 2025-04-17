import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { TrendingTopics } from "@/components/trending-topics"
import { FeaturedLanguages } from "@/components/featured-languages"

export default function Home() {
  return (
    <div className="container mx-auto space-y-12 pb-8">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Developer Documentation <span className="text-primary">Made Simple</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Comprehensive, beginner-friendly documentation for all your favorite programming languages and frameworks.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/docs/getting-started">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/docs">Browse Documentation</Link>
          </Button>
        </div>
      </section>

      {/* Featured Languages */}
      <FeaturedLanguages />

      {/* Why Choose Us */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose DevDocs?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Beginner Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Clear explanations with practical examples that make learning programming accessible to everyone.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive</CardTitle>
            </CardHeader>
            <CardContent>
              <p>From HTML basics to advanced React patterns, we cover the full spectrum of development topics.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Up-to-Date</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our documentation is regularly updated to reflect the latest best practices and language features.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interactive Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Try out code examples directly in your browser to reinforce your learning.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mobile Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn on any device with our fully responsive design optimized for all screen sizes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dark Mode Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reduce eye strain with our customizable light and dark themes for comfortable reading.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trending Topics */}
      <TrendingTopics />

      {/* Newsletter Signup */}
      <section className="py-12 bg-muted rounded-lg p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Stay Updated</h2>
          <p className="text-center mb-8">
            Subscribe to our newsletter for the latest documentation updates, tutorials, and best practices.
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
