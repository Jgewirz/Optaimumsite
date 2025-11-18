'use client'

import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import { CalendlyCTA } from '@/components/CalendlyCTA'

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero - Simplified and conversion-focused */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Let's Build Something Great
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Schedule your free 30-minute assessment. We'll identify your biggest automation opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Inline Calendly at Top - Primary CTA */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Free Assessment
              </h2>
              <p className="text-gray-600">
                Pick a time that works for you. We'll call you.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-2">
              <CalendlyCTA
                mode="inline"
                minHeight={600}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>No sales pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>30-minute call</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span>Free consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect & Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What to Expect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Discovery (10 min)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        We'll understand your current challenges and workflow bottlenecks
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Solution Mapping (15 min)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        We'll identify 2-3 high-impact automation opportunities for your business
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">ROI Projection (5 min)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        We'll estimate potential time and cost savings from AI implementation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <p className="text-sm font-semibold text-blue-900 mb-2">What you'll walk away with:</p>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Clear understanding of your automation potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Specific next steps (with or without us)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Realistic ROI expectations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info & Alternative Options */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:optaimum@gmail.com" className="text-sm text-gray-600 hover:text-blue-600">
                        optaimum@gmail.com
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+12023201890" className="text-sm text-gray-600 hover:text-blue-600">
                        (202) 320-1890
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-sm text-gray-600">
                        1100 S Miami Ave<br />
                        Miami, FL 33130
                      </p>
                      <p className="text-xs text-gray-500 mt-1">By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-xl">
                  <p className="font-semibold text-green-900 mb-2">Prefer to book directly?</p>
                  <CalendlyCTA
                    mode="popup"
                    buttonClassName="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3"
                    text="Open Calendar"
                    showIcon={true}
                  />
                </div>
              </div>

              {/* FAQ Quick Answers */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                <h3 className="font-semibold text-gray-900 mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">How long is the assessment?</p>
                    <p className="text-sm text-gray-600 mt-1">30 minutes, no longer.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Is there a sales pitch?</p>
                    <p className="text-sm text-gray-600 mt-1">No. We'll only discuss next steps if you ask.</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">What if we're not a fit?</p>
                    <p className="text-sm text-gray-600 mt-1">We'll tell you honestly and suggest alternatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Save 25+ Hours Per Week?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 100+ SMBs who've automated their biggest time-wasters
          </p>

          <CalendlyCTA
            mode="popup"
            buttonClassName="bg-white text-blue-600 px-10 py-4 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl"
            text="Book Free Assessment"
            size="lg"
            showIcon={true}
          />

          <p className="mt-4 text-sm text-blue-100">
            No credit card required • 30-minute call • Instant booking
          </p>
        </div>
      </section>
    </div>
  )
}