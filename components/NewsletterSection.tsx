'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, agreed })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-primary-light/20 blur-3xl opacity-50"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-light"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center font-poppins">
            Enjoy the read?
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-center mb-8 font-poppins">
            Join our newsletter for helpful tips on shopping and booking experience.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-poppins"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="newsletter-agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                required
              />
              <label
                htmlFor="newsletter-agree"
                className="text-sm text-gray-600 font-poppins cursor-pointer"
              >
                I agree to receive marketing and subscribe to our newsletter.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-dark text-white rounded-xl font-semibold hover:bg-primary-darker transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

