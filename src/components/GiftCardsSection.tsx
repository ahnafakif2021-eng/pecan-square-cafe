import React, { useState } from 'react';
import { Gift, CreditCard, Sparkles, Send, CheckCircle } from 'lucide-react';
import { GiftCardOrder } from '../types';

export default function GiftCardsSection() {
  const [design, setDesign] = useState<'terracotta' | 'sage' | 'charcoal' | 'gold'>('terracotta');
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [rName, setRName] = useState<string>('');
  const [rEmail, setREmail] = useState<string>('');
  const [sName, setSName] = useState<string>('');
  const [sEmail, setSEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [ordered, setOrdered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const cardDesigns = {
    terracotta: {
      bg: 'bg-gradient-to-br from-brand-terracotta to-brand-terracotta-dark',
      text: 'text-[#FEFDFB]',
      border: 'border-brand-gold/30',
      label: 'Terracotta Classic',
      accent: 'text-brand-gold',
    },
    sage: {
      bg: 'bg-gradient-to-br from-brand-sage to-brand-sage-dark',
      text: 'text-white',
      border: 'border-white/25',
      label: 'Sage Woodlands',
      accent: 'text-[#FAF6F0]'
    },
    charcoal: {
      bg: 'bg-gradient-to-br from-[#2E2E2E] to-brand-charcoal',
      text: 'text-gray-100',
      border: 'border-brand-gold/20',
      label: 'Midnight Jubilee',
      accent: 'text-brand-gold'
    },
    gold: {
      bg: 'bg-gradient-to-br from-[#D4AF37] via-[#C59B27] to-[#996515]',
      text: 'text-[#FEFDFB]',
      border: 'border-white/30',
      label: 'Gilded Grace',
      accent: 'text-[#FAF5EF]'
    }
  };

  const handlePresetAmount = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    const parsed = parseFloat(e.target.value);
    if (!isNaN(parsed)) {
      setAmount(parsed);
    }
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrdered(true);
    }, 1200);
  };

  const currentTheme = cardDesigns[design];

  return (
    <section className="py-24 bg-brand-beige border-y border-brand-sage/10 relative" id="gift-cards-section-root">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="gift-card-intro-heading">
          <div className="flex items-center justify-center gap-2 text-brand-terracotta mb-2">
            <Gift className="w-5 h-5 animate-bounce" />
            <span className="text-xs uppercase font-mono tracking-widest font-bold">
              Give the Gift of Austin Dining
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-brand-charcoal leading-tight">
            Pecan Square Café Gift Cards
          </h2>
          <p className="text-sm text-brand-sage-dark mt-3 leading-relaxed font-sans">
            Delight your family, friends, and colleagues with a premium seasonal cooking experience on West 6th Street. Create a customized digital or physical presentation below.
          </p>
        </div>

        {ordered ? (
          <div className="max-w-xl mx-auto bg-white border border-brand-sage/20 rounded-2xl p-8 shadow-xl text-center animate-scale-in" id="gift-card-receipt">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
              Gift Card Purchase Completed!
            </h3>
            <p className="text-xs font-mono text-brand-sage-dark uppercase tracking-wider mb-6">
              Receipt Reference: #PSC-GC-{Math.floor(1000 + Math.random()*9000)}
            </p>

            <div className="bg-[#FAF6F0] p-4 rounded-xl text-left border border-brand-sage/10 mb-6 font-mono text-xs text-brand-charcoal space-y-2">
              <p><strong>Design:</strong> {currentTheme.label}</p>
              <p><strong>Total Value:</strong> ${amount}</p>
              <p><strong>Recipient:</strong> {rName || 'Value Holder'} ({rEmail || 'Email'})</p>
              <p><strong>Sender:</strong> {sName} ({sEmail})</p>
              {message && <p className="italic text-brand-sage-dark mt-2 border-t border-brand-sage/10 pt-2">"{message}"</p>}
            </div>

            <p className="text-sm text-brand-charcoal/80 mb-6 leading-relaxed">
              An elegant email voucher and digital card containing redemption instructions has been dispatched successfully to {rEmail || 'the recipient'}.
            </p>

            <button
              onClick={() => {
                setOrdered(false);
                setRName('');
                setREmail('');
                setSName('');
                setSEmail('');
                setMessage('');
              }}
              className="py-3 px-8 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-lg text-xs font-mono font-bold transition-all uppercase tracking-wider"
              id="order-another-gc-button"
            >
              Issue Another Gift Card
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="gift-card-generator flex">
            {/* Left side: Live Preview */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24" id="gift-card-display-preview">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-sage-dark flex items-center gap-1.5 justify-center lg:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" /> Live Card Preview
              </span>

              {/* Gift Card Visual */}
              <div 
                className={`w-full aspect-[1.6/1] rounded-2xl p-6 ${currentTheme.bg} ${currentTheme.text} shadow-2xl relative border ${currentTheme.border} transition-all duration-500 overflow-hidden group`}
                id="live-gift-card-canvas"
              >
                {/* Decorative radial gradients inside cards */}
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[#FAF5EF]/5 rounded-full blur-xl" />

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase opacity-75">
                        MML Hospitality Group
                      </span>
                      <h4 className="font-serif text-2xl font-medium tracking-wide mt-1 leading-tight">
                        Pecan Square Café
                      </h4>
                    </div>
                    {/* Brand logo mini representation */}
                    <img 
                      src="https://pecansquarecafe.com/wp-content/uploads/2022/02/footer-icon.png"
                      alt="Brand Seal" 
                      className="w-10 h-10 object-contain brightness-0 invert opacity-90"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Mid content personalized message preview */}
                  <div className="space-y-1 my-3">
                    <p className="text-[10px] font-mono uppercase tracking-wider opacity-60">
                      Exclusive Dining Voucher
                    </p>
                    <p className="text-xs font-serif italic line-clamp-2 leading-relaxed opacity-95">
                      {message ? `"${message}"` : '"Enjoy seasonal cooking in the heart of Austin!"'}
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/10 pt-3">
                    <div>
                      <p className="text-[8px] font-mono uppercase opacity-50">To / From</p>
                      <p className="text-xs font-mono font-semibold truncate max-w-[190px]">
                        {rName || 'Guest'} <span className="opacity-50 text-[10px]">from</span> {sName || 'Friend'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-mono uppercase opacity-50">Balance</p>
                      <p className="text-2xl font-mono font-bold leading-none select-none">
                        ${amount}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back magnetic stripe decor */}
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                  <CreditCard className="w-32 h-32" />
                </div>
              </div>

              {/* Design Selector controls */}
              <div className="bg-white p-5 border border-brand-sage/10 rounded-xl space-y-3" id="gift-card-style-palette">
                <span className="text-xs font-mono font-bold uppercase text-brand-charcoal">
                  Change Signature Palette
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(Object.keys(cardDesigns) as Array<keyof typeof cardDesigns>).map((key) => {
                    const active = design === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setDesign(key)}
                        className={`p-2.5 rounded-lg border text-left flex flex-col items-center gap-1.5 transition-all ${
                          active
                            ? 'border-brand-terracotta bg-brand-terracotta/5 ring-2 ring-brand-terracotta/10'
                            : 'border-brand-sage/10 hover:bg-brand-beige hover:border-brand-sage/30'
                        }`}
                        id={`gc-design-${key}`}
                      >
                        <span className={`w-6 h-6 rounded-full border border-black/10 flex items-center justify-center ${
                          key === 'terracotta' ? 'bg-brand-terracotta' : 
                          key === 'sage' ? 'bg-brand-sage' : 
                          key === 'charcoal' ? 'bg-brand-charcoal' : 'bg-brand-gold'
                        }`} />
                        <span className="text-[9px] font-mono text-center font-medium leading-none">
                          {cardDesigns[key].label.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right side: Interactive Purchase Form */}
            <form onSubmit={handlePurchase} className="lg:col-span-7 bg-white p-8 border border-brand-sage/15 rounded-2xl shadow-lg space-y-6" id="gift-cards-purchase-form">
              {loading ? (
                <div className="py-24 flex flex-col items-center justify-center gap-4" id="gc-loader">
                  <span className="w-12 h-12 border-4 border-brand-terracotta/25 border-t-brand-terracotta rounded-full animate-spin" />
                  <p className="text-xs font-mono uppercase tracking-widest text-brand-sage-dark font-medium">
                    Processing secure order payment...
                  </p>
                </div>
              ) : (
                <>
                  <div className="border-b border-brand-sage/10 pb-4 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                      Gift Card Details
                    </h3>
                    <p className="text-xs text-brand-sage-dark font-mono mt-1">
                      Configure your balance, dispatch targets, and personalized greetings.
                    </p>
                  </div>

                  {/* Card Value select */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wide flex justify-between">
                      <span>Card Amount (USD)</span>
                      <span className="text-brand-terracotta font-serif font-bold font-semibold">${amount}</span>
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {[25, 50, 100, 200, 500].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handlePresetAmount(val)}
                          className={`py-3 text-xs font-mono font-bold border rounded-lg transition-all ${
                            amount === val && customAmount === ''
                              ? 'bg-brand-terracotta border-brand-terracotta text-white'
                              : 'bg-[#FAF6F0] border-brand-sage/15 hover:bg-brand-sage/10 text-brand-charcoal'
                          }`}
                          id={`gc-amount-preset-${val}`}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs font-semibold text-brand-sage-dark">
                        Custom Value: $
                      </span>
                      <input
                        type="number"
                        min="10"
                        max="2000"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Or enter any sum between $10 and $2,000"
                        className="w-full pl-36 pr-4 py-3 bg-[#FAF6F0] border border-brand-sage/20 rounded-lg text-xs font-mono text-brand-charcoal focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/20"
                        id="gc-custom-amount-input"
                      />
                    </div>
                  </div>

                  {/* Grid fields for sender and recipient */}
                  <div className="space-y-4 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-terracotta font-bold block mb-1">
                      Delivery Information
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Recipient info */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-brand-charcoal">
                          Recipient Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={rName}
                          onChange={(e) => setRName(e.target.value)}
                          placeholder="E.g., Charlotte Hill"
                          className="w-full bg-[#FAF6F0] border border-brand-sage/20 rounded-lg p-3 text-xs font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15"
                          id="gc-recipient-name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-brand-charcoal">
                          Recipient Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={rEmail}
                          onChange={(e) => setREmail(e.target.value)}
                          placeholder="charlotte@example.com"
                          className="w-full bg-[#FAF6F0] border border-brand-sage/20 rounded-lg p-3 text-xs font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15"
                          id="gc-recipient-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Sender info */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-brand-charcoal">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={sName}
                          onChange={(e) => setSName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full bg-[#FAF6F0] border border-brand-sage/20 rounded-lg p-3 text-xs font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15"
                          id="gc-sender-name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-brand-charcoal">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={sEmail}
                          onChange={(e) => setSEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full bg-[#FAF6F0] border border-brand-sage/20 rounded-lg p-3 text-xs font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15"
                          id="gc-sender-email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-brand-charcoal">
                      Greeting Message (Optional)
                    </label>
                    <textarea
                      rows={2}
                      maxLength={100}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="E.g., Happy anniversary! Have a fabulous dinner under the Pecan trees."
                      className="w-full bg-[#FAF6F0] border border-brand-sage/20 rounded-lg p-3.5 text-xs font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/15"
                      id="gc-message"
                    />
                    <div className="flex justify-between text-[10px] text-brand-sage-dark font-mono">
                      <span>Card Preview updates live</span>
                      <span>{100 - message.length} chars remaining</span>
                    </div>
                  </div>

                  {/* Submission */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-xl shadow-lg hover:shadow-xl font-serif text-lg font-semibold tracking-wider flex items-center justify-center gap-2 transition-all"
                      id="gc-purchase-submit"
                    >
                      <Send className="w-4 h-4 text-brand-gold animate-pulse" />
                      <span>Purchase Voucher • ${amount}</span>
                    </button>
                    <div className="flex items-center gap-2 justify-center mt-3 text-[10px] font-mono text-brand-sage-dark">
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Secured 256-bit encrypted MML payment transaction.</span>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
