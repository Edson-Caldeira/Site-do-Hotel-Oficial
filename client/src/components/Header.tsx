import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#722F37] z-50 py-8 shadow-md h-35">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 w-full">
        
        <a href="#">
          <img
            src="/LogoFundoTransparente2.png"
            alt="Caetité Palace Hotel"
            className="object-contain h-23"
          />
        </a>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {[
            { id: "home", label: "Início" },
            { id: "accommodations", label: "Acomodações" },
            { id: "gallery", label: "Galeria" },
            { id: "contact", label: "Informações" },
            { id: "location", label: "Contato" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="font-playfair-display font-medium text-white text-xl hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ============================ */}
      {/*        SIDEBAR MOBILE        */}
      {/* ============================ */}

      {/* Fundo escuro (click para fechar) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#722F37] z-50 p-6 pt-10 shadow-xl transform md:hidden
          transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Botão fechar */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={28} />
        </button>

        {/* Lista de navegação */}
        <ul className="flex flex-col gap-6 mt-10">
          {[
            { id: "home", label: "Início" },
            { id: "accommodations", label: "Acomodações" },
            { id: "gallery", label: "Galeria" },
            { id: "contact", label: "História" },
            { id: "location", label: "Informações" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white text-xl font-playfair-display hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
