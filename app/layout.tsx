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
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon/favicon.svg", color: "#b6b091" },
      { rel: "shortcut icon", url: "/favicon/favicon.ico" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NEOTIQA",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "NEOTIQA - AI Extension Visualisation",
    description: "Double your conversion rates with AI-powered home extension visualisations",
    type: "website",
    locale: "en_GB",
    url: "https://neotiqa.com",
    siteName: "NEOTIQA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEOTIQA - AI Extension Visualisation",
    description: "Double your conversion rates with AI-powered home extension visualisations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#b6b091" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NEOTIQA" />
        <meta name="application-name" content="NEOTIQA" />
        <meta name="msapplication-TileColor" content="#b6b091" />
        <meta name="msapplication-config" content="/favicon/site.webmanifest" />
      </head>
      <body className={`font-sans ${montserrat.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="light">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
