import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryData = {
  estrutura: [
    '/FachadaBanner.jpeg',
    '/Recepção/quadros.jpg',
    '/Recepção/jarro.jpg',
    '/Deck/WhatsApp Image 2022-08-29 at 10.16.35.jpeg',
    '/Recepção/sala ampla.jpg',
    '/Recepção/salacentro.jpg',
    '/Estrutura/Estrutura-1.jpg',
    '/Estrutura/Estrutura-2.jpg',
  ],
  quartos: [
    '/Quartos/Casal 1.jpeg',
    '/Quartos/casal 2.jpeg',
    '/Quartos/Casal 3.jpeg',
    '/search_images/KG0PgTXrBrNo.jpg',
  ],
  cafe: [
    '/Café da Manhã/Cafe 1.jpg',
    '/Café da Manhã/Cafe 2.jpg',
    '/Café da Manhã/Cafe 3.jpg',
    '/Café da Manhã/Cafe 4.jpg',
    '/Café da Manhã/caféwilliam4.jpg',
    '/Café da Manhã/caféwilliam6.jpg',
  ],
  eventos: [
    '/Salão de Eventos/Salão 1.jpeg',
    '/Salão de Eventos/Salão 2.jpeg',
    '/Salão de Eventos/Salão 3.jpg',
    '/Salão de Eventos/WhatsApp Image 2022-03-21 at 18.38.04.jpeg',
    '/Salão de Eventos/Salão 5.jpeg',
    '/Salão de Eventos/Salão 6.jpg',
  ],
};

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState<keyof typeof galleryData>('estrutura');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = galleryData[activeGallery];

  // Touch swipe refs
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const openModal = (image: string) => {
    const index = currentImages.indexOf(image);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIdx = (prev + 1) % currentImages.length;
      setSelectedImage(currentImages[nextIdx]);
      return nextIdx;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => {
      const prevIdx = (prev - 1 + currentImages.length) % currentImages.length;
      setSelectedImage(currentImages[prevIdx]);
      return prevIdx;
    });
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 60) {
      nextImage(); // swipe esquerda
    }
    if (distance < -60) {
      prevImage(); // swipe direita
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="w-full bg-white py-2">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 px-6">
        
        <h2 className="text-4xl font-playfair-display font-light text-center text-gray-800 mb-12 relative pb-4">
          Galeria
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#D4AF37]" />
        </h2>

        {/* TABS */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-12">
          {Object.keys(galleryData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveGallery(key as keyof typeof galleryData)}
              className={`px-6 py-3 font-playfair-display font-semibold uppercase tracking-wider transition-all duration-300 relative ${
                activeGallery === key
                  ? 'text-[#722F37]'
                  : 'text-gray-600 hover:text-[#722F37]'
              }`}
            >
              {key === 'estrutura'
                ? 'Estrutura'
                : key === 'quartos'
                ? 'Quartos'
                : key === 'cafe'
                ? 'Café da Manhã'
                : 'Salão de Eventos'}

              {activeGallery === key && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#722F37]" />
              )}
            </button>
          ))}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-6">
          {currentImages.map((image) => (
            <div
              key={image}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-48"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* MOBILE - LIMITA A 6 */}
        <div className="grid grid-cols-3 gap-4 md:hidden">
          {currentImages.slice(0, 6).map((image) => (
            <div
              key={image}
              className="relative overflow-hidden rounded-xl h-28 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 bg-black/50 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X size={28} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center">
            <img
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 px-6 py-3 rounded-full backdrop-blur-md">
            {currentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setSelectedImage(currentImages[index]);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-[#D4AF37] scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
