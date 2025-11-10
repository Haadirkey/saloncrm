'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-poppins">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 font-poppins">Selvkia</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link href="/" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Home
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Products
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Services
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-dark transition-colors font-medium">
              Contact
            </Link>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <Link
              href="/admin"
              className="hidden sm:flex items-center px-6 py-2.5 bg-primary-dark text-white rounded-xl font-medium hover:bg-primary-darker transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-2 px-6 py-2.5 bg-primary-light text-primary-dark rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

