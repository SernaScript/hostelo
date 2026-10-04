'use client';

import React from 'react';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import BookingWidget from './BookingWidget';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  const { language, t } = useSettings();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-stone-50">
      {/* Background Media with Soft Luminous White Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85"
          alt="Hostelo Cartagena Resort 5 Estrellas con vista panorámica al Mar Caribe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-stone-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 text-center flex-1 flex flex-col justify-center items-center">
        {/* Five Star Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs uppercase tracking-widest font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main SEO H1 Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-stone-900 tracking-tight leading-[1.12] max-w-4xl mb-6">
          {t.hero.titleMain}{' '}
          <span className="italic font-normal text-amber-900 underline decoration-amber-400/50 decoration-1 underline-offset-8">
            {t.hero.titleSub}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl text-stone-600 max-w-2xl font-normal leading-relaxed mb-8">
          {t.hero.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
          <a
            href="#habitaciones"
            className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-3.5 rounded-full text-base shadow-sm transition-all duration-300 transform hover:scale-[1.02]"
          >
            {t.hero.ctaPrimary}
          </a>

          <a
            href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(
              language === 'es'
                ? `Hola Martín Quintero, me gustaría cotizar mi estadía en Hostelo Cartagena.`
                : `Hello Martín Quintero, I would like to inquire about my stay at Hostelo Cartagena.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-stone-50 text-stone-800 border border-stone-200/90 px-7 py-3.5 rounded-full text-base shadow-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-stone-300"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>{t.hero.ctaSecondary} (Martín Q.)</span>
          </a>
        </div>

        {/* Architecture Badges / 4 Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl text-left bg-white/95 p-5 sm:p-6 rounded-3xl border border-stone-200/80 shadow-sm">
          <div className="border-r border-stone-100 pr-2 sm:pr-4">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{t.hero.stat1Number}</div>
            <div className="text-xs text-stone-500 font-medium">{t.hero.stat1Label}</div>
          </div>
          <div className="border-r border-stone-100 pr-2 sm:pr-4">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{t.hero.stat2Number}</div>
            <div className="text-xs text-stone-500 font-medium">{t.hero.stat2Label}</div>
          </div>
          <div className="border-r border-stone-100 pr-2 sm:pr-4">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">{t.hero.stat3Number}</div>
            <div className="text-xs text-stone-500 font-medium">{t.hero.stat3Label}</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-amber-800">{t.hero.stat4Number}</div>
            <div className="text-xs text-stone-500 font-medium">{t.hero.stat4Label}</div>
          </div>
        </div>
      </div>

      {/* Floating Booking Widget */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        <BookingWidget />
      </div>
    </section>
  );
}
