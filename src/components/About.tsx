import { Award, Briefcase, Code2, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Briefcase },
    { label: 'Business Modules', value: '12+', icon: Code2 },
    { label: 'Certifications', value: '6', icon: Award },
    { label: 'Projects Delivered', value: '5+', icon: Zap },
  ];

  const certifications = [
    'Google Cloud Big Data and Machine Learning Fundamentals',
    'Machine Learning Foundations: A Case Study Approach',
    'Introduction to Data Science in Python',
    'Introduction to Big Data',
    'Database Administration Fundamentals',
    'Networking Fundamentals',
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-6">Professional Summary</h3>
            <p className="dark:text-gray-400 text-gray-600 text-lg leading-relaxed mb-4">
              I'm a passionate full-stack developer with over 2 years of professional experience in developing scalable web applications and integrating DevOps solutions. My expertise spans across modern technologies like Java/Spring Boot, React.js, and cloud-native tools.
            </p>
            <p className="dark:text-gray-400 text-gray-600 text-lg leading-relaxed mb-4">
              My journey combines strong web development foundations with a deep interest in AI/ML and deep learning, enabling me to create intelligent, data-driven solutions.
            </p>
            <p className="dark:text-gray-400 text-gray-600 text-lg leading-relaxed">
              I thrive in Agile environments, focusing on writing clean, maintainable code and continuously optimizing for performance and security. Every project is an opportunity to innovate and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white/80 dark:bg-slate-800/90 backdrop-blur-lg dark:border-slate-700/50 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 dark:hover:border-blue-400/50"
                >
                  <Icon className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <div className="text-4xl font-bold dark:text-white text-gray-900 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{stat.value}</div>
                  <div className="dark:text-gray-300 text-gray-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-8">Certifications & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-6 bg-white/80 dark:bg-slate-800/90 backdrop-blur-lg dark:border-slate-700/50 dark:hover:border-blue-400/70 rounded-xl border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/70"
              >
                <div className="flex gap-4">
                  <Award className="text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <p className="dark:text-gray-300 text-gray-700 font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
