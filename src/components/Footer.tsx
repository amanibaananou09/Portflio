import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/amanibaananou09',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/baananou-amani/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      url: 'mailto:baananouamani090@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="dark:bg-black bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 dark:border-gray-800 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Amani Baananou
            </h3>
            <p className="text-gray-400">Full-Stack Developer & AI/ML Specialist based in Monastir, Tunisia</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={18} className="text-red-500" />
            <span>by Amani Baananou</span>
          </div>

          <p className="text-gray-400">
            {currentYear} • Full-Stack Developer • Open for Opportunities
          </p>

          <button
            onClick={scrollToTop}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:shadow-lg transition-all rounded-lg font-semibold"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
