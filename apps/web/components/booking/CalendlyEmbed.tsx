'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url?: string
  minHeight?: number
}

export function CalendlyEmbed({
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/optaimum/business-assessment?month=2025-11',
  minHeight = 650
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{
          minWidth: '320px',
          height: `${minHeight}px`,
          width: '100%'
        }}
      />
    </>
  )
}

// Alternative popup button component
export function CalendlyPopupButton({
  text = 'Schedule a Call',
  className = '',
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/optaimum/business-assessment?month=2025-11'
}: {
  text?: string
  className?: string
  url?: string
}) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()

    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: url,
        parentElement: document.body,
        prefill: {},
        utm: {
          utmSource: 'website',
          utmMedium: 'button',
          utmCampaign: 'assessment'
        }
      })
    } else {
      // Fallback to opening in new tab if widget doesn't load
      window.open(url, '_blank')
    }
  }

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button
        onClick={openCalendly}
        className={`inline-flex items-center justify-center rounded-md bg-optaimum-blue px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors ${className}`}
      >
        {text}
      </button>
    </>
  )
}