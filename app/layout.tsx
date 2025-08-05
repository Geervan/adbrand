import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./tremor.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
  description:
    "Transform your marketing with AI-powered automation. Generate high-converting ad copy, optimize campaigns, and scale your growth with ADmyBRAND AI Suite.",
  keywords: "AI marketing, marketing automation, ad copy generation, campaign optimization, digital marketing",
  authors: [{ name: "ADmyBRAND AI" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
    description:
      "Transform your marketing with AI-powered automation. Generate high-converting ad copy, optimize campaigns, and scale your growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - AI-Powered Marketing Automation",
    description:
      "Transform your marketing with AI-powered automation. Generate high-converting ad copy, optimize campaigns, and scale your growth.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
