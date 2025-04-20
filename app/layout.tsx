import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DocsSidebar } from "@/components/docs-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevDocs - Developer Documentation",
  description: "Comprehensive documentation for developers froAm beginner to advanced levels",
  keywords: "HTML, CSS, JavaScript, Python, C, Java, React, Node.js, programming, coding, development, tutorials",
  authors: [{ name: "DevDocs Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolioweb.xyz",
    title: "DevDocs - Developer Documentation",
    description: "Comprehensive documentation for developers from beginner to advanced levels",
    siteName: "DevDocs",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDocs - Developer Documentation",
    description: "Comprehensive documentation for developers from beginner to advanced levels",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://portfolioweb.xyz" />
        <link rel="icon" href="/Dev-Docs.ico" type="image/x-icon"></link>
        <meta name="google-adsense-account" content="ca-pub-1571996475837550"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1571996475837550"
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="relative flex flex-col min-h-screen">
              <SiteHeader />
              <div className="flex flex-1">
                <DocsSidebar />
                <div className="flex flex-col flex-1">
                  <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
                  <SiteFooter />
                </div>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'