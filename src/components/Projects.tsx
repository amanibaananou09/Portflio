import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Stationnex & StationnexCards',
      description: 'Enterprise platform for service-station management and fuel-card administration',
      longDescription: `Enterprise solution composed of two integrated platforms dedicated to service-station management and fuel-card operations.

• Stationnex: A comprehensive platform for managing daily service-station operations, covering more than 12 business modules.
• StationnexCards: A dedicated system for managing customer and fuel cards with real-time tracking.

Key Responsibilities & Achievements:
- Designed and implemented 12+ business modules, including:
  • User & role management
  • Team & shift management
  • Pricing & product configuration
  • Administrative & operational monitoring
- Built fully responsive user interfaces and optimized API performance for large data volumes.
- Implemented automated CI/CD pipelines using Bitbucket Pipelines.
- Ensured enterprise-grade security with Keycloak.
- Integrated real-time monitoring across operational workflows.`,
      technologies: ['Spring Boot', 'React.js', 'PostgreSQL', 'Docker', 'Keycloak', 'Bitbucket Pipelines'],
      category: 'Full-Stack',
      date: 'Dec 2022 - Jul 2025',
      company: 'Teknoword | Mahdia, Tunisie',
      highlights: ['12+ Business Modules', 'Automated CI/CD', 'Enterprise Security', 'Real-time Monitoring'],
    },
    {
      title: 'Stagiaire en Deep Learning – GAN pour la Génération de Visages',
      description: 'Generative Adversarial Network for synthetic face image generation',
      longDescription: `Création d'une application Generative Adversarial Network (GAN) dédiée à la production d'images génétiques, à l'aide de Tensorflow, Keras et OpenCV, améliorant la qualité des images par rapport aux modèles précédents.

Développement complet dans le domaine de l'intelligence artificielle et de la vision par ordinateur, de la préparation des données à l'évaluation des modèles.`,
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'GAN', 'Computer Vision'],
      category: 'AI/ML',
      date: 'Fév. 2021 – Août 2021',
      company: 'RegimLAB | Sfax, Tunisie',
      highlights: [
        'Generative Adversarial Network',
        'Image Quality Improvement',
        'End-to-end Development',
        'Computer Vision',
      ],
    },
    {
      title: 'ACIP Simulator',
      description: 'Backend simulator with Spring Boot and Angular frontend',
      longDescription:
        'Simulator system with Spring Boot/JEE backend, Angular frontend, REST API with JSON support, and SOAP service integration for secure data exchange. Full documentation with Swagger/OpenAPI.',
      technologies: ['Spring Boot', 'JEE', 'Angular', 'REST API', 'SOAP', 'Swagger'],
      category: 'Full-Stack',
      date: 'Feb 2019 - Jun 2019',
      company: 'Billcom Consulting | Sousse, Tunisie',
      highlights: ['REST API Client', 'SOAP Services', 'Swagger Docs', 'Secure Exchange'],
    },
    {
      title: 'Monkey Species Classification (Deep Learning)',
      description: 'CNN-based image classification system with feature extraction and caption generation',
      longDescription:
        'Advanced deep learning project using Convolutional Neural Networks for accurate image classification. Achieved state-of-the-art performance with feature extraction and automated caption generation.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV'],
      category: 'AI/ML',
      date: 'January 2020',
      highlights: ['State-of-the-art Performance', 'Feature Extraction', 'Caption Generation', 'Optimized Model'],
    },
    {
      title: 'Carpooling Platform',
      description: 'Complete web application for ride-sharing with REST API architecture',
      longDescription:
        'Full-featured carpooling platform with Spring Boot backend, REST API architecture, and database design for managing users, routes, reservations, and authentication. Scalable and secure ride-sharing solution.',
      technologies: ['Spring Boot', 'SQL', 'REST API', 'HTML/CSS', 'Authentication'],
      category: 'Web Development',
      date: 'March 2018',
      highlights: ['REST API Architecture', 'User Authentication', 'Route Management', 'Scalable Design'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-white/80 dark:bg-slate-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-slate-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-blue-500/50 dark:hover:border-blue-400/50"
            >
              {/* Title + Category */}
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {project.description}
                  </p>
                </div>

                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/40 dark:to-teal-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold whitespace-nowrap shadow-md group-hover:scale-110 transition-transform duration-300">
                  {project.category}
                </span>
              </div>

              {/* Description - Fixed with whitespace-pre-line */}
              <div className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed mb-8 whitespace-pre-line">
                {project.longDescription}
              </div>

              {/* Highlights + Tech */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                    Key Highlights
                  </h4>

                  <div className="grid grid-cols-2 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-gray-800 dark:text-gray-300 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-semibold border border-gray-300 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-300 dark:border-slate-700">
                <div>
                  {project.company && (
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium mr-4">
                      {project.company}
                    </span>
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-500">{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Want to see more projects?
          </p>
          <a
            href="https://github.com/amanibaananou09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github size={20} /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}