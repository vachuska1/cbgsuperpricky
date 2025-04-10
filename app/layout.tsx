import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: {
    default: "SuperPricky.cz | Nejlehčí a nejrychlejší protipožární příčky | CBG EasyPan®",
    template: "%s | SuperPricky.cz"
  },
  description: "Specializujeme se na nehořlavé příčky CBG EasyPan® – suchá montáž, nízká hmotnost a certifikovaná požární odolnost EI 30-60. Rychlé řešení pro byty, kanceláře i průmyslové prostory. Kontaktujte Ing. Václava Vachušku, Ph.D.",
  keywords: [
    "protipožární příčka", 
    "nehořlavá příčka", 
    "CBG EasyPan", 
    "suchá montáž příček",
    "požární odolnost EI 60",
    "nejlehčí protipožární systém",
    "Ing. Václav Vachuška",
    "protipožární dělicí stěny"
  ],
  generator: 'Next.js',
  authors: [{ name: "Ing. Aleš Vachuška", url: "https://superpricky.cz" }],
  metadataBase: new URL('https://superpricky.cz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Superpříčky.cz | Protipožární příčky CBG EasyPan®",
    description: "Nejrychlejší montáž nehořlavých příček s certifikací EI 30-60 | Ing. Václav Vachuška, Ph.D.",
    url: 'https://superpricky.cz',
    siteName: 'SuperPricky.cz',
    locale: 'cs_CZ',
    type: 'website',
  },
  verification: {
    google: 'googlef1e74bf4ed807a2b',
  }
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
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon-32x32.png" />
        {/* Android Chrome */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Superpříčky.cz",
    "image": "https://superpricky.cz/logo.webp",
    "description": "Výroba a montáž protipožárních příček CBG EasyPan®",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mayerova 1067",
      "addressLocality": "Horažďovice",
      "postalCode": "341 01",
      "addressCountry": "CZ"
    },
    "telephone": "+420602305209",
    "email": "vachuska@ekostat.cz",
    "founder": {
      "@type": "Person",
      "name": "Ing. Václav Vachuška, Ph.D.",
      "jobTitle": "Prodejce"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
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