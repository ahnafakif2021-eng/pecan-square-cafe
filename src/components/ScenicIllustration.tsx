import React from 'react';

export default function ScenicIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} id="scenic-illustration-container">
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-4xl mx-auto opacity-75 md:opacity-90 transition-opacity duration-300"
        aria-hidden="true"
        id="pecan-svg-illustration"
      >
        {/* Main curved branch */}
        <path
          d="M 50,150 C 180,140 320,180 520,120 C 600,95 680,120 750,170"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Sub-branch left */}
        <path
          d="M 220,152 C 200,190 150,225 100,240"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Sub-branch right */}
        <path
          d="M 450,135 C 490,170 540,200 620,210"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* --- LEAF GROUP 1 (Left Upper) --- */}
        {/* Leaf 1A */}
        <path
          d="M 180,152 C 160,110 130,90 90,105 C 120,125 150,140 180,152 Z"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        {/* Leaf 1A Vein */}
        <path d="M 180,152 C 150,132 120,118 90,105" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />

        {/* Leaf 1B */}
        <path
          d="M 250,148 C 240,90 200,70 160,85 C 190,110 220,130 250,148 Z"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        {/* Leaf 1B Vein */}
        <path d="M 250,148 C 220,126 190,105 160,85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />


        {/* --- LEAF GROUP 2 (Center Lower) --- */}
        {/* Leaf 2A hanging down */}
        <path
          d="M 330,153 C 320,210 280,260 210,290 C 260,240 300,195 330,153 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M 330,153 C 300,200 260,245 210,290" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />

        {/* Leaf 2B hanging down */}
        <path
          d="M 370,152 C 380,225 420,280 480,310 C 420,265 390,210 370,152 Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M 370,152 C 390,210 430,265 480,310" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />


        {/* --- DUAL PECAN FRUITS (Classic Botany Print Style) --- */}
        {/* Hanging stem 1 */}
        <path d="M 350,153 C 345,190 320,220 310,250" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Pecan Nut 1 (Shelled botanical form with distinct ridges) */}
        <g transform="translate(310, 250) rotate(-15) scale(1.1)">
          {/* Outer pod/husk wrapper */}
          <path
            d="M -15,0 C -35,20 -25,50 0,65 C 25,50 35,20 15,0 C 10,-8 -10,-8 -15,0 Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          {/* Nut shell lines detailing the ridges of a pecan seed */}
          <path d="M 0,3 C -8,20 -10,45 0,63" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 0,3 C 8,20 10,45 0,63" stroke="currentColor" strokeWidth="1.5" />
          <path d="M -5,5 C -15,25 -5,55 -1,60" stroke="currentColor" strokeWidth="1" />
          <path d="M 5,5 C 15,25 5,55 1,60" stroke="currentColor" strokeWidth="1" />
          {/* Textures */}
          <circle cx="-5" cy="30" r="1.5" fill="currentColor" />
          <circle cx="8" cy="42" r="1.5" fill="currentColor" />
        </g>

        {/* Hanging stem 2 */}
        <path d="M 460,136 C 470,185 490,220 500,245" stroke="currentColor" strokeWidth="2.5" />

        {/* Pecan Nut 2 (Dangling) */}
        <g transform="translate(500, 245) rotate(10) scale(0.95)">
          <path
            d="M -15,0 C -35,20 -25,50 0,65 C 25,50 35,20 15,0 C 10,-8 -10,-8 -15,0 Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path d="M 0,3 C -8,20 -10,45 0,63" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 0,3 C 8,20 10,45 0,63" stroke="currentColor" strokeWidth="1.5" />
          <path d="M -5,5 C -15,25 -5,55 -1,60" stroke="currentColor" strokeWidth="1" />
          <path d="M 5,5 C 15,25 5,55 1,60" stroke="currentColor" strokeWidth="1" />
          <circle cx="-7" cy="22" r="1" fill="currentColor" />
          <circle cx="6" cy="35" r="1" fill="currentColor" />
        </g>


        {/* --- LEAF GROUP 3 (Right Outer) --- */}
        {/* Leaf 3A */}
        <path
          d="M 540,118 C 550,60 610,40 660,65 C 610,75 570,100 540,118 Z"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M 540,118 C 570,95 610,80 660,65" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />

        {/* Leaf 3B (Slightly dropping) */}
        <path
          d="M 610,135 C 640,95 700,90 730,120 C 680,130 640,135 610,135 Z"
          fill="currentColor"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path d="M 610,135 C 640,120 680,120 730,120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />

        {/* Detailed tiny leaf buds along the twig */}
        <circle cx="130" cy="148" r="4.5" fill="currentColor" />
        <circle cx="280" cy="151" r="5" fill="currentColor" />
        <circle cx="410" cy="142" r="4.5" fill="currentColor" />
      </svg>
    </div>
  );
}
