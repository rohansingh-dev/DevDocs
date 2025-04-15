import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - NewsHub",
  description: "Privacy Policy for NewsHub - Your Daily News Aggregator",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose max-w-none dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to NewsHub. We respect your privacy and are committed to protecting your personal data. This privacy
            policy will inform you about how we look after your personal data when you visit our website and tell you
            about your privacy rights and how the law protects you.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped
            together as follows:
          </p>
          <ul>
            <li>Identity Data: includes first name, last name, username or similar identifier</li>
            <li>Contact Data: includes email address</li>
            <li>
              Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and
              location, browser plug-in types and versions, operating system and platform, and other technology on the
              devices you use to access this website
            </li>
            <li>Usage Data: includes information about how you use our website and services</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul>
            <li>To provide you with news content</li>
            <li>To improve our website and services</li>
            <li>To send you newsletters if you've subscribed</li>
            <li>To respond to your inquiries</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used, or accessed in an unauthorized way, altered, or disclosed.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
            <br />
            Email: privacy@newshub.com
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
