import { ChevronDown, ExternalLink, Download } from 'lucide-react';
import profileImage from '../assets/1666641222625.jpeg';
import cvPdf from '../assets/Amani Baananou.pdf';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-transparent"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0 group">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 dark:border-blue-400/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border-4 border-teal-500/30 dark:border-teal-400/30 animate-spin-reverse" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              <img
                src={profileImage}
                alt="Amani Baananou"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-slate-800 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2 animate-fadeInUp">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4 animate-fadeInUp animation-delay-100">
                  Amani Baananou
                </h1>
                <h3 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 leading-tight mb-6 animate-fadeInUp animation-delay-200">
                  Full-Stack Developer & <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">AI/ML Specialist</span>
                </h3>
                <p className="text-xl dark:text-gray-400 text-gray-600 leading-relaxed animate-fadeInUp animation-delay-300">
                  Building scalable, secure, and innovative web solutions with cutting-edge technologies. Based in Monastir, Tunisia with 2+ years of professional experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-400">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
                <a
                  href={cvPdf}
                  download="Amani_Baananou_CV.pdf"
                  className="px-8 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-blue-700 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-700 font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  <Download size={18} /> Download CV
                </a>
                <a
                  href="https://github.com/amanibaananou09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  View Projects <ExternalLink size={18} />
                </a>
              </div>

              <div className="pt-8 animate-fadeInUp animation-delay-500">
                <div className="text-sm dark:text-gray-500 text-gray-600 mb-4">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'React.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="dark:text-gray-600 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
