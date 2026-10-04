'use client';

import React from 'react';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { 
  Sparkles, 
  Laugh, 
  Music, 
  MessageSquare, 
  Tv, 
  Calendar, 
  Flame,
  Wine
} from 'lucide-react';

export default function ParodyClubSection() {
  const { language, t } = useSettings();

  const shows = [
    {
      id: 'las-carinosas',
      title: t.parodySection.show1Title,
      badge: t.parodySection.show1Badge,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      desc: t.parodySection.show1Desc,
      image: '/images/parodia/las-carinosas-show.jpg',
      icon: <Flame className="w-5 h-5 text-rose-600" />,
      schedule: language === 'es' ? 'Viernes & Sábados • 9:30 PM' : 'Fri & Sat • 9:30 PM',
      location: language === 'es' ? 'Piso 2 • Salón Principal' : 'Floor 2 • Main Theater Hall',
    },
    {
      id: 'el-magnate',
      title: t.parodySection.show2Title,
      badge: t.parodySection.show2Badge,
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      desc: t.parodySection.show2Desc,
      image: '/images/parodia/parodia-sketch.png',
      icon: <Laugh className="w-5 h-5 text-amber-600" />,
      schedule: language === 'es' ? 'Jueves a Domingos • 8:00 PM' : 'Thu to Sun • 8:00 PM',
      location: language === 'es' ? 'Piso 25 • Sky Rooftop Stage' : 'Floor 25 • Sky Rooftop Stage',
    },
    {
      id: 'staff-animacion',
      title: t.parodySection.show3Title,
      badge: t.parodySection.show3Badge,
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      desc: t.parodySection.show3Desc,
      image: '/images/parodia/staff-animacion.png',
      icon: <Music className="w-5 h-5 text-emerald-600" />,
      schedule: language === 'es' ? 'Todas las noches • 7:00 PM - 2:00 AM' : 'Every night • 7:00 PM - 2:00 AM',
      location: language === 'es' ? 'Lobby Lounge & Billar VIP' : 'Lobby Lounge & VIP Billiards',
    },
  ];

  return (
    <section id="parodia" className="py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Laugh className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.parodySection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.parodySection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.parodySection.subtitle}
          </p>
        </div>

        {/* Parody Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {shows.map((show) => (
            <div
              key={show.id}
              className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={show.image}
                  alt={show.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md shadow-sm ${show.badgeColor}`}>
                    {show.badge}
                  </span>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm border border-stone-200">
                  {show.location}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{show.schedule}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {show.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    {show.desc}
                  </p>
                </div>

                {/* CTA Action to Martín Quintero */}
                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(
                      language === 'es'
                        ? `Hola Martín Quintero, me gustaría reservar mesa VIP para el "${show.title}" en el Club Parodia de Hostelo Cartagena.`
                        : `Hello Martín Quintero, I would like to reserve a VIP table for "${show.title}" at Hostelo Parody Club in Cartagena.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>{t.parodySection.bookTableBtn}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature VIP Banner */}
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-stone-800 flex items-center justify-center flex-shrink-0 mt-1 border border-stone-200 shadow-sm">
              <Wine className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                {language === 'es' 
                  ? 'Coctelería de Autor & Experiencia Exclusiva para Huéspedes' 
                  : 'Signature Cocktails & Exclusive Guest Access'}
              </h4>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
                {language === 'es'
                  ? 'Los huéspedes de Hostelo cuentan con entrada preferencial y reserva de mesa garantizada para todos los shows del Club Parodia coordinando previamente con Martín Quintero.'
                  : 'Hostelo guests enjoy priority entry and guaranteed table reservations for all Parody Club shows by coordinating in advance with Martín Quintero.'}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(
              language === 'es'
                ? 'Hola Martín Quintero, deseo información sobre la cartelera de shows del Club Parodia en Hostelo Cartagena.'
                : 'Hello Martín Quintero, I would like information regarding the upcoming Parody Club show schedule at Hostelo Cartagena.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{language === 'es' ? 'Consultar Cartelera de Shows' : 'View Show Schedule'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
