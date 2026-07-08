import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Phone, MessageSquare, Sparkles, MapPin, Clock } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { CollectionsView } from './components/CollectionsView';
import { FashionView } from './components/FashionView';
import { GalleryView } from './components/GalleryView';
import { OffersView } from './components/OffersView';
import { ContactView } from './components/ContactView';
import { STORE_INFO } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView />;
      case 'collections':
        return <CollectionsView setCurrentPage={setCurrentPage} />;
      case 'mens-fashion':
        return <FashionView category="men" />;
      case 'womens-fashion':
        return <FashionView category="women" />;
      case 'kids-wear':
        return <FashionView category="kids" />;
      case 'gallery':
        return <GalleryView />;
      case 'offers':
        return <OffersView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="roopam-app-root" className="min-h-screen bg-transparent text-zinc-100 font-sans flex flex-col justify-between selection:bg-gold-400 selection:text-obsidian-950 antialiased">
      
      {/* 1. ANNOUNCEMENT TOP BAR */}
      <div
        id="top-announcement-bar"
        className="bg-obsidian-950 text-white py-2 px-4 text-center text-[10px] sm:text-xs font-mono tracking-wider border-b border-gold-400/20 flex items-center justify-center space-x-2 relative z-50 shrink-0"
      >
        <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse shrink-0" />
        <span className="truncate">
          <strong>Special Festive Sale:</strong> flat 15% off bridal couture and tailor fitting consultation. Visit us at Station Road, Raver.
        </span>
        <span className="hidden md:inline-block text-gold-400 font-semibold">•</span>
        <span className="hidden md:inline-flex items-center space-x-1">
          <Clock className="w-3 h-3 text-gold-400" />
          <span>{STORE_INFO.hours} (Wed Closed)</span>
        </span>
      </div>

      {/* 2. STICKY NAVBAR */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 3. CORE ROUTING MAIN CONTAINER */}
      <main id="main-content-stage" className="flex-grow pt-[84px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. PREMIUM FOOTER */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* 5. FLOATING QUICK-CONTACT CORNER UTILITY */}
      <div id="floating-ctas-panel" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 pointer-events-auto">
        <a
          id="floating-wa"
          href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Roopam Shopping Mall! I would like to query about your premium clothing collections.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300 group cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-14 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>
        <a
          id="floating-call"
          href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 text-obsidian-950 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300 group cursor-pointer"
          title="Call Us Now"
        >
          <Phone className="w-5 h-5 text-obsidian-950" />
          <span className="absolute right-14 bg-gradient-to-tr from-gold-600 to-gold-400 text-obsidian-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Call Store
          </span>
        </a>
      </div>

    </div>
  );
}
