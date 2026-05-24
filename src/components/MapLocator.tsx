import React, { useState } from 'react';
import { MapPin, Compass, Search, Navigation, Copy, Check, Car, Landmark } from 'lucide-react';

interface LandmarkPin {
  name: string;
  type: string;
  lat: number; // relative % from left
  lng: number; // relative % from top
  desc: string;
  curatorNote?: string;
}

export default function MapLocator() {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activePin, setActivePin] = useState<string>('Pecan Square Cafe');
  const [copied, setCopied] = useState(false);

  const landmarks: LandmarkPin[] = [
    {
      name: 'Pecan Square Cafe',
      type: 'Primary',
      lat: 52,
      lng: 48,
      desc: '1200 B West 6th Street. Our cozy brick-walled dining room, wood fire oven, and lush tree-lined patio.',
      curatorNote: 'Valet parking is available right in front of the café entrance on W 6th St.'
    },
    {
      name: 'Josephine House',
      type: 'MML Family',
      lat: 25,
      lng: 30,
      desc: '1601 Waterston Ave. Sister restaurant set in a gorgeous Clarksville cottage, serving farm-to-table brunch.',
      curatorNote: 'Just a 4-minute walk north-west through historic Clarksville.'
    },
    {
      name: 'Clark’s Oyster Bar',
      type: 'MML Family',
      lat: 58,
      lng: 22,
      desc: '1200 W 6th St. Elite seafood spot, raw bar, and exceptionally cold martinis.',
      curatorNote: 'Conveniently located directly across the street!'
    },
    {
      name: 'Jeffrey’s Restaurant',
      type: 'MML Family',
      lat: 20,
      lng: 15,
      desc: '1204 West Lynn St. Austin’s premier upscale neighborhood fine-dining steakhouse.',
      curatorNote: 'Perfect for continuation cocktails after dinner.'
    },
    {
      name: 'Swedish Hill Bakery',
      type: 'MML Family',
      lat: 42,
      lng: 78,
      desc: '1120 W 6th St. Artisanal deli, bakery, café, and specialty grocery store.',
      curatorNote: 'Just 1 block east of Pecan Square Cafe.'
    }
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('1200 B West 6th Street, Austin, TX 78703');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedLoc = landmarks.find(l => l.name === activePin) || landmarks[0];

  return (
    <div className="bg-white border border-brand-sage/20 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row" id="interactive-map-root">
      {/* Map display */}
      <div className="flex-1 min-h-[380px] sm:min-h-[460px] bg-[#F7F4EE] relative overflow-hidden select-none" id="map-canvas-container">
        {/* Decorative Grid Line art representing roads of Austin Clarksville / W 6th district */}
        <svg className="absolute inset-0 w-full h-full stroke-brand-sage/10" strokeWidth="2" id="map-svg-grid">
          {/* Main W 6th Street */}
          <line x1="0" y1="50%" x2="100%" y2="50%" className="stroke-brand-sage/25" strokeWidth="18" />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="stroke-white/80" strokeWidth="2" strokeDasharray="6 6" />
          
          {/* Waterston Ave / West Lynn cross axes */}
          <line x1="25%" y1="0" x2="25%" y2="100%" strokeWidth="10" />
          <line x1="55%" y1="0" x2="55%" y2="100%" className="stroke-brand-sage/20" strokeWidth="14" />
          <line x1="80%" y1="0" x2="80%" y2="100%" strokeWidth="10" />

          {/* S 1st / Blanco Alley */}
          <line x1="0" y1="20%" x2="100%" y2="20%" strokeWidth="8" />
          <line x1="0" y1="80%" x2="100%" y2="80%" strokeWidth="8" />

          {/* Colorado River bounds subtle curve */}
          <path d="M 0,390 Q 400,430 800,420" stroke="#CCD7D8" strokeWidth="24" fill="none" className="opacity-40" />
          <path d="M 0,390 Q 400,430 800,420" stroke="#9BB8BA" strokeWidth="2" fill="none" className="opacity-20" />
          
          {/* Street Name annotations */}
          <text x="2%" y="47%" className="fill-brand-sage/70 font-mono text-[9px] tracking-widest uppercase">West 6th Street</text>
          <text x="56%" y="15%" className="fill-brand-sage/70 font-mono text-[9px] tracking-widest uppercase rotate-90 origin-left">Blanco Street</text>
          <text x="27%" y="90%" className="fill-brand-sage/70 font-mono text-[9px] tracking-widest uppercase">Clarksville District</text>
          <text x="70%" y="398" className="fill-brand-sage-dark/80 font-serif italic text-[11px]">Lady Bird Lake (Colorado River)</text>
        </svg>

        {/* Ambient trees/park representation */}
        <div className="absolute top-4 left-6 w-24 h-24 bg-brand-sage/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-brand-sage/15 rounded-full blur-2xl pointer-events-none" />

        {/* Render interactive pins */}
        {landmarks.map((landmark) => {
          const isPrimary = landmark.type === 'Primary';
          const isActive = landmark.name === activePin;

          // Simple layout position adjusted by zoom factor
          const leftPercent = landmark.lat;
          const topPercent = landmark.lng;

          return (
            <button
              key={landmark.name}
              onClick={() => setActivePin(landmark.name)}
              className="absolute group transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
              }}
              id={`pin-${landmark.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {/* Pulsing radius backing active pins */}
              {isActive && (
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-brand-terracotta/25 animate-ping -left-4 -top-4" />
              )}

              {/* Pin Icon Wrapper */}
              <div
                className={`flex items-center justify-center rounded-full p-2.5 shadow-lg transition-transform duration-300 ${
                  isActive
                    ? 'bg-brand-terracotta text-white scale-110 ring-4 ring-brand-terracotta/20'
                    : isPrimary
                    ? 'bg-brand-terracotta-light text-white group-hover:scale-105'
                    : 'bg-white text-brand-sage-dark hover:bg-brand-beige border border-brand-sage/30 group-hover:scale-105'
                }`}
              >
                {isPrimary ? (
                  <MapPin className="w-5 h-5 animate-bounce" />
                ) : (
                  <Landmark className="w-4 h-4" />
                )}
              </div>

              {/* Pin label tooltip */}
              <span
                className={`absolute left-1/2 -translate-x-1/2 top-11 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase font-medium transition-opacity ${
                  isActive 
                    ? 'bg-brand-charcoal text-white opacity-100 uppercase' 
                    : 'bg-white text-brand-charcoal opacity-0 group-hover:opacity-100 border border-brand-sage/20 shadow-sm'
                }`}
              >
                {landmark.name}
              </span>
            </button>
          );
        })}

        {/* Compass Widget decoration */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-brand-sage/20 p-2 rounded-lg shadow-sm flex flex-col items-center gap-1">
          <Compass className="w-5 h-5 text-brand-terracotta animate-[spin_10s_linear_infinite]" />
          <span className="text-[8px] font-mono font-bold text-brand-charcoal">AUSTIN, TX</span>
        </div>

        {/* Zoom adjustment tool decorations */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-brand-sage/20 rounded-lg shadow-sm p-1 flex gap-1 items-center">
          <button 
            onClick={() => { setZoomLevel(prev => Math.max(1, prev - 1)); }} 
            className="w-7 h-7 flex items-center justify-center rounded text-xs font-mono font-bold hover:bg-brand-beige text-brand-charcoal"
          >
            -
          </button>
          <span className="text-[10px] uppercase font-mono px-1 font-semibold text-brand-sage-dark">
            District Scale
          </span>
          <button 
            onClick={() => { setZoomLevel(prev => Math.min(3, prev + 1)); }} 
            className="w-7 h-7 flex items-center justify-center rounded text-xs font-mono font-bold hover:bg-brand-beige text-brand-charcoal"
          >
            +
          </button>
        </div>
      </div>

      {/* Side details panel */}
      <div className="w-full lg:w-[360px] border-t lg:border-t-0 lg:border-l border-brand-sage/10 p-6 bg-brand-cream/80 flex flex-col justify-between" id="map-control-panel">
        <div id="map-destination-selector">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono text-brand-terracotta tracking-widest font-bold uppercase">
              District Explorer
            </span>
            <div className="flex items-center text-xs text-brand-sage-dark font-medium font-mono">
              <Compass className="w-3.5 h-3.5 mr-1" /> W 6th St
            </div>
          </div>

          <h3 className="font-serif text-2xl text-brand-charcoal leading-tight mb-2 font-medium">
            {selectedLoc.name}
          </h3>
          
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase mb-4 ${
            selectedLoc.type === 'Primary' 
              ? 'bg-brand-terracotta/10 text-brand-terracotta font-semibold' 
              : 'bg-brand-sage/10 text-brand-sage-dark'
          }`}>
            {selectedLoc.type}
          </span>

          <p className="text-sm text-brand-charcoal/80 leading-relaxed font-sans mb-4">
            {selectedLoc.desc}
          </p>

          {selectedLoc.curatorNote && (
            <div className="bg-[#FAF6F0] border-l-2 border-brand-sage p-3.5 rounded-r-lg text-xs leading-relaxed text-brand-sage-dark italic mb-4">
              <strong>Locality Note:</strong> {selectedLoc.curatorNote}
            </div>
          )}
        </div>

        <div className="border-t border-brand-sage/10 pt-4 mt-2" id="map-action-controls">
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCopyAddress}
              className="w-full text-xs font-mono py-3 px-3 bg-white hover:bg-[#FDFBF7] text-brand-charcoal rounded-lg border border-brand-sage/20 flex items-center justify-center gap-2 transition-all"
              id="map-copy-address-button"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-brand-sage-dark" />
                  <span>Copy Address to Clipboard</span>
                </>
              )}
            </button>

            <a
              href="https://maps.google.com/?q=Pecan+Square+Cafe+1200+West+6th+Street+Austin+TX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-xs font-mono py-3 px-3 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-lg flex items-center justify-center gap-2 transition-all shadow-md font-semibold"
              id="map-external-navigation-link"
            >
              <Navigation className="w-4 h-4" />
              <span>Launch Google Maps</span>
            </a>
          </div>

          <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-brand-sage-dark/80 bg-brand-sage/5 p-2 rounded-lg justify-center">
            <Car className="w-3.5 h-3.5" />
            <span>Valet Available: Sixth&Blanco district</span>
          </div>
        </div>
      </div>
    </div>
  );
}
