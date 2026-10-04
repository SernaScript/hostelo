'use client';

import React from 'react';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Building
} from 'lucide-react';

export default function Footer() {
  const { language, t } = useSettings();

  return (
    <footer className="bg-white text-stone-700 border-t border-stone-200/90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-100">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold tracking-wider text-stone-900">
                HOSTELO
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                5★ RESORT
              </span>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-800 bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <Building className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>
                {language === 'es' 
                  ? 'Torre Arquitectónica de 25 Pisos • 4 Habitaciones por Nivel' 
                  : 'Architectural 25-Floor Tower • 4 Suites per Level'}
              </span>
            </div>

            <div className="pt-2 text-[11px] text-stone-400">
              {t.footer.rnt}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#habitaciones" className="hover:text-stone-900 transition-colors">
                  {t.nav.rooms}
                </a>
              </li>
              <li>
                <a href="#arquitectura" className="hover:text-stone-900 transition-colors">
                  {t.nav.floors}
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-stone-900 transition-colors">
                  {t.nav.amenities}
                </a>
              </li>
              <li>
                <a href="#cartagena" className="hover:text-stone-900 transition-colors">
                  {t.nav.cartagena}
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-stone-900 transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-stone-900 transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Suites & Levels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">
              {t.footer.suites}
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>Pisos 1-8: Deluxe Classic (\$300,000 COP)</li>
              <li>Pisos 9-15: Superior Caribeña (\$360,000 COP)</li>
              <li>Pisos 16-20: Grand Oceanfront (\$420,000 COP)</li>
              <li className="text-amber-800 font-medium">Pisos 21-23: Penthouse Sky Horizon (\$550,000 COP)</li>
              <li className="text-amber-800 font-medium">Piso 24: Master Penthouse Suite (\$620,000 COP)</li>
              <li className="text-amber-900 font-bold">Piso 25: Sky Penthouse Presidencial (\$700,000 COP)</li>
            </ul>
          </div>

          {/* Col 4: VIP Contact & Concierge */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">{HOTEL_CONFIG.concierge.name}</strong>
                  <span className="text-[11px] text-stone-500">{HOTEL_CONFIG.concierge.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline font-semibold"
                >
                  WhatsApp: {HOTEL_CONFIG.concierge.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400 flex-shrink-0" />
                <a href={`tel:${HOTEL_CONFIG.concierge.phone}`} className="hover:text-stone-900">
                  {HOTEL_CONFIG.concierge.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400 flex-shrink-0" />
                <a href={`mailto:${HOTEL_CONFIG.concierge.email}`} className="hover:text-stone-900">
                  {HOTEL_CONFIG.concierge.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                <span>{HOTEL_CONFIG.location.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {HOTEL_CONFIG.fullName}. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Reserva 100% Segura
            </span>
            <span>•</span>
            <span>Cartagena, Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
