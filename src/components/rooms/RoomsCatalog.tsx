'use client';

import React, { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { ROOMS_DATA } from '@/data/rooms';
import RoomCard from './RoomCard';
import { Sparkles, Building, Layers, Check } from 'lucide-react';

interface RoomsCatalogProps {
  initialFilter?: 'all' | 'standard' | 'penthouse';
}

export default function RoomsCatalog({ initialFilter = 'all' }: RoomsCatalogProps) {
  const { language, t } = useSettings();
  const [activeCategory, setActiveCategory] = useState<'all' | 'standard' | 'penthouse'>(initialFilter);

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeCategory === 'all') return true;
    return room.category === activeCategory;
  });

  return (
    <section id="habitaciones" className="py-24 bg-stone-50 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.roomsSection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.roomsSection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.roomsSection.subtitle}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
              activeCategory === 'all'
                ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t.roomsSection.filterAll}</span>
          </button>

          <button
            onClick={() => setActiveCategory('standard')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
              activeCategory === 'standard'
                ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>{t.roomsSection.filterStandard}</span>
          </button>

          <button
            onClick={() => setActiveCategory('penthouse')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
              activeCategory === 'penthouse'
                ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold shadow-sm'
                : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{t.roomsSection.filterPenthouse}</span>
          </button>
        </div>

        {/* Architectural Guarantee Notice */}
        <div className="max-w-4xl mx-auto mb-10 bg-white border border-stone-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-200">
              <Check className="w-4 h-4" />
            </div>
            <span>
              {language === 'es'
                ? 'Garantía Arquitectónica Hostelo: Solo 4 habitaciones por piso para evitar pasillos concurridos y asegurar total tranquilidad con vista al mar caribeño.'
                : 'Hostelo Architectural Guarantee: Strictly 4 suites per floor to prevent busy corridors and ensure serene privacy overlooking the Caribbean.'}
            </span>
          </div>
          <span className="text-stone-900 font-bold whitespace-nowrap">
            25 Pisos • 100 Habitaciones
          </span>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
