'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProductsSection() {
  const [favorites, setFavorites] = useState<number[]>([])

  const products = [
    { 
      id: 1, 
      name: 'PDRN PINK CAFFEINE NIGHT WRAPPING MASK 75ML', 
      price: 2300, 
      originalPrice: 2300,
      badge: 'New',
      brand: 'Saxarla Skincare & Spa',
      image: 'pink-tube'
    },
    { 
      id: 2, 
      name: 'HYALURONIC ACID SERUM 30ML', 
      price: 1500, 
      originalPrice: 1800,
      badge: 'Sale',
      brand: 'Saxarla Skincare & Spa',
      image: 'serum'
    },
    { 
      id: 3, 
      name: 'VITAMIN C BRIGHTENING CREAM 50ML', 
      price: 1800, 
      originalPrice: 1800,
      badge: null,
      brand: 'Saxarla Skincare & Spa',
      image: 'cream'
    },
    { 
      id: 4, 
      name: 'RETINOL ANTI-AGING SERUM 30ML', 
      price: 2200, 
      originalPrice: 2200,
      badge: 'New',
      brand: 'Saxarla Skincare & Spa',
      image: 'retinol'
    },
    { 
      id: 5, 
      name: 'NIACINAMIDE MOISTURIZER 60ML', 
      price: 1600, 
      originalPrice: 1600,
      badge: null,
      brand: 'Saxarla Skincare & Spa',
      image: 'moisturizer'
    },
    { 
      id: 6, 
      name: 'PEELING GEL EXFOLIATOR 100ML', 
      price: 1400, 
      originalPrice: 1700,
      badge: 'Sale',
      brand: 'Saxarla Skincare & Spa',
      image: 'exfoliator'
    },
  ]

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center font-poppins"
        >
          Featured Products
        </motion.h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold text-white ${
                    product.badge === 'New' ? 'bg-primary' : 'bg-red-500'
                  } font-poppins shadow-md`}
                >
                  {product.badge}
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 z-10 p-2 hover:scale-110 transition-transform"
              >
                <svg
                  className={`w-6 h-6 ${favorites.includes(product.id) ? 'text-primary fill-current' : 'text-primary'}`}
                  fill={favorites.includes(product.id) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Product Image */}
              <div className="h-80 bg-white flex items-center justify-center p-8 relative">
                {/* Pink tube product image placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Product tube design - Pink tube */}
                  <div className="relative w-28 h-44 flex flex-col items-center">
                    {/* Tube cap */}
                    <div className="w-20 h-8 bg-white rounded-t-2xl shadow-md border-2 border-pink-100"></div>
                    {/* Tube body */}
                    <div className="w-20 h-36 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-b-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
                      {/* Shine effect */}
                      <div className="absolute top-2 left-2 w-12 h-20 bg-white opacity-20 rounded-full blur-sm"></div>
                      {/* Product label area */}
                      <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="text-white text-[8px] font-bold font-poppins opacity-80">PDRN PINK</div>
                      </div>
                    </div>
                    {/* Volume label */}
                    <div className="mt-2 text-xs text-gray-400 font-poppins">75ML</div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Product Title */}
                <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 font-poppins leading-tight">
                  {product.name}
                </h3>

                {/* Brand Info */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary font-poppins">S</span>
                  </div>
                  <span className="text-sm text-gray-700 font-medium font-poppins truncate">
                    {product.brand}
                  </span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 font-medium font-poppins mb-1">Price</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900 font-poppins">
                        Ksh {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-red-500 line-through font-poppins">
                          Ksh {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-md hover:scale-110 group">
                    <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
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
          <button className="px-8 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 font-poppins shadow-md">
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

