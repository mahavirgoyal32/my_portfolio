'use client'

import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: 'Jan 2022 - Present',
      type: 'Full-time',
      description: 'Leading backend development for scalable web applications serving 100K+ users.',
      achievements: [
        'Architected microservices infrastructure reducing system downtime by 40%',
        'Implemented caching strategies improving API response time by 60%',
        'Led team of 4 developers in agile development environment',
        'Designed and developed RESTful APIs used by multiple client applications'
      ],
      technologies: ['Node.js', 'MongoDB', 'AWS', 'Docker', 'Redis', 'TypeScript'],
      color: 'blue'
    },
    {
      title: 'Backend Developer',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      duration: 'Mar 2021 - Dec 2021',
      type: 'Full-time',
      description: 'Developed backend services for e-commerce platform handling thousands of transactions daily.',
      achievements: [
        'Built payment processing system with 99.9% uptime',
        'Optimized database queries reducing load time by 50%',
        'Implemented automated testing increasing code coverage to 85%',
        'Collaborated with frontend team to deliver seamless user experience'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Jenkins', 'Git'],
      color: 'green'
    },
    {
      title: 'Junior Software Developer',
      company: 'Digital Agency Pro',
      location: 'Delhi, India',
      duration: 'Jun 2020 - Feb 2021',
      type: 'Full-time',
      description: 'Contributed to web application development and maintenance for various client projects.',
      achievements: [
        'Developed 15+ RESTful APIs for client applications',
        'Participated in code reviews and team knowledge sharing sessions',
        'Assisted in database design and optimization tasks',
        'Maintained legacy systems while implementing new features'
      ],
      technologies: ['Node.js', 'Express.js', 'MySQL', 'HTML/CSS', 'JavaScript', 'Git'],
      color: 'purple'
    },
    {
      title: 'Software Development Intern',
      company: 'Innovation Labs',
      location: 'Mumbai, India',
      duration: 'Jan 2020 - May 2020',
      type: 'Internship',
      description: 'Gained hands-on experience in full-stack development and agile methodologies.',
      achievements: [
        'Completed 3 full-stack projects during internship period',
        'Learned best practices in software development lifecycle',
        'Contributed to open-source projects maintained by the company',
        'Received outstanding intern award for exceptional performance'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'Postman'],
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've made
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-px"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2 mt-6 border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(exp.color)}`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Highlights</h3>
            <p className="text-gray-700">A summary of my professional growth and achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-700 font-medium">Companies Worked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Team Members Led</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
            <ExternalLink className="mr-2" size={20} />
            <span className="font-medium">View Full Resume</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience