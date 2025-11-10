'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold font-poppins">
                High Quality Control
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight font-poppins"
            >
              Beauty Without Boundaries.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Selvkia connects you to mindful{' '}
              <span className="text-primary font-semibold">Salons</span> and{' '}
              <span className="text-primary font-semibold">clean care</span>. Together, we redefine beauty.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#products"
                className="px-8 py-4 bg-primary-dark text-white rounded-xl font-semibold hover:bg-primary-darker transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-poppins"
              >
                Shop Now
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-primary-light text-primary-dark rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 font-poppins"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background Circle */}
              <div className="absolute w-full h-full bg-primary-light rounded-3xl transform rotate-3"></div>
              
              {/* Image Containers */}
              <div className="relative z-10 flex items-center justify-center space-x-4">
                {/* Left Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: -5 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-24 h-32 bg-white rounded-lg mx-auto shadow-md"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotate: 5 }}
                  animate={{ opacity: 1, x: 0, rotate: 5 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-20 h-20 bg-white rounded-full mx-auto shadow-md flex items-center justify-center">
                        <svg className="w-10 h-10 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

