'use client';

import React from 'react';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { Compass, MapPin, Anchor, Landmark, Sunset, MessageSquare } from 'lucide-react';

export default function CartagenaGuide() {
  const { language, t } = useSettings();

  const tours = [
    {
      icon: <Anchor className="w-6 h-6 text-cyan-700" />,
      title: t.cartagenaSection.tour1Title,
      desc: t.cartagenaSection.tour1Desc,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      badge: language === 'es' ? "Tour Náutico VIP" : "VIP Nautical Charter",
    },
    {
      icon: <Landmark className="w-6 h-6 text-amber-700" />,
      title: t.cartagenaSection.tour2Title,
      desc: t.cartagenaSection.tour2Desc,
      image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=800&q=80",
      badge: language === 'es' ? "Patrimonio UNESCO" : "UNESCO World Heritage",
    },
    {
      icon: <Sunset className="w-6 h-6 text-amber-600" />,
      title: t.cartagenaSection.tour3Title,
      desc: t.cartagenaSection.tour3Desc,
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      badge: language === 'es' ? "Rooftop Piso 25" : "25th Floor Sky Sunset",
    },
  ];

  return (
    <section id="cartagena" className="py-24 bg-stone-50 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.cartagenaSection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.cartagenaSection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.cartagenaSection.subtitle}
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden hover:border-stone-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-stone-800 border border-stone-200 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm">
                  {tour.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="mb-3">{tour.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {tour.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(
                      language === 'es'
                        ? `Hola Martín Quintero, me interesa coordinar el tour "${tour.title}" durante mi estancia en Hostelo Cartagena.`
                        : `Hello Martín Quintero, I am interested in booking the tour "${tour.title}" during my stay at Hostelo Cartagena.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 hover:text-amber-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{language === 'es' ? 'Coordinar con Martín Quintero' : 'Coordinate with Martín Quintero'}</span>
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center flex-shrink-0 mt-1 border border-stone-200">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {language === 'es' ? 'Ubicación Inmejorable en Bocagrande' : 'Prime Location in Bocagrande'}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
                {HOTEL_CONFIG.location.address} • A 15 minutos del Aeropuerto Internacional Rafael Núñez (CTG) y a solo 8 minutos del Centro Histórico y Murallas.
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{language === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
