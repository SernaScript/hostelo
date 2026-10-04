'use client';

import React, { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { Building, Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function FloorVisualizer() {
  const { language, t, formatPrice, openBookingModal } = useSettings();
  const [activeFloorTier, setActiveFloorTier] = useState<'standard' | 'penthouse'>('penthouse');

  return (
    <section id="arquitectura" className="py-24 bg-white text-stone-900 relative overflow-hidden border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.floorsSection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.floorsSection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.floorsSection.subtitle}
          </p>
        </div>

        {/* Architectural Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Tower Representation */}
          <div className="lg:col-span-5 bg-stone-50 border border-stone-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-3">
              <span className="text-xs uppercase tracking-wider text-stone-700 font-semibold flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-600" />
                Torre Hostelo • 25 Niveles
              </span>
              <span className="text-xs bg-white text-stone-700 px-2.5 py-0.5 rounded-full border border-stone-200 font-medium">
                100 Suites (4 por piso)
              </span>
            </div>

            {/* Visual Tower Stack */}
            <div className="space-y-3">
              {/* Penthouse Tier (Floors 21-25) */}
              <div 
                onClick={() => setActiveFloorTier('penthouse')}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                  activeFloorTier === 'penthouse'
                    ? 'bg-amber-50/40 border-amber-300 shadow-sm ring-1 ring-amber-200'
                    : 'bg-white border-stone-200 hover:border-amber-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">
                      PISOS 21 - 25
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-sm">
                      {language === 'es' ? 'Penthouses Exclusivos' : 'Exclusive Penthouses'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-800">
                    {formatPrice(700000)} max
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 my-2">
                  <div className="h-5 rounded bg-amber-100/60 text-[10px] flex items-center justify-center font-mono text-stone-700">Suite A</div>
                  <div className="h-5 rounded bg-amber-100/60 text-[10px] flex items-center justify-center font-mono text-stone-700">Suite B</div>
                  <div className="h-5 rounded bg-amber-100/60 text-[10px] flex items-center justify-center font-mono text-stone-700">Suite C</div>
                  <div className="h-5 rounded bg-amber-200 text-[10px] flex items-center justify-center font-mono font-bold text-amber-950">Suite D (P25)</div>
                </div>

                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {language === 'es'
                    ? '4 suites de alta gama por piso. Incluye la Crown Suite Presidencial en el piso 25 a $700.000 COP, terrazas de 360°, jacuzzis exteriores y concierge Martín Quintero.'
                    : '4 high-end suites per floor. Crowned by Floor 25 Presidential Suite at $700,000 COP, 360° terraces, outdoor jacuzzis, and dedicated concierge.'}
                </p>
              </div>

              {/* Standard Tier (Floors 1-20) */}
              <div 
                onClick={() => setActiveFloorTier('standard')}
                className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                  activeFloorTier === 'standard'
                    ? 'bg-stone-100/80 border-stone-400 shadow-sm ring-1 ring-stone-300'
                    : 'bg-white border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-stone-200 text-stone-800 text-xs font-bold px-2 py-0.5 rounded">
                      PISOS 1 - 20
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-sm">
                      {language === 'es' ? 'Habitaciones Normales / Deluxe' : 'Standard / Deluxe Rooms'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-stone-800">
                    {formatPrice(300000)} min
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 my-2">
                  <div className="h-5 rounded bg-stone-100 text-[10px] flex items-center justify-center font-mono text-stone-600">Hab. 1</div>
                  <div className="h-5 rounded bg-stone-100 text-[10px] flex items-center justify-center font-mono text-stone-600">Hab. 2</div>
                  <div className="h-5 rounded bg-stone-100 text-[10px] flex items-center justify-center font-mono text-stone-600">Hab. 3</div>
                  <div className="h-5 rounded bg-stone-100 text-[10px] flex items-center justify-center font-mono text-stone-600">Hab. 4</div>
                </div>

                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {language === 'es'
                    ? '4 habitaciones amplias por piso (80 habitaciones en total). Excelente insonorización, balcones con vista a la bahía y al mar desde $300.000 COP.'
                    : '4 spacious rooms per floor (80 rooms total). Exceptional soundproofing, private balconies with bay and ocean views starting at $300,000 COP.'}
                </p>
              </div>

              {/* Ground & Amenities Level */}
              <div className="bg-white border border-stone-200 rounded-xl p-3 text-center text-xs text-stone-600 flex items-center justify-around">
                <span>Nivel Playa: Beach Club & Lobby</span>
                <span>•</span>
                <span>Piso 2: Restaurante Mar & Fuego</span>
                <span>•</span>
                <span>Piso 25: Rooftop Pool</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Tier Focus */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            {activeFloorTier === 'penthouse' ? (
              <div className="animate-fadeIn space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-amber-800 text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Pisos 21 al 25 • Nivel Supremo
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-500 block">{language === 'es' ? 'Tarifa Máxima' : 'Top Rate'}</span>
                    <span className="font-serif text-2xl font-bold text-amber-900">{formatPrice(700000)}</span>
                    <span className="text-xs text-stone-500"> / {t.roomsSection.perNight}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {t.floorsSection.highFloorsTitle}
                </h3>

                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  {t.floorsSection.highFloorsDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>Piso 25: Master Suite Presidencial con terraza de 360°</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>Jacuzzi privado exterior en cada Penthouse</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>Concierge dedicado 24/7 (Martín Quintero)</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>Acceso directo preferencial a la piscina Rooftop</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#habitaciones"
                    className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 rounded-xl text-center text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t.floorsSection.viewFloors}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>
                  <button
                    onClick={() => openBookingModal(null)}
                    className="bg-white hover:bg-stone-50 text-stone-800 font-medium px-6 py-3 rounded-xl text-sm border border-stone-200 transition-colors"
                  >
                    {t.nav.bookNow}
                  </button>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-stone-700 text-xs font-semibold tracking-wider uppercase">
                    <Building className="w-4 h-4 text-stone-600" />
                    Pisos 1 al 20 • Confort & Vista al Mar
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-500 block">{language === 'es' ? 'Tarifa Desde' : 'Starting From'}</span>
                    <span className="font-serif text-2xl font-bold text-stone-900">{formatPrice(300000)}</span>
                    <span className="text-xs text-stone-500"> / {t.roomsSection.perNight}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {t.floorsSection.lowFloorsTitle}
                </h3>

                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  {t.floorsSection.lowFloorsDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-stone-600" />
                    <span>Solo 4 habitaciones por piso para máxima tranquilidad</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-stone-600" />
                    <span>Balcón privado con vista abierta al mar o la bahía</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-stone-600" />
                    <span>Desayuno buffet caribeño incluido todas las mañanas</span>
                  </div>
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-stone-600" />
                    <span>Wi-Fi 6 de ultra alta velocidad y Smart TV 55"</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#habitaciones"
                    className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 rounded-xl text-center text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t.floorsSection.viewFloors}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>
                  <button
                    onClick={() => openBookingModal(null)}
                    className="bg-white hover:bg-stone-50 text-stone-800 font-medium px-6 py-3 rounded-xl text-sm border border-stone-200 transition-colors"
                  >
                    {t.nav.bookNow}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
