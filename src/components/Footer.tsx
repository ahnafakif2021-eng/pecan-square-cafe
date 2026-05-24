import React, { useState } from 'react';
import { ArrowUp, TreePalm, ShieldCheck, Heart, Sparkles, MapPin, ExternalLink, HelpCircle } from 'lucide-react';

interface MMLProject {
  year: string;
  name: string;
  type: string;
  desc: string;
  link?: string;
}

export default function Footer() {
  const [activeVenue, setActiveVenue] = useState<string | null>(null);

  // Lists all 21 MML family spots shown in the real screenshot #1
  const familyProjects: MMLProject[] = [
    { year: "'06", name: "Lamberts Downtown Barbecue", type: "Fancy BBQ & Bar", desc: "Slow smoked meats & whiskey in a historic brick general store.", link: "https://www.lambertsaustin.com/" },
    { year: "'09", name: "Perla's Seafood & Oyster Bar", type: "Oysters & Patio", desc: "Fresh coastal seafood served on a beautiful shaded deck on S Congress.", link: "https://www.perlasaustin.com/" },
    { year: "'11", name: "Elizabeth Street Café", type: "Vietnamese Bistro", desc: "French-Vietnamese classics, fresh baguettes, pastries & iced coffee.", link: "https://www.elizabethstreetcafe.com/" },
    { year: "'12", name: "Clark's Oyster Bar", type: "Oyster Bar & Caviar", desc: "Bespoke seafood, lobster rolls, and exceptionally cold martinis.", link: "https://www.clarksybar.com/" },
    { year: "'13", name: "Josephine House", type: "Cottage Brunch", desc: "Warm residential cottage garden dining, farm-fresh cocktails & salads.", link: "https://www.josephineofaustin.com/" },
    { year: "'13", name: "Jeffrey's Restaurant & Bar", type: "Fine Steakhouse", desc: "Austin's premier neighborhood fine dining steakhouse and private rooms.", link: "https://www.jeffreysonwestlynn.com/" },
    { year: "'16", name: "June's All Day", type: "Vibrant Bistro", desc: "Award-winning wine bar with pub-style burger plates and patio style.", link: "https://www.junesallday.com/" },
    { year: "'17", name: "Pool Burger", type: "Tiki Burgers & Shakes", desc: "Craft wagyu burgers & rum tiki drinks served next to Deep Eddy Pool.", link: "https://www.poolburger.com/" },
    { year: "'18", name: "Joann's Fine Foods", type: "Tex-Mex Diner", desc: "Classic Tex-Mex, wood-grilled fajitas, and frozen margaritas at the Austin Motel.", link: "https://www.joannsaustin.com/" },
    { year: "'19", name: "Lou's Austin", type: "Casual Beer & Bird", desc: "Crisp chicken, smashburgers, cold beer, and ping pong on the patio.", link: "https://www.lousaustin.com/" },
    { year: "'19", name: "Swedish Hill", type: "Bakery & Specialty Grocer", desc: "Fresh morning sourdough, exquisite pastries, deli counter, rotisserie & wines.", link: "https://www.swedishhillaustin.com/" },
    { year: "'19", name: "Austin Proper Hotel", type: "Luxury Hotel Dining", desc: "The Peacock Mediterranean restaurant & Goldie's club lounge dining.", link: "https://www.properhotel.com/austin" },
    { year: "'20", name: "Neighborhood Sushi", type: "Chic Japanese", desc: "Fresh nigiri, tempura & cold sake in a minimalist South Congress home.", link: "https://www.neighborhoodsushi.com/" },
    { year: "'21", name: "Sammie's Italian", type: "Red Sauce Classics", desc: "Comforting house-made pasta, chicken parm & old-school Italian-American soul.", link: "https://www.sammiesitalian.com/" },
    { year: "'21", name: "Favorite Pizza", type: "Retro Pizza Parlor", desc: "Crisp New York style slices, hero subs & cold wine under neon lights.", link: "https://www.favoritepizzaaustin.com/" },
    { year: "'21", name: "Hotel Saint Vincent", type: "Boutique Hotel Dining", desc: "San Lorenzo coastal Italian kitchen & Elizabeth Street sweet carts.", link: "https://www.hotelsaintvincent.com" },
    { year: "'22", name: "Pecan Square Cafe", type: "Seasonal Texas Kitchen", desc: "Austin's cozy neighborhood bistro under ancient oak courtyard trees.", link: "https://www.pecansquarecafe.com/" },
    { year: "'22", name: "Ski Shores Cafe", type: "Lakeside Burgers", desc: "Historic Lake Austin waterfront burger shack, fried catfish & frozen beers.", link: "https://www.skishorescafe.com/" },
    { year: "'22", name: "Las Montañas", type: "Border-Style Tex-Mex", desc: "Sizzling wood fire fajita trays, lobsters & premium tequila flights.", link: "https://www.lasmontanas-austin.com/" },
    { year: "'22", name: "Howards Bar & Club", type: "Local Neighborhood Bar", desc: "Classic dive jukebox bar downstairs, neon DJ dance club upstairs.", link: "https://www.howardsbarandclub.com/" },
    { year: "'22", name: "Rosie's Wine Bar", type: "Elegant Wine Caves", desc: "Cozy european-inspired cellar bar with tapas and organic vintages.", link: "https://www.rosieswinebar.com/" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-sage text-[#FEFDFB] py-20 relative overflow-hidden" id="footer-section-root">
      
      {/* Decorative vertical lines representing classic botanical spacing */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-between px-12">
        <div className="w-px h-full bg-[#FAF5EF]" />
        <div className="w-px h-full bg-[#FAF5EF] hidden md:block" />
        <div className="w-px h-full bg-[#FAF5EF] hidden lg:block" />
        <div className="w-px h-full bg-[#FAF5EF]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main upper split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-[#FAF5EF]/15 pb-16">
          
          {/* Column 1: Squirrels & Pecan Tree (Original icon representation) */}
          <div className="md:col-span-4 space-y-6" id="footer-branding-column">
            
            {/* Hand-coded luxurious Squirrel & Pecan Tree Crest */}
            <div className="w-32 h-32 rounded-full border border-[#FAF5EF]/25 flex items-center justify-center p-3 bg-[#FAF5EF]/5 mx-auto md:mx-0 shadow-lg group hover:border-[#FAF5EF]/50 transition-colors">
              <svg 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full text-[#FEFDFB] group-hover:scale-105 transition-transform duration-500"
                id="footer-mml-crest-svg"
              >
                {/* Central oak/pecan tree outline */}
                <path d="M 50,85 L 50,45" stroke="currentColor" strokeWidth="3" />
                <path d="M 50,65 Q 40,60 35,50" stroke="currentColor" strokeWidth="2" />
                <path d="M 50,55 Q 60,50 65,40" stroke="currentColor" strokeWidth="2" />
                
                {/* Fluffy botanical canopy */}
                <path 
                  d="M 50,15 C 30,15 25,30 35,45 C 20,45 20,60 35,68 C 45,72 55,72 65,68 C 80,60 80,45 65,45 C 75,30 70,15 50,15 Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  fill="currentColor" 
                  fillOpacity="0.08" 
                />

                {/* Left Squirrel caricature silhouette */}
                <path 
                  d="M 22,82 C 22,76 28,70 32,74 C 29,74 27,82 32,82 C 34,82 35,78 37,84 C 34,86 28,86 25,85" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="currentColor" 
                />
                
                {/* Right Squirrel caricature silhouette */}
                <path 
                  d="M 78,82 C 78,76 72,70 68,74 C 71,74 73,82 68,82 C 66,82 65,78 63,84 C 66,86 72,86 75,85" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="currentColor" 
                />

                {/* Acorns / Pecans hanging */}
                <circle cx="50" cy="38" r="3" fill="currentColor" />
                <circle cx="42" cy="52" r="2.5" fill="currentColor" />
                <circle cx="58" cy="48" r="2.5" fill="currentColor" />
                
                {/* Text ring border */}
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              </svg>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-serif text-3xl font-medium tracking-wide">
                Pecan Square Café
              </h3>
              <p className="text-xs font-mono text-[#FAF5EF]/75 tracking-widest uppercase">
                An MML Hospitality Concept
              </p>
            </div>

            {/* Reach out / PR / Philanthrophy links from original site */}
            <div className="space-y-2 text-center md:text-left pt-2" id="footer-info-links">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
                INFO
              </h4>
              <div className="flex flex-col gap-2 text-xs font-mono">
                <a href="mailto:info@pecansquarecafe.com" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-1">
                  <span>Reach Out</span>
                </a>
                <a href="mailto:renee@mmlhospitality.com" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-1">
                  <span>Public Relations</span>
                </a>
                <a href="https://www.mmlhospitality.com/philanthropy" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-1">
                  <span>Philanthropy</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2&3 (Unified span): Extensive MML family directory */}
          <div className="md:col-span-8 space-y-6" id="footer-mml-directory">
            
            <div className="flex items-center justify-between border-b border-[#FAF5EF]/10 pb-3">
              <span className="text-xs uppercase font-mono tracking-[0.2em] font-bold text-brand-gold">
                The MML Hospitality Family
              </span>
              <span className="text-[10px] uppercase font-mono opacity-60 hidden sm:block">
                Austin • New Orleans
              </span>
            </div>

            <p className="text-xs text-[#FAF5EF]/85 font-sans leading-relaxed">
              We are proud members of <a href="https://www.mmlhospitality.com" target="_blank" rel="noopener noreferrer" className="underline decoration-brand-gold/50 hover:text-brand-gold">MML Hospitality</a>, a chef-driven management group dedicated to creating neighborhood landmarks with exceptional craft, authentic character, and gracious hospitality. Tap on any venue to explore:
            </p>

            {/* MML Hospitality directory grid (Matches original years exactly) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 pt-4" id="mml-family-brand-grid">
              {familyProjects.map((proj) => {
                const isActive = activeVenue === proj.name;
                return (
                  <div
                    key={proj.name}
                    className="relative"
                    onMouseEnter={() => setActiveVenue(proj.name)}
                    onMouseLeave={() => setActiveVenue(null)}
                  >
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-baseline gap-2.5 p-2 rounded-lg text-xs transition-all ${
                        isActive 
                          ? 'bg-[#FAF5EF]/10 text-white font-semibold' 
                          : 'text-[#FAF5EF]/90 hover:text-white'
                      }`}
                      id={`mml-brand-anchor-${proj.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="font-mono text-brand-gold text-[10px] w-6 opacity-80">{proj.year}</span>
                      <span className="border-b border-[#FAF5EF]/10 hover:border-white pb-0.5 inline-flex items-center gap-1 flex-1 truncate">
                        {proj.name}
                        <ExternalLink className="w-2.5 h-2.5 opacity-40 inline-block shrink-0" />
                      </span>
                    </a>

                    {/* Popover Card detail (Creative hover UI experience) */}
                    {isActive && (
                      <div className="absolute bottom-10 left-4 right-4 z-40 bg-white text-brand-charcoal p-4 rounded-xl shadow-2xl border border-brand-sage/20 animate-scale-in pointer-events-none">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-serif font-bold text-sm text-brand-charcoal leading-tight">
                            {proj.name}
                          </h4>
                          <span className="font-mono text-[9px] text-brand-gold font-bold bg-[#FAF6F0] px-1.5 py-0.5 rounded">
                            {proj.year}
                          </span>
                        </div>
                        <p className="text-[9px] font-mono text-brand-terracotta uppercase tracking-wider mb-2">
                          {proj.type}
                        </p>
                        <p className="text-[11px] text-brand-sage-dark leading-relaxed font-sans">
                          {proj.desc}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Lower row: Copyright declarations */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 text-[10px] font-mono text-[#FAF5EF]/60 gap-4" id="footer-meta-copyright">
          
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left justify-center">
            <span>© {new Date().getFullYear()} PECAN SQUARE CAFÉ. ALL RIGHTS RESERVED.</span>
            <span className="opacity-30">|</span>
            <a href="https://www.mmlhospitality.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:underline">MML HOSPITALITY GROUP</a>
            <span className="opacity-30">|</span>
            <a href="/" className="hover:text-brand-gold">TERMS & PRIVACY</a>
          </div>

          {/* Quick up arrow button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#FAF5EF]/10 hover:bg-[#FAF5EF]/20 border border-[#FAF5EF]/10 hover:border-[#FAF5EF]/30 rounded-full transition-all text-[#FEFDFB] flex items-center justify-center shadow-lg group"
            title="Scroll to Top"
            id="back-to-top-button"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
