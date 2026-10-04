'use client';

import React, { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG } from '@/data/rooms';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const { language, t } = useSettings();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: {
        es: '¿Cómo están organizados los 25 pisos del hotel y cuántas habitaciones hay por piso?',
        en: 'How are the 25 floors organized and how many rooms are there per floor?',
      },
      a: {
        es: 'Hostelo cuenta con una torre vanguardista de 25 pisos con estrictamente 4 habitaciones por piso (100 habitaciones en total). Los pisos 1 al 20 albergan habitaciones normales y deluxe desde $300.000 COP, y los pisos 21 al 25 son exclusivos Penthouses con jacuzzi privado y vistas de 180° a 360°, culminando en la Crown Suite Presidencial del piso 25 a $700.000 COP la noche.',
        en: 'Hostelo features a 25-floor architectural tower with strictly 4 suites per floor (100 rooms total). Floors 1 to 20 host standard and deluxe rooms starting at $300,000 COP, while Floors 21 to 25 are exclusive Penthouses with private jacuzzis and 180° to 360° panoramas, crowned by the Floor 25 Presidential Suite at $700,000 COP per night.',
      },
    },
    {
      q: {
        es: '¿Qué incluye la tarifa de hospedaje y qué rango de precios manejan?',
        en: 'What is included in the nightly rate and what is the pricing range?',
      },
      a: {
        es: 'Nuestras tarifas van desde $300.000 COP en habitaciones Deluxe hasta $700.000 COP en la Master Suite Penthouse del piso 25. Todas las tarifas incluyen desayuno buffet caribeño gourmet diario, acceso a la piscina Rooftop del piso 25, servicio de toallas y camastros en el Beach Club privado, Wi-Fi 6 de alta velocidad y la atención personalizada de nuestro Head of Concierge, Martín Quintero.',
        en: 'Our rates range from $300,000 COP for Deluxe rooms up to $700,000 COP for the 25th-floor Master Penthouse Suite. All reservations include daily gourmet Caribbean breakfast buffet, access to the 25th-floor Rooftop infinity pool, private beach club loungers, Wi-Fi 6, and dedicated assistance from our Head of Concierge, Martín Quintero.',
      },
    },
    {
      q: {
        es: '¿Cómo puedo contactar a Martín Quintero para coordinar tours o peticiones especiales?',
        en: 'How can I contact Martín Quintero for tour arrangements or special requests?',
      },
      a: {
        es: 'Puedes contactar directamente a Martín Quintero por WhatsApp al +57 322 561 4734 o por teléfono las 24 horas del día. Martín puede coordinar traslados desde el aeropuerto, charters náuticos a Islas del Rosario, cenas románticas en la suite o reservas en los restaurantes más codiciados de Cartagena.',
        en: 'You can reach Martín Quintero directly via WhatsApp at +57 322 561 4734 or by telephone 24/7. Martín coordinates private airport transfers, yacht charters to Rosario Islands, romantic private dinners, and reservations at Cartagena\'s finest restaurants.',
      },
    },
    {
      q: {
        es: '¿Qué divisas aceptan y cómo puedo pagar mi reserva?',
        en: 'Which currencies are accepted and how can I pay for my reservation?',
      },
      a: {
        es: 'Aceptamos pagos en Pesos Colombianos (COP), Dólares Estadounidenses (USD) y Euros (EUR). Puedes pagar mediante tarjetas de crédito internacionales (Visa, Mastercard, American Express), transferencias bancarias o directamente a tu llegada al hotel.',
        en: 'We accept payments in Colombian Pesos (COP), US Dollars (USD), and Euros (EUR). Accepted payment methods include international credit cards (Visa, Mastercard, Amex), bank wires, or upon arrival at the resort front desk.',
      },
    },
    {
      q: {
        es: '¿Qué distancia hay desde el Aeropuerto Rafael Núñez y el Centro Histórico?',
        en: 'How far is the hotel from Rafael Núñez International Airport and the Historic Center?',
      },
      a: {
        es: 'Hostelo está ubicado en Bocagrande sobre la costa: a solo 15 minutos en automóvil del Aeropuerto Internacional Rafael Núñez (CTG) y a tan solo 8 minutos de la emblemática Ciudad Amurallada y el Castillo de San Felipe.',
        en: 'Hostelo is situated on the Bocagrande beachfront: only 15 minutes by car from Rafael Núñez International Airport (CTG) and just 8 minutes from the historic Walled City and San Felipe Castle.',
      },
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white text-stone-900 relative border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.faqSection.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 mb-4">
            {t.faqSection.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            {t.faqSection.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-50 border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-stone-900">
                    {item.q[language]}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-stone-900 text-white' : 'bg-white text-stone-600 border border-stone-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100 animate-fadeIn">
                    <p>{item.a[language]}</p>
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-700">
                      <span>¿Tienes una duda adicional?</span>
                      <a
                        href={`https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Preguntar a Martín Quintero
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
