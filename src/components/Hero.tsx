import { ChevronDown, ExternalLink, Download } from 'lucide-react';

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
      className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src="/1666641222625.jpeg"
                alt="Amani Baananou"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 dark:border-blue-500 border-blue-300"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">Welcome to my portfolio</p>
                <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4">
                  Amani Baananou
                </h1>
                <h3 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 leading-tight mb-6">
                  Full-Stack Developer & <span className="text-blue-600 dark:text-blue-400">AI/ML Specialist</span>
                </h3>
                <p className="text-xl dark:text-gray-400 text-gray-600 leading-relaxed">
                  Building scalable, secure, and innovative web solutions with cutting-edge technologies. Based in Monastir, Tunisia with 2+ years of professional experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
                <a
                  href="https://drive.google.com/file/d/1gx9ZzZrpiKTg6uoNDfWTq4VoZ0Xoug00/view?usp=drive_link"
                  download="Amani_Baananou_CV.pdf"
                  className="px-8 py-3 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700 dark:hover:border-blue-500 dark:hover:bg-blue-900/60 bg-blue-100 text-blue-700 border-2 border-blue-300 font-semibold rounded-lg hover:border-blue-600 hover:bg-blue-200 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={18} /> Download CV
                </a>
                <a
                  href="https://github.com/amanibaananou09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  View Projects <ExternalLink size={18} />
                </a>
              </div>

              <div className="pt-8">
                <div className="text-sm dark:text-gray-500 text-gray-600 mb-4">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'React.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
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
