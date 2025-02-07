import React from 'react';
import { Shield, Target, Users, Award, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-red/10 rounded-full mb-4">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-brand-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sobre a WP Forte
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Há mais de 15 anos definindo os padrões de excelência em segurança eletrônica
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { number: '15+', label: 'Anos de Experiência' },
            { number: '1000+', label: 'Clientes Atendidos' },
            { number: '24/7', label: 'Monitoramento' },
            { number: '99.9%', label: 'Taxa de Satisfação' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl border border-gray-800 hover:border-brand-red/30
                       bg-gray-900/30 backdrop-blur-sm
                       transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Compromisso",
              description: "Dedicação total à segurança e tranquilidade dos nossos clientes"
            },
            {
              icon: Target,
              title: "Precisão",
              description: "Tecnologia de ponta para monitoramento e proteção 24 horas"
            },
            {
              icon: Users,
              title: "Experiência",
              description: "Equipe altamente qualificada e constantemente atualizada"
            },
            {
              icon: Award,
              title: "Qualidade",
              description: "Reconhecimento e excelência em serviços de segurança"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl
                       border border-gray-800 hover:border-brand-red/30
                       transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative">
                <div className="inline-flex p-3 bg-brand-red/10 rounded-xl mb-4
                            group-hover:bg-brand-red/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-brand-red" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center text-brand-red group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}