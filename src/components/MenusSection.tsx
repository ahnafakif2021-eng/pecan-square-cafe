import React, { useState } from 'react';
import { Sparkles, Soup, RotateCcw, Filter, Eye } from 'lucide-react';
import { MenuItem } from '../types';
import { MENUS_DATA } from '../data/menusData';

export default function MenusSection() {
  const [activeCategory, setActiveCategory] = useState<'midday' | 'allday' | 'brunch' | 'wine' | 'dessert'>('allday');
  const [allergenFilter, setAllergenFilter] = useState<'ALL' | 'V' | 'VE' | 'GF' | 'DF'>('ALL');
  
  // Tab selections
  const categoriesList = [
    { key: 'midday', label: 'Midday' },
    { key: 'allday', label: 'All Day' },
    { key: 'brunch', label: 'Brunch' },
    { key: 'wine', label: 'Wine List' },
    { key: 'dessert', label: 'Dessert' }
  ];

  // Filtering based on tab selection + dietary buttons
  const filteredMenuItems = MENUS_DATA.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (allergenFilter === 'ALL') return true;
    return item.tags?.includes(allergenFilter);
  });

  // Unique descriptions of current menus for editorial styling
  const categoryHeaderBlurb = {
    midday: 'Light, crisp, and wood-stove fueled midday meals designed for refreshing business lunches or unhurried neighborhood meetings in Austin.',
    allday: 'Our main dining showcase. Bold wood-fired pizzas, roasted heritage meats, and local coastal greens curated daily by our culinary director.',
    brunch: 'A celebratory weekend affair featuring classic egg specialities, our signature burger, wood-fired morning pizzas, and refreshing citrine spritzes.',
    wine: 'A curated list of hand-shaken garden botanical cocktails, local Texas Hill Country red varietals, and crisp imported white wines.',
    dessert: 'Sweet artisan finishes including our classic pecan square caramel tarts and seasonal fruit panna cottas to complete your dining experience.'
  };

  const getFullTagName = (tag: 'V' | 'VE' | 'GF' | 'DF' | 'N') => {
    switch(tag) {
      case 'V': return 'Vegetarian';
      case 'VE': return 'Vegan';
      case 'GF': return 'Gluten Free';
      case 'DF': return 'Dairy Free';
      case 'N': return 'Contains Nuts';
    }
  };

  return (
    <section className="py-24 bg-[#FEFDFB] border-t border-brand-sage/10 relative" id="menus-section-root">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="menus-heading-panel">
          <span className="text-xs uppercase font-mono tracking-widest font-bold text-brand-terracotta">
            Our Spring Menus
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brand-charcoal mt-2 leading-tight">
            Creative Seasonal Cooking
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4" />
          <p className="text-sm font-sans text-brand-sage-dark max-w-xl mx-auto">
            We cook with the wood oven, sourcing local Texas ingredients to match the lively spirit of the Lone Star State. Explore our active spring selections below.
          </p>
        </div>

        {/* Categories Tab Selector (Matches design of buttons in Screenshot #1 but elevated) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8" id="menu-tabs-navigator">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key as any);
                  setAllergenFilter('ALL'); // Reset allergy filter on category change
                }}
                className={`py-3 px-8 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'bg-brand-terracotta border-brand-terracotta text-white font-bold shadow-lg shadow-brand-terracotta/10 translate-y-[-1px]'
                    : 'bg-white border-brand-sage/20 text-brand-charcoal hover:bg-[#FAF6F0] hover:border-brand-sage'
                }`}
                id={`menu-nav-btn-${cat.key}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dietary helper Filter Pill bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 py-3 bg-[#FAF6F0] border border-brand-sage/10 rounded-xl max-w-2xl mx-auto px-4" id="dietary-allergen-filters">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-sage-dark flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-brand-terracotta" /> Filter Cuisine:
          </span>
          
          <button
            onClick={() => setAllergenFilter('ALL')}
            className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full transition-all ${
              allergenFilter === 'ALL'
                ? 'bg-brand-charcoal text-white font-bold'
                : 'hover:bg-brand-sage/10 text-brand-charcoal'
            }`}
          >
            All Items
          </button>

          {['V', 'VE', 'GF', 'DF'].map((tagKey) => {
            const isActive = allergenFilter === tagKey;
            return (
              <button
                key={tagKey}
                onClick={() => setAllergenFilter(tagKey as any)}
                className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full border transition-all ${
                  isActive
                    ? 'bg-brand-terracotta border-brand-terracotta text-white font-semibold'
                    : 'border-brand-sage/10 hover:bg-brand-sage/5 text-brand-sage-dark'
                }`}
              >
                {getFullTagName(tagKey as any)}
              </button>
            );
          })}
        </div>

        {/* Interactive Menu Items Container with Dynamic Grid */}
        <div className="space-y-4 max-w-4xl mx-auto" id="menu-items-grid-container">
          
          {/* Active Category Blurb */}
          <div className="text-center italic font-serif text-brand-sage-dark leading-relaxed text-sm max-w-2xl mx-auto mb-10 pb-6 border-b border-brand-sage/10">
            "{categoryHeaderBlurb[activeCategory]}"
          </div>

          {filteredMenuItems.length === 0 ? (
            <div className="py-16 text-center border-2 border-dashed border-brand-sage/20 rounded-2xl bg-[#FAF6F0]" id="menu-empty-state">
              <Soup className="w-10 h-10 mx-auto text-brand-sage-dark opacity-40 animate-pulse" />
              <h4 className="font-serif text-lg font-bold text-brand-charcoal mt-4">No matching dishes</h4>
              <p className="text-xs text-brand-sage-dark font-mono mt-1">There are no dishes matching this specific allergen filter in this tab.</p>
              <button 
                onClick={() => setAllergenFilter('ALL')}
                className="mt-4 px-4 py-2 bg-brand-charcoal text-white rounded text-xs font-mono font-medium hover:bg-black/90 flex items-center gap-1 mx-auto"
              >
                <RotateCcw className="w-3 h-3" /> Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" id="active-menu-grid">
              {filteredMenuItems.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="group flex flex-col justify-between border-b border-dashed border-brand-sage/15 pb-6 hover:border-brand-terracotta/35 transition-colors duration-300"
                  id={`menu-item-${item.id}`}
                >
                  <div>
                    {/* Item title line */}
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif font-bold text-xl text-brand-charcoal tracking-wide group-hover:text-brand-terracotta transition-colors duration-300">
                          {item.name}
                        </h3>
                        {/* Tags list */}
                        {item.tags && item.tags.map(tag => (
                          <span 
                            key={tag} 
                            title={getFullTagName(tag)}
                            className="bg-brand-sage/10 text-brand-sage-dark text-[8px] font-mono font-bold px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-sm font-semibold text-brand-terracotta leading-none">
                        {item.price}
                      </span>
                    </div>

                    {/* Item Description */}
                    <p className="text-xs text-brand-sage-dark/90 leading-relaxed font-sans mb-3 pr-4 group-hover:text-brand-charcoal transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Sommelier / Cocktail Pairing Recommendation inside the menu */}
                  {item.pairing && (
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-gold bg-brand-gold/5 border border-brand-gold/15 py-1 px-2.5 rounded max-w-max">
                      <Sparkles className="w-3 h-3" />
                      <span>Perfect match: <strong className="font-semibold underline select-none">{item.pairing}</strong></span>
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Spring Sourced Footer Tagline */}
        <div className="mt-16 text-center bg-brand-sage/5 p-6 rounded-2xl border border-brand-sage/10 max-w-2xl mx-auto" id="allergen-disclaimer">
          <p className="text-[10px] font-mono text-brand-sage-dark uppercase tracking-wider font-semibold">
            🌱 Dietary Legend:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2.5 text-[10px] text-brand-sage-dark font-mono">
            <span><strong>V</strong> - Vegetarian</span>
            <span><strong>VE</strong> - Vegan</span>
            <span><strong>GF</strong> - Gluten Free</span>
            <span><strong>DF</strong> - Dairy Free</span>
          </div>
          <p className="text-[10px] text-brand-sage-dark/70 mt-3 italic leading-relaxed">
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
        </div>

      </div>
    </section>
  );
}
