'use client';

import React from 'react';
import Image from 'next/image';
import { useSettings } from '@/context/SettingsContext';
import { Review } from '@/types';
import { Star, Quote, Sparkles } from 'lucide-react';

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah & David Mitchell',
    origin: 'New York, USA',
    rating: 5,
    date: 'Octubre 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: {
      es: 'Nos hospedamos en el Sky Penthouse del piso 25 para nuestra luna de miel. La vista de 360 grados al mar y la bahía es absolutamente de otro mundo. Martín Quintero nos preparó un tour privado a Cholón y todo fue impecable.',
      en: 'We stayed at the Floor 25 Sky Penthouse for our honeymoon. The 360-degree ocean and bay vistas are completely out of this world. Martín Quintero arranged a private yacht tour to Cholón and every detail was flawless.',
    },
    roomType: {
      es: 'Sky Penthouse Presidencial (Piso 25)',
      en: 'Imperial Sky Penthouse (Floor 25)',
    },
  },
  {
    id: 'rev-2',
    author: 'Alejandro Restrepo & Familia',
    origin: 'Medellín, Colombia',
    rating: 5,
    date: 'Septiembre 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: {
      es: 'Tener solo 4 habitaciones por piso hace toda la diferencia: cero ruidos, ascensores rapidísimos y una paz total. La habitación Deluxe tiene un balcón maravilloso y el desayuno caribeño es de los mejores de Cartagena.',
      en: 'Having only 4 suites per floor makes all the difference: zero noise, lightning-fast elevators, and pure serenity. The Deluxe room features a stunning balcony and the Caribbean breakfast is among the finest in Cartagena.',
    },
    roomType: {
      es: 'Habitación Grand Oceanfront (Piso 18)',
      en: 'Grand Oceanfront Room (Floor 18)',
    },
  },
  {
    id: 'rev-3',
    author: 'Elena & Matthieu Dubois',
    origin: 'París, Francia',
    rating: 5,
    date: 'Agosto 2026',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    comment: {
      es: 'El atardecer desde la piscina infinita del piso 25 no tiene comparación con ningún hotel donde nos hayamos quedado en el Caribe. Las tarifas son muy justas para este nivel de lujo y atención 5 estrellas.',
      en: 'The sunset from the 25th-floor infinity pool is unmatched by any hotel we have visited in the Caribbean. Rates are very fair for this true 5-star level of luxury and personalized attention.',
    },
    roomType: {
      es: 'Penthouse Sky Horizon (Piso 22)',
      en: 'Sky Horizon Penthouse (Floor 22)',
    },
  },
];

export default function ReviewSection() {
  const { language, t } = useSettings();

  return (
    <section id="opiniones" className="py-24 bg-stone-50 text-stone-900 relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.reviewsSection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.reviewsSection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.reviewsSection.subtitle}
          </p>

          {/* Rating Summary Pill */}
          <div className="inline-flex items-center gap-2 mt-6 bg-white px-5 py-2 rounded-full border border-stone-200 shadow-sm">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="font-bold text-stone-900 text-sm">4.92 / 5.0</span>
            <span className="text-stone-500 text-xs">
              ({language === 'es' ? '1,280+ huéspedes verificados' : '1,280+ verified guest reviews'})
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 hover:border-stone-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300 group-hover:text-amber-500/60 transition-colors" />
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment[language]}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-200 flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.author}</h4>
                  <p className="text-xs text-amber-800 font-medium">{review.origin}</p>
                  <p className="text-[10px] text-stone-400">{review.roomType[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
