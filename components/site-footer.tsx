import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:h-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <Link href="/" className="font-medium">
            DevDocs
          </Link>
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:underline">
            Terms of Service
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
            Contact
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} DevDocs. All rights reserved.</div>
      </div>
    </footer>
  )
}
