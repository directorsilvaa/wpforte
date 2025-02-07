import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sun, Moon, Phone } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu first
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-brand-red/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="relative">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-brand-red transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-red/20 rounded-full blur animate-pulse-slow" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">WP FORTE</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <div className="flex items-center">
              {['Serviços', 'Sobre', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center pl-4 lg:pl-6 ml-4 lg:ml-6 border-l border-white/10">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center px-3 lg:px-4 py-2 space-x-2 text-sm font-medium text-white
                         bg-brand-red/10 rounded-lg hover:bg-brand-red/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">(11) 99999-9999</span>
              </a>
              <button
                onClick={toggleDarkMode}
                className="ml-2 lg:ml-4 p-2 rounded-lg text-gray-400 hover:text-white
                         hover:bg-white/5 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white
                     hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2"
              >
                <Shield className="h-8 w-8 text-brand-red" />
                <span className="text-xl font-bold text-white">WP FORTE</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-white
                         hover:bg-white/5 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {['Serviços', 'Sobre', 'Contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-4 py-3 text-base font-medium rounded-lg
                             text-gray-400 hover:text-white hover:bg-white/5
                             transition-all"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-4 border-t border-white/10">
              <a 
                href="tel:+5511999999999"
                className="flex items-center justify-center space-x-2 p-3 rounded-lg
                         text-white bg-brand-red/10 hover:bg-brand-red/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">(11) 99999-9999</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}