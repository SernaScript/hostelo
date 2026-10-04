'use client';

import React, { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { Calendar, Users, Building, ShieldCheck, ArrowRight } from 'lucide-react';

interface BookingWidgetProps {
  onFilterCategory?: (category: 'all' | 'standard' | 'penthouse') => void;
}

export default function BookingWidget({ onFilterCategory }: BookingWidgetProps) {
  const { 
    t, 
    formatPrice, 
    bookingDates, 
    updateBookingDates, 
    openBookingModal 
  } = useSettings();

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'standard' | 'penthouse'>('all');

  const handleCategoryChange = (val: 'all' | 'standard' | 'penthouse') => {
    setSelectedCategory(val);
    if (onFilterCategory) {
      onFilterCategory(val);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    openBookingModal(null);
  };

  const basePrice = selectedCategory === 'penthouse' ? 550000 : 300000;
  const estimatedTotal = basePrice * bookingDates.nights;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white border border-stone-200/90 rounded-3xl p-5 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] relative z-20 -mt-14 sm:-mt-16">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Check-In */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 hover:border-amber-400 transition-colors">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              {t.bookingBar.checkIn}
            </label>
            <input
              type="date"
              value={bookingDates.checkIn}
              onChange={(e) => updateBookingDates({ ...bookingDates, checkIn: e.target.value })}
              className="w-full bg-transparent text-stone-900 text-sm font-medium focus:outline-none cursor-pointer"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 hover:border-amber-400 transition-colors">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              {t.bookingBar.checkOut}
            </label>
            <input
              type="date"
              value={bookingDates.checkOut}
              onChange={(e) => updateBookingDates({ ...bookingDates, checkOut: e.target.value })}
              className="w-full bg-transparent text-stone-900 text-sm font-medium focus:outline-none cursor-pointer"
              required
            />
          </div>

          {/* Guests */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 hover:border-amber-400 transition-colors">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              {t.bookingBar.guests}
            </label>
            <select
              value={bookingDates.guests}
              onChange={(e) => updateBookingDates({ ...bookingDates, guests: Number(e.target.value) })}
              className="w-full bg-transparent text-stone-900 text-sm font-medium focus:outline-none cursor-pointer"
            >
              <option value={1}>1 Huésped / Guest</option>
              <option value={2}>2 Huéspedes / Guests (Ideal Parejas)</option>
              <option value={3}>3 Huéspedes / Guests</option>
              <option value={4}>4 Huéspedes / Guests (Suite Familiar)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 hover:border-amber-400 transition-colors">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-1">
              <Building className="w-3.5 h-3.5 text-amber-600" />
              {t.bookingBar.roomType}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value as any)}
              className="w-full bg-transparent text-stone-900 text-sm font-medium focus:outline-none cursor-pointer"
            >
              <option value="all">{t.bookingBar.allRooms}</option>
              <option value="standard">{t.bookingBar.standardOnly}</option>
              <option value="penthouse">{t.bookingBar.penthouseOnly}</option>
            </select>
          </div>
        </div>

        {/* Dynamic calculation banner & Submit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-stone-100">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              {bookingDates.nights} {bookingDates.nights === 1 ? t.bookingBar.night : t.bookingBar.nights} • {t.bookingBar.totalEstimate}: <strong className="text-stone-900 font-bold text-sm font-serif">{formatPrice(estimatedTotal)}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#habitaciones"
              className="hidden md:inline-flex text-xs text-stone-500 hover:text-stone-900 underline underline-offset-4"
            >
              {t.nav.rooms}
            </a>

            <button
              type="submit"
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white font-medium px-7 py-3 rounded-xl text-sm shadow-sm transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <span>{t.bookingBar.checkAvailability}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
