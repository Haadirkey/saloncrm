'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VerificationSection() {
  return (
    <section className="py-0 px-0 bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[500px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 lg:p-16 lg:pl-20"
          >
            {/* Buttons/Tabs */}
            <div className="flex gap-3 mb-8">
              <Link
                href="#services"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors font-poppins backdrop-blur-sm"
              >
                Book now
              </Link>
              <Link
                href="#products"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors font-poppins backdrop-blur-sm"
              >
                Experience
              </Link>
            </div>

            {/* Main Text */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins"
            >
              Every salon and product on Selvkia is verified for{' '}
              <span className="text-primary-light italic font-normal">safety, ethics, and sustainability</span>.
            </motion.h2>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 flex items-center justify-center relative">
                {/* Woman image placeholder - you can replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-end pr-8">
                  <div className="w-64 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Face representation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-xl"></div>
                      {/* Eyes with makeup */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-8">
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                      </div>
                      {/* Smile */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 border-4 border-purple-400 border-t-transparent rounded-full"></div>
                    </div>
                    {/* Hair */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-gradient-to-b from-amber-800 to-amber-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

