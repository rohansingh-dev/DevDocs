"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">NewsHub</span>
          </Link>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between px-4">
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/?category=business" className="text-sm font-medium hover:underline underline-offset-4">
            Business
          </Link>
          <Link href="/?category=technology" className="text-sm font-medium hover:underline underline-offset-4">
            Technology
          </Link>
          <Link href="/?category=entertainment" className="text-sm font-medium hover:underline underline-offset-4">
            Entertainment
          </Link>
          <Link href="/?category=sports" className="text-sm font-medium hover:underline underline-offset-4">
            Sports
          </Link>
          <Link href="/?category=science" className="text-sm font-medium hover:underline underline-offset-4">
            Science
          </Link>
          <Link href="/?category=health" className="text-sm font-medium hover:underline underline-offset-4">
            Health
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pr-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">NewsHub</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="container grid gap-6 px-4 py-6">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="search"
                placeholder="Search..."
                className="flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </form>
            <nav className="grid gap-4">
              <Link
                href="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/?category=business"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                href="/?category=technology"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                href="/?category=entertainment"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Entertainment
              </Link>
              <Link
                href="/?category=sports"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Sports
              </Link>
              <Link
                href="/?category=science"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Science
              </Link>
              <Link
                href="/?category=health"
                className="text-lg font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Health
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
