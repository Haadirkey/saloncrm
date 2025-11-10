'use client'

import { motion } from 'framer-motion'

export default function Partners() {
  const partners = [
    { name: 'Premier Bank', icon: '🏦' },
    { name: 'Saxarla Skincare', icon: '✨' },
  ]

  return (
    <section className="py-12 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-16 overflow-hidden"
        >
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-2 min-w-[150px]"
            >
              <div className="text-4xl">{partner.icon}</div>
              <p className="text-sm font-medium text-gray-700 font-poppins">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

