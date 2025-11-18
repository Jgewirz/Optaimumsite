'use client'

import { useState } from 'react'
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

// Services overview
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

export default function HomePage() {
  const [email, setEmail] = useState('')

  return (
    <div className="bg-white">
      {/* Hero Section - Clean and Professional */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">AI Automation for Real SMBs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              We Make AI Work for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                Small Business
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 mb-10">
              While McKinsey charges millions for "digital transformation,"
              we deliver the same results for SMBs at 1/3 the price—with 10x the support.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyCTA
                mode="popup"
                buttonClassName="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                text="Book Your Free Assessment"
                size="lg"
                showIcon={true}
              />

              <Link
                href="/case-study"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                See Real Results
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">30-Day Results Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm">No Lock-in Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-sm">100+ SMBs Automated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The $77k Problem Hiding in Your Business
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              That's what inefficiency costs the average SMB every year. Here's what's really happening:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-500 hover:shadow-xl transition-shadow duration-200">
              <DollarSign className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lost Revenue
              </h3>
              <p className="text-gray-600 mb-4">
                14-hour response times mean leads go cold. Your competitors respond in minutes.
              </p>
              <p className="text-2xl font-bold text-red-600">40% loss</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-200">
              <Clock className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Wasted Time
              </h3>
              <p className="text-gray-600 mb-4">
                Your best people spend 23% of their time on data entry and admin work.
              </p>
              <p className="text-2xl font-bold text-orange-600">920 hrs/year</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500 hover:shadow-xl transition-shadow duration-200">
              <Users className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No-Shows
              </h3>
              <p className="text-gray-600 mb-4">
                Manual scheduling and no reminders mean 32% of appointments don't show up.
              </p>
              <p className="text-2xl font-bold text-purple-600">$18k/year</p>
            </div>
          </div>

          {/* CTA after problem */}
          <div className="text-center mt-12">
            <CalendlyCTA
              mode="popup"
              buttonClassName="inline-flex items-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-200"
              text="Fix These Problems Now"
              size="lg"
              showIcon={true}
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple Automations, Massive Impact
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We don't do 6-month implementations. We fix your biggest problems in 30 days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className={`inline-flex p-3 rounded-lg ${service.bgColor} mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From Chaos to Clarity in 30 Days
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our proven 4-step process gets you results fast
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { week: "Week 1", title: "Identify", desc: "Find your biggest time-wasters", icon: Target },
              { week: "Week 2", title: "Build", desc: "Create simple, bulletproof fixes", icon: Zap },
              { week: "Week 3", title: "Train", desc: "Get your team confident", icon: Users },
              { week: "Week 4", title: "Scale", desc: "Expand and optimize", icon: Rocket }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-500 mb-6">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-2">{step.week}</p>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real SMBs, Real Results
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "32% reduction in no-shows saved us $40k this year alone.",
                author: "Dr. Sarah Chen",
                role: "Dental Practice Owner"
              },
              {
                quote: "We went from 14-hour to 47-minute lead response. Game changer.",
                author: "Mike Johnson",
                role: "HVAC Business Owner"
              },
              {
                quote: "25 hours saved weekly. My team can finally focus on clients.",
                author: "Lisa Park",
                role: "Law Firm Partner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-study" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Read More Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Big Consultancies</th>
                  <th className="px-6 py-4 text-center">DIY Tools</th>
                  <th className="px-6 py-4 text-center bg-blue-700">OptAImum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Price</td>
                  <td className="px-6 py-4 text-center text-red-600">$500k+</td>
                  <td className="px-6 py-4 text-center text-orange-600">$500/mo + Time</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold text-green-600">From $3k</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Timeline</td>
                  <td className="px-6 py-4 text-center">6-12 months</td>
                  <td className="px-6 py-4 text-center">Never-ending</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold">30 days</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Support</td>
                  <td className="px-6 py-4 text-center">Disappear</td>
                  <td className="px-6 py-4 text-center">Forums</td>
                  <td className="px-6 py-4 text-center bg-green-50 font-bold">Weekly calls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Stop Losing $6,400 Every Month?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 100+ SMBs who automated their biggest problems in 30 days
          </p>

          <CalendlyCTA
            mode="popup"
            buttonClassName="inline-flex items-center px-12 py-5 text-xl font-bold text-blue-600 bg-white rounded-lg shadow-2xl hover:bg-gray-100 transition-all duration-200"
            text="Book Your Free Assessment Now"
            size="lg"
            showIcon={true}
          />

          <p className="mt-6 text-blue-100 text-sm">
            30-minute call • No pressure • Real solutions
          </p>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors duration-200 group">
          <MessageSquare className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Questions? Let's chat!
          </span>
        </button>
      </div>
    </div>
  )
}