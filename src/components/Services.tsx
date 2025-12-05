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
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 dark:bg-slate-950 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-4">WHAT I OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="dark:bg-slate-900 dark:border-slate-700 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
              >
                <div className="inline-block p-4 dark:bg-blue-900/40 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-600" size={32} />
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

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-blue-100 mb-8">Let's collaborate and build something amazing together</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
