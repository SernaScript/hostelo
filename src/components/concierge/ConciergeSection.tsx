'use client';

import React from 'react';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { 
  Sparkles, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

export default function ConciergeSection() {
  const { language, t } = useSettings();

  const services = [
    language === 'es' ? 'Recepción personalizada en el Aeropuerto Rafael Núñez' : 'Personal VIP meet & greet at CTG Airport',
    language === 'es' ? 'Alquiler de yates privados a Islas del Rosario, Cholón y Barú' : 'Private yacht charters to Rosario Islands & Cholón',
    language === 'es' ? 'Mesas VIP garantizadas en los mejores restaurantes del Centro Amurallado' : 'Guaranteed VIP table bookings in top historic restaurants',
    language === 'es' ? 'Atención preferencial para huéspedes de Penthouses (Pisos 21-25)' : 'Priority 24/7 care for Penthouse guests (Floors 21-25)',
    language === 'es' ? 'Coordinación de flores, champagne y amenidades de bienvenida en suite' : 'In-suite welcome amenities, fine champagne and florals',
    language === 'es' ? 'Servicio de niñera certificada y mayordomo privado bajo petición' : 'Certified nanny and private butler services upon request',
  ];

  return (
    <section id="concierge" className="py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-stone-50 via-white to-amber-50/20 border border-stone-200/90 rounded-3xl p-6 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Concierge Photo & Profile Card */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-stone-200 p-1 shadow-md mb-5 bg-white">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Martín Quintero - Head of Concierge Hostelo Cartagena"
                    fill
                    sizes="(max-width: 768px) 240px, 300px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-emerald-600 text-white p-1.5 rounded-full shadow-md border-2 border-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {HOTEL_CONFIG.concierge.name}
              </h3>
              <p className="text-amber-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mt-1">
                {HOTEL_CONFIG.concierge.role}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-stone-600 mt-2 bg-white px-3 py-1 rounded-full border border-stone-200 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'es' ? 'Disponible 24/7 para Huéspedes' : 'Available 24/7 for Guests'}</span>
              </div>
            </div>

            {/* Right: Pitch & Direct Contact Channels */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-widest uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.conciergeSection.tag}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                  {t.conciergeSection.title}
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
                  {t.conciergeSection.desc}
                </p>
              </div>

              {/* Concierge Services List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700 pt-2">
                {services.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200/80 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Buttons to Martín Quintero */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(
                    language === 'es'
                      ? 'Hola Martín Quintero, te escribo desde la página oficial de Hostelo Cartagena para una consulta personalizada sobre mi hospedaje.'
                      : 'Hello Martín Quintero, I am contacting you through the official Hostelo Cartagena website for personalized assistance regarding my stay.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm shadow-sm transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {HOTEL_CONFIG.concierge.phoneFormatted}</span>
                </a>

                <a
                  href={`tel:${HOTEL_CONFIG.concierge.phone}`}
                  className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{t.conciergeSection.callBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
