import { Briefcase, BookOpen, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'TeknoWord',
      location: 'Mahdia',
      period: 'Dec 2022 - Jul 2025',
      type: 'professional',
      achievements: [
        'Complete development of Stationnex and StationnexCards with Spring Boot & React',
        'Created 12+ business modules: user management, team management, pricing management',
        'Implemented automated CI/CD pipelines (Bitbucket Pipelines) reducing deployment time',
        'Containerization and scalable deployments via Docker',
        'Integrated Keycloak for role management and secure authentication',
        'Applied Clean Code principles with automated tests (JUnit, Jest) and Agile/Scrum',
      ],
    },
    {
      title: 'Deep Learning Intern',
      company: 'RegimLAB',
      location: 'Sfax',
      period: 'Feb 2021 - Aug 2021',
      type: 'internship',
      achievements: [
        'Developed GAN model for image generation (TensorFlow, Keras, OpenCV)',
        'Notable improvement in visual quality compared to pre-existing models',
        'Optimized model performance and ensured data quality',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'Billcom Consulting',
      location: 'Sousse',
      period: 'Feb 2019 - Jun 2019',
      type: 'internship',
      achievements: [
        'Created ACIP simulator: Spring Boot/JEE backend and Angular frontend',
        'Implemented REST API client (JSON) with Swagger documentation',
        'Developed and integrated SOAP services for secure data exchange',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 dark:bg-slate-950 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-4">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="dark:bg-slate-900 dark:border-blue-500 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <div className="dark:bg-blue-900/40 p-3 bg-blue-100 rounded-lg">
                    {exp.type === 'professional' ? (
                      <Briefcase className="text-blue-600" size={24} />
                    ) : (
                      <BookOpen className="text-blue-600" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-sm dark:text-gray-500 text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <span className="dark:bg-blue-900/40 dark:text-blue-300 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="dark:text-gray-400 text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
