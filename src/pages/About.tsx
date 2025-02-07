import React from 'react';
import { Shield, ArrowRight, Users, Target, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden pt-16 sm:pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Security background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />
          </div>

          {/* Animated Grid - Hidden on mobile */}
          <div className="absolute inset-0 hidden sm:block">
            <div className="h-full w-full opacity-20" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(213,0,0,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(213,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              mask: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home */}
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-10 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Voltar para Home</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-brand-red" />
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
                Nossa História
              </h1>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl">
              Conheça a trajetória da WP Forte, uma empresa que há mais de 15 anos 
              define os padrões de excelência em segurança eletrônica no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 h-full w-px bg-gradient-to-b from-brand-red via-brand-red/50 to-transparent" />

            {/* Timeline Events */}
            {[
              {
                year: '2008',
                title: 'O Início',
                description: 'Fundação da WP Forte com foco em sistemas de alarme residencial.',
                image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80'
              },
              {
                year: '2013',
                title: 'Expansão',
                description: 'Ampliação para o setor corporativo e implementação de monitoramento 24/7.',
                image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80'
              },
              {
                year: '2018',
                title: 'Inovação',
                description: 'Integração de soluções IoT e automação aos sistemas de segurança.',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
              },
              {
                year: '2023',
                title: 'Liderança',
                description: 'Reconhecimento como líder em segurança eletrônica na região.',
                image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80'
              }
            ].map((event, index) => (
              <div 
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 sm:mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 sm:w-4 sm:h-4 bg-brand-red rounded-full shadow-lg shadow-brand-red/50" />
                
                {/* Content */}
                <div className="ml-10 sm:ml-0 sm:w-1/2 space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-brand-red font-bold text-base sm:text-lg lg:text-xl">{event.year}</span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{event.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">{event.description}</p>
                  
                  {/* Mobile Image */}
                  <div className="block sm:hidden w-full mt-3">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Desktop Image */}
                <div className="hidden sm:block sm:w-1/2">
                  <div className="relative group rounded-lg overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3">Nossos Valores</h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Princípios que guiam nossa missão de proporcionar segurança e tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group relative p-4 sm:p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-brand-red/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <div className="relative">
                  <div className="inline-flex p-2 sm:p-3 bg-brand-red/10 rounded-lg mb-3 group-hover:bg-brand-red/20 transition-colors">
                    <value.icon className="h-5 w-5 text-brand-red" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                  
                  <div className="mt-3 flex items-center text-brand-red group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-black p-4 sm:p-8 lg:p-12">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
              <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
              <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Pronto para começar?</h2>
                <p className="text-sm text-gray-400 max-w-xl">
                  Entre em contato conosco e descubra como podemos proteger seu patrimônio com soluções personalizadas de segurança.
                </p>
              </div>
              <Link 
                to="/"
                className="institutional-button-primary whitespace-nowrap group w-full sm:w-auto"
              >
                <span>Solicitar Consultoria</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}