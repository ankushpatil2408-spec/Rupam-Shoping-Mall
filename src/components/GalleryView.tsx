import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image, SlidersHorizontal, Eye, X, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export const GalleryView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'store' | 'fashion' | 'festive' | 'display'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return selectedFilter === 'all' || item.category === selectedFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Interiors' },
    { id: 'display', label: 'Apparel Displays' },
    { id: 'festive', label: 'Events & launches' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-20 text-zinc-100">
      
      {/* Header */}
      <div id="gallery-header" className="text-center max-w-2xl mx-auto mt-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Visual Tour</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
          Roopam Lookbook
        </h1>
        <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
          Take a sensory tour of Maharashtra’s most delightful fashion shopping destination. Explore our luxurious showrooms and festive events.
        </p>
        <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Filter Tabs */}
      <section id="gallery-filters" className="flex flex-wrap items-center justify-center gap-2">
        {filterTabs.map((tab) => (
          <button
            id={`gallery-filter-${tab.id}`}
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id as any)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              selectedFilter === tab.id
                ? 'bg-gold-400 text-obsidian-950 shadow-md shadow-gold-500/15'
                : 'bg-white/[0.02] border border-white/10 text-zinc-300 hover:border-gold-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section id="gallery-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              id={`gallery-item-card-${item.id}`}
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-white/5 hover:border-gold-400/20"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-obsidian-950/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 text-left">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-obsidian-950 mb-3">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-zinc-300 text-xs font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass background */}
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setActiveLightbox(null)} />
          
          <div className="relative max-w-4xl w-full bg-obsidian-950 border border-gold-400/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row">
            
            {/* Close trigger */}
            <button
              id="lightbox-close"
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-black/60 hover:text-gold-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image side */}
            <div className="w-full md:w-2/3 h-[300px] sm:h-[450px] bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Narrative side */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between text-left text-white bg-gradient-to-br from-obsidian-950 to-obsidian-900">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1.5">
                  Category: {activeLightbox.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 border-b border-gold-500/20 pb-3">
                  {activeLightbox.title}
                </h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {activeLightbox.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gold-500/10 mt-6 flex flex-col space-y-3">
                <span className="text-[10px] font-mono text-gray-400">VISIT US TODAY AT RAVER</span>
                <p className="text-xs text-gold-300 leading-normal">
                  Experience our actual textures, vibrant colors, and VIP alteration support in-store.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
