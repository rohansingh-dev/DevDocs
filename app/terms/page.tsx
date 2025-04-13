export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: April 13, 2023</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the NewsHub
              website.
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access our website.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              Our website and its original content, features, and functionality are owned by NewsHub and are protected
              by international copyright, trademark, patent, trade secret, and other intellectual property or
              proprietary rights laws.
            </p>

            <h2>3. User Content</h2>
            <p>
              You retain any and all rights to any content you submit, post, or display on or through our website. By
              submitting, posting, or displaying content on or through our website, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, perform, and display such content.
            </p>

            <h2>4. Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by
              NewsHub. NewsHub has no control over, and assumes no responsibility for, the content, privacy policies, or
              practices of any third-party websites or services. You further acknowledge and agree that NewsHub shall
              not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
              caused by or in connection with the use of or reliance on any such content, goods, or services available
              on or through any such websites or services.
            </p>

            <h2>5. Termination</h2>
            <p>
              We may terminate or suspend your access to our website immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms
              which by their nature should survive termination shall survive termination, including, without limitation,
              ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              Your use of our website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE"
              basis. The website is provided without warranties of any kind, whether express or implied, including, but
              not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement,
              or course of performance.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
              will not be considered a waiver of those rights.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing
              to access or use our website after those revisions become effective, you agree to be bound by the revised
              terms.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:terms@newshub.example.com">terms@newshub.example.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
