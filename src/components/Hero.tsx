import React from 'react';
import { Shield, ArrowRight, Phone, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
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
    <div id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Base Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="institutional-grid" />
        </div>
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent animate-scan" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>

        {/* Radial Gradients */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1000px] h-[1000px] rounded-full transition-all duration-1000 ease-in-out"
              style={{
                background: `radial-gradient(circle, rgba(213,0,0,${0.02 + i * 0.01}) 0%, rgba(0,0,0,0) 70%)`,
                top: i === 0 ? '0%' : i === 1 ? '50%' : '80%',
                left: i === 0 ? '20%' : i === 1 ? '80%' : '40%',
                transform: 'translate(-50%, -50%)',
                animation: `pulse ${6 + i * 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Digital Circuit Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.03]">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h80v80h-80z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-brand-red"
              />
              <circle cx="10" cy="10" r="2" className="fill-brand-red" />
              <circle cx="90" cy="90" r="2" className="fill-brand-red" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-10">
            {/* Main Message */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
                WP FORTE
                <span className="block text-gradient animate-pulse-slow">
                  SEGURANÇA ELETRÔNICA
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-tight animate-fade-in">
                Soluções Avançadas em
                <span className="block font-bold mt-2 text-gradient animate-pulse-slow">
                  Segurança Corporativa
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed animate-slide-up">
                Há mais de uma década protegendo empresas e instituições com tecnologia de ponta e monitoramento 24/7.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="institutional-button-primary group"
              >
                <span className="relative z-10">Solicitar Consultoria</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="institutional-button-secondary group"
              >
                <span className="relative z-10">Conheça Nossa Empresa</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-brand-red transition-colors">
                <Phone className="h-5 w-5" />
                <span className="text-sm font-medium">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-brand-red transition-colors">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-medium">contato@wpforte.com.br</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Recognition */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '15+', label: 'Anos de Experiência' },
                { number: '1000+', label: 'Clientes Atendidos' },
                { number: '24/7', label: 'Monitoramento' },
                { number: '99.9%', label: 'Taxa de Satisfação' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="institutional-stat-card group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-lg" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}