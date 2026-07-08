import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, ArrowUpDown, Star, Grid, Tag, Sparkles } from 'lucide-react';
import { PRODUCTS, COLLECTIONS } from '../data';
import { Product } from '../types';

interface CollectionsViewProps {
  setCurrentPage: (page: string) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'men' | 'women' | 'kids'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'priceAsc' | 'priceDesc'>('rating');

  // Convert Indian prices to actual numbers for sorting
  const getNumericPrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''));
  };

  // Filter & Sort Products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'priceAsc') {
      return getNumericPrice(a.price) - getNumericPrice(b.price);
    } else {
      return getNumericPrice(b.price) - getNumericPrice(a.price);
    }
  });

  const handleNavToDept = (link: string) => {
    if (link === 'men') setCurrentPage('mens-fashion');
    else if (link === 'women') setCurrentPage('womens-fashion');
    else setCurrentPage('kids-wear');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-20 text-zinc-100">
      
      {/* Header */}
      <div id="collections-header" className="text-center max-w-2xl mx-auto mt-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Master Catalog</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
          The Signature Vault
        </h1>
        <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
          Browse our complete selection of luxury clothing. Filter by department or search for your custom festive needs at Roopam Mall.
        </p>
        <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Signature Collections (Department links) */}
      <section id="collections-pillars" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLLECTIONS.map((col) => (
          <div
            id={`pillar-card-${col.id}`}
            key={col.id}
            onClick={() => handleNavToDept(col.link)}
            className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-white/5 hover:border-gold-400/20"
          >
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-left">
              <span className="text-[10px] font-mono text-gold-300 tracking-wider block mb-1">DEPARTMENT</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight group-hover:text-gold-200 transition-colors">
                {col.title}
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1 mb-3 group-hover:opacity-100 opacity-80 transition-all">
                {col.count}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Catalog Filters Bar */}
      <section id="catalog-controls" className="glass-panel border border-white/5 rounded-3xl p-6 md:p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
          
          {/* Search Box */}
          <div className="relative w-full lg:max-w-md">
            <input
              id="product-search"
              type="text"
              placeholder="Search products, materials, styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-full pl-12 pr-6 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 focus:bg-white/[0.05] transition-all"
            />
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
          </div>

          {/* Buttons to Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            <button
              id="filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gold-400 text-obsidian-950 shadow-md shadow-gold-500/15'
                  : 'bg-white/[0.02] border border-white/10 text-zinc-300 hover:border-gold-400'
              }`}
            >
              All Items
            </button>
            <button
              id="filter-men"
              onClick={() => setSelectedCategory('men')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'men'
                  ? 'bg-gold-400 text-obsidian-950 shadow-md shadow-gold-500/15'
                  : 'bg-white/[0.02] border border-white/10 text-zinc-300 hover:border-gold-400'
              }`}
            >
              Men's Wear
            </button>
            <button
              id="filter-women"
              onClick={() => setSelectedCategory('women')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'women'
                  ? 'bg-gold-400 text-obsidian-950 shadow-md shadow-gold-500/15'
                  : 'bg-white/[0.02] border border-white/10 text-zinc-300 hover:border-gold-400'
              }`}
            >
              Women's Wear
            </button>
            <button
              id="filter-kids"
              onClick={() => setSelectedCategory('kids')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'kids'
                  ? 'bg-gold-400 text-obsidian-950 shadow-md shadow-gold-500/15'
                  : 'bg-white/[0.02] border border-white/10 text-zinc-300 hover:border-gold-400'
              }`}
            >
              Kids Wear
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-3 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-white/5">
            <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
            <select
              id="product-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#0f0f0f] border border-white/10 rounded-full px-4 py-2 text-xs font-medium text-zinc-300 focus:outline-none focus:border-gold-400 cursor-pointer"
            >
              <option value="rating">Sort: Popularity / Rating</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>

        </div>
      </section>

      {/* Main Results Grid */}
      <section id="catalog-grid">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.01] border border-dashed border-white/10 rounded-3xl">
            <SlidersHorizontal className="w-12 h-12 text-gold-400/40 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-white">No garments matched</h3>
            <p className="text-zinc-400 text-sm mt-1 max-w-sm mx-auto leading-relaxed">
              We couldn't find items matching your search criteria. Try adjusting the search query or category filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('rating');
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-gold-400 text-obsidian-950 font-medium text-xs tracking-wider uppercase cursor-pointer hover:bg-gold-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                id={`cat-prod-${product.id}`}
                key={product.id}
                onClick={() => handleNavToDept(product.category)}
                className="group bg-[#111]/50 rounded-2xl border border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Image panel */}
                <div className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-gold-400 text-obsidian-950 text-[10px] uppercase font-mono tracking-wider font-bold px-2.5 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="absolute top-3 right-3 bg-obsidian-950 text-gold-300 text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full border border-gold-400/20">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Content info */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-gold-400 uppercase tracking-widest mb-1">
                      <span>{product.category}'s wear</span>
                      <div className="flex items-center space-x-1 text-gold-400">
                        <Star className="w-3 h-3 fill-current text-gold-400" />
                        <span className="font-medium text-zinc-300">{product.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-400 text-xs line-clamp-2 mt-1 leading-relaxed font-light">
                      {product.description}
                    </p>

                    {/* Sizes selection preview */}
                    <div className="flex flex-wrap gap-1 mt-4">
                      {product.sizes.map((size) => (
                        <span key={size} className="text-[10px] font-mono border border-white/5 px-2 py-0.5 rounded text-zinc-400 bg-white/[0.02]">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between shrink-0">
                    <div>
                      {product.originalPrice && (
                        <span className="text-[10px] text-zinc-500 line-through mr-1.5">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-base font-bold text-white font-serif">
                        {product.price}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-semibold group-hover:text-gold-300 transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
