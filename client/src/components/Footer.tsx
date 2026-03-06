import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
              Caetité Palace Hotel
            </h3>
            <p className="text-gray-300 mb-2">CNPJ: 01.808.259/0001-26</p>
            <p className="text-gray-300 mb-2">Praça Tancredo Neves, Nº 10 - Centro</p>
            <p className="text-gray-300">Caetité - Bahia - CEP: 46400-000</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Contato</h3>
            <p className="text-gray-300 mb-2">📞 (77) 3454-2244</p>
            <p className="text-gray-300 mb-2">📱 (77) 99186-2244</p>
            <p className="text-gray-300 mb-4">✉️ caetitepalace@hotmail.com</p>
            <a
              href="https://www.instagram.com/caetitepalace/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#cancellation"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Política de Cancelamento
                </a>
              </li>
              <li>
                <a
                  href="#sitemap"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Mapa do Site
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Caetité Palace Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

