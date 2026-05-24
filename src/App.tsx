import React, { useState } from 'react';
import { Calendar, Compass, Clock, Send, Gift, Sparkles, PhoneCall, ChevronRight, CheckCircle2, Star, Quote } from 'lucide-react';
import Navbar from './components/Navbar';
import ScenicIllustration from './components/ScenicIllustration';
import MenusSection from './components/MenusSection';
import GiftCardsSection from './components/GiftCardsSection';
import HoursInfoSection from './components/HoursInfoSection';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import ReservationsModal from './components/ReservationsModal';
import CateringModal from './components/CateringModal';
import { ReservationDetails, CateringDetails } from './types';

export default function App() {
  // Modal controllers
  const [reservationsOpen, setReservationsOpen] = useState<boolean>(false);
  const [cateringOpen, setCateringOpen] = useState<boolean>(false);

  // Success alert controllers
  const [successBooking, setSuccessBooking] = useState<ReservationDetails | null>(null);
  const [successCatering, setSuccessCatering] = useState<CateringDetails | null>(null);

  // Quick category selection link handler
  const handleQuickCategorySelect = (categoryKey: 'midday' | 'allday' | 'brunch' | 'wine' | 'dessert') => {
    // Scrolls to the menus section
    const target = document.getElementById('menus-section-root');
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });

      // Search for the click button to manually override active menu section element
      setTimeout(() => {
        const btn = document.getElementById(`menu-nav-btn-${categoryKey}`);
        if (btn) btn.click();
      }, 500);
    }
  };

  const handleBookingSuccess = (details: ReservationDetails) => {
    setReservationsOpen(false);
    setSuccessBooking(details);
    // Auto clear alert after 8 seconds
    setTimeout(() => setSuccessBooking(null), 8000);
  };

  const handleCateringSuccess = (details: CateringDetails) => {
    setCateringOpen(false);
    setSuccessCatering(details);
    // Auto clear alert after 8 seconds
    setTimeout(() => setSuccessCatering(null), 8000);
  };

  return (
    <div className="min-h-screen bg-brand-beige selection:bg-brand-terracotta selection:text-white flex flex-col relative" id="cafe-app-view">
      
      {/* Luxury sticky nav header component */}
      <Navbar 
        onOpenReservations={() => setReservationsOpen(true)} 
        onOpenCatering={() => setCateringOpen(true)} 
      />

      {/* --- SUCCESS BOOKING TOAST CARD --- */}
      {successBooking && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-emerald-500/20 max-w-sm rounded-xl p-5 shadow-2xl animate-fade-in-up" id="success-booking-toast">
          <div className="flex gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-sm text-brand-charcoal">Table Confirmed!</h4>
              <p className="text-xs text-brand-sage-dark font-mono leading-relaxed">
                Thank you, <strong>{successBooking.name}</strong>. See you on <span className="underline">{successBooking.date}</span> at <strong>{successBooking.time}</strong>!
              </p>
              <p className="text-[10px] text-emerald-600 font-mono font-medium pt-1">
                ✓ Reservation recorded in Local Storage
              </p>
            </div>
            <button onClick={() => setSuccessBooking(null)} className="text-gray-400 hover:text-brand-charcoal text-xs shrink-0 self-start">✕</button>
          </div>
        </div>
      )}

      {/* --- SUCCESS CATERING TOAST CARD --- */}
      {successCatering && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#FAF5EF] border border-[#898E75]/35 max-w-sm rounded-xl p-5 shadow-2xl animate-fade-in-up" id="success-catering-toast">
          <div className="flex gap-3">
            <div className="p-2 bg-brand-sage/10 rounded-lg text-brand-sage-dark shrink-0">
              <CheckCircle2 className="w-5 h-5 text-brand-sage-dark" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-sm text-brand-charcoal">Catering Request Dispatched!</h4>
              <p className="text-xs text-brand-sage-dark font-mono leading-relaxed">
                Dear <strong>{successCatering.firstName} {successCatering.lastName}</strong>, our private events director will reach out shortly for your {successCatering.eventType} ({successCatering.guestCount}).
              </p>
            </div>
            <button onClick={() => setSuccessCatering(null)} className="text-gray-400 hover:text-brand-charcoal text-xs shrink-0 self-start">✕</button>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- (Matches Screenshot 1 color/composition but elevated) */}
      <header className="bg-brand-terracotta text-[#FEFDFB] pt-32 pb-20 relative overflow-hidden text-center" id="gourmet-hero-header">
        
        {/* Subtle decorative circles for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.05] pointer-events-none" opacity="0.3" />

        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 space-y-6">
          
          <div className="space-y-2 animate-fade-in">
            <span className="text-[11px] font-mono tracking-[0.3em] font-extrabold uppercase text-brand-gold">
              Welcome to West Austin's Botanical Sanctuary
            </span>
            {/* Title Serif matched to original brand with deep elegant tracking */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7.5xl font-medium tracking-wide leading-none mt-2 select-none uppercase">
              PECAN SQUARE CAFÉ
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-[#FAF5EF]/95 font-light tracking-wide pt-1">
              Seasonal cooking in the heart of Austin
            </p>
          </div>

          {/* Core high-fidelity botanical branch illustration */}
          <div className="py-2.5 animate-scale-in" id="hero-illustration">
            <ScenicIllustration className="text-[#FEFDFB] hover:text-brand-gold hover:scale-[1.01] transition-all duration-700" />
          </div>

          {/* Quick Direct Actions underneath the branch decoration */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-mono" id="hero-cta-banner">
            <button 
              onClick={() => setReservationsOpen(true)}
              className="px-8 py-4 bg-brand-gold hover:bg-[#FEFDFB] text-brand-charcoal font-bold tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all uppercase duration-300"
              id="hero-reserve-btn"
            >
              Book Reservation
            </button>
            <button 
              onClick={() => setCateringOpen(true)}
              className="px-8 py-4 bg-transparent border border-[#FAF5EF]/45 hover:bg-white/10 text-white font-semibold tracking-widest rounded-full transition-all uppercase duration-300"
              id="hero-catering-btn"
            >
              Private Events
            </button>
          </div>

        </div>
      </header>

      {/* --- SPRING HIGHLIGHTS UNDER-BANNER --- (Matches Screenshot 1 middle panel but elevated) */}
      <section className="bg-brand-cream border-y border-brand-sage/10 py-16 text-center" id="spring-highlights-under-banner">
        <div className="max-w-4xl mx-auto px-4">
          
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-terracotta font-bold block mb-4">
            Spring at PSC
          </span>

          {/* Premium styled ingredient tag cloud (Matches text in original screenshot exactly) */}
          <div className="mb-8" id="original-dishes-paragraph-container">
            <p className="font-serif text-lg sm:text-2xl leading-relaxed text-brand-charcoal max-w-3xl mx-auto italic">
              "Texas Iberico Coppa. Kohlrabi Caesar. Roselle Cosmo. Local Lettuces. Salsa Verde. Red Snapper. Tuna Conserva. Spring Onion Pizza. The PSC Burger. Spring Vegetable Fritters. Hand-Cut Frites. Wood Oven Roasted Chicken. Scallion Scape. Negroni Blanco. Bloomsdale Spinach. Citrine Spritz. Mustard Greens."
            </p>
          </div>

          <div className="w-16 h-px bg-brand-sage/20 mx-auto mb-8" />

          {/* Dynamic selectors to snap pre-selected menu tabs (Matches Midday, All Day, Brunch, Wine List, Dessert buttons in Screenshot 1) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-3xl mx-auto" id="quick-links-mesh">
            
            <button
              onClick={() => handleQuickCategorySelect('midday')}
              className="py-3 px-4 rounded-xl border border-brand-sage/25 bg-[#FEFDFB] hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white text-xs font-mono font-bold tracking-widest text-brand-charcoal transition-all uppercase"
              id="quick-link-midday"
            >
              Midday
            </button>

            <button
              onClick={() => handleQuickCategorySelect('allday')}
              className="py-3 px-4 rounded-xl border border-brand-sage/25 bg-[#FEFDFB] hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white text-xs font-mono font-bold tracking-widest text-brand-charcoal transition-all uppercase"
              id="quick-link-allday"
            >
              All Day
            </button>

            <button
              onClick={() => handleQuickCategorySelect('brunch')}
              className="py-3 px-4 rounded-xl border border-brand-sage/25 bg-[#FEFDFB] hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white text-xs font-mono font-bold tracking-widest text-brand-charcoal transition-all uppercase"
              id="quick-link-brunch"
            >
              Brunch
            </button>

            <button
              onClick={() => handleQuickCategorySelect('wine')}
              className="py-3 px-4 rounded-xl border border-brand-sage/25 bg-[#FEFDFB] hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white text-xs font-mono font-bold tracking-widest text-brand-charcoal transition-all uppercase animate-pulse-subtle"
              id="quick-link-winelist"
            >
              Wine List
            </button>

            <button
              onClick={() => handleQuickCategorySelect('dessert')}
              className="py-3 px-4 rounded-xl border border-brand-sage/25 bg-[#FEFDFB] hover:bg-brand-terracotta hover:border-brand-terracotta hover:text-white text-xs font-mono font-bold tracking-widest text-brand-charcoal transition-all uppercase"
              id="quick-link-dessert"
            >
              Dessert
            </button>

          </div>

        </div>
      </section>

      {/* --- REVIEWS HIGHLIGHTS BANNER (UX Upgrade) --- */}
      <section className="bg-brand-beige py-12" id="designers-ux-quote-banner">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-2">
          <Quote className="w-8 h-8 text-brand-terracotta/20 shrink-0 transform scale-x-[-1]" />
          <p className="font-serif italic text-base text-brand-charcoal/80 leading-relaxed max-w-xl">
            "Pecan Square Cafe matches elegant wood-fired simplicity with exceptional Texas Hill Country micro-seasonings. Unquestionably W 6th Street at its finest."
          </p>
          <div className="flex gap-1 text-xs text-brand-gold mt-1.5">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-brand-sage-dark font-bold">
            Austin Gastronomy Journal
          </span>
        </div>
      </section>

      {/* --- MENU VIEW CONTROLLER PORTAL --- */}
      <MenusSection />

      {/* --- HOURS, INFORMATION & STREET MAP bento grid --- */}
      <HoursInfoSection />

      {/* --- GIFT CARDS INTERACTIVE CUSTOMIZER --- */}
      <GiftCardsSection />

      {/* --- INSTAGRAM IMAGES SLIDER DRAWERS --- */}
      <InstagramGrid />

      {/* --- FOOTER MAIN FAMILY DIRECTORY --- */}
      <Footer />

      {/* --- RESERVATIONS BOOKING MODAL DIALOGS (Screenshot 3 matcher) --- */}
      <ReservationsModal 
        isOpen={reservationsOpen} 
        onClose={() => setReservationsOpen(false)} 
        onSuccess={handleBookingSuccess} 
      />

      {/* --- CATERING & PRIVATE EVENTS FORMS DIALOGS (Screenshot 2 matcher) --- */}
      <CateringModal 
        isOpen={cateringOpen} 
        onClose={() => setCateringOpen(false)} 
        onSuccess={handleCateringSuccess} 
      />

    </div>
  );
}
