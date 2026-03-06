import { Phone, MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="w-full bg-white py-20">

      {/* CONTAINER GERAL */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-start">

        {/* =============================== */}
        {/* 🔶 COLUNA ESQUERDA – CONTATOS */}
        {/* =============================== */}
        <div className="flex flex-col gap-8">

          {/* Título Contatos */}
          <h2 className="text-3xl font-light text-[#722F37] mb-2">
            Contatos
          </h2>

          {/* Lista de Contatos */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-[#D4AF37] w-6 h-6" />
              <p className="text-gray-700 text-lg">(77) 3454-2244</p>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="text-[#25D366] w-6 h-6" />
              <p className="text-gray-700 text-lg">(77) 99186-2244</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#D4AF37] w-6 h-6" />
              <p className="text-gray-700 text-lg">caetitepalace@hotmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Instagram className="text-[#D4AF37] w-6 h-6" />
              <p className="text-gray-700 text-lg">@caetitepalace</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#D4AF37] w-6 h-6" />
              <p className="text-gray-700 text-lg leading-snug">
                Praça Tancredo Neves, 10 – Centro, Caetité – BA
              </p>
            </div>
          </div>
        </div>

        {/* =============================== */}
        {/* 🔶 COLUNA DIREITA – MAPA */}
        {/* =============================== */}
        <div className="flex flex-col gap-4">

          {/* Título Localização */}
          <h2 className="text-3xl font-light text-[#722F37] mb-2">
            Localização
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.88665671560636!2d-42.484769931922!3d-14.06616133627034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x744d5cc36baec25%3A0x100f1a8191c5d6b6!2sCaetit%C3%A9%20Palace%20Hotel!5e0!3m2!1sen!2sbr!4v1756655184653!5m2!1sen!2sbr"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
