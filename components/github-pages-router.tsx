"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// This component helps with GitHub Pages routing
export default function GitHubPagesRouter() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if we're on GitHub Pages and handle the redirect
    const { search, hash } = window.location

    // GitHub Pages redirects 404s to /404.html, so we need to redirect back
    if (pathname === "/404") {
      const redirectPath = sessionStorage.getItem("redirectPath")
      if (redirectPath) {
        sessionStorage.removeItem("redirectPath")
        window.location.replace(redirectPath)
      }
    }

    // Store the path for potential 404 redirects
    if (pathname !== "/404") {
      sessionStorage.setItem("redirectPath", pathname + search + hash)
    }
  }, [pathname])

  return null
}

