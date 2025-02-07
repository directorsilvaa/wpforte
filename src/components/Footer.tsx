import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock, Shield, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-brand-red" />
              <span className="text-xl font-bold text-white">WP FORTE</span>
            </div>
            <p className="text-sm text-gray-400">
              Soluções completas em segurança eletrônica para sua tranquilidade.
              Monitoramento 24 horas, 7 dias por semana.
            </p>
            <a 
              href="https://instagram.com/wpforte" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-brand-red transition-colors group"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm font-medium">@wpforte</span>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5511999999999" className="flex items-start space-x-3 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-brand-red shrink-0" />
                  <span className="text-sm">(11) 99999-9999</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@wpforte.com.br" className="flex items-start space-x-3 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-brand-red shrink-0" />
                  <span className="text-sm">contato@wpforte.com.br</span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-brand-red shrink-0" />
                <div className="text-sm">
                  <p>Seg - Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Endereço</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-brand-red shrink-0" />
              <div className="text-sm">
                <p>Av. Exemplo, 1000</p>
                <p>Bairro Centro</p>
                <p>São Paulo - SP</p>
                <p>CEP: 01001-000</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Serviços', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} WP Forte Segurança Eletrônica. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <a href="/privacidade" className="text-sm text-gray-500 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-sm text-gray-500 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}