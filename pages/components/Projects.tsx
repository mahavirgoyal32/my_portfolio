'use client'

import { useState } from 'react'
import { Github, ExternalLink, Code, Database, Cloud, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Microservices Platform',
      description: 'Scalable e-commerce backend built with microservices architecture, handling user management, product catalog, orders, and payments.',
      longDescription: 'A comprehensive e-commerce platform featuring microservices for user authentication, product management, order processing, and payment integration. Implemented with Docker containerization and Kubernetes orchestration for scalability.',
      image: '/api/placeholder/600/400',
      category: 'backend',
      technologies: ['Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Redis', 'TypeScript'],
      features: [
        'Microservices architecture with API Gateway',
        'JWT-based authentication and authorization',
        'Real-time order tracking with WebSocket',
        'Payment gateway integration (Stripe, PayPal)',
        'Automated testing with 90% code coverage',
        'CI/CD pipeline with GitHub Actions'
      ],
      githubUrl: 'https://github.com/mahavirgoyal32/ecommerce-microservices',
      liveUrl: 'https://ecommerce-demo.herokuapp.com',
      status: 'Completed',
      duration: '4 months',
      teamSize: '3 developers'
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'Full-stack chat application with real-time messaging, file sharing, and group chat functionality using Socket.io and React.',
      longDescription: 'A modern chat application supporting real-time messaging, file uploads, emoji reactions, and group conversations. Features include message encryption, user presence indicators, and responsive design.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'JWT', 'Tailwind CSS'],
      features: [
        'Real-time messaging with Socket.io',
        'File and image sharing capabilities',
        'Group chat and private messaging',
        'Message encryption for security',
        'User presence and typing indicators',
        'Responsive design for all devices'
      ],
      githubUrl: 'https://github.com/mahavirgoyal32/realtime-chat-app',
      liveUrl: 'https://chat-app-demo.netlify.app',
      status: 'Completed',
      duration: '2 months',
      teamSize: 'Solo project'
    },
    {
      id: 3,
      title: 'Task Management REST API',
      description: 'Comprehensive task management API with user authentication, project organization, and team collaboration features.',
      longDescription: 'A robust REST API for task management supporting user authentication, project creation, task assignment, and team collaboration. Includes advanced features like task dependencies, time tracking, and detailed reporting.',
      image: '/api/placeholder/600/400',
      category: 'api',
      technologies: ['Python', 'Django REST', 'PostgreSQL', 'Redis', 'Celery', 'AWS S3', 'Docker'],
      features: [
        'User authentication and authorization',
        'Project and task management',
        'Team collaboration and permissions',
        'Task dependencies and scheduling',
        'File attachments with AWS S3',
        'Background task processing with Celery'
      ],
      githubUrl: 'https://github.com/mahavirgoyal32/task-management-api',
      liveUrl: 'https://task-api-docs.herokuapp.com',
      status: 'Completed',
      duration: '3 months',
      teamSize: 'Solo project'
    },
    {
      id: 4,
      title: 'Cloud-Native Monitoring Dashboard',
      description: 'Monitoring and analytics dashboard for cloud infrastructure with real-time metrics, alerts, and automated reporting.',
      longDescription: 'A comprehensive monitoring solution for cloud infrastructure featuring real-time metrics collection, customizable dashboards, intelligent alerting, and automated report generation.',
      image: '/api/placeholder/600/400',
      category: 'cloud',
      technologies: ['Go', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes', 'AWS CloudWatch', 'PostgreSQL'],
      features: [
        'Real-time metrics collection and visualization',
        'Customizable dashboards and alerts',
        'Multi-cloud support (AWS, GCP, Azure)',
        'Automated report generation',
        'API for third-party integrations',
        'High availability and scalability'
      ],
      githubUrl: 'https://github.com/mahavirgoyal32/cloud-monitoring',
      liveUrl: 'https://monitoring-demo.aws.com',
      status: 'In Progress',
      duration: '5 months',
      teamSize: '2 developers'
    },
    {
      id: 5,
      title: 'Mobile Backend API',
      description: 'Scalable backend API for mobile applications with push notifications, user analytics, and offline sync capabilities.',
      longDescription: 'A powerful backend API designed specifically for mobile applications, featuring push notifications, user analytics, data synchronization, and offline support for seamless user experience.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'AWS SNS', 'Redis', 'Jest'],
      features: [
        'RESTful API with comprehensive documentation',
        'Push notifications with Firebase FCM',
        'User analytics and behavior tracking',
        'Offline data synchronization',
        'Rate limiting and security middleware',
        'Automated testing and deployment'
      ],
      githubUrl: 'https://github.com/mahavirgoyal32/mobile-backend-api',
      liveUrl: 'https://mobile-api-docs.herokuapp.com',
      status: 'Completed',
      duration: '3 months',
      teamSize: 'Solo project'
    },
    {
      id: 6,
      title: 'DevOps Automation Pipeline',
      description: 'Complete CI/CD pipeline automation with infrastructure as code, automated testing, and deployment strategies.',
      longDescription: 'A comprehensive DevOps solution featuring automated CI/CD pipelines, infrastructure as code with Terraform, automated testing, and blue-green deployment strategies for zero-downtime releases.',
      image: '/api/placeholder/600/400',
      category: 'devops',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Ansible', 'GitHub Actions'],
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure as Code with Terraform',
        'Container orchestration with Kubernetes',
        'Automated testing and quality gates',
        'Blue-green deployment strategy',
        'Monitoring and alerting integration'
      ],
      githubUrl: 'https://github.com/mahavirgoyal32/devops-pipeline',
      liveUrl: 'https://devops-dashboard.herokuapp.com',
      status: 'Completed',
      duration: '4 months',
      teamSize: '2 developers'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'api', label: 'API', icon: Database },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'devops', label: 'DevOps', icon: Cloud }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in backend development, full-stack applications, and cloud solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map((filter) => {
            const IconComponent = filter.icon
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent size={16} />
                <span>{filter.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">
                  <Code size={80} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className="text-gray-500 text-sm">• {project.duration}</span>
                      <span className="text-gray-500 text-sm">• {project.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a
              href="https://github.com/mahavirgoyal32"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="mr-2" size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects