import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+21621830997',
      href: 'tel:+21621830997',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'baananouamani090@gmail.com',
      href: 'mailto:baananouamani090@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Monastir, Tunisia',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/baananou-amani/',
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/amanibaananou09',
    },
  ];

  return (
    <section
      id="contact"
      className="
        py-24 px-4 sm:px-6 lg:px-8 
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-lg mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-400 mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="
                  bg-slate-800/60 border border-slate-700 
                  hover:border-blue-500 rounded-2xl p-8 
                  shadow-lg hover:shadow-xl transition-all duration-300 
                  text-center group hover:-translate-y-1
                "
              >
                <div className="inline-block p-4 bg-blue-900/40 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-400" size={32} />
                </div>
                <h3 className="font-bold text-white mb-2">{info.label}</h3>
                <p className="text-slate-400 group-hover:text-blue-300 transition-colors">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div
          className="
            bg-gradient-to-r from-blue-600 to-teal-500 
            rounded-2xl p-12 text-white shadow-lg
          "
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Ready to work together?</h3>
            <p className="text-xl text-blue-100 mb-8 text-center">
              Let's bring your ideas to life with modern technologies and innovative solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-blue-100 text-sm uppercase tracking-wider mb-2">Availability</p>
                <p className="text-xl font-semibold">Open for Opportunities</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm uppercase tracking-wider mb-2">Response Time</p>
                <p className="text-xl font-semibold">Within 24 hours</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 hover:bg-white/30 rounded-lg transition-colors group"
                    aria-label={link.label}
                  >
                    <Icon size={28} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
