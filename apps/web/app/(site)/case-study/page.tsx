'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalendlyCTA } from '@/components/CalendlyCTA'
import {
  ArrowRight, TrendingUp, Users, Zap, Clock, DollarSign,
  AlertCircle, CheckCircle, Target, Shield, ChevronRight, Star,
  TrendingDown, Rocket, Award, MessageSquare, Phone, Building2,
  Activity, Calendar, UserCheck, Quote
} from 'lucide-react'

// Real Results Data
const resultsData = [
  {
    client: "Dental Practice",
    metric: "32%",
    detail: "fewer no-shows",
    timeframe: "in 3 weeks",
    icon: Calendar,
    color: "blue"
  },
  {
    client: "Home Services",
    metric: "47min",
    detail: "response time",
    timeframe: "down from 14hrs",
    icon: Clock,
    color: "green"
  },
  {
    client: "Law Firm",
    metric: "25hrs",
    detail: "saved weekly",
    timeframe: "on intake alone",
    icon: TrendingUp,
    color: "purple"
  }
]

// Testimonials
const testimonials = [
  {
    quote: "We went from losing 3-4 appointments daily to almost zero no-shows. The ROI was immediate.",
    author: "Dr. Sarah Chen",
    role: "Dental Practice Owner",
    result: "Saved $40k/year"
  },
  {
    quote: "Our team saved 25 hours per week just on intake. We can actually focus on serving clients now.",
    author: "Michael Rodriguez",
    role: "Managing Partner",
    result: "5x faster intake"
  },
  {
    quote: "Lead response time went from next-day to under an hour. We're booking 40% more jobs.",
    author: "Tom Mitchell",
    role: "HVAC Business Owner",
    result: "40% more revenue"
  }
]

// Process Timeline
const processSteps = [
  {
    week: "Week 1-2",
    title: "Find Your Time-Wasters",
    description: "We shadow your team and identify the biggest bottlenecks",
    icon: Target
  },
  {
    week: "Week 3-4",
    title: "Build & Test Solutions",
    description: "Create simple automations that actually work",
    icon: Zap
  },
  {
    week: "Week 5-6",
    title: "Train Your Team",
    description: "Hands-on training until everyone's confident",
    icon: Users
  },
  {
    week: "Month 2+",
    title: "Scale & Support",
    description: "Weekly check-ins and continuous improvement",
    icon: Rocket
  }
]

export default function CaseStudyPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="bg-white">
      {/* Hero Section - Cleaner, more focused */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* One-line value prop */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              AI-powered automation for SMBs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mt-2">
                Big-firm results at ⅓ the price
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-600">
              Same results. ⅓ the price. 10x the hand-holding.
              We fix the problems costing you $6,400+ every month.
            </p>

            {/* Primary and Secondary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyCTA
                mode="popup"
                buttonClassName="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl"
                text="Book Free Assessment"
                size="lg"
                showIcon={true}
              />

              <a
                href="#process"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-colors"
              >
                See How We Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">30-Day Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">No Lock-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">100+ SMBs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Results - Visual Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real SMBs, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Not theory. Actual results from businesses like yours.
            </p>
          </div>

          {/* Results Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {resultsData.map((result, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-t-4 border-${result.color}-500 hover:shadow-xl transition-all`}>
                <div className="flex items-center justify-between mb-4">
                  <result.icon className={`h-10 w-10 text-${result.color}-500`} />
                  <span className="text-sm font-semibold text-gray-500">{result.client}</span>
                </div>
                <p className={`text-4xl font-bold text-${result.color}-600 mb-2`}>{result.metric}</p>
                <p className="text-lg font-semibold text-gray-900">{result.detail}</p>
                <p className="text-sm text-gray-600 mt-2">{result.timeframe}</p>
              </div>
            ))}
          </div>

          {/* CTA after results */}
          <div className="text-center">
            <CalendlyCTA
              mode="popup"
              buttonClassName="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 shadow-lg"
              text="Get Similar Results"
              showIcon={true}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-green-600 mt-2">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Visual */}
      <section id="process" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Problem to Solution in 30 Days
            </h2>
            <p className="text-xl text-gray-600">
              Our proven 4-step process gets you results fast
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2"></div>

            <div className="relative grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-500 z-10">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm font-semibold text-blue-600 mb-2">{step.week}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-500">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-600">{step.week}</p>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after process */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">Ready to start Week 1?</p>
            <CalendlyCTA
              mode="popup"
              buttonClassName="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 shadow-lg"
              text="Book Free Assessment"
              showIcon={true}
            />
          </div>
        </div>
      </section>

      {/* Urgency & Cost of Inaction */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-red-500">
            <div className="text-center">
              <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Every Month You Wait Costs You Money
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">$77k</p>
                  <p className="text-gray-700">yearly loss to inefficiency</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-orange-600">$6,400</p>
                  <p className="text-gray-700">monthly opportunity cost</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-600">100+</p>
                  <p className="text-gray-700">hours of busy work</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Your competitors are automating right now. Every day you wait, they pull further ahead.
              </p>

              <CalendlyCTA
                mode="popup"
                buttonClassName="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 text-lg shadow-xl"
                text="Stop Losing Money - Book Now"
                size="lg"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left"></th>
                  <th className="px-6 py-4 text-center">Big Consultancies</th>
                  <th className="px-6 py-4 text-center">DIY Tools</th>
                  <th className="px-6 py-4 text-center bg-green-700">OptAImum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Price</td>
                  <td className="px-6 py-4 text-center text-red-600">$500k+</td>
                  <td className="px-6 py-4 text-center text-orange-600">$500/mo + Your Time</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold text-green-600">From $3k</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Timeline</td>
                  <td className="px-6 py-4 text-center">6-12 months</td>
                  <td className="px-6 py-4 text-center">Never-ending</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold">30 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Support</td>
                  <td className="px-6 py-4 text-center">Disappear after delivery</td>
                  <td className="px-6 py-4 text-center">YouTube tutorials</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold">Weekly office hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop Reading. Start Automating.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            30-minute call. We'll identify your biggest time-waster and show you exactly how to fix it.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
            <p className="text-white font-semibold mb-4">What you'll get in 30 minutes:</p>
            <ul className="text-left text-white space-y-2 max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Your #1 automation opportunity identified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Real examples from similar businesses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Ballpark ROI and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Clear next steps (with or without us)</span>
              </li>
            </ul>
          </div>

          <CalendlyCTA
            mode="popup"
            buttonClassName="bg-white text-blue-600 px-12 py-5 text-xl font-bold rounded-lg shadow-2xl hover:shadow-3xl"
            text="Book Your Free Assessment Now"
            size="lg"
            showIcon={true}
          />

          <p className="mt-6 text-blue-100">
            No sales pressure. If we can't help, we'll tell you straight up.
          </p>
        </div>
      </section>

      {/* Inline Calendly Section for Contact Page */}
      <section id="book-inline" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Schedule Your Free Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Pick a time that works for you. We'll call you.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-2">
            <CalendlyCTA
              mode="inline"
              minHeight={650}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </section>

      {/* Chat Widget Placeholder */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors group">
          <MessageSquare className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Questions? Let's chat!
          </span>
        </button>
      </div>
    </div>
  )
}