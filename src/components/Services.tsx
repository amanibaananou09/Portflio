import { Code2, Cloud, Brain, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Custom web application development using modern frameworks, scalable backends with Spring Boot, and dynamic frontends with React.js and TypeScript.',
      icon: Code2,
      features: ['Spring Boot Backend', 'React.js Frontend', 'Database Design', 'REST APIs'],
    },
    {
      title: 'DevOps & CI/CD Integration',
      description: 'Automated deployment pipelines, Docker containerization, cloud infrastructure setup, and performance optimization for seamless deployment.',
      icon: Cloud,
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Cloud Setup', 'Performance Tuning'],
    },
    {
      title: 'AI/ML Solutions',
      description: 'Deep learning model development, image processing, computer vision, and data analysis to create intelligent, data-driven applications.',
      icon: Brain,
      features: ['Deep Learning Models', 'CNN & GAN', 'Data Analysis', 'Computer Vision'],
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful API design, SOAP web services, third-party API integrations, and secure authentication implementations with OAuth2 and Keycloak.',
      icon: Zap,
      features: ['REST APIs', 'SOAP Services', 'Authentication', 'API Integration'],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">WHAT I OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-lg dark:border-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100/50 dark:border-slate-700/50 group hover:-translate-y-3 hover:scale-105 hover:border-blue-500/50 dark:hover:border-blue-400/50"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">{service.title}</h3>
                <p className="dark:text-gray-400 text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
                      <span className="dark:text-gray-300 text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-blue-100 mb-8">Let's collaborate and build something amazing together</p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
