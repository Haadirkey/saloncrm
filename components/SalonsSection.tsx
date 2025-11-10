'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SalonsSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const salons = [
    {
      id: 1,
      name: 'Saxarla Skincare & Spa',
      rating: 4.8,
      reviews: 320,
      services: 18,
      products: 100,
      locations: ['Kilimani, Nairobi', 'Hodan, Mogadishu'],
      closingTime: '8:30 pm',
      verified: true,
      isOpen: true,
    },
    {
      id: 2,
      name: 'Saxarla Skincare & Spa',
      rating: 4.8,
      reviews: 320,
      services: 18,
      products: 100,
      locations: ['Kilimani, Nairobi', 'Hodan, Mogadishu'],
      closingTime: '8:30 pm',
      verified: true,
      isOpen: true,
    },
    {
      id: 3,
      name: 'Saxarla Skincare & Spa',
      rating: 4.8,
      reviews: 320,
      services: 18,
      products: 100,
      locations: ['Kilimani, Nairobi', 'Hodan, Mogadishu'],
      closingTime: '8:30 pm',
      verified: true,
      isOpen: true,
    },
    {
      id: 4,
      name: 'Saxarla Skincare & Spa',
      rating: 4.8,
      reviews: 320,
      services: 18,
      products: 100,
      locations: ['Kilimani, Nairobi', 'Hodan, Mogadishu'],
      closingTime: '8:30 pm',
      verified: true,
      isOpen: true,
    },
    {
      id: 5,
      name: 'Saxarla Skincare & Spa',
      rating: 4.8,
      reviews: 320,
      services: 18,
      products: 100,
      locations: ['Kilimani, Nairobi', 'Hodan, Mogadishu'],
      closingTime: '8:30 pm',
      verified: true,
      isOpen: true,
    },
    {
      id: 6,
      name: 'Saxarla Skincare & Spa',
      rating: 4.8,
      reviews: 320,
      services: 18,
      products: 100,
      locations: ['Kilimani, Nairobi', 'Hodan, Mogadishu'],
      closingTime: '8:30 pm',
      verified: true,
      isOpen: true,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center font-poppins"
        >
          Find Trusted Salons & Spa
        </motion.h2>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-12 justify-center"
        >
          <button className="px-6 py-3 bg-primary-light text-primary-dark rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 font-poppins">
            All
          </button>
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <input
              type="text"
              placeholder="Search Salon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="px-6 py-3 bg-primary-light text-primary-dark rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 font-poppins">
            Verified
          </button>
          <button className="px-6 py-3 bg-primary-light text-primary-dark rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 font-poppins">
            Nearest
          </button>
          <button className="px-6 py-3 bg-primary-light text-primary-dark rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 font-poppins">
            Top Rated
          </button>
        </motion.div>

        {/* Salon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {salons.map((salon, index) => (
            <motion.div
              key={salon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-primary-light rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Header Image */}
              <div className="h-64 bg-white overflow-hidden relative">
                {/* Salon interior image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-pink-50 relative">
                  {/* Decorative elements to simulate salon interior */}
                  <div className="absolute inset-0">
                    {/* Shelves */}
                    <div className="absolute top-8 left-4 w-32 h-24 bg-white rounded-lg shadow-sm opacity-60"></div>
                    <div className="absolute top-12 left-6 w-28 h-20 bg-gray-100 rounded shadow-sm opacity-40"></div>
                    {/* Chairs/mirrors representation */}
                    <div className="absolute bottom-8 right-8 w-24 h-32 bg-gray-200 rounded-lg shadow-md opacity-50"></div>
                    <div className="absolute bottom-12 right-12 w-20 h-28 bg-white rounded-lg shadow-sm opacity-60"></div>
                    {/* Center focal point */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-48 bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-lg opacity-70"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Salon Identity Section */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Logo */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-800 font-poppins">S</span>
                  </div>
                  {/* Name and Verification */}
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 font-poppins truncate">
                      {salon.name}
                    </h3>
                    {salon.verified && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Information Tags */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {/* 18 + Services */}
                  <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium font-poppins">{salon.services} + Services</span>
                  </div>

                  {/* 100 + Products */}
                  <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium font-poppins">{salon.products} + Products</span>
                  </div>

                  {/* Rating */}
                  <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <svg className="w-4 h-4 text-accent-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium font-poppins">
                      <span className="text-accent-orange">{salon.rating}</span>
                      <span className="text-gray-500">/{salon.reviews}</span>
                    </span>
                  </div>

                  {/* Location - First location */}
                  <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                    <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium font-poppins truncate">{salon.locations[0]}</span>
                  </div>
                </div>

                {/* Second Location */}
                {salon.locations.length > 1 && (
                  <div className="mb-4">
                    <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm">
                      <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium font-poppins">{salon.locations[1]}</span>
                    </div>
                  </div>
                )}

                {/* Open Status Section */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium font-poppins">Open Status</span>
                  </div>
                  <div className="flex gap-2">
                    {salon.isOpen ? (
                      <button className="flex-1 px-4 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 text-sm font-poppins shadow-md">
                        Open Now
                      </button>
                    ) : (
                      <button className="flex-1 px-4 py-2.5 bg-gray-400 text-white rounded-xl font-semibold transition-all duration-300 text-sm font-poppins">
                        Closed
                      </button>
                    )}
                    <button className="flex-1 px-4 py-2.5 bg-accent-orange text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 text-sm font-poppins shadow-md">
                      Closes {salon.closingTime}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2 font-poppins">
            Explore All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

