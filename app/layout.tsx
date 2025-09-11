import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "AI-Powered Construction Design Visualisation",
  description:
    "Show clients their future home instantly with AI-generated extensions. Boost approval rates with realistic extension designs.",
  generator: "react.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="light">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
