'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download, Github, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0)
  const titles = [
    'Backend Software Engineer',
    'Full Stack Developer',
    'System Architect',
    'API Specialist'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [titles.length])

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/mahavir-goyal.pdf'
    link.download = 'Mahavir_Goyal_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-pink-200 rounded-full opacity-20 animate-bounce-slow"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              MG
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="gradient-text">Mahavir Goyal</span>
          </h1>

          {/* Dynamic Title */}
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium animate-slide-up">
              {titles[currentTitle]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Passionate backend engineer with expertise in building scalable systems, 
            APIs, and microservices. I love solving complex problems and creating 
            efficient solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
            
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              <ExternalLink className="mr-2" size={20} />
              View Projects
            </a>
            
            <a
              href="https://github.com/mahavirgoyal32"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="mr-2" size={20} />
              GitHub Profile
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#about"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero