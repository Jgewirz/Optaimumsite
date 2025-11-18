'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Loader2 } from 'lucide-react'
import Script from 'next/script'

declare global {
  interface Window {
    Calendly: any
  }
}

interface CalendlyCTAProps {
  mode?: 'popup' | 'inline'
  url?: string
  text?: string
  className?: string
  buttonClassName?: string
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  showIcon?: boolean
  minHeight?: number
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
    phone?: string
  }
  onScheduled?: () => void
}

export function CalendlyCTA({
  mode = 'popup',
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/jgewirz',
  text = 'Book Free Assessment',
  className = '',
  buttonClassName = '',
  size = 'lg',
  variant = 'default',
  showIcon = true,
  minHeight = 650,
  prefill = {},
  onScheduled
}: CalendlyCTAProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if script is already loaded
    if (window.Calendly) {
      setIsScriptLoaded(true)
    }

    // Listen for Calendly events
    if (window.Calendly && onScheduled) {
      window.addEventListener('calendly.event_scheduled', onScheduled)
      return () => {
        window.removeEventListener('calendly.event_scheduled', onScheduled)
      }
    }
  }, [onScheduled])

  const openCalendly = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (typeof window !== 'undefined' && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: url,
          parentElement: document.body,
          prefill: prefill,
          utm: {
            utmSource: 'website',
            utmMedium: 'button',
            utmCampaign: 'free_assessment',
            utmContent: 'cta'
          }
        })
      } else {
        // Fallback to opening in new tab if widget doesn't load
        window.open(url, '_blank')
      }
    } catch (error) {
      console.error('Failed to open Calendly:', error)
      // Fallback to direct link
      window.open(url, '_blank')
    } finally {
      setTimeout(() => setIsLoading(false), 500)
    }
  }

  if (mode === 'inline') {
    return (
      <div className={`calendly-inline-container ${className} relative`}>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          onLoad={() => setIsScriptLoaded(true)}
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        {!isScriptLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-2" />
              <p className="text-sm text-gray-600">Loading calendar...</p>
            </div>
          </div>
        )}
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{
            minWidth: '320px',
            height: `${minHeight}px`,
            width: '100%'
          }}
        />
      </div>
    )
  }

  // Popup mode (default)
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Button
        onClick={openCalendly}
        className={`${buttonClassName} group transition-all duration-300 transform hover:scale-105`}
        size={size}
        variant={variant}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            {showIcon && <Calendar className="mr-2 h-5 w-5" />}
            {text}
            {showIcon && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
          </>
        )}
      </Button>
    </>
  )
}