import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AWS Community Day Cebu 2025 - Build Beyond Limits",
  description:
    "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
  keywords: "AWS, Community Day, Cebu, 2025, Cloud Computing, Technology Conference",
  authors: [{ name: "AWS User Group Philippines - Cebu Chapter" }],
  creator: "AWS User Group Philippines - Cebu Chapter",
  publisher: "AWS User Group Philippines - Cebu Chapter",
  metadataBase: new URL("https://awscommunitydaycebu2025.gauciv.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://awscommunitydaycebu2025.gauciv.tech",
    title: "AWS Community Day Cebu 2025 - Build Beyond Limits",
    description:
      "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
    siteName: "AWS Community Day Cebu 2025",
    images: [
      {
        url: "https://awscommunitydaycebu2025.gauciv.tech/awscdcebu-banner.png",
        width: 1200,
        height: 630,
        alt: "AWS Community Day Cebu 2025 - Build Beyond Limits",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Community Day Cebu 2025 - Build Beyond Limits",
    description:
      "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
    images: ["https://awscommunitydaycebu2025.gauciv.tech/awscdcebu-banner.png"],
    creator: "@AWSUserGroupPH",
    site: "@AWSUserGroupPH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Additional meta tags for better social media support */}
        <meta name="theme-color" content="#232F3E" />
        <meta name="msapplication-TileColor" content="#232F3E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional Open Graph tags for better social media support */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:updated_time" content="2025-09-11T00:00:00Z" />
        
        {/* Additional Twitter Card tags */}
        <meta name="twitter:image:alt" content="AWS Community Day Cebu 2025 - Build Beyond Limits" />
        
        {/* Facebook App ID (if you have one) */}
        {/* <meta property="fb:app_id" content="YOUR_FB_APP_ID" /> */}
        
        {/* Structured data for events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "AWS Community Day Cebu 2025",
              "description": "Join us for AWS Community Day Cebu 2025 on September 13, 2025 at University of the Philippines Cebu. Build Beyond Limits with 9 amazing speakers and the AWS community.",
              "startDate": "2025-09-13T08:00:00+08:00",
              "endDate": "2025-09-13T18:00:00+08:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "University of the Philippines Cebu Performing Arts Hall",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Gorordo Avenue, Lahug",
                  "addressLocality": "Cebu City",
                  "postalCode": "6000",
                  "addressCountry": "Philippines"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "AWS User Group Philippines - Cebu Chapter",
                "url": "https://awscommunitydaycebu2025.gauciv.tech"
              },
              "image": "https://awscommunitydaycebu2025.gauciv.tech/awscdcebu-banner.png",
              "url": "https://awscommunitydaycebu2025.gauciv.tech"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
