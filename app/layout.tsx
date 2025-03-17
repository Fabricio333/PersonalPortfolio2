import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GitHubPagesRouter from "@/components/github-pages-router"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Professional Portfolio",
  description: "A showcase of my professional work, projects, and writings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* This helps with GitHub Pages */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              // If not on GitHub Pages, return
              if (window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1') {
                return;
              }
              
              // Get the repo name from the base path
              const basePath = '/portfolio'; // Change this to match your repo name
              
              // Redirect 404s back to the correct path
              const pathname = window.location.pathname;
              if (pathname.indexOf(basePath) !== 0) {
                window.location.replace(basePath + pathname);
              }
            })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <GitHubPagesRouter />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'