import React, { useState } from 'react';
import { Instagram, Eye, ArrowLeft, ArrowRight, X, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  subject: string;
}

export default function InstagramGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Exact subjects depicted in the real Pecan Square Cafe screenshot #1:
  const posts: InstagramPost[] = [
    {
      id: "p1",
      imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800", // Plated gnocchi / cooked pasta bowl
      caption: "Our signature Spring Vegetable Fritters & gold-seared Gnocchi with local butter herbs. Pair with Citrine Spritz or Negroni Blanco. 🌿✨ #SpringAtPSC #AustinEats",
      likes: "214",
      comments: "18",
      subject: "Savory Gnocchi Bowl"
    },
    {
      id: "p2",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", // Outdoor / Indoor table of people enjoying dinner
      caption: "An afternoon well spent. Unhurried garden dining under the shade of our West 6th Street courtyard oak canopy. 🍷🌳 #MMLHospitality #PecanSquareCafe",
      likes: "489",
      comments: "31",
      subject: "Courtyard Dining Scene"
    },
    {
      id: "p3",
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", // Wood fired chili pizza
      caption: "Straight from our brick wood oven: Spring Onion Pizza toasted with fresh buffalo mozzarella, charred spring greens, garlic butter oil. 🍕🔥 #WoodFired",
      likes: "342",
      comments: "12",
      subject: "Spring Onion Pizza"
    },
    {
      id: "p4",
      imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800", // Warmly lit facade at sunset/crepuscular twilight
      caption: "Evening glow at Pecan Square Cafe. Drop by for Happy Hour cocktails or late-night bites. Valet is active right in front! 🌅🏡 @mmlhospitality",
      likes: "612",
      comments: "45",
      subject: "Twilight Cottage Facade"
    },
    {
      id: "p5",
      imageUrl: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800", // Soup bowl with crunchy croutons and basil
      caption: "Creamy roasted orange Tomato Soup, crowned with extra-virgin olive oil, rustic hand-cut toasted croutons and fresh yard basil. 🥣🌿 #AustinDining",
      likes: "185",
      comments: "9",
      subject: "Rich Tomato Herb Soup"
    }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : posts.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < posts.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 bg-white border-t border-brand-sage/10 relative" id="instagram-section-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center mb-12" id="instagram-info-caption">
          <div className="flex items-center justify-center gap-1.5 text-brand-sage-dark mb-2">
            <Instagram className="w-5 h-5 text-brand-terracotta" />
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold">Follow Our Journey</span>
          </div>
          <h3 className="font-serif text-3xl font-medium text-brand-charcoal">
            Season after Season
          </h3>
          <p className="text-xs font-mono text-brand-sage-dark mt-2.5">
            <a 
              href="https://www.instagram.com/pecansquarecafe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-terracotta transition-colors underline decoration-brand-terracotta/40 text-brand-charcoal font-bold"
            >
              @pecansquarecafe
            </a>
          </p>
        </div>

        {/* Carousel Grid (matches cell composition in Screenshot 1 exactly) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" id="instagram-media-grid">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => setLightboxIndex(idx)}
              className="aspect-square bg-brand-beige rounded-xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 border border-brand-sage/5"
              id={`ig-media-cell-${post.id}`}
            >
              {/* Photo */}
              <img
                src={post.imageUrl}
                alt={post.subject}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover card overlay */}
              <div className="absolute inset-0 bg-brand-terracotta/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <Instagram className="w-6 h-6 text-brand-gold animate-bounce mb-2" />
                <span className="text-[10px] font-mono uppercase tracking-wider block font-bold mb-1">
                  View Story
                </span>
                <span className="text-xs font-serif italic line-clamp-2 max-w-[150px]">
                  "{post.subject}"
                </span>
                
                <div className="flex items-center gap-4 mt-4 text-[10px] font-mono opacity-90 border-t border-white/20 pt-3 w-full justify-center">
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-white" /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5 fill-white" /> {post.comments}</span>
                </div>
              </div>

              {/* Small instagram logo watermark on mobile */}
              <div className="absolute right-3.5 bottom-3.5 bg-white/90 backdrop-blur-md p-1.5 rounded-full text-brand-sage-dark shadow-sm block group-hover:hidden transition-all duration-300">
                <Instagram className="w-3 h-3 text-brand-terracotta" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA button */}
        <div className="flex justify-center mt-12" id="instagram-cta-container">
          <a
            href="https://www.instagram.com/pecansquarecafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-terracotta hover:bg-brand-terracotta-dark text-white font-mono text-xs tracking-wider font-bold transition-all shadow-md hover:shadow-lg"
            id="instagram-social-cta"
          >
            <Instagram className="w-4 h-4 text-brand-gold" />
            <span>Follow Us on Instagram</span>
          </a>
        </div>

        {/* Full Interactive Lightbox */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
            id="ig-lightbox-overlay"
          >
            {/* Close */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10"
              id="lightbox-close-button"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider window */}
            <div 
              className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
              id="ig-lightbox-frame"
            >
              {/* Media Part */}
              <div className="flex-1 bg-[#1A1A1A] relative flex items-center justify-center min-h-[300px] md:min-h-[450px]">
                {/* Arrow navigation inside lightbox */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full transition-colors z-20"
                  id="lightbox-prev"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <img 
                  src={posts[lightboxIndex].imageUrl} 
                  alt={posts[lightboxIndex].subject}
                  className="max-h-[80vh] w-full h-full object-cover"
                />

                <button 
                  onClick={handleNext}
                  className="absolute right-4 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full transition-colors z-20"
                  id="lightbox-next"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Info Part */}
              <div className="w-full md:w-[350px] p-6 flex flex-col justify-between bg-[#FDFBF7]" id="ig-lightbox-details">
                <div className="space-y-4">
                  {/* Account detail */}
                  <div className="flex items-center gap-3 border-b border-brand-sage/10 pb-4">
                    <img 
                      src="https://pecansquarecafe.com/wp-content/uploads/2022/02/footer-icon.png" 
                      alt="Pecan Square Icon" 
                      className="w-10 h-10 object-contain bg-brand-terracotta rounded-full p-1.5"
                    />
                    <div>
                      <h4 className="text-xs font-mono font-bold text-brand-charcoal leading-none">Pecan Square Café</h4>
                      <span className="text-[10px] text-brand-sage-dark font-mono">Austin, Texas</span>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="text-xs leading-relaxed text-brand-charcoal/90 font-sans whitespace-pre-line max-h-[220px] overflow-y-auto pr-1">
                    {posts[lightboxIndex].caption}
                  </p>
                </div>

                <div className="border-t border-brand-sage/15 pt-4 mt-6">
                  <div className="flex items-center gap-2 text-xs font-mono mb-3 text-brand-charcoal">
                    <Heart className="w-4 h-4 text-brand-terracotta fill-brand-terracotta" />
                    <span>Liked by <strong>{posts[lightboxIndex].likes}</strong> people</span>
                  </div>

                  <a 
                    href="https://www.instagram.com/pecansquarecafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-[10px] font-mono uppercase bg-brand-terracotta hover:bg-brand-terracotta-dark text-white py-3 rounded-lg block font-bold transition-all"
                  >
                    View Post on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
