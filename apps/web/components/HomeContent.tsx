'use client'

import Link from 'next/link'
import { CalendlyCTA } from '@/components/CalendlyCTA'
import {
  Brain, Zap, Shield, ArrowRight, CheckCircle, Users, TrendingUp,
  Clock, DollarSign, Target, Sparkles, Rocket, Award, Star,
  MessageSquare, Activity, ChevronRight, Building2
} from 'lucide-react'

// Quick stats
const stats = [
  { label: "SMBs Automated", value: "100+", icon: Building2 },
  { label: "Hours Saved Weekly", value: "25+", icon: Clock },
  { label: "ROI Average", value: "3.2x", icon: TrendingUp },
  { label: "Response Time", value: "47min", icon: Zap }
]

// Services overview with static colors
const services = [
  {
    title: "Lead Automation",
    description: "Respond to leads in 47 seconds, not 14 hours",
    icon: Rocket,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    title: "Appointment Management",
    description: "Reduce no-shows by 32% with smart reminders",
    icon: Clock,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-200"
  },
  {
    title: "Workflow Optimization",
    description: "Save 25+ hours weekly on repetitive tasks",
    icon: Activity,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200"
  }
]

// Benefits with proof
const benefits = [
  {
    title: "Immediate ROI",
    description: "Most clients see positive returns within 2-3 weeks",
    proof: "Average 3.2x ROI in first 90 days",
    icon: DollarSign,
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Quick Implementation",
    description: "Full setup in days, not months",
    proof: "5-day average from contract to launch",
    icon: Zap,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Risk-Free Trial",
    description: "30-day money-back guarantee",
    proof: "92% client retention rate",
    icon: Shield,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  }
]

// Success stories
const successStories = [
  {
    company: "Miami Medical Center",
    industry: "Healthcare",
    result: "Reduced no-shows by 40%",
    savings: "$18k/month saved",
    time: "32 hours/week automated",
    quote: "OptAImum's AI receptionist handles 80% of our appointment scheduling. Game-changer."
  },
  {
    company: "TechStart SaaS",
    industry: "Software",
    result: "5x faster lead response",
    savings: "47 second avg response",
    time: "25 hours/week saved",
    quote: "We went from 14-hour to 47-second lead response times. Conversion rates doubled."
  },
  {
    company: "Green Coast Retail",
    industry: "E-commerce",
    result: "89% support automation",
    savings: "$12k/month saved",
    time: "40 hours/week automated",
    quote: "AI handles 89% of customer questions. Our team focuses on complex issues now."
  }
]

export function HomeContent() {
  return (
    <div className="bg-white">
      {/* Hero Section - Above the Fold */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Trust indicator */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-900">Trusted by 100+ SMBs</span>
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Save 25+ Hours Every Week<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                With AI That Actually Works
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-xl text-gray-600 mb-8">
              We build simple AI automations for SMBs. No complex integrations.
              No 6-month projects. Just practical tools that work from day one.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CalendlyCTA
                mode="popup"
                buttonClassName="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl"
                text="Book Your Free Assessment"
                size="lg"
                showIcon={true}
              />
              <Link
                href="/case-study"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                See Real Results
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>30-day money back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Setup in 5 days or less</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span>3.2x average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-3">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Biggest Time-Wasters, Automated
            </h2>
            <p className="text-xl text-gray-600">
              We focus on the 20% of tasks that eat 80% of your time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.bgColor} mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="/solutions" className={`inline-flex items-center ${service.iconColor} font-semibold hover:underline`}>
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See how SMBs like yours save time and money with AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/90 text-sm">{story.industry}</span>
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{story.company}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gray-900 mb-1">{story.result}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-green-600 font-semibold">{story.savings}</span>
                      <span className="text-blue-600 font-semibold">{story.time}</span>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/case-study"
              className="inline-flex items-center text-blue-600 font-semibold hover:underline"
            >
              Read detailed case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits with Proof */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why SMBs Choose OptAImum
            </h2>
            <p className="text-xl text-gray-600">
              Practical, proven, and profitable automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${benefit.bgColor} mb-4`}>
                  <benefit.icon className={`h-10 w-10 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-800">{benefit.proof}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get 25+ Hours Back Every Week?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free 30-minute assessment. We'll identify your biggest automation opportunity.
          </p>

          <CalendlyCTA
            mode="popup"
            buttonClassName="bg-white text-blue-600 px-10 py-4 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            text="Book Free Assessment Now"
            size="lg"
            showIcon={true}
            onScheduled={() => {
              // Track conversion event
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'schedule_assessment', {
                  event_category: 'engagement',
                  event_label: 'homepage_final_cta'
                })
              }
            }}
          />

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>30-minute call</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>100% confidential</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}