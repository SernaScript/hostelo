'use client';

import React from 'react';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { RESORT_AMENITIES } from '@/data/amenities';
import { Sparkles, Waves, Utensils, Sun, Compass, Dumbbell } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
};

export default function AmenitiesSection() {
  const { language, t } = useSettings();

  return (
    <section id="experiencias" className="py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.amenitiesSection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.amenitiesSection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.amenitiesSection.subtitle}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESORT_AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-3xl border border-stone-200/90 hover:border-stone-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={amenity.image}
                  alt={amenity.title[language]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floor Pill */}
                {amenity.floorLocation && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-stone-800 border border-stone-200 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {amenity.floorLocation[language]}
                  </div>
                )}

                {/* Icon Badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center shadow-md">
                  {iconMap[amenity.iconName] || <Sparkles className="w-5 h-5 text-amber-400" />}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wider block mb-1">
                    {amenity.subtitle[language]}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {amenity.title[language]}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    {amenity.description[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-800">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span>{amenity.highlight[language]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
