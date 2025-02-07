import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Estamos prontos para atender suas necessidades em segurança eletrônica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red
                           transition-colors text-sm sm:text-base"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red
                           transition-colors text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red
                           transition-colors text-sm sm:text-base"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red
                           transition-colors resize-none text-sm sm:text-base"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full institutional-button-primary text-sm sm:text-base"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            {[
              {
                icon: Phone,
                title: 'Telefone',
                description: 'Disponível 24/7 para atendimento',
                items: ['0800 123 4567', '(11) 99999-9999'],
                action: 'tel:+5511999999999'
              },
              {
                icon: Mail,
                title: 'E-mail',
                description: 'Resposta em até 24 horas',
                items: ['contato@empresa.com.br', 'suporte@empresa.com.br'],
                action: 'mailto:contato@empresa.com.br'
              },
              {
                icon: MapPin,
                title: 'Localização',
                description: 'Matriz São Paulo',
                items: ['Av. Paulista, 1000', 'São Paulo - SP'],
                action: '#'
              },
              {
                icon: Clock,
                title: 'Horário',
                description: 'Atendimento Comercial',
                items: ['Segunda a Sexta: 8h às 18h', 'Sábado: 9h às 13h'],
                action: '#'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.action}
                className="flex items-start space-x-4 p-4 rounded-lg
                         bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                         transition-colors group"
              >
                <div className="p-2 sm:p-3 bg-brand-red/10 rounded-lg group-hover:bg-brand-red/20 transition-colors">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.description}
                  </p>
                  {item.items.map((text, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-gray-800 dark:text-gray-200">
                      {text}
                    </p>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}