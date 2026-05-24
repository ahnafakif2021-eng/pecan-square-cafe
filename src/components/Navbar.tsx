import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Compass, PhoneCall, Gift, BookOpen, Share2 } from 'lucide-react';

interface NavbarProps {
  onOpenReservations: () => void;
  onOpenCatering: () => void;
}

export default function Navbar({ onOpenReservations, onOpenCatering }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticking header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-terracotta/95 backdrop-blur-md py-4 shadow-lg border-b border-brand-terracotta-light/10' 
            : 'bg-brand-terracotta py-6'
        }`}
        id="main-gourmet-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left side brand mini identifier (only visible when scrolled, or as neat logo anchor) */}
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center group transition-all text-white focus:outline-none"
              id="nav-logo-top"
            >
              <span className="font-serif font-semibold tracking-wider text-lg uppercase transition-colors duration-300 group-hover:text-brand-gold">
                Pecan Square
              </span>
            </button>

            {/* Desktop Navigation Links (Matches original exactly in labels, but styled luxuriously) */}
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em] font-semibold text-[#FEFDFB]/90" id="desktop-links-list">
              <button 
                onClick={() => handleScrollToSection('menus-section-root')} 
                className="hover:text-brand-gold hover:translate-y-[-1px] transition-all cursor-pointer uppercase"
                id="desktop-link-menus"
              >
                Menus
              </button>
              
              <button 
                onClick={() => handleScrollToSection('hours-info-section-root')} 
                className="hover:text-brand-gold hover:translate-y-[-1px] transition-all cursor-pointer uppercase"
                id="desktop-link-hours"
              >
                Hours / Info
              </button>

              <button 
                onClick={onOpenReservations} 
                className="hover:text-brand-gold text-brand-gold hover:translate-y-[-1px] transition-all cursor-pointer uppercase font-bold flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full border border-brand-gold/25"
                id="desktop-link-reservations"
              >
                <Calendar className="w-3.5 h-3.5 animate-pulse" />
                <span>Reservations</span>
              </button>

              <button 
                onClick={onOpenCatering} 
                className="hover:text-brand-gold hover:translate-y-[-1px] transition-all cursor-pointer uppercase font-bold"
                id="desktop-link-groupdining"
              >
                Group Dining
              </button>

              <button 
                onClick={() => handleScrollToSection('gift-cards-section-root')} 
                className="hover:text-brand-gold hover:translate-y-[-1px] transition-all cursor-pointer uppercase"
                id="desktop-link-giftcards"
              >
                Gift Cards
              </button>

              <button 
                onClick={() => handleScrollToSection('hours-info-section-root')} 
                className="hover:text-brand-gold hover:translate-y-[-1px] transition-all cursor-pointer uppercase"
                id="desktop-link-directions"
              >
                Directions
              </button>
            </div>

            {/* Right side quick direct call button (luxury addition) */}
            <div className="hidden xl:block">
              <a 
                href="tel:5122651612"
                className="text-xs font-mono py-2.5 px-4 bg-brand-terracotta-light hover:bg-[#FAF6F0] text-white hover:text-brand-charcoal transition-all rounded-full border border-white/20 flex items-center gap-2"
                id="nav-quick-call-cta"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>512-265-1612</span>
              </a>
            </div>

            {/* Mobile Menu Action button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white hover:bg-white/10 p-2.5 rounded-full transition-colors focus:outline-none"
                aria-label="Toggle navigation drawer"
                id="mobile-drawer-trigger"
              >
                {mobileOpen ? <X className="w-6 h-6 animate-scale-in" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlays */}
      <div 
        className={`fixed inset-0 z-30 bg-brand-charcoal/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        id="mobile-drawer-overlay"
      >
        <div 
          className={`absolute top-20 left-4 right-4 bg-brand-terracotta rounded-2xl p-6 shadow-2xl border border-brand-terracotta-light/20 flex flex-col gap-6 text-[#FEFDFB] transition-transform duration-300 ${
            mobileOpen ? 'scale-100 translateY-0' : 'scale-95 -translate-y-4 opacity-0 pointer-events-none'
          }`}
          onClick={(e) => e.stopPropagation()}
          id="mobile-links-container"
        >
          <div className="border-b border-white/10 pb-4 text-center">
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-60 block">Seasonal Dining</span>
            <span className="font-serif text-lg font-semibold tracking-wide">Pecan Square Café</span>
          </div>

          <div className="flex flex-col gap-4 text-sm font-mono tracking-wider font-semibold uppercase">
            
            <button 
              onClick={() => handleScrollToSection('menus-section-root')} 
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all"
              id="mobile-link-menus"
            >
              <BookOpen className="w-5 h-5 text-brand-gold shrink-0" />
              <span>Explore Menus</span>
            </button>

            <button 
              onClick={() => handleScrollToSection('hours-info-section-root')} 
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all"
              id="mobile-link-hours"
            >
              <Compass className="w-5 h-5 text-brand-gold shrink-0" />
              <span>Hours & Directions</span>
            </button>

            <button 
              onClick={() => { setMobileOpen(false); onOpenReservations(); }} 
              className="flex items-center justify-between p-4 rounded-xl bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal text-left transition-all shadow-md font-bold"
              id="mobile-link-reserve"
            >
              <span className="flex items-center gap-3">
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Book A Table</span>
              </span>
              <span className="text-[9px] font-bold px-2 py-0.5 bg-white rounded uppercase text-brand-terracotta">Party Details</span>
            </button>

            <button 
              onClick={() => { setMobileOpen(false); onOpenCatering(); }} 
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all"
              id="mobile-link-group-dining"
            >
              <Share2 className="w-5 h-5 text-brand-gold shrink-0" />
              <span>Catering & Group Dining</span>
            </button>

            <button 
              onClick={() => handleScrollToSection('gift-cards-section-root')} 
              className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all"
              id="mobile-link-giftcards"
            >
              <Gift className="w-5 h-5 text-brand-gold shrink-0" />
              <span>Purchase Gift Cards</span>
            </button>

          </div>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-2 items-center text-center">
            <a href="tel:5122651612" className="text-xs font-mono font-bold hover:text-brand-gold text-white decoration-brand-gold">
              📞 Call: 512-265-1612
            </a>
            <p className="text-[10px] opacity-50 font-mono">1200 B West 6th Street, Austin TX</p>
          </div>

        </div>
      </div>
    </>
  );
}
