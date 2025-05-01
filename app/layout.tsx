import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: {
    default: "CBG EasyPan® | Expresní vyřízení objednávky, rychlá montáž | +420 602 305 209",
    template: "%s | SuperPricky.cz - Odborník na protipožární řešení"
  },
  description: "SPECIÁLNÍ NABÍDKA: Montáž protipožárních příček CBG EasyPan® velmi rychle! ✓ Certifikace EI 30-90 ✓ Hmotnost 17,5 kg/m² ✓ Suchá montáž ✓ Bez stavebního povolení. Volejte ihned Ing. Václav Vachuška, Ph.D.",
  keywords: [
    "protipožární příčky cena",
    "montáž příček ihned",
    "CBG EasyPan dodavatel",
    "požární certifikace EI 60",
    "nejlehčí protipožární systém",
    "suchá montáž příček",
    "protipožární dělení prostoru",
    "nehořlavé stěny skladů"
  ],
  metadataBase: new URL('https://superpricky.cz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Protipožární příčky CBG EasyPan® | Odbavení do 24h | SuperPricky.cz",
    description: "Nabízíme nejrychlejší řešení protipožárních příček v ČR. Certifikace EI 30-90, Odbavení do 24 hodin. Volejte +420 602 305 209!",
    url: 'https://superpricky.cz',
    siteName: 'SuperPricky.cz',
    locale: 'cs_CZ',
    type: 'website',
    images: [{
      url: 'https://superpricky.cz/Logo_CBG.webp',
      width: 1200,
      height: 630,
      alt: 'Montáž protipožárních příček CBG EasyPan',
    }],
  },
  verification: {
    google: 'googlef1e74bf4ed807a2b',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#003366" />
        <meta name="geo.region" content="CZ" />
        <meta name="geo.placename" content="Horažďovice" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "SuperPricky.cz",
            "image": "https://superpricky.cz/Logo_CBG.webp",
            "@id": "https://superpricky.cz",
            "url": "https://superpricky.cz",
            "telephone": "+420602305209",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mayerova 1067",
              "addressLocality": "Horažďovice",
              "postalCode": "34101",
              "addressCountry": "CZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.3207",
              "longitude": "13.7016"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "16:00"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "24"
            }
          })}
        </script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}