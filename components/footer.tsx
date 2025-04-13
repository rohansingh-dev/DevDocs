import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} NewsHub. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
