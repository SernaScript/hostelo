'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Room } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { 
  Users, 
  Maximize2, 
  Eye, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight,
  Layers
} from 'lucide-react';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const { language, t, formatPrice, openBookingModal } = useSettings();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isPenthouse = room.category === 'penthouse';

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const whatsappMessage = encodeURIComponent(
    language === 'es'
      ? `Hola Martín Quintero, deseo reservar la suite "${room.name.es}" en Hostelo Cartagena (Tarifa: ${formatPrice(room.priceCOP)}/noche).`
      : `Hello Martín Quintero, I would like to book the "${room.name.en}" at Hostelo Cartagena (Rate: ${formatPrice(room.priceCOP)}/night).`
  );

  return (
    <article className="bg-white rounded-3xl border border-stone-200/90 hover:border-stone-300 hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image Carousel Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <Image
          src={room.images[activeImageIndex]}
          alt={room.name[language]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span 
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                isPenthouse 
                  ? 'bg-amber-100/95 text-amber-900 border border-amber-300/80 font-bold' 
                  : 'bg-white/95 text-stone-700 border border-stone-200'
              }`}
            >
              {isPenthouse 
                ? (language === 'es' ? 'Penthouse Exclusivo' : 'Exclusive Penthouse') 
                : (language === 'es' ? 'Habitación Normal / Deluxe' : 'Standard / Deluxe Room')}
            </span>

            {room.popularBadge && (
              <span className="hidden sm:inline-block bg-stone-900 text-white text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
                {room.popularBadge[language]}
              </span>
            )}
          </div>

          {/* Floor Range Badge */}
          <span className="bg-white/95 backdrop-blur-md text-stone-800 border border-stone-200 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Layers className="w-3 h-3 text-amber-600" />
            {room.floorRange.min === room.floorRange.max
              ? `${t.roomsSection.floor} ${room.floorRange.min}`
              : `${t.roomsSection.floors} ${room.floorRange.min} - ${room.floorRange.max}`}
          </span>
        </div>

        {/* Carousel Arrow Controls */}
        {room.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              aria-label="Imagen anterior"
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center backdrop-blur-sm shadow-md transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Imagen siguiente"
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-stone-800 flex items-center justify-center backdrop-blur-sm shadow-md transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Carousel Dots */}
        {room.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {room.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeImageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Room Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
            {room.name[language]}
          </h3>

          {/* View subtitle */}
          <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1 font-medium">
            <Eye className="w-3.5 h-3.5 text-stone-400" />
            {room.view[language]}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 my-3 border-y border-stone-100 text-xs text-stone-600">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span>{room.capacity.adults} adultos</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{room.sizeM2} m²</span>
            </div>
            <div className="flex items-center gap-1.5 truncate text-[11px]" title={room.bedType[language]}>
              <span className="font-semibold text-stone-900">4</span>
              <span>habs/piso</span>
            </div>
          </div>

          {/* Features Checklist */}
          <ul className="space-y-1.5 text-xs text-stone-600">
            {room.features[language].slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Booking Actions */}
        <div className="pt-4 border-t border-stone-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-stone-400 block uppercase tracking-wider font-medium">
                {language === 'es' ? 'Tarifa Oficial' : 'Official Rate'}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-2xl font-bold text-stone-900">
                  {formatPrice(room.priceCOP)}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  / {t.roomsSection.perNight}
                </span>
              </div>
            </div>

            <span className="text-[11px] text-emerald-800 font-medium bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              {t.roomsSection.includesBreakfast}
            </span>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              onClick={() => openBookingModal(room)}
              className="bg-stone-900 hover:bg-stone-800 text-white font-medium py-2.5 px-3 rounded-xl text-xs sm:text-sm shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.roomsSection.bookRoom}</span>
            </button>

            <a
              href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
