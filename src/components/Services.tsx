import React from 'react';
import { Camera, Bell, Lock, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Monitoramento 24h',
    description: 'Vigilância constante com câmeras de alta definição e tecnologia de detecção de movimento.',
    features: [
      'Câmeras Full HD',
      'Visão Noturna',
      'Detecção de Movimento',
      'Gravação em Nuvem'
    ]
  },
  {
    icon: Bell,
    title: 'Alarmes Inteligentes',
    description: 'Sistemas de alarme com sensores avançados e notificações em tempo real no seu smartphone.',
    features: [
      'Sensores Sem Fio',
      'Notificações Push',
      'Controle via App',
      'Bateria Backup'
    ]
  },
  {
    icon: Lock,
    title: 'CFTV e Controle de Acesso',
    description: 'Controle total sobre quem entra e sai, com registro detalhado de acessos.',
    features: [
      'Biometria',
      'Cartão RFID',
      'Histórico de Acessos',
      'Integração com CFTV'
    ]
  },
  {
    icon: Home,
    title: 'Automação Residencial',
    description: 'Integração completa dos sistemas de segurança com sua casa inteligente.',
    features: [
      'Controle de Iluminação',
      'Automação de Portões',
      'Integração IoT',
      'Cenários Personalizados'
    ]
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-transparent to-brand-red/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossas Soluções de Segurança
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-6">
            Tecnologia de ponta para proteger seu patrimônio e sua tranquilidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl
                       transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Service Header */}
              <div className="p-4 sm:p-6 pb-4">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-red/10 rounded-full
                              group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                <div className="relative">
                  <div className="inline-flex p-2 sm:p-3 bg-brand-red rounded-xl shadow-lg
                                group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-3 sm:mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="space-y-2 mt-4">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full px-4 py-2 text-sm font-medium text-brand-red
                                 border border-brand-red/20 rounded-lg
                                 hover:bg-brand-red hover:text-white
                                 transition-colors duration-300
                                 flex items-center justify-center group">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}