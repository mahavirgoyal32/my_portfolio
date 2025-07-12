'use client'

import { Code, Server, Database, Cloud, Users, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: Server,
      title: 'Backend Architecture',
      description: 'Designing robust server-side applications and microservices'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimizing data structures and query performance'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Deploying and managing applications on cloud platforms'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in cross-functional teams'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and delivering efficient solutions'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="prose lg:prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate Backend Software Engineer with <strong>3+ years</strong> of experience 
                in building scalable web applications and robust server-side solutions. I specialize 
                in <strong>Node.js, Python, and modern backend technologies</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My journey in software development started with a curiosity about how systems work 
                behind the scenes. This curiosity has driven me to continuously learn and adapt to 
                new technologies, always focusing on writing clean, efficient, and maintainable code.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm currently seeking <strong>SDE 2 opportunities</strong> where I can contribute 
                to building innovative products while continuing to grow as a software engineer. 
                I'm particularly interested in roles that involve <strong>system design, 
                microservices architecture, and performance optimization</strong>.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Improved system performance by 40% through optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Led development of scalable microservices architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Mentored junior developers and conducted code reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Implemented CI/CD pipelines reducing deployment time by 60%</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Personal Values */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Values</h3>
            <p className="text-gray-700">The principles that guide my work and career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Always exploring new technologies and better ways to solve problems</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-sm text-gray-600">Believing that the best solutions come from working together</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
              <p className="text-sm text-gray-600">Committed to continuous learning and personal development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About