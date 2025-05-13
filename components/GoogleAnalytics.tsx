'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    window.gtag('event', 'page_view', { page_path: url })
  }, [pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-V0DEXLEGJW" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V0DEXLEGJW');
        `}
      </Script>
    </>
  )
}