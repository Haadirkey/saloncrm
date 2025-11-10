'use client'

import { motion } from 'framer-motion'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Selvkia changed how I experience self-care, I found my salon soulmate.",
      name: "Iqra Albatros",
      role: "Salon Owner",
      avatar: "IA",
    },
    {
      id: 2,
      text: "For the first time, I feel confident booking beauty services online. Every salon I've found through Selvkia truly delivers what they promise.",
      name: "Sarah Johnson",
      role: "Beauty Enthusiast",
      avatar: "SJ",
    },
    {
      id: 3,
      text: "Selvkia changed how I experience self-care, I found my salon soulmate.",
      name: "Maria Garcia",
      role: "Regular Client",
      avatar: "MG",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-sm font-medium text-primary-light mb-2 font-poppins uppercase tracking-wide">
            Testimonials
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-poppins">
            What our customers say
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 transition-all duration-300 ${
                index === 1
                  ? 'border-2 border-primary shadow-lg'
                  : 'border border-primary-light'
              }`}
            >
              {/* Quotation Mark */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed font-poppins text-sm">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-dark font-bold text-sm font-poppins">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm font-poppins">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs font-poppins">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

