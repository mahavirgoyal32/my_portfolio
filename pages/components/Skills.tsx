'use client'

import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend')

  const skillCategories: { [key: string]: {
  title: string;
  icon: string;
  skills: { name: string; level: number; description: string }[];
} } = {
  backend: {
    title: 'Backend',
    icon: '🛠️',
    skills: [/* ... */]
  },
  frontend: {
    title: 'Frontend',
    icon: '🎨',
    skills: [/* ... */]
  },
  database: {
    title: 'Database',
    icon: '🗄️',
    skills: [/* ... */]
  },
  cloud: {
    title: 'Cloud',
    icon: '☁️',
    skills: [/* ... */]
  }
}


  const categories = Object.keys(skillCategories)

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{skillCategories[category].icon}</span>
              <span>{skillCategories[category].title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-blue-600 font-bold">{skill.level}%</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{skill.description}</p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: activeCategory === activeCategory ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Continuous Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-1">AWS Certified</h4>
              <p className="text-sm text-gray-600">Cloud Practitioner</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">📜</div>
              <h4 className="font-semibold text-gray-900 mb-1">MongoDB University</h4>
              <p className="text-sm text-gray-600">Developer Certification</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🎓</div>
              <h4 className="font-semibold text-gray-900 mb-1">Docker Certified</h4>
              <p className="text-sm text-gray-600">Associate (DCA)</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">System Design</h4>
              <p className="text-sm text-gray-600">Scalable Architecture</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🔐</div>
              <h4 className="font-semibold text-gray-900 mb-1">Security+</h4>
              <p className="text-sm text-gray-600">Cybersecurity Fundamentals</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-semibold text-gray-900 mb-1">Agile & Scrum</h4>
              <p className="text-sm text-gray-600">Project Management</p>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full">
            <span className="text-blue-600 text-2xl mr-3">💡</span>
            <span className="text-blue-800 font-medium">
              Always learning something new! Currently exploring GraphQL and Microservices Patterns
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills