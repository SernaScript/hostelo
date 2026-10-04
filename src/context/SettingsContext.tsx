'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency, Language, Room } from '@/types';
import { HOTEL_CONFIG } from '@/data/rooms';
import { TRANSLATIONS } from '@/data/translations';

interface SettingsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  formatPrice: (priceCOP: number) => string;
  t: typeof TRANSLATIONS['es'];
  isBookingModalOpen: boolean;
  selectedRoom: Room | null;
  bookingDates: {
    checkIn: string;
    checkOut: string;
    guests: number;
    nights: number;
  };
  openBookingModal: (room?: Room | null) => void;
  closeBookingModal: () => void;
  updateBookingDates: (dates: { checkIn: string; checkOut: string; guests: number }) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [currency, setCurrency] = useState<Currency>('COP');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Default dates: tomorrow to 3 days later
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkout = new Date();
  checkout.setDate(checkout.getDate() + 4);

  const [bookingDates, setBookingDates] = useState({
    checkIn: tomorrow.toISOString().split('T')[0],
    checkOut: checkout.toISOString().split('T')[0],
    guests: 2,
    nights: 3,
  });

  const t = TRANSLATIONS[language];

  const calculateNights = (inDate: string, outDate: string) => {
    const start = new Date(inDate);
    const end = new Date(outDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(1, isNaN(diffDays) ? 1 : diffDays);
  };

  const updateBookingDates = (dates: { checkIn: string; checkOut: string; guests: number }) => {
    const nights = calculateNights(dates.checkIn, dates.checkOut);
    setBookingDates({
      ...dates,
      nights,
    });
  };

  const formatPrice = (priceCOP: number): string => {
    if (currency === 'USD') {
      const usdValue = Math.round(priceCOP / HOTEL_CONFIG.usdExchangeRate);
      return `$${usdValue.toLocaleString('en-US')} USD`;
    }
    if (currency === 'EUR') {
      const eurValue = Math.round(priceCOP / HOTEL_CONFIG.eurExchangeRate);
      return `€${eurValue.toLocaleString('de-DE')} EUR`;
    }
    return `$${priceCOP.toLocaleString('es-CO')} COP`;
  };

  const openBookingModal = (room?: Room | null) => {
    if (room) {
      setSelectedRoom(room);
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        formatPrice,
        t,
        isBookingModalOpen,
        selectedRoom,
        bookingDates,
        openBookingModal,
        closeBookingModal,
        updateBookingDates,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
