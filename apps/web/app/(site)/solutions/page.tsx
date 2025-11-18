'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalendlyCTA } from '@/components/CalendlyCTA'
import {
  MessageSquare, Users, Workflow, ArrowRight, CheckCircle, Zap,
  Clock, TrendingUp, Shield, Star, Target, Rocket, Calendar,
  Activity, ChevronRight, DollarSign, AlertCircle
} from 'lucide-react'

const solutions = [
  {
    id: 'no-show',
    name: 'No-Show Reduction',
    icon: Calendar,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    tagline: 'Cut appointment no-shows by 40%+',
    stat: '32%',
    statLabel: 'fewer no-shows',
    problems: [
      'Losing $100k+ annually to missed appointments',
      'Staff time wasted on manual reminder calls',
      'No way to predict high-risk bookings',
    ],
    solution: 'Intelligent reminder system with 2-way SMS, risk scoring based on history, and optimal timing algorithms.',
    outcomes: [
      '40-60% reduction in no-shows',
      'Save 15+ staff hours per week',
      'ROI positive in 30 days',
    ],
    features: [
      'Smart reminder timing',
      'Risk-based outreach',
      '2-way SMS confirmation',
      'Automated rescheduling',
    ],
    testimonial: {
      quote: "We went from 8 no-shows daily to less than 2. Game changer.",
      author: "Dr. Sarah Chen",
      role: "Dental Practice Owner"
    }
  },
  {
    id: 'lead-triage',
    name: 'Lead Response Automation',
    icon: Rocket,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    tagline: 'Respond to leads in 47 seconds',
    stat: '47min',
    statLabel: 'response time',
    problems: [
      '14+ hour average response time',
      'Leads going to competitors',
      'No lead scoring or routing',
    ],
    solution: 'Instant lead capture, qualification, routing, and automated first response within 1 minute.',
    outcomes: [
      '78% more conversions',
      'Under 1-minute response',
      '40% more qualified leads',
    ],
    features: [
      'Instant lead capture',
      'Smart routing rules',
      'Auto-qualification',
      'Follow-up sequences',
    ],
    testimonial: {
      quote: "Our close rate doubled just by responding faster.",
      author: "Mike Johnson",
      role: "HVAC Business Owner"
    }
  },
  {
    id: 'workflow',
    name: 'Workflow Optimization',
    icon: Activity,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    tagline: 'Save 25+ hours weekly',
    stat: '25hrs',
    statLabel: 'saved weekly',
    problems: [
      '23% of time on data entry',
      'Manual processes everywhere',
      'Constant context switching',
    ],
    solution: 'Custom automation workflows that eliminate repetitive tasks and streamline operations.',
    outcomes: [
      '25+ hours saved weekly',
      '50% faster processing',
      'Zero data entry errors',
    ],
    features: [
      'Custom workflows',
      'Process automation',
      'Integration hub',
      'Real-time sync',
    ],
    testimonial: {
      quote: "My team can finally focus on clients, not paperwork.",
      author: "Lisa Park",
      role: "Law Firm Partner"
    }
  }
]

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Proven Automation Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Fix Your Biggest Problems
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                in 30 Days
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
              We don't do everything. We fix the 3 problems that cost SMBs the most money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyCTA
                mode="popup"
                buttonClassName="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                text="Get Your Free Assessment"
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
          </div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-6">THE PROBLEMS WE SOLVE</p>
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">$77k</p>
              <p className="mt-2 text-sm text-gray-600">Lost to inefficiency</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">14hrs</p>
              <p className="mt-2 text-sm text-gray-600">Lead response time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">32%</p>
              <p className="mt-2 text-sm text-gray-600">Appointment no-shows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Three Solutions, Massive Impact
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Each solution is battle-tested across 100+ SMBs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200 ${
                  selectedSolution.id === solution.id ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedSolution(solution)}
              >
                <div className={`bg-gradient-to-br from-${solution.iconColor.replace('text-', '')}/20 to-${solution.iconColor.replace('text-', '')}/10 p-6`}>
                  <solution.icon className={`h-12 w-12 ${solution.iconColor} mb-4`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.name}</h3>
                  <p className="text-gray-600">{solution.tagline}</p>
                </div>

                <div className="p-6">
                  <div className="mb-6 text-center">
                    <p className={`text-4xl font-bold ${solution.iconColor}`}>{solution.stat}</p>
                    <p className="text-sm text-gray-600">{solution.statLabel}</p>
                  </div>

                  <div className="space-y-3">
                    {solution.outcomes.slice(0, 2).map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`mt-6 w-full ${solution.iconColor} font-semibold hover:opacity-80 transition-opacity`}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem Side */}
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">The Problem</h3>
              <div className="space-y-4">
                {selectedSolution.problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                <p className="text-sm font-semibold text-red-900 mb-2">Cost of Inaction</p>
                <p className="text-2xl font-bold text-red-600">$6,400+/month</p>
                <p className="text-sm text-red-700 mt-1">Every month you wait</p>
              </div>
            </div>

            {/* Solution Side */}
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">Our Solution</h3>
              <p className="text-gray-700 mb-6">{selectedSolution.solution}</p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedSolution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-900 mb-2">Expected ROI</p>
                <p className="text-2xl font-bold text-green-600">3.2x</p>
                <p className="text-sm text-green-700 mt-1">In the first year</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{selectedSolution.testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{selectedSolution.testimonial.author}</p>
                  <p className="text-sm text-gray-600">{selectedSolution.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple Implementation, Fast Results
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We handle everything—you just watch the results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Audit", desc: "2-day assessment of your current processes", icon: Target },
              { step: "2", title: "Design", desc: "Custom workflow tailored to your needs", icon: Workflow },
              { step: "3", title: "Build", desc: "Implementation and testing in your environment", icon: Zap },
              { step: "4", title: "Train", desc: "Team training until everyone's confident", icon: Users }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-blue-500">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transparent, SMB-Friendly Pricing
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              No surprises, no lock-ins, no enterprise pricing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gray-400 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for single problem</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$3k</span>
                <span className="text-gray-600">/solution</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">One automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">30-day implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Team training</span>
                </li>
              </ul>
              <CalendlyCTA
                mode="popup"
                buttonClassName="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                text="Get Started"
              />
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-xl p-8 border-t-4 border-blue-500 transform scale-105">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 mb-6">Fix your top 3 problems</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$8k</span>
                <span className="text-gray-600">/package</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Three automations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">60-day support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Weekly office hours</span>
                </li>
              </ul>
              <CalendlyCTA
                mode="popup"
                buttonClassName="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                text="Get Started"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scale</h3>
              <p className="text-gray-600 mb-6">Ongoing optimization</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$2k</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Unlimited tweaks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">New automations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
              <CalendlyCTA
                mode="popup"
                buttonClassName="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all"
                text="Get Started"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stop Bleeding Money. Start Growing.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            30-minute assessment to identify your biggest opportunity
          </p>

          <CalendlyCTA
            mode="popup"
            buttonClassName="inline-flex items-center px-12 py-5 text-xl font-bold text-blue-600 bg-white rounded-lg shadow-2xl hover:bg-gray-100 transition-all duration-200"
            text="Book Your Free Assessment"
            size="lg"
            showIcon={true}
          />

          <p className="mt-6 text-blue-100 text-sm">
            No obligation • Clear next steps • Real solutions
          </p>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors duration-200 group">
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}