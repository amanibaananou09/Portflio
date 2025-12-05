import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ scrolled, darkMode, setDarkMode }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900 shadow-lg'
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity text-blue-400"
          >
            Amani Baananou
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors font-medium text-gray-300 hover:text-blue-400"
              >
                {item.label}
              </button>
            ))}
          </div>

        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 bg-slate-900">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 rounded-lg transition-colors text-gray-300 hover:bg-slate-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}