import React, { useState } from 'react';
import { X, Calendar, Clock, Users, ArrowRight, CheckCircle2, Ticket, Sparkles } from 'lucide-react';
import { ReservationDetails } from '../types';

interface ReservationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (details: ReservationDetails) => void;
}

export default function ReservationsModal({ isOpen, onClose, onSuccess }: ReservationsModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Party Details, 2: Table Selection, 3: Guest Details
  
  // Matches screenshot preset values
  const [size, setSize] = useState<number>(2);
  const [date, setDate] = useState<string>('2026-05-23'); // Preset to 05/23/2026
  const [time, setTime] = useState<string>('21:00'); // Preset to 9:00 PM
  const [selectedSeat, setSelectedSeat] = useState<string>('');
  
  // Guest info
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleFindTable = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2); // Next step shows interactive table recommendations
    }, 900);
  };

  const handleSelectTable = (tableId: string) => {
    setSelectedSeat(tableId);
    setStep(3); // Go to Guest info
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formattedTime = time === '21:00' ? '9:00 PM' : time;
    const finalDetails: ReservationDetails = {
      guests: size,
      date: date,
      time: formattedTime,
      name: guestName,
      email: guestEmail,
      phone: guestPhone,
      notes: `${guestNotes}${selectedSeat ? ` (Table ${selectedSeat})` : ''}`
    };

    setTimeout(() => {
      setIsLoading(false);
      onSuccess(finalDetails);
      // Reset
      setStep(1);
      setSelectedSeat('');
      setGuestName('');
      setGuestEmail('');
      setGuestPhone('');
      setGuestNotes('');
    }, 1200);
  };

  // Mock table layouts to display
  const availableTables = [
    { id: 'T2', name: 'Terrace Garden Alcovy', capacity: 2, premium: true },
    { id: 'P5', name: 'Under the Pecan Tree Patio', capacity: 2, premium: true },
    { id: 'B1', name: 'Main Dining Room Booth', capacity: 4, premium: false },
    { id: 'O3', name: 'Wood-fired Oven view Counter', capacity: 2, premium: false },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in" id="reservation-modal-overlay">
      <div 
        className="bg-[#FAF5EF] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative border border-brand-sage/20 transition-all duration-500 scale-100"
        id="reservation-wizard-panel"
      >
        {/* Header decoration */}
        <div className="bg-brand-terracotta text-[#FEFDFB] p-6 text-center relative-overflow flex flex-col items-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#FEFDFB]/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            id="modal-close-button-top"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-[10px] font-mono tracking-widest font-bold uppercase transition-spacing duration-300">
            Pecan Square Café
          </span>
          <h2 className="font-serif text-3xl font-medium mt-1 leading-tight tracking-wide">
            {step === 1 ? 'Party Details' : step === 2 ? 'Select Your Atmosphere' : 'Let Us Host You'}
          </h2>
          <p className="text-xs text-[#FEFDFB]/85 mt-1 font-mono tracking-wider">
            {step === 1 ? 'Seasonal Dining in Austin, TX' : step === 2 ? 'Choose your prime table setting' : 'Secure your table reservation'}
          </p>

          {/* Stepper Dots */}
          <div className="flex gap-2.5 mt-4">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-6 bg-brand-gold' : 'w-2 bg-[#FEFDFB]/30'}`} />
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-6 bg-brand-gold' : 'w-2 bg-[#FEFDFB]/30'}`} />
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-6 bg-brand-gold' : 'w-2 bg-[#FEFDFB]/30'}`} />
          </div>
        </div>

        {/* Form Body wrapper */}
        <div className="p-8">
          {isLoading ? (
            <div className="py-16 flex flex-col items-center justify-center gap-4" id="modal-loader">
              <span className="w-12 h-12 border-4 border-brand-terracotta/25 border-t-brand-terracotta rounded-full animate-spin" />
              <p className="text-sm font-mono text-brand-sage-dark font-medium uppercase tracking-widest">
                Searching Available Tables...
              </p>
            </div>
          ) : (
            <>
              {/* STEP 1: PARTY DETAILS (Matches Screenshot 3) */}
              {step === 1 && (
                <form onSubmit={handleFindTable} className="space-y-6" id="reservation-step1-form">
                  {/* Guest Size Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-brand-terracotta" /> Party Size
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5, 6, 8, 10].slice(0, 5).map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setSize(num)}
                          className={`py-3 text-sm font-mono rounded-lg border transition-all ${
                            size === num
                              ? 'bg-brand-terracotta border-brand-terracotta text-[#FEFDFB] font-bold shadow-md'
                              : 'bg-white border-brand-sage/20 text-brand-charcoal hover:bg-brand-beige'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    {/* For larger groups */}
                    <div className="flex gap-2">
                      {[6, 8, 10, 12].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setSize(num)}
                          className={`flex-1 py-1.5 text-xs font-mono rounded border transition-all ${
                            size === num
                              ? 'bg-brand-terracotta border-brand-terracotta text-[#FEFDFB] font-bold shadow-sm'
                              : 'bg-white border-brand-sage/20 text-brand-charcoal hover:bg-brand-beige'
                          }`}
                        >
                          {num} Guests
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-terracotta" /> Reservation Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white border border-brand-sage/20 rounded-lg p-3.5 text-sm font-mono text-brand-charcoal focus:ring-2 focus:ring-brand-terracotta/20 focus:outline-none"
                        required
                        id="reservation-date-input"
                      />
                    </div>
                  </div>

                  {/* Time Option Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-terracotta" /> Dining Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['11:30', '13:00', '17:30', '19:00', '21:00', '22:00'].map((tString) => {
                        // formatted label translation
                        const [h, m] = tString.split(':');
                        const hNum = parseInt(h);
                        const pm = hNum >= 12;
                        const labelHr = hNum % 12 || 12;
                        const formattedLabel = `${labelHr}:${m} ${pm ? 'PM' : 'AM'}`;

                        return (
                          <button
                            key={tString}
                            type="button"
                            onClick={() => setTime(tString)}
                            className={`py-3 text-xs font-mono rounded-lg border transition-all ${
                              time === tString
                                ? 'bg-brand-terracotta border-brand-terracotta text-[#FEFDFB] font-bold shadow-md'
                                : 'bg-white border-brand-sage/20 hover:bg-brand-beige text-brand-charcoal'
                            }`}
                          >
                            {formattedLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-xl shadow-lg hover:shadow-xl font-serif text-lg tracking-wider font-semibold flex items-center justify-center gap-2 transition-all mt-8"
                    id="find-table-trigger"
                  >
                    <span>Find A Table</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}

              {/* STEP 2: ATMOSPHERE & TABLE SELECTION */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in-up" id="reservation-step2-form">
                  <p className="text-xs text-brand-sage-dark font-mono uppercase tracking-wider mb-2">
                    Matching settings for party of {size} on {date} at {time === '21:00' ? '9:00 PM' : time}:
                  </p>

                  <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
                    {availableTables.map((table) => {
                      const isSelected = selectedSeat === table.id;
                      return (
                        <div
                          key={table.id}
                          onClick={() => handleSelectTable(table.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-brand-terracotta bg-white/60 shadow-md ring-2 ring-brand-terracotta/10'
                              : 'border-brand-sage/10 bg-white hover:border-brand-sage hover:bg-[#FDFBF7]'
                          }`}
                          id={`table-option-${table.id.toLowerCase()}`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-serif font-bold text-lg text-brand-charcoal">{table.name}</span>
                              {table.premium && (
                                <span className="inline-flex items-center text-[8px] bg-brand-gold/10 text-brand-terracotta border border-brand-gold/25 font-bold font-mono px-1.5 py-0.5 rounded uppercase">
                                  <Sparkles className="w-2 h-2 mr-0.5" /> High Demand
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-brand-sage-dark font-mono">
                              Accommodates up to 2 - {table.capacity} guests
                            </span>
                          </div>

                          <div className={`p-2 rounded-full ${isSelected ? 'bg-brand-terracotta text-[#FEFDFB]' : 'bg-brand-sage/10 text-brand-sage-dark'}`}>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs font-mono uppercase font-bold text-brand-sage-dark underline hover:text-brand-charcoal"
                      id="table-selection-back-trigger"
                    >
                      Back to Date/Time
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="text-xs font-mono uppercase font-semibold text-brand-terracotta bg-brand-terracotta/10 px-4 py-2.5 rounded-lg hover:bg-brand-terracotta/20 transition-all"
                      id="skip-seat-selection-trigger"
                    >
                      Use Default Seating
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT FORM */}
              {step === 3 && (
                <form onSubmit={handleSubmitBooking} className="space-y-4 animate-fade-in-up" id="reservation-step3-form">
                  <div className="bg-brand-sage/10 p-4 rounded-xl mb-4 border border-brand-sage/20">
                    <p className="text-xs text-brand-sage-dark font-mono uppercase tracking-wider">
                      Seating Summary:
                    </p>
                    <p className="text-sm font-serif text-brand-charcoal font-bold mt-1">
                      Party of {size} • Wood-Fired Dining
                    </p>
                    <p className="text-xs text-brand-sage-dark font-mono mt-0.5">
                      {date} at {time === '21:00' ? '9:00 PM' : time} {selectedSeat && `(${selectedSeat === 'T2' ? 'Terrace' : 'Dining Area'})`}
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium uppercase text-brand-charcoal tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-white border border-brand-sage/20 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-terracotta/20 focus:outline-none font-sans"
                      placeholder="e.g., Margaret Austin"
                      required
                      id="guest-name-input"
                    />
                  </div>

                  {/* Duo Info row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium uppercase text-brand-charcoal tracking-wide">
                        Email address *
                      </label>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full bg-white border border-brand-sage/20 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-terracotta/20 focus:outline-none font-sans"
                        placeholder="margaret@example.com"
                        required
                        id="guest-email-input"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium uppercase text-brand-charcoal tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full bg-white border border-brand-sage/20 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-terracotta/20 focus:outline-none font-sans"
                        placeholder="512-555-0199"
                        required
                        id="guest-phone-input"
                      />
                    </div>
                  </div>

                  {/* Dietary notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium uppercase text-brand-charcoal tracking-wide">
                      Special Dietary Notes / Celebrations
                    </label>
                    <textarea
                      rows={2}
                      value={guestNotes}
                      onChange={(e) => setGuestNotes(e.target.value)}
                      className="w-full bg-white border border-brand-sage/20 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-terracotta/20 focus:outline-none font-sans"
                      placeholder="e.g. Gluten allergy, celebrating an anniversary"
                      id="guest-notes-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-xl shadow-lg font-serif text-lg tracking-wider font-semibold flex items-center justify-center gap-2 transition-all mt-6"
                    id="confirm-booking-submit"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-gold animate-pulse" />
                    <span>Complete Booking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full text-center text-xs font-mono uppercase font-bold text-brand-sage-dark underline hover:text-brand-charcoal pt-2"
                    id="guest-details-back-trigger"
                  >
                    Change Table Seating
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
