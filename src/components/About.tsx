import React from 'react';
import { Shield, Target, Users, Award, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-brand-red/10 rounded-full mb-4">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-brand-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Nossa História
          </h2>
          <div className="relative">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed px-4 sm:px-0">
              Há mais de 15 anos, somos referência em soluções de segurança eletrônica,
              protegendo o que é mais valioso para nossos clientes com dedicação e excelência.
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative mb-16 sm:mb-20">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-brand-red/20 to-transparent" />
          
          {[
            {
              year: '2008',
              title: 'Fundação',
              description: 'Início das operações com foco em sistemas de alarme residencial.'
            },
            {
              year: '2013',
              title: 'Expansão',
              description: 'Ampliação para o setor corporativo e implementação de monitoramento 24/7.'
            },
            {
              year: '2018',
              title: 'Inovação',
              description: 'Integração de soluções IoT e automação aos sistemas de segurança.'
            },
            {
              year: '2023',
              title: 'Liderança',
              description: 'Reconhecimento como líder em segurança eletrônica na região.'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-center 
                         ${index % 2 === 0 ? 'md:justify-end' : ''} 
                         mb-8 sm:mb-12 last:mb-0`}
            >
              {/* Mobile year badge - shown only on mobile */}
              <div className="md:hidden mb-4 px-4 py-2 bg-brand-red/10 rounded-lg">
                <span className="text-brand-red font-bold">{item.year}</span>
              </div>

              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Desktop year badge - hidden on mobile */}
                  <div className="hidden md:flex items-center space-x-4 mb-4">
                    <span className="px-4 py-2 bg-brand-red/10 rounded-lg text-brand-red font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  {/* Mobile title - shown only on mobile */}
                  <h3 className="md:hidden text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-red rounded-full shadow-lg" />
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: Shield,
              title: "Compromisso",
              description: "Dedicação total à segurança e tranquilidade dos nossos clientes",
              color: "from-red-500/20 to-brand-red/20"
            },
            {
              icon: Target,
              title: "Precisão",
              description: "Tecnologia de ponta para monitoramento e proteção 24 horas",
              color: "from-brand-red/20 to-red-500/20"
            },
            {
              icon: Users,
              title: "Experiência",
              description: "Equipe altamente qualificada e constantemente atualizada",
              color: "from-red-500/20 to-brand-red/20"
            },
            {
              icon: Award,
              title: "Qualidade",
              description: "Reconhecimento e excelência em serviços de segurança",
              color: "from-brand-red/20 to-red-500/20"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg
                       hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className="inline-flex p-2 sm:p-3 bg-brand-red rounded-xl shadow-lg
                            group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-3 sm:mt-4 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center text-brand-red group-hover:translate-x-2 transition-transform duration-300">
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