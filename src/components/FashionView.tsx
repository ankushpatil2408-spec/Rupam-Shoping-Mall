import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Check, Award, Heart, ShieldAlert, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { PRODUCTS, STORE_INFO } from '../data';
import { Product } from '../types';

interface FashionViewProps {
  category: 'men' | 'women' | 'kids';
}

export const FashionView: React.FC<FashionViewProps> = ({ category }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', date: '', time: '', notes: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter products for this specific category
  const departmentProducts: Product[] = PRODUCTS.filter(p => p.category === category);

  // Department metadata
  const deptMeta = {
    men: {
      title: "Men's Luxury Fashion",
      tagline: "The Gentleman's Wardrobe",
      description: "From grand wedding sherwanis and imperial bandhgalas to Italian-cut modern blazers, explore our premium catalog crafted to reflect absolute distinction.",
      curatorNote: "Every garment in our men's lounge is selected for premium fabric density and custom tailored structure. We offer complimentary in-house measurements.",
      highlights: [
        { title: "Bespoke Fitting", desc: "Enjoy tailored adjustments and trial-session coordinates." },
        { title: "Fine Silk Collars", desc: "Traditional embroidery lining with soft inside materials." },
        { title: "Raymond Formals", desc: "Premium Raymond material fabric matching available on request." }
      ]
    },
    women: {
      title: "Women's Heritage & Luxury",
      tagline: "The Royal Bridal Vault",
      description: "Step into Raver's absolute finest collection of wedding lehengas, pure Banarasi and Kanjeevaram silk sarees, designer Anarkalis, and modern reception gowns.",
      curatorNote: "Our Bridal and Saree collections are crafted with authentic golden zari and Zardozi work, sourced directly from master weavers across India.",
      highlights: [
        { title: "Bridal Vault Experience", desc: "Private VIP trial suite for brides-to-be and their families." },
        { title: "Authentic Silk Labels", desc: "100% genuine silk certifications provided with every purchase." },
        { title: "Complimentary Accessories", desc: "Receive styling support including designer bags/juttis matching." }
      ]
    },
    kids: {
      title: "Premium Kids Ensemble",
      tagline: "Joyful Festive & Casuals",
      description: "Discover beautiful, festive jacquard sherwanis, layered princess tulle gowns, and dapper mini velvet tuxedos designed to keep your little ones smiling.",
      curatorNote: "We prioritize hyper-soft, breathable fabrics with anti-scratch lining, so your children stay comfortable and active throughout the celebratory evenings.",
      highlights: [
        { title: "Anti-Scratch Lining", desc: "All inner layers are lined with premium, soft-washed organic cotton." },
        { title: "Playful Trial Deck", desc: "Our kids trying room features interactive games to keep them happy." },
        { title: "Festive Durability", desc: "Specially reinforced double seams to withstand active movements." }
      ]
    }
  };

  const meta = deptMeta[category];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.phone && bookingForm.date) {
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingForm({ name: '', phone: '', date: '', time: '', notes: '' });
        setBookingSuccess(false);
        setShowBookingModal(false);
      }, 3500);
    }
  };

  // Build WhatsApp pre-filled text for booking a VIP slot
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(`Hello Roopam Mall, I would like to book a VIP Trial Consultation for ${meta.title}.\nName: ${bookingForm.name}\nPhone: ${bookingForm.phone}\nDate: ${bookingForm.date}`);
    return `https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <div className="space-y-24 pb-20 text-zinc-100">
      
      {/* 1. HERO HEADER WITH SPLIT TEXT-IMAGE DESIGN */}
      <section id="dept-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="glass-panel border border-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left shadow-2xl">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gold-400 block">
              {meta.tagline}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
              {meta.title}
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              {meta.description}
            </p>

            <div className="p-5 border-l-2 border-gold-400 bg-white/[0.02] rounded-r-2xl text-xs sm:text-sm text-zinc-300 italic font-light">
              "{meta.curatorNote}"
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="book-consultation"
                onClick={() => setShowBookingModal(true)}
                className="px-6 py-3 rounded-full bg-[#C5A059] text-obsidian-950 hover:bg-gold-300 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md"
              >
                Book VIP Trial Slot
              </button>
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
            {departmentProducts.length > 0 ? (
              <img
                src={departmentProducts[0].image}
                alt={meta.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-[#111] flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-gold-400" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/85 backdrop-blur-md rounded-xl text-center border border-white/5">
              <span className="font-serif text-sm font-bold text-white">Exquisite Designer Fabrics</span>
              <p className="text-[10px] text-zinc-400 font-mono tracking-widest mt-0.5">Sourced from elite Indian weavers</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SPECIFIC HIGHLIGHT PERKS GRID */}
      <section id="dept-perks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meta.highlights.map((h, i) => (
            <div
              id={`perk-card-${category}-${i}`}
              key={i}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 shadow-sm hover:border-gold-400/20 transition-all text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 mb-4 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">{h.title}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CLOTHING CATALOG GRID */}
      <section id="dept-products-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Our Signature Rack</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Available Designs
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentProducts.map((product) => (
            <div
              id={`dept-prod-${product.id}`}
              key={product.id}
              className="group bg-[#111]/50 rounded-2xl border border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full text-left hover:border-gold-400/20"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-gold-400 text-obsidian-950 text-[10px] uppercase font-mono tracking-wider font-bold px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-3 right-3 bg-obsidian-950 text-gold-300 text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full border border-gold-400/20">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Product Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gold-400 uppercase tracking-widest mb-2">
                    <span>{product.category}'s wear</span>
                    <div className="flex items-center space-x-1 text-gold-400">
                      <Star className="w-3.5 h-3.5 fill-current text-gold-400" />
                      <span className="font-medium text-zinc-300">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {product.description}
                  </p>

                  <div className="mt-4">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">Available Sizes</p>
                    <div className="flex flex-wrap gap-1.5">
                      {product.sizes.map((size) => (
                        <span key={size} className="text-xs font-mono border border-white/5 bg-white/[0.02] px-2.5 py-0.5 rounded text-zinc-300 font-medium">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between shrink-0">
                  <div>
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-500 line-through mr-1.5">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-bold text-white font-serif">
                      {product.price}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Roopam Mall, I am interested in purchasing ${product.name} (Price: ${product.price}). Please share more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-500 uppercase tracking-wide cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Order via WA</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL FOR BOOKING TRIAL CONSULTATION */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowBookingModal(false)} />
          
          <div className="relative bg-[#121212] border border-gold-400/30 w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Book VIP Trial Slot</h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
              Skip any wait lines at Roopam. Let our executive prepare a custom-sized wardrobe vault matching your arrival time.
            </p>

            {bookingSuccess ? (
              <div className="space-y-4 py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Slot Booking Initiated!</h4>
                <p className="text-xs text-zinc-400 font-light max-w-xs mx-auto leading-relaxed">
                  Excellent choice. We are transferring you to WhatsApp to instantly confirm your premium scheduling with our store executive.
                </p>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs tracking-wide uppercase mt-4 shadow-md hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="e.g. Anand Patil"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:bg-white/[0.05]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">WhatsApp Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="e.g. +91 95271 86469"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:bg-white/[0.05]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:bg-white/[0.05]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Preferred Time</label>
                    <input
                      type="time"
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Special Notes / Clothing Preferences</label>
                  <textarea
                    rows={2}
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    placeholder="e.g. Bridal Lehenga custom red thread fitting preference"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold-400 focus:bg-white/[0.05] resize-none text-left"
                  />
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="w-1/3 py-2.5 rounded-full border border-white/10 hover:bg-white/[0.05] text-xs font-medium uppercase tracking-wider text-zinc-400 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-2.5 rounded-full bg-[#C5A059] text-obsidian-950 font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-gold-300 cursor-pointer transition-colors"
                  >
                    Schedule Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
