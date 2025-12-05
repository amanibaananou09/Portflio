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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-4">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto" />
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
                  className="p-8 dark:bg-slate-800 dark:border-slate-700 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="text-blue-600 mb-4" size={32} />
                  <div className="text-4xl font-bold dark:text-white text-gray-900 mb-2">{stat.value}</div>
                  <div className="dark:text-gray-300 text-gray-900 font-semibold">{stat.label}</div>
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
                className="p-6 dark:bg-slate-800 dark:border-slate-700 dark:hover:border-blue-500 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <Award className="text-blue-600 flex-shrink-0" size={24} />
                  <p className="dark:text-gray-300 text-gray-900 font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
