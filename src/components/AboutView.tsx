import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles, MapPin, Clock, CheckCircle } from 'lucide-react';
import { STORE_INFO, HERO_BANNER_IMAGE } from '../data';

export const AboutView: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const coreAmnities = [
    "Centrally Air-Conditioned Showroom",
    "Spacious Aisles with Velvet Lounges",
    "Private Trial Vaults for Bridal Wear",
    "Complimentary Soft Styling Assistance",
    "Hassle-free Exchanges & Custom Alterations",
    "Fully Wheelchair-Accessible Elevators",
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 pb-20 text-zinc-100"
    >
      
      {/* Header Banner */}
      <div id="about-header" className="text-center max-w-3xl mx-auto mt-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Our Legacy</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
          Where Style Meets Heritage
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
          Discover the retail legacy of Roopam Shopping Mall, Raver's premier shopping destination designed for elite families of Maharashtra.
        </p>
        <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Main Narrative Split Screen */}
      <section id="about-legacy-split" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Decorative Visual Image */}
        <motion.div 
          className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl h-[450px] border border-white/10"
          variants={itemVariants}
        >
          <img
            src={HERO_BANNER_IMAGE}
            alt="Roopam Mall Grand Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-obsidian-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl text-white">
            <span className="text-gold-400 font-mono text-xs uppercase tracking-widest block mb-1">Established Standard</span>
            <p className="font-serif text-lg font-bold">Serving Raver and Jalgaon District Families since years.</p>
          </div>
        </motion.div>

        {/* Right: Narrative Text */}
        <motion.div className="lg:col-span-7 space-y-6 text-left" variants={itemVariants}>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            The Family Shopping Destination
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed font-light">
            {STORE_INFO.aboutFull}
          </p>
          <p className="text-zinc-300 text-base leading-relaxed font-light">
            We source our fabrics directly from traditional weavers in Banaras, Kanchipuram, and Surat, ensuring every threads reflects genuine Indian artistry. At Roopam, you are not merely a customer; you are an honored guest. Our team takes deep pride in styling your special occasions and everyday wardrobes.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400 block">50k+</span>
              <span className="text-xs font-mono uppercase text-zinc-400">Happy Shoppers Served</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400 block">100%</span>
              <span className="text-xs font-mono uppercase text-zinc-400">Curated Quality Checks</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Luxury Amenities Grid */}
      <section id="about-amenities" className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Modern Shopping Sanctuary</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Roopam Store Advantages</h3>
          <div className="w-10 h-[1px] bg-gold-400 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreAmnities.map((item, index) => (
            <div
              id={`amenity-item-${index}`}
              key={index}
              className="flex items-center space-x-3 bg-white/[0.03] p-5 rounded-2xl border border-white/5 shadow-sm hover:border-gold-400/25 transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
              <span className="text-sm text-zinc-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Guidelines & Hours */}
      <section id="about-operations" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center hover:border-gold-400/20 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 mb-6 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-xl font-bold text-white mb-2">Operational Hours</h4>
          <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
            Visiting us is easy. We operate daily with safe guidelines.
          </p>
          <span className="px-4 py-1.5 rounded-full bg-gold-400/10 text-gold-400 text-xs font-mono font-bold uppercase tracking-wider">
            {STORE_INFO.hours}
          </span>
        </div>

        <div className="glass-panel border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center hover:border-gold-400/20 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-red-400/10 flex items-center justify-center text-red-400 mb-6 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-xl font-bold text-white mb-2">Weekly Holiday</h4>
          <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
            Kindly note our weekly holiday to avoid scheduling overlaps.
          </p>
          <span className="px-4 py-1.5 rounded-full bg-red-400/10 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
            Wednesday Closed
          </span>
        </div>

        <div className="glass-panel border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center hover:border-gold-400/20 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-6 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <h4 className="font-serif text-xl font-bold text-white mb-2">Our Presence</h4>
          <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
            Easily accessible via local public transport at Raver.
          </p>
          <span className="px-4 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            Station Road, Raver
          </span>
        </div>
      </section>

    </motion.div>
  );
};
