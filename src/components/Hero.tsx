import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/689437544/rendition/1080p?loc=external&oauth2_token_id=57447761&signature=54c3c13d3d27c1f544f65a12d9b6e339118fc08f7087b639c8c0f46e3542f893"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* HUD-like elements - Hidden on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 border border-brand-red/20 rounded-full 
                       animate-[spin_10s_linear_infinite] opacity-30" />
          <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 border border-brand-red/10 rounded-full 
                       animate-[spin_15s_linear_infinite_reverse] opacity-20" />
        </div>
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent animate-scan" />
        </div>

        {/* Tech Grid */}
        <div className="absolute inset-0">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(213,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(213,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            mask: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
          }} />
        </div>

        {/* Floating Data Points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-brand-red/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6 sm:space-y-10">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="relative">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-brand-red" />
                <div className="absolute inset-0 bg-brand-red/20 rounded-full blur animate-pulse-slow" />
              </div>
              <span className="text-white font-bold text-xl sm:text-2xl">WP FORTE</span>
            </div>

            {/* Main Message */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight animate-fade-in">
                Soluções Avançadas em
                <span className="block font-bold mt-2 text-gradient animate-pulse-slow">
                  Segurança Corporativa
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed animate-slide-up">
                Há mais de uma década protegendo empresas e instituições com tecnologia de ponta e monitoramento 24/7.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <button 
                className="institutional-button-primary group"
              >
                <span className="relative z-10">Solicitar Consultoria</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="institutional-button-secondary group"
              >
                <span className="relative z-10">Conheça Nossa Empresa</span>
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Recognition */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { number: '15+', label: 'Anos de Experiência' },
                { number: '1000+', label: 'Clientes Atendidos' },
                { number: '24/7', label: 'Monitoramento' },
                { number: '99.9%', label: 'Taxa de Satisfação' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="institutional-stat-card group animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-lg" />
                  <div className="relative">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
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