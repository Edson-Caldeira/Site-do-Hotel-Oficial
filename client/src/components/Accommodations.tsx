import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import * as LucideIcons from 'lucide-react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Icon = ({
  name,
  className,
}: {
  name:
    | keyof typeof LucideIcons
    | 'AirVent'
    | 'Tv'
    | 'Refrigerator'
    | 'Coffee'
    | 'Wifi';
  className?: string;
}) => {
  const LucideIcon =
    LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<{
      className?: string;
    }>;

  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

const rooms = [
  {
    id: 'standard',
    name: 'Standard',
    images: [
      '/search_images/ObzR3H1DJxCm.webp',
      '/search_images/XxrTQbCHSDzv.jpg',
      '/search_images/zOXZciuWyIKJ.jpg',
    ],
    description:
      'Nosso quarto standard oferece todo o conforto necessário para uma estadia agradável. Ideal para casais ou viajantes individuais que buscam praticidade e elegância.',
    amenities: [
      { name: 'Ar-condicionado', icon: 'AirVent' },
      { name: 'TV', icon: 'Tv' },
      { name: 'Frigobar', icon: 'Refrigerator' },
      { name: 'Café da manhã', icon: 'Coffee' },
      { name: 'WiFi', icon: 'Wifi' },
    ],
  },
  {
    id: 'duplo',
    name: 'Duplo',
    images: [
      '/search_images/XxrTQbCHSDzv.jpg',
      '/search_images/ObzR3H1DJxCm.webp',
      '/search_images/zOXZciuWyIKJ.jpg',
    ],
    description:
      'Espaçoso e confortável, o quarto duplo conta com duas camas de solteiro ou uma cama de casal, perfeito para casais ou amigos que viajam juntos.',
    amenities: [
      { name: 'Ar-condicionado', icon: 'AirVent' },
      { name: 'TV', icon: 'Tv' },
      { name: 'Frigobar', icon: 'Refrigerator' },
      { name: 'Café da manhã', icon: 'Coffee' },
      { name: 'WiFi', icon: 'Wifi' },
    ],
  },
  {
    id: 'triplo',
    name: 'Triplo',
    images: [
      '/search_images/zOXZciuWyIKJ.jpg',
      '/search_images/ObzR3H1DJxCm.webp',
      '/search_images/XxrTQbCHSDzv.jpg',
    ],
    description:
      'Acomodação ideal para pequenos grupos ou famílias, oferecendo três camas confortáveis em um ambiente amplo e bem decorado.',
    amenities: [
      { name: 'Ar-condicionado', icon: 'AirVent' },
      { name: 'TV', icon: 'Tv' },
      { name: 'Frigobar', icon: 'Refrigerator' },
      { name: 'Café da manhã', icon: 'Coffee' },
      { name: 'WiFi', icon: 'Wifi' },
    ],
  },
  {
    id: 'quadruplo',
    name: 'Quádruplo',
    images: [
      '/search_images/KG0PgTXrBrNo.jpg',
      '/search_images/ObzR3H1DJxCm.webp',
      '/search_images/XxrTQbCHSDzv.jpg',
    ],
    description:
      'Perfeito para famílias ou grupos de amigos, o quarto quádruplo oferece quatro camas em um ambiente espaçoso e acolhedor.',
    amenities: [
      { name: 'Ar-condicionado', icon: 'AirVent' },
      { name: 'TV', icon: 'Tv' },
      { name: 'Frigobar', icon: 'Refrigerator' },
      { name: 'Café da manhã', icon: 'Coffee' },
      { name: 'WiFi', icon: 'Wifi' },
    ],
  },
  {
    id: 'quintuplo',
    name: 'Quíntuplo',
    images: [
      '/search_images/BgnNpSam5HdW.webp',
      '/search_images/ObzR3H1DJxCm.webp',
      '/search_images/XxrTQbCHSDzv.jpg',
    ],
    description:
      'Nossa maior acomodação, ideal para grupos grandes ou famílias numerosas, oferecendo cinco camas em um ambiente amplo e confortável.',
    amenities: [
      { name: 'Ar-condicionado', icon: 'AirVent' },
      { name: 'TV', icon: 'Tv' },
      { name: 'Frigobar', icon: 'Refrigerator' },
      { name: 'Café da manhã', icon: 'Coffee' },
      { name: 'WiFi', icon: 'Wifi' },
    ],
  },
];

export default function Accommodations() {
  const [activeRoom, setActiveRoom] = useState('standard');
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const currentRoom = rooms.find((r) => r.id === activeRoom)!;

  const openFullscreen = (index: number) => setFullscreenIndex(index);
  const closeFullscreen = () => setFullscreenIndex(null);

  const nextImage = () =>
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev + 1) % currentRoom.images.length
    );
  const prevImage = () =>
    setFullscreenIndex((prev) =>
      prev === null
        ? currentRoom.images.length - 1
        : (prev - 1 + currentRoom.images.length) %
          currentRoom.images.length
    );

  return (
    <section id="accommodations" className="w-full py-0">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8 px-0">

        <h2 className="text-4xl font-playfair-display font-light text-center text-gray-800 mb-12 relative pb-4">
          Nossas Acomodações
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#D4AF37]" />
        </h2>

        {/* Room Tabs */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-12">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`px-6 py-3 font-playfair-display font-semibold uppercase tracking-wider transition-all duration-300 relative ${
                activeRoom === room.id
                  ? 'text-[#722F37]'
                  : 'text-gray-600 hover:text-[#722F37]'
              }`}
            >
              {room.name}
              {activeRoom === room.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#722F37]" />
              )}
            </button>
          ))}
        </div>

        {/* Room Content */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Carousel com botões dentro */}
            <div className="flex-1 relative">
              <Carousel className="w-full relative">
                <CarouselContent>
                  {currentRoom.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={`${currentRoom.name} - Foto ${index + 1}`}
                        className="w-full h-80 object-cover rounded-2xl cursor-pointer"
                        onClick={() => openFullscreen(index)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Botões dentro da imagem */}
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10" />
              </Carousel>
            </div>

            {/* Texto e comodidades */}
            <div className="flex-1">
              <h3 className="text-3xl font-playfair-display font-light text-gray-800 mb-4">
                {currentRoom.name}
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentRoom.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {currentRoom.amenities.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200 hover:bg-[#722F37] hover:text-white hover:shadow-md transition-all duration-300"
                  >
                    <Icon
                      name={
                        amenity.icon as
                          | 'AirVent'
                          | 'Tv'
                          | 'Refrigerator'
                          | 'Coffee'
                          | 'Wifi'
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de tela cheia com navegação */}
      {fullscreenIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Botão fechar */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-6 bg-black/50 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X size={28} />
          </button>

          {/* Botão anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Imagem em tela cheia */}
          <img
            src={currentRoom.images[fullscreenIndex]}
            alt="Imagem em tela cheia"
            className="max-w-6xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />

          {/* Botão próximo */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
