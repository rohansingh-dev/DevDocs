"use client"

import { useEffect, useRef, useState } from "react"

interface AdBannerProps {
  slot: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  className?: string
}

export function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true)

    // Only run on client side and after component is fully rendered
    if (typeof window === "undefined") return

    // Delay ad initialization to ensure container is properly sized
    const timer = setTimeout(() => {
      try {
        // Check if adsbygoogle is defined
        if ((window as any).adsbygoogle) {
          ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
          ;(window as any).adsbygoogle.push({})
        }
      } catch (error) {
        console.error("Ad error:", error)
      }
    }, 200) // Updated delay to 200ms for better ad initialization

    return () => clearTimeout(timer)
  }, [])

  // Set appropriate size classes based on format
  const sizeClasses = {
    auto: "min-h-[250px] w-full",
    horizontal: "min-h-[90px] w-full",
    vertical: "min-h-[600px] w-full md:min-w-[160px]",
    rectangle: "min-h-[250px] w-full md:min-w-[300px]",
  }

  // Don't render anything on server to prevent hydration issues
  if (!isClient) {
    return <div className={`ad-placeholder ${sizeClasses[format]} ${className}`}></div>
  }

  return (
    <div className={`ad-container my-6 ${className}`} ref={adRef}>
      <div className={`overflow-hidden ${sizeClasses[format]}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-1571996475837550"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  )
}
