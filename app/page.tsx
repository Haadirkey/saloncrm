'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import SalonsSection from '@/components/SalonsSection'
import ProductsSection from '@/components/ProductsSection'
import VerificationSection from '@/components/VerificationSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <SalonsSection />
      <ProductsSection />
      <VerificationSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
