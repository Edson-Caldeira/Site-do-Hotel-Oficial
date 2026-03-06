import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/Fachada.jpg',
  '/Neo_11.jpg',
  '/Casal1.jpeg',
  '/Estrutura2.jpg',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="pt-35 bg-white w-full">
      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden shadow-xl h-[650px]">

        {/* Fundo com slideshow */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Conteúdo */}
        <div className="relative z-10 h-full flex justify-center items-end pb-32 text-center">
          <a
            href="https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F5577991862244%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnq5p3EfIw5qNmHgawfA0_SU_XJ93HPg0mHKAZDmb_sYxCiwDCVja6WNldlVs_aem_9o28TItK3ixDJwAQNHn5gQ&e=AT05qCqydw1mDMFI8Q2iR-IxE3zf8EejSEVIFI-GRM1LY3oeJUQ8bHEwUoP7MoDvI02qSICFbtug38CVw7xVgbjvBXtRlR4lUSFz_NwlHA"
             target="_blank" rel="noopener noreferrer"
            className="
              px-12 py-4 text-2xl 
              bg-[#722F37]
              border-2 border-none
              text-white
              rounded-full 
              font-playfair-display font-extrabold uppercase tracking-wider
              transition-all duration-300
              hover:bg-[#722F37]
              active:bg-[#722F37]
            "
          >
            Reserve Agora
          </a>
        </div>

        {/* Botões */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded hover:bg-black/70 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded hover:bg-black/70 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/50 px-6 py-2 rounded-full">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? 'bg-[#D4AF37] scale-125'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
