import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, ArrowRight, Star, Quote, Award, Sparkles, Clock, MapPin } from 'lucide-react';
import { PRODUCTS, COLLECTIONS, TESTIMONIALS, LUXURY_BRANDS, STORE_INFO, HERO_BANNER_IMAGE } from '../data';
import { Product } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentPage }) => {
  // Take 3 high-rated best sellers
  const featuredProducts: Product[] = PRODUCTS.filter(p => p.isBestSeller).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-24 pb-16"
    >
      
      {/* 1. HERO BANNER SECTION WITH GLASSMORPHISM OVERLAY */}
      <section id="hero-section" className="relative h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Scale-up animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        >
          <img
            src={HERO_BANNER_IMAGE}
            alt="Roopam Shopping Mall Premium Interior"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Layered luxury gold and dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/85 via-obsidian-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian-950/30" />
        </motion.div>

        {/* Content Panel */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <div className="max-w-2xl">
            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-gold-400/25 border border-gold-300/40 backdrop-blur-md px-4 py-2 rounded-full text-gold-300 mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Raver's Finest Luxury Retail</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-none"
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
                Fashion Signature
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-8 max-w-xl"
            >
              Enter a world of curated style and impeccable elegance. Roopam Shopping Mall brings you the finest selection of hand-embroidered wedding wear, fine silken drapes, and modern daily ensembles for the whole family.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                id="hero-explore"
                onClick={() => {
                  setCurrentPage('collections');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 hover:from-gold-400 hover:to-gold-300 font-medium tracking-wide transition-all duration-300 shadow-lg shadow-gold-500/20 hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero-contact"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full border border-white/20 hover:border-gold-400 text-white hover:text-gold-300 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 font-medium tracking-wide cursor-pointer"
              >
                Find Store
              </button>
            </motion.div>
          </div>
        </div>

        {/* Quick coordinates panel - Floating Glassmorphic bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 py-6 bg-gradient-to-t from-obsidian-950 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-white text-sm sm:divide-x sm:divide-white/10">
              <div className="flex items-center space-x-3.5 md:px-4">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Location</p>
                  <p className="font-medium text-gray-100">Station Road, Raver, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center space-x-3.5 md:px-6">
                <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Business Hours</p>
                  <p className="font-medium text-gray-100">{STORE_INFO.hours} (Wed Closed)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3.5 md:px-6">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-mono">Phone Helpline</p>
                  <p className="font-medium text-gray-100">{STORE_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS SECTION */}
      <section id="values-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            className="glass-panel hover:border-gold-400/40 rounded-3xl p-8 shadow-lg hover:shadow-gold-400/5 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Impeccable Quality</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Every garment in our catalog is inspected for thread density, border accuracy, and stitching finish to guarantee unmatched excellence.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="glass-panel hover:border-gold-400/40 rounded-3xl p-8 shadow-lg hover:shadow-gold-400/5 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Exquisite Designs</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Curated by fashion editors, our clothing patterns celebrate traditional Indian craftsmanship blended with contemporary silhouettes.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="glass-panel hover:border-gold-400/40 rounded-3xl p-8 shadow-lg hover:shadow-gold-400/5 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-gold-400/10 flex items-center justify-center text-gold-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">Personalized Service</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Enjoy tailored styling consultation and specialized in-house measurements to ensure a flawless custom fit for your festive events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CURATED COLLECTIONS DISPLAY */}
      <section id="curated-collections" className="bg-white/[0.02] py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Our Pillars of Craft</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Curated Masterpieces
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COLLECTIONS.map((col, index) => (
              <motion.div
                id={`col-card-${col.id}`}
                key={col.id}
                variants={itemVariants}
                onClick={() => {
                  if (col.link === 'men') setCurrentPage('mens-fashion');
                  else if (col.link === 'women') setCurrentPage('womens-fashion');
                  else setCurrentPage('kids-wear');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/5 hover:border-gold-400/30"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Visual Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-900/40 to-transparent transition-all duration-500 group-hover:via-obsidian-900/50" />
                
                {/* Card Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="text-xs font-mono text-gold-300 uppercase tracking-widest block mb-1">
                    {col.count}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-2 text-white group-hover:text-gold-200 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {col.subtitle}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-xs font-medium text-gold-400 group-hover:text-white transition-colors">
                    <span>Explore Department</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (BEST SELLERS) */}
      <section id="featured-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Selected for distinction</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-none">
              Featured Attire
            </h2>
          </div>
          <button
            id="view-all-products"
            onClick={() => {
              setCurrentPage('collections');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors cursor-pointer"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              id={`featured-prod-${product.id}`}
              key={product.id}
              variants={itemVariants}
              onClick={() => {
                if (product.category === 'men') setCurrentPage('mens-fashion');
                else if (product.category === 'women') setCurrentPage('womens-fashion');
                else setCurrentPage('kids-wear');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-[#111]/50 rounded-3xl border border-white/5 overflow-hidden shadow-lg hover:shadow-gold-400/5 hover:border-gold-400/20 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              {/* Product Image Stage */}
              <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Labels */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-gold-400 text-obsidian-950 text-[10px] uppercase font-mono tracking-wider font-bold px-3 py-1 rounded-full shadow-sm">
                    New Arrival
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-4 right-4 bg-obsidian-950 text-gold-300 border border-gold-400/20 text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Product Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gold-400 uppercase tracking-widest mb-2">
                    <span>{product.category}'s wear</span>
                    <div className="flex items-center space-x-1 text-gold-400">
                      <Star className="w-3.5 h-3.5 fill-current text-gold-400" />
                      <span className="font-medium text-zinc-300">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug group-hover:text-gold-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between">
                  <div>
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-500 line-through mr-2">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-bold text-white font-serif">
                      {product.price}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-obsidian-950 group-hover:border-gold-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. BRAND BADGES (LUXURY SCROLL) */}
      <section id="brands-section" className="bg-obsidian-950 py-16 text-white border-y border-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono text-gold-400 uppercase tracking-widest mb-10">Premium Labels Available At Roopam</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-85">
            {LUXURY_BRANDS.map((brand, index) => (
              <div
                id={`brand-badge-${index}`}
                key={index}
                className="px-6 py-4 rounded-xl border border-white/5 hover:border-gold-400/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 text-center flex items-center justify-center"
              >
                <span className="font-serif tracking-[0.2em] text-sm sm:text-base font-bold text-zinc-200">
                  {brand.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Verified Patron Reviews</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Loved By Families
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              id={`testimonial-${testimonial.id}`}
              key={testimonial.id}
              className="glass-panel border border-white/5 rounded-3xl p-8 relative flex flex-col justify-between hover:border-gold-400/20 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-400/10 shrink-0" />
              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 text-gold-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-gold-400" />
                  ))}
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-4">
                <h4 className="font-serif text-base font-bold text-white">
                  {testimonial.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-zinc-400 mt-1 font-mono">
                  <span>{testimonial.location}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA OFFER BOARD BANNER */}
      <section id="cta-offers-board" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-obsidian-950 border border-gold-400/20 shadow-xl py-12 px-6 sm:px-12 text-center">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-[0.2em] block">Exclusive Shopping Privileges</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Unlock Special Offers & Bridal Packaging Discounts
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              Plan your visit today and experience premium family fashion tailored precisely for you. Download exclusive coupon codes online!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                id="cta-go-offers"
                onClick={() => {
                  setCurrentPage('offers');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-[#C5A059] text-[#0A0A0A] font-semibold tracking-wide hover:bg-gold-300 transition-all cursor-pointer text-xs uppercase"
              >
                View Coupon Codes
              </button>
              <button
                id="cta-go-contact"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full border border-white/10 hover:border-gold-400 text-white hover:text-gold-300 font-semibold transition-all cursor-pointer text-xs uppercase"
              >
                Contact Stylist
              </button>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
