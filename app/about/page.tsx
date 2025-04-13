export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About NewsHub</h1>
            <p className="text-muted-foreground">Your trusted source for the latest news and updates</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p>
              At NewsHub, we believe in the power of information. Our mission is to provide accurate, timely, and
              relevant news to our readers, helping them stay informed about the world around them. We strive to present
              news in a clear, concise, and unbiased manner, allowing our readers to form their own opinions based on
              facts.
            </p>

            {/* Google AdSense Ad Unit */}
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-1571996475837550" // Replace with your AdSense publisher ID
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p>
              NewsHub was founded in 2023 with a simple goal: to create a modern news platform that cuts through the
              noise and delivers what matters most. In an era of information overload, we focus on curating and
              presenting news that is relevant, accurate, and important.
            </p>
            <p>
              Our team of experienced journalists and tech enthusiasts work together to bring you a seamless news
              experience, combining traditional journalistic values with modern technology.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Sources</h2>
            <p>
              We aggregate news from various reputable sources around the world, ensuring that our readers get a
              comprehensive view of global events. Our platform is powered by NewsAPI, which allows us to bring you the
              latest headlines from trusted news organizations.
            </p>
            <p>
              While we strive to provide accurate information, we encourage our readers to verify news from multiple
              sources and to approach all information with critical thinking.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              We value your feedback and suggestions. If you have any questions, comments, or concerns, please don't
              hesitate to reach out to us at{" "}
              <a href="mailto:contact@newshub.example.com" className="text-primary hover:underline">
                contact@newshub.example.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
