import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '5511999999999'; // Replace with your actual WhatsApp number
  const message = 'Olá! Gostaria de saber mais sobre os produtos de segurança.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 left-4 z-50 bg-[#25D366] text-white p-3 rounded-full
                shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300
                flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-300">
        Fale Conosco
      </span>
    </button>
  );
}