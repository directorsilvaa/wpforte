import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80',
    title: 'Sistema de Câmeras HD',
    description: 'Monitoramento em alta definição 24/7'
  },
  {
    url: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80',
    title: 'Controle de Acesso',
    description: 'Segurança biométrica avançada'
  },
  {
    url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    title: 'Central de Monitoramento',
    description: 'Equipe especializada 24 horas'
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    title: 'Sistemas Integrados',
    description: 'Tecnologia de ponta em segurança'
  },
  {
    url: 'https://images.unsplash.com/photo-1517428956741-0e738679fc79?auto=format&fit=crop&q=80',
    title: 'Alarmes Inteligentes',
    description: 'Detecção avançada de intrusão'
  },
  {
    url: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80',
    title: 'Fechaduras Digitais',
    description: 'Controle total de acesso'
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage(prev => 
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(prev =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-brand-red/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-red/10 rounded-full mb-4">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-brand-red" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos e instalações de sistemas de segurança
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover
                         transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <div className="relative w-full max-w-5xl px-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white
                         bg-black/50 rounded-full transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2
                         text-gray-400 hover:text-white bg-black/50 rounded-full
                         transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2
                         text-gray-400 hover:text-white bg-black/50 rounded-full
                         transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Container */}
              <div className="relative aspect-[16/9]">
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-lg">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}