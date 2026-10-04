'use client';

import React, { useState, useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { 
  MessageSquare, 
  Menu, 
  X, 
  Sparkles, 
  Globe, 
  Coins, 
  Calendar 
} from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, currency, setCurrency, t, openBookingModal } = useSettings();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top VIP Announcement Bar (Clean Ivory & Champagne) */}
      <div className="bg-[#FAF9F5] text-stone-700 text-xs py-2 px-4 border-b border-stone-200/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {language === 'es' ? 'Atención VIP Personalizada:' : 'Personalized VIP Concierge:'}
            </span>
            <span className="text-stone-900 font-semibold">{HOTEL_CONFIG.concierge.name}</span>
            <span className="text-stone-300 hidden md:inline">|</span>
            <a 
              href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(
                language === 'es' 
                  ? 'Hola Martín, deseo información sobre reservas en Hostelo Cartagena.' 
                  : 'Hello Martín, I would like information regarding reservations at Hostelo Cartagena.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp {HOTEL_CONFIG.concierge.phoneFormatted}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-stone-200 text-[11px] shadow-sm">
              <Coins className="w-3 h-3 text-amber-600" />
              <button 
                onClick={() => setCurrency('COP')}
                className={`px-1.5 py-0.5 rounded ${currency === 'COP' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                COP
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-1.5 py-0.5 rounded ${currency === 'USD' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                USD
              </button>
              <button 
                onClick={() => setCurrency('EUR')}
                className={`px-1.5 py-0.5 rounded ${currency === 'EUR' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                EUR
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-stone-200 text-[11px] shadow-sm">
              <Globe className="w-3 h-3 text-cyan-600" />
              <button 
                onClick={() => setLanguage('es')}
                className={`px-1.5 py-0.5 rounded ${language === 'es' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded ${language === 'en' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White & Minimalist) */}
      <nav 
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-white/95 shadow-sm py-3.5 border-b border-stone-200/80 backdrop-blur-md' 
            : 'bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-4 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-stone-900 group-hover:text-amber-700 transition-colors">
                HOSTELO
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                5★ RESORT
              </span>
            </div>
            <span className="text-[10px] tracking-widest text-stone-500 uppercase -mt-0.5 font-sans font-medium">
              Cartagena de Indias • 25 Pisos
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#habitaciones" className="hover:text-stone-900 transition-colors">
              {t.nav.rooms}
            </a>
            <a href="#arquitectura" className="hover:text-stone-900 transition-colors">
              {t.nav.floors}
            </a>
            <a href="#experiencias" className="hover:text-stone-900 transition-colors">
              {t.nav.amenities}
            </a>
            <a href="#cartagena" className="hover:text-stone-900 transition-colors">
              {t.nav.cartagena}
            </a>
            <a href="#concierge" className="hover:text-amber-800 transition-colors flex items-center gap-1 text-amber-700 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {t.nav.vipConcierge}
            </a>
            <a href="#opiniones" className="hover:text-stone-900 transition-colors">
              {t.nav.reviews}
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openBookingModal(null)}
              className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-sm transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{t.nav.bookNow}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openBookingModal(null)}
              className="bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              {t.nav.bookNow}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-800 p-1.5 focus:outline-none"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-stone-900" /> : <Menu className="w-6 h-6 text-stone-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white border border-stone-200 rounded-2xl p-5 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-3.5 text-sm font-medium text-stone-700">
              <a 
                href="#habitaciones" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 hover:text-stone-900"
              >
                {t.nav.rooms}
              </a>
              <a 
                href="#arquitectura" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 hover:text-stone-900"
              >
                {t.nav.floors}
              </a>
              <a 
                href="#experiencias" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 hover:text-stone-900"
              >
                {t.nav.amenities}
              </a>
              <a 
                href="#cartagena" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 hover:text-stone-900"
              >
                {t.nav.cartagena}
              </a>
              <a 
                href="#concierge" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 text-amber-700 flex items-center justify-between"
              >
                <span>{t.nav.vipConcierge}: Martín Quintero</span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </a>
              <a 
                href="#opiniones" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 hover:text-stone-900"
              >
                {t.nav.reviews}
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-stone-100 hover:text-stone-900"
              >
                {t.nav.faq}
              </a>

              <div className="pt-2">
                <a 
                  href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp {HOTEL_CONFIG.concierge.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
