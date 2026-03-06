import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Contact() {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [fullscreenImages, setFullscreenImages] = useState<string[]>([]);

  const openFullscreen = (images: string[], index: number) => {
    setFullscreenImages(images);
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
    setFullscreenImages([]);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenIndex === null) return;
    setFullscreenIndex((prev) =>
      prev! === 0 ? fullscreenImages.length - 1 : prev! - 1
    );
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullscreenIndex === null) return;
    setFullscreenIndex((prev) =>
      prev! === fullscreenImages.length - 1 ? 0 : prev! + 1
    );
  };

  return (
    <>
      {/* =================== FULLSCREEN =================== */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={closeFullscreen}
        >
          <button
            onClick={showPrev}
            className="absolute left-5 text-white text-5xl px-4 py-2"
          >
            ❮
          </button>

          <img
            src={fullscreenImages[fullscreenIndex]}
            className="max-w-[95%] max-h-[95%] object-contain rounded-2xl shadow-2xl"
            alt="fullscreen"
          />

          <button
            onClick={showNext}
            className="absolute right-5 text-white text-5xl px-4 py-2"
          >
            ❯
          </button>
        </div>
      )}
      {/* =================================================== */}

      <section id="caetite" className="w-full bg-gray-50 py-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

          {/* ===================== ESQUERDA ===================== */}
          <div className="flex flex-col gap-8 items-start">

            {/* TÍTULO ESQUERDO */}
            <h2 className="text-3xl font-light text-[#722F37]">
              História da cidade
            </h2>

            {/* CARROSSEL ESQUERDO */}
            {(() => {
              const leftImages = [
                "/images/caetite1.jpg",
                "/images/caetite2.jpg",
                "/images/caetite3.jpg",
              ];

              return (
                <div className="rounded-2xl overflow-hidden shadow-2xl w-[80%] h-[250px]">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                  >
                    {leftImages.map((src, i) => (
                      <SwiperSlide key={src}>
                        <img
                          src={src}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => openFullscreen(leftImages, i)}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              );
            })()}

            {/* TEXTO ESQUERDO */}
            <p className="leading-relaxed text-lg text-gray-800 w-[80%]">
              Caetité surgiu no século XVII como um núcleo de catequese em uma região originalmente habitada por povos indígenas jê,
              especialmente tupinaens, pataxós e os Maracás. Em 1867, tornou-se cidade. O nome “Caetité” vem do tupi e significa
              “mata da pedra grande”, referência à Pedra Redonda. A economia atual destaca-se pela mineração de urânio, ferro,
              manganês e ametista, além de parques eólicos, cerâmicas, têxteis e agropecuária, consolidando o município como
              polo regional.
            </p>
          </div>

          {/* ===================== DIREITA ===================== */}
          <div className="flex flex-col gap-8 items-start">

            {/* TÍTULO DIREITO */}
            <h2 className="text-3xl font-light text-[#722F37]">
              Conheça o hotel
            </h2>

            {/* CARROSSEL DIREITO */}
            {(() => {
              const rightImages = [
                "/Fachada.jpg",
                "/fachada-lateral.jpg",
                "/Neo_11.jpg",
              ];

              return (
                <div className="rounded-2xl overflow-hidden shadow-2xl w-[80%] h-[250px]">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                  >
                    {rightImages.map((src, i) => (
                      <SwiperSlide key={src}>
                        <img
                          src={src}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => openFullscreen(rightImages, i)}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              );
            })()}

            {/* TEXTO DIREITO */}
            <p className="text-gray-700 text-lg leading-relaxed w-[90%]">
              O <strong>Caetité Palace Hotel</strong> reúne conforto, elegância e hospitalidade no coração da cidade.
              Com suítes modernas, restaurante próprio, café da manhã incluso, estacionamento, lavanderia e recepção 24h,
              oferecemos a melhor experiência para lazer ou negócios. A verdadeira hospitalidade baiana espera por você.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
