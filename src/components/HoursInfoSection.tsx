import React from 'react';
import { Clock, Phone, MapPin, Mail, Car, ShieldCheck, Compass, Info } from 'lucide-react';
import MapLocator from './MapLocator';

export default function HoursInfoSection() {
  return (
    <section className="py-24 bg-[#974030] text-[#FEFDFB] relative overflow-hidden" id="hours-info-section-root">
      
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-terracotta-dark/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-terracotta-light/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="hours-info-header">
          <span className="text-xs uppercase font-mono tracking-widest font-bold text-brand-gold">
            Plan Your Visit
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mt-2 leading-tight">
            Hours, Location & Valet
          </h2>
          <div className="w-16 h-px bg-[#FEFDFB]/30 mx-auto mt-4" />
        </div>

        {/* Dynamic content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="hours-grid-layout">
          
          {/* Column A: Information bento items */}
          <div className="lg:col-span-5 space-y-6" id="bento-hours-info-panel">
            
            {/* Box 1: Operating Hours */}
            <div className="bg-brand-terracotta-darkp bg-[#7f3426]/50 backdrop-blur-md border border-[#FAF5EF]/10 p-8 rounded-2xl space-y-6 shadow-lg">
              <div className="flex items-center gap-3 border-b border-[#FAF5EF]/15 pb-4">
                <div className="p-2 bg-brand-gold/15 text-brand-gold rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-medium tracking-wide">
                  Dining Hours
                </h3>
              </div>

              {/* Day sectors (Exactly matches original screenshot) */}
              <div className="space-y-4" id="hours-timeframe-grid">
                
                <div className="flex justify-between items-start border-b border-[#FAF5EF]/5 pb-2.5">
                  <div>
                    <h4 className="font-serif text-base font-medium">Lunch Service</h4>
                    <p className="text-[11px] font-mono opacity-70">Enjoy our signature midday specials</p>
                  </div>
                  <span className="font-mono text-xs font-semibold bg-[#FAF5EF]/10 text-white px-2.5 py-1 rounded">
                    Mon – Fri, 11am – 3pm
                  </span>
                </div>

                <div className="flex justify-between items-start border-b border-[#FAF5EF]/5 pb-2.5">
                  <div>
                    <h4 className="font-serif text-base font-medium text-brand-gold font-semibold">Happy Hour</h4>
                    <p className="text-[11px] font-mono opacity-70">Half-off hand-shaken cocktails</p>
                  </div>
                  <span className="font-mono text-xs font-semibold bg-[#FAF5EF]/10 text-white px-2.5 py-1 rounded">
                    Mon – Fri, 3pm – 5pm
                  </span>
                </div>

                <div className="flex justify-between items-start border-b border-[#FAF5EF]/5 pb-2.5">
                  <div>
                    <h4 className="font-serif text-base font-medium">Dinner Club</h4>
                    <p className="text-[11px] font-mono opacity-70">Wood-oven specialties under the stars</p>
                  </div>
                  <div className="text-right flex flex-col gap-1 items-end">
                    <span className="font-mono text-xs font-semibold bg-[#FAF5EF]/10 text-white px-2.5 py-1 rounded">
                      Sun – Thu, 5pm – 10pm
                    </span>
                    <span className="font-mono text-xs font-semibold bg-[#FAF5EF]/10 text-white px-2.5 py-1 rounded">
                      Fri & Sat, 5pm – 11pm
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-serif text-base font-medium">Weekend Brunch</h4>
                    <p className="text-[11px] font-mono opacity-70">Pastries, mimosas, & savory wood pizzas</p>
                  </div>
                  <span className="font-mono text-xs font-semibold bg-[#FAF5EF]/10 text-white px-2.5 py-1 rounded">
                    Sat & Sun, 11am – 3pm
                  </span>
                </div>

              </div>
            </div>

            {/* Box 2: Valet Guidelines */}
            <div className="bg-brand-sage/20 border border-[#FAF5EF]/10 p-6 rounded-2xl shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-gold/15 text-brand-gold rounded-lg">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium leading-tight">
                    Valet Guidelines
                  </h4>
                  <p className="text-[10px] font-mono opacity-80 uppercase tracking-widest text-[#FAF5EF]/80">
                    Sixth & Blanco district
                  </p>
                </div>
              </div>

              <p className="text-xs font-sans text-[#FAF5EF]/90 leading-relaxed">
                Sixth&Blanco district valet parking is available on West 6th Street for <strong className="text-brand-gold font-bold font-semibold">$12</strong>.
              </p>

              <div className="border-t border-[#FAF5EF]/10 pt-3 flex flex-col sm:flex-row justify-between gap-1 items-start sm:items-center">
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-75">Valet Service Hours:</span>
                <span className="font-mono text-xs font-semibold text-brand-gold bg-[#FAF5EF]/10 px-2 py-0.5 rounded">
                  Mon – Thu: 11am – 10pm • Fri – Sun: 11am – 11pm
                </span>
              </div>
            </div>

            {/* Box 3: General Contact Information */}
            <div className="bg-[#FAF5EF] text-brand-charcoal p-6 rounded-2xl shadow-lg flex flex-col gap-4">
              <h4 className="font-serif text-lg font-bold text-brand-terracotta tracking-wide flex items-center gap-2">
                <Info className="w-4 h-4" /> Guest Information Desk
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <a 
                  href="tel:5122651612" 
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-brand-beige border border-brand-sage/10 hover:border-brand-terracotta/20 transition-all text-brand-charcoal"
                >
                  <Phone className="w-4 h-4 text-brand-terracotta" />
                  <div>
                    <p className="text-[9px] uppercase font-mono text-brand-sage-dark font-bold leading-none mb-1">Call Us</p>
                    <p className="font-mono font-medium">512-265-1612</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@pecansquarecafe.com"
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-brand-beige border border-brand-sage/10 hover:border-brand-terracotta/20 transition-all text-brand-charcoal"
                >
                  <Mail className="w-4 h-4 text-brand-terracotta" />
                  <div>
                    <p className="text-[9px] uppercase font-mono text-brand-sage-dark font-bold leading-none mb-1">Email Us</p>
                    <p className="font-mono font-medium truncate">info@pecansquarecafe.com</p>
                  </div>
                </a>
              </div>

              <div className="text-[10px] font-sans text-brand-sage-dark leading-relaxed">
                📍 <strong>Located At:</strong> <span className="font-mono font-semibold">1200 B West 6th Street, Austin, TX 78703</span>. Nestled directly in the historic West Austin district with beautiful oak trees and courtyard shade.
              </div>
            </div>

          </div>

          {/* Column B: Map embed */}
          <div className="lg:col-span-7" id="interactive-map-panel">
            <span className="text-xs uppercase font-mono font-bold text-brand-gold tracking-widest block mb-3 text-center lg:text-left">
              📍 Interactive Neighborhood Guide
            </span>
            <MapLocator />
          </div>

        </div>

      </div>
    </section>
  );
}
