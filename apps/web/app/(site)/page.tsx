import { Metadata } from 'next'
import { HomeContent } from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'OptAImum - AI Automation for SMBs | Save 25+ Hours Weekly',
  description: 'Transform your business with practical AI automations that pay for themselves in weeks. Join 100+ SMBs saving 25+ hours weekly with OptAImum.',
  keywords: 'AI automation, SMB automation, workflow automation, business process automation, AI consulting, OptAImum',
  openGraph: {
    title: 'Save 25+ Hours Weekly with AI Automation | OptAImum',
    description: 'Transform your business with practical AI automations. Free assessment. ROI in weeks, not months.',
    type: 'website',
    url: 'https://optaimum.com',
    images: [{
      url: '/og/home.png',
      width: 1200,
      height: 630,
      alt: 'OptAImum - AI Automation for SMBs'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Save 25+ Hours Weekly with AI Automation',
    description: 'Transform your business with practical AI automations. Free assessment.',
  }
}

export default function HomePage() {
  return <HomeContent />
}