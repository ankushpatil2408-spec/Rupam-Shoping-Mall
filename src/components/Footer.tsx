import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handlePageClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-obsidian-950 text-gray-400 border-t border-gold-400/20">
      
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handlePageClick('home')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-gold-400 text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase block leading-none">
                  Roopam
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block">
                  Shopping Mall
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience fashion like never before. From custom bridal designs to comfortable luxury casuals, we are Raver’s premier family fashion destination.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                id="footer-social-wa"
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                id="footer-social-tel"
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-gold-400 hover:border-gold-400/50 hover:bg-gold-400/10 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Our Legacy (About)' },
                { id: 'collections', label: 'Curated Collections' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'offers', label: 'Exclusive Offers' },
                { id: 'contact', label: 'Contact & Location' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => handlePageClick(link.id)}
                    className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors duration-300 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-400/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold-400">
              Our Collections
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { id: 'mens-fashion', label: "Men's Luxury Wear" },
                { id: 'womens-fashion', label: "Women's Heritage Saree & Lehenga" },
                { id: 'kids-wear', label: "Premium Kids wear" },
                { id: 'collections', label: "Exclusive Festive Looks" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-dept-${link.id}`}
                    onClick={() => handlePageClick(link.id)}
                    className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors duration-300 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-400/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Coordinates */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-gold-400">
              Store Information
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-300">
                  {STORE_INFO.location}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-gold-400 transition-colors">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">{STORE_INFO.hours}</p>
                  <p className="text-xs text-rose-400 font-medium">Wednesday Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Decorative Divider */}
        <div className="border-t border-white/5 my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {currentYear} Roopam Shopping Mall, Raver. All Rights Reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted for true luxury fashion styling in Maharashtra.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
