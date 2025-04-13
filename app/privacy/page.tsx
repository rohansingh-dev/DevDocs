export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: April 13, 2023</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              At NewsHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us</li>
              <li>Participate in surveys or contests</li>
            </ul>

            <p>
              The types of information we may collect include your name, email address, and any other information you
              choose to provide.
            </p>

            <h2>Automatically Collected Information</h2>
            <p>
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Understand how users interact with our website</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are files with a small amount of data that may include an anonymous unique
              identifier.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services, such as Google Analytics, to monitor and analyze the use of our website.
              These third parties may use cookies and other tracking technologies to collect information about your use
              of our website.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse,
              unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@newshub.example.com">privacy@newshub.example.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
