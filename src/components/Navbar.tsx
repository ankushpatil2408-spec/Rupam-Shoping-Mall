import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShoppingBag, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'collections', label: 'Collections' },
    { id: 'mens-fashion', label: "Men's" },
    { id: 'womens-fashion', label: "Women's" },
    { id: 'kids-wear', label: "Kids" },
    { id: 'gallery', label: 'Gallery' },
    { id: 'offers', label: 'Offers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-navbar py-3 shadow-lg'
          : 'bg-[#0a0a0a]/60 backdrop-blur-md py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand area */}
          <div
            id="brand-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-gold-400 text-obsidian-950 shadow-md shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-obsidian-950" />
              <div className="absolute -inset-1 rounded-full border border-gold-400/40 animate-pulse" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white uppercase block leading-none">
                Roopam
              </span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-400 block">
                Shopping Mall
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                  currentPage === item.id
                    ? 'text-gold-400'
                    : 'text-zinc-300 hover:text-gold-400'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Call & WhatsApp CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="cta-call"
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-gold-400/40 text-gold-400 hover:bg-gold-400/10 transition-colors duration-300 text-xs font-medium cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              id="cta-whatsapp"
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/10 transition-all duration-300 text-xs font-medium cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              id="cta-mobile-call"
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-full border border-gold-400/40 text-gold-400 hover:bg-gold-400/10 sm:hidden cursor-pointer"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-300 hover:text-gold-400 hover:bg-white/5 focus:outline-none transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className="fixed top-0 right-0 bottom-0 w-72 max-w-sm bg-obsidian-950 border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                Roopam Mall
              </span>
              <button
                id="mobile-drawer-close"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full border border-white/10 text-zinc-400 hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  id={`nav-mobile-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    currentPage === item.id
                      ? 'bg-gold-400/10 text-gold-400 border-l-4 border-gold-400'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 space-y-3">
            <a
              id="drawer-call"
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-full border border-gold-400/40 text-gold-400 hover:bg-gold-400/10 text-sm font-medium cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 95271 86469</span>
            </a>
            <a
              id="drawer-whatsapp"
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
