import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - NewsHub",
  description: "Terms of Service for NewsHub - Your Daily News Aggregator",
}

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose max-w-none dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to NewsHub. These terms and conditions outline the rules and regulations for the use of our website.
          </p>

          <h2>2. License to Use Website</h2>
          <p>
            Unless otherwise stated, NewsHub and/or its licensors own the intellectual property rights for all material
            on NewsHub. All intellectual property rights are reserved. You may view and/or print pages from the website
            for your own personal use subject to restrictions set in these terms and conditions.
          </p>

          <h2>3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website in any way that impacts user access to this website</li>
            <li>
              Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause,
              harm to the website, or to any person or business entity
            </li>
          </ul>

          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall NewsHub, nor any of its officers, directors, and employees, be held liable for anything
            arising out of or in any way connected with your use of this website.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: terms@newshub.com
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
