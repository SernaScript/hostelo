'use client';

import React, { useState, useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { HOTEL_CONFIG, ROOMS_DATA } from '@/data/rooms';
import { 
  X, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function ReservationModal() {
  const { 
    isBookingModalOpen, 
    closeBookingModal, 
    selectedRoom, 
    bookingDates, 
    updateBookingDates, 
    formatPrice, 
    language, 
    t 
  } = useSettings();

  const [currentRoomId, setCurrentRoomId] = useState<string>(selectedRoom ? selectedRoom.id : ROOMS_DATA[0].id);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccessSubmitted, setIsSuccessSubmitted] = useState(false);

  useEffect(() => {
    if (selectedRoom) {
      setCurrentRoomId(selectedRoom.id);
    }
  }, [selectedRoom]);

  if (!isBookingModalOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === currentRoomId) || ROOMS_DATA[0];
  const totalPriceCOP = currentRoom.priceCOP * bookingDates.nights;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const message = 
      language === 'es'
        ? `*SOLICITUD DE RESERVA EN HOSTELO CARTAGENA*\n` +
          `----------------------------------------\n` +
          `*Huésped:* ${guestName || 'Por confirmar'}\n` +
          `*Contacto:* ${guestPhone || 'No especificado'} | ${guestEmail || 'No especificado'}\n` +
          `*Suite:* ${currentRoom.name.es} (${currentRoom.category === 'penthouse' ? 'Penthouses Pisos 21-25' : 'Pisos 1-20 Normales'})\n` +
          `*Piso Deseado:* ${currentRoom.floorRange.min === currentRoom.floorRange.max ? `Piso ${currentRoom.floorRange.min}` : `Pisos ${currentRoom.floorRange.min} al ${currentRoom.floorRange.max}`}\n` +
          `*Check-in:* ${bookingDates.checkIn}\n` +
          `*Check-out:* ${bookingDates.checkOut}\n` +
          `*Estancia:* ${bookingDates.nights} noche(s) | ${bookingDates.guests} huésped(es)\n` +
          `*Tarifa Noche:* ${formatPrice(currentRoom.priceCOP)}\n` +
          `*Total Estimado:* ${formatPrice(totalPriceCOP)}\n` +
          `*Peticiones Especiales:* ${specialRequests || 'Ninguna'}\n` +
          `----------------------------------------\n` +
          `_Agradezco la atención de Martín Quintero para confirmar la disponibilidad y formalizar el pago._`
        : `*BOOKING REQUEST AT HOSTELO CARTAGENA*\n` +
          `----------------------------------------\n` +
          `*Guest:* ${guestName || 'To be confirmed'}\n` +
          `*Contact:* ${guestPhone || 'Not provided'} | ${guestEmail || 'Not provided'}\n` +
          `*Suite:* ${currentRoom.name.en} (${currentRoom.category === 'penthouse' ? 'Penthouses Floors 21-25' : 'Floors 1-20 Standard'})\n` +
          `*Desired Floor:* ${currentRoom.floorRange.min === currentRoom.floorRange.max ? `Floor ${currentRoom.floorRange.min}` : `Floors ${currentRoom.floorRange.min} to ${currentRoom.floorRange.max}`}\n` +
          `*Check-in:* ${bookingDates.checkIn}\n` +
          `*Check-out:* ${bookingDates.checkOut}\n` +
          `*Stay:* ${bookingDates.nights} night(s) | ${bookingDates.guests} guest(s)\n` +
          `*Nightly Rate:* ${formatPrice(currentRoom.priceCOP)}\n` +
          `*Estimated Total:* ${formatPrice(totalPriceCOP)}\n` +
          `*Special Requests:* ${specialRequests || 'None'}\n` +
          `----------------------------------------\n` +
          `_Looking forward to connecting with Martín Quintero to confirm availability and process reservation._`;

    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.concierge.whatsappClean}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsSuccessSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-stone-900 my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 flex items-center justify-center transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Hostelo Concierge VIP • Martín Quintero</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            {t.modal.title}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            {t.modal.subtitle}
          </p>
        </div>

        {isSuccessSubmitted ? (
          <div className="text-center py-10 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              {language === 'es' ? '¡Solicitud Enviada a WhatsApp!' : 'Request Sent to WhatsApp!'}
            </h4>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              {language === 'es'
                ? 'Martín Quintero ha recibido los detalles de tu estancia en Hostelo Cartagena y te responderá en breve para asegurar tu suite.'
                : 'Martín Quintero has received your stay details at Hostelo Cartagena and will respond shortly to secure your suite.'}
            </p>
            <button
              onClick={() => {
                setIsSuccessSubmitted(false);
                closeBookingModal();
              }}
              className="bg-stone-900 text-white font-medium px-6 py-2.5 rounded-full text-sm mt-4 hover:bg-stone-800 transition-colors"
            >
              {language === 'es' ? 'Regresar al Sitio' : 'Return to Website'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="space-y-5">
            {/* Suite Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-1.5">
                {t.modal.selectedRoom}
              </label>
              <select
                value={currentRoomId}
                onChange={(e) => setCurrentRoomId(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-900 text-sm font-medium focus:outline-none focus:border-stone-400"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name[language]} ({room.category === 'penthouse' ? 'Penthouse Pisos 21-25' : 'Pisos 1-20'} • {formatPrice(room.priceCOP)}/noche)
                  </option>
                ))}
              </select>
            </div>

            {/* Dates & Guests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase font-semibold block mb-1">
                  {t.bookingBar.checkIn}
                </span>
                <input
                  type="date"
                  value={bookingDates.checkIn}
                  onChange={(e) => updateBookingDates({ ...bookingDates, checkIn: e.target.value })}
                  className="w-full bg-transparent text-stone-900 text-xs font-medium focus:outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase font-semibold block mb-1">
                  {t.bookingBar.checkOut}
                </span>
                <input
                  type="date"
                  value={bookingDates.checkOut}
                  onChange={(e) => updateBookingDates({ ...bookingDates, checkOut: e.target.value })}
                  className="w-full bg-transparent text-stone-900 text-xs font-medium focus:outline-none cursor-pointer"
                  required
                />
              </div>

              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-[11px] text-stone-500 uppercase font-semibold block mb-1">
                  {t.bookingBar.guests}
                </span>
                <select
                  value={bookingDates.guests}
                  onChange={(e) => updateBookingDates({ ...bookingDates, guests: Number(e.target.value) })}
                  className="w-full bg-transparent text-stone-900 text-xs font-medium focus:outline-none cursor-pointer"
                >
                  <option value={1}>1 Huésped</option>
                  <option value={2}>2 Huéspedes</option>
                  <option value={3}>3 Huéspedes</option>
                  <option value={4}>4 Huéspedes</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-stone-700 block mb-1">
                  {t.modal.guestName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Roberto Mendoza"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-400 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-700 block mb-1">
                  {t.modal.guestPhone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+57 300 000 0000"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-400 placeholder-stone-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 block mb-1">
                {t.modal.guestEmail}
              </label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 text-sm focus:outline-none focus:border-stone-400 placeholder-stone-400"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-700 block mb-1">
                {t.modal.specialRequests}
              </label>
              <textarea
                rows={2}
                placeholder={language === 'es' ? 'Piso alto preferido, luna de miel, transfer aeropuerto...' : 'High floor preference, anniversary, airport pickup...'}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-stone-400 placeholder-stone-400"
              />
            </div>

            {/* Price Breakdown Banner */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block">
                  {bookingDates.nights} {bookingDates.nights === 1 ? 'noche' : 'noches'} × {formatPrice(currentRoom.priceCOP)}
                </span>
                <span className="text-xs text-emerald-800 font-medium">
                  {t.roomsSection.includesBreakfast} • Cancelación flexible
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 block">{t.modal.totalPrice}</span>
                <span className="font-serif text-2xl font-bold text-stone-900">
                  {formatPrice(totalPriceCOP)}
                </span>
              </div>
            </div>

            {/* WhatsApp CTA Action */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 px-6 rounded-2xl text-sm shadow-sm transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.01]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.modal.confirmWhatsApp}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-center text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>{t.modal.bestRateGuarantee}</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
