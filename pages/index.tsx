'use client'

import { useState, useEffect } from 'react'
import Header from '../pages/components/Header'
import Hero from '../pages/components/Hero'
import About from '../pages/components/About'
import Skills from '../pages/components/Skills'
import Projects from '../pages/components/Projects'
import Experience from '../pages/components/Experience'
import Contact from '../pages/components/Contact'
import Footer from '../pages/components/Footer'
import ScrollToTop from '../pages/components/ScrollToTop'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}