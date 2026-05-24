import React, { useState } from 'react';
import { X, Calendar, ClipboardList, Mail, Users2, Sparkles, Send } from 'lucide-react';
import { CateringDetails } from '../types';

interface CateringModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (details: CateringDetails) => void;
}

export default function CateringModal({ isOpen, onClose, onSuccess }: CateringModalProps) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [count, setCount] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  
  // Custom Captcha validation for interactive polish
  const [captchaChecked, setCaptchaChecked] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaChecked) {
      alert("Please confirm the security checkbox ('I'm not a robot') to submit your booking.");
      return;
    }

    setSubmitting(true);
    const cateringParams: CateringDetails = {
      firstName,
      lastName,
      email,
      phone,
      eventType,
      eventDate,
      guestCount: count,
      additionalInfo: info
    };

    setTimeout(() => {
      setSubmitting(false);
      onSuccess(cateringParams);
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setEventType('');
      setEventDate('');
      setCount('');
      setInfo('');
      setCaptchaChecked(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in" id="catering-modal-overlay">
      <div 
        className="bg-brand-sage w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative border-4 border-[#FAF5EF]/30 max-h-[90vh] overflow-y-auto"
        id="catering-events-panel"
      >
        {/* Absolute header icons */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          title="Close dialog"
          id="catering-modal-close-button"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Branding Title */}
        <div className="p-8 pb-4 text-center" id="catering-title-container">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#FAF5EF]/80 font-bold">
            MML Catering & Private Events
          </span>
          <h2 className="font-serif text-4xl text-white font-medium mt-2 leading-none">
            Host Your Occasion
          </h2>
          <p className="text-xs text-[#FAF5EF]/80 font-mono tracking-wide mt-2">
            Pecan Square Café has beautiful options for group dining in Austin, TX.
          </p>
          <div className="w-16 h-px bg-[#FAF2E5]/30 mx-auto mt-4" />
        </div>

        {/* Content form */}
        <form onSubmit={handleSubmit} className="p-8 pt-2 space-y-6" id="catering-form">
          {submitting ? (
            <div className="py-20 flex flex-col items-center justify-center gap-4 text-white" id="catering-loader">
              <span className="w-12 h-12 border-4 border-[#FAF5EF]/30 border-t-white rounded-full animate-spin" />
              <p className="text-sm font-mono uppercase tracking-widest text-[#FAF5EF]">
                Sending Catering Request...
              </p>
            </div>
          ) : (
            <>
              {/* Form Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5Client">
                  <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                    First Name <span className="text-brand-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-[#FAF5EF]/10 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all placeholder-[#FAF5EF]/40 font-sans"
                    placeholder="Enter first name"
                    required
                    id="catering-firstname-input"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                    Last Name <span className="text-brand-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-[#FAF5EF]/10 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all placeholder-[#FAF5EF]/40 font-sans"
                    placeholder="Enter last name"
                    required
                    id="catering-lastname-input"
                  />
                </div>
              </div>

              {/* Form Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                    Email Address <span className="text-brand-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF5EF]/10 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all placeholder-[#FAF5EF]/40 font-sans"
                    placeholder="E.g., margaret@example.com"
                    required
                    id="catering-email-input"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF5EF]/10 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all placeholder-[#FAF5EF]/40 font-sans"
                    placeholder="(512) 555-5555"
                    id="catering-phone-input"
                  />
                </div>
              </div>

              {/* Form Row 3: Event Type & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                    Type of Event
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#FAF5EF]/15 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all font-sans [&>option]:text-brand-charcoal"
                    id="catering-event-type-select"
                  >
                    <option value="" disabled>Choose event type</option>
                    <option value="Private Celebration">Private Celebration (Birthday/Anniversary)</option>
                    <option value="Corporate Dinner">Corporate Lunch / Dinner</option>
                    <option value="Wedding / Engagement">Wedding / Reception Brunch</option>
                    <option value="Cocktail Party">Cocktail Reception Room</option>
                    <option value="Other">Other Dining Event</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#FAF5EF]/15 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all font-sans"
                    id="catering-event-date-input"
                  />
                </div>
              </div>

              {/* Form Row 4: Number of People */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                  Number of People
                </label>
                <input
                  type="text"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="w-full bg-[#FAF5EF]/10 text-white border border-[#FAF5EF]/20 rounded-lg p-3 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all placeholder-[#FAF5EF]/40 font-sans"
                  placeholder="E.g., 25 guests"
                  id="catering-guest-count-input"
                />
              </div>

              {/* Form Row 5: Additional Info */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold uppercase text-[#FAF5EF] tracking-wider">
                  Is there any additional information you would like to add?
                </label>
                <textarea
                  rows={3}
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  className="w-full bg-[#FAF5EF]/15 text-white border border-[#FAF5EF]/20 rounded-lg p-3.5 text-sm focus:bg-white focus:text-brand-charcoal focus:outline-none transition-all placeholder-[#FAF5EF]/40 font-sans"
                  placeholder="Tell us about special dietary guidelines, audiovisual setups, layout requests..."
                  id="catering-notes-textarea"
                />
              </div>

              {/* CAPTCHA Widget Layout (Matching Screenshot 2 exactly with high-fidelity styles) */}
              <div className="bg-white p-4 rounded-lg flex items-center justify-between border border-gray-300 max-w-[310px] mx-auto shadow-sm" id="recaptcha-mock-widget">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="captcha-check"
                    checked={captchaChecked}
                    onChange={(e) => setCaptchaChecked(e.target.checked)}
                    className="w-6 h-6 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="captcha-check" className="text-xs font-sans font-medium text-gray-700 cursor-pointer select-none">
                    I'm not a robot
                  </label>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                    alt="reCAPTCHA" 
                    className="w-6 h-6 object-contain grayscale opacity-80" 
                  />
                  <span className="text-[7px] font-sans text-gray-400 mt-0.5">reCAPTCHA</span>
                  <span className="text-[6px] font-sans text-gray-400">Privacy - Terms</span>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex justify-center" id="catering-action-row">
                <button
                  type="submit"
                  className="px-10 py-4 bg-white hover:bg-[#FEFDFB] text-brand-sage-dark font-serif font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-white/50 flex items-center justify-center gap-2 tracking-wide font-semibold mt-2"
                  id="send-now-trigger"
                >
                  <Send className="w-4 h-4 text-brand-sage-dark" />
                  <span>Send Now</span>
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
