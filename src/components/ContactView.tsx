import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Send, Check, AlertCircle, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', category: 'General Enquiry', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', phone: '', category: 'General Enquiry', message: '' });
        setIsSubmitted(false);
      }, 4000);
    }
  };

  const categories = [
    'General Enquiry',
    'Bridal & Saree Consultation',
    'Men\'s Bespoke Tailoring',
    'Kids Festive Wear',
    'Bulk Booking / Wholesaling'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-20 text-zinc-100">
      
      {/* Header */}
      <div id="contact-header" className="text-center max-w-2xl mx-auto mt-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Connect with Us</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
          Enquire & Visit
        </h1>
        <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
          Need special tailoring fitting sessions or customized wedding wardrobe styling? Send us a digital letter or drop by our showroom in Raver.
        </p>
        <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Split Layout: Contact Card + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Coordinates Cards */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <h3 className="font-serif text-2xl font-bold text-white">
            Our Location Coordinates
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {/* Address Card */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 flex items-start space-x-4 shadow-sm hover:border-gold-400/20 transition-all">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Showroom Location</p>
                <h4 className="font-serif text-lg font-bold text-white">Roopam Shopping Mall</h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">{STORE_INFO.location}</p>
              </div>
            </div>

            {/* Calling Hotline */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 flex items-start space-x-4 shadow-sm hover:border-gold-400/20 transition-all">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 w-full">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Direct Telephone</p>
                <h4 className="font-serif text-lg font-bold text-white">Customer Care</h4>
                <p className="text-sm text-zinc-300 font-light leading-normal">{STORE_INFO.phone}</p>
                <a
                  id="contact-call-now"
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 mt-2 uppercase tracking-wide cursor-pointer"
                >
                  <span>Dial Hotline Now →</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Chat */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 flex items-start space-x-4 shadow-sm hover:border-gold-400/20 transition-all">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1 w-full">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">WhatsApp Assistance</p>
                <h4 className="font-serif text-lg font-bold text-white">Instant Text Desk</h4>
                <p className="text-sm text-zinc-300 font-light leading-normal">Reach out to us on our digital text platform.</p>
                <a
                  id="contact-wa-now"
                  href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-2 uppercase tracking-wide cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Chat →</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 flex items-start space-x-4 shadow-sm hover:border-gold-400/20 transition-all">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Timetable Rules</p>
                <h4 className="font-serif text-lg font-bold text-white">Operational Hours</h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {STORE_INFO.hours} <br />
                  <span className="text-red-400 font-bold uppercase text-[10px] tracking-wider mt-1 block">Wednesday Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Contact Enquiry Form */}
        <div className="lg:col-span-7 glass-panel border border-white/5 rounded-3xl p-6 sm:p-10 text-left shadow-lg">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Send a Digital Enquiry
          </h3>
          <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8">
            Tell us about your special wardrobe requirements. Our chief styling associate will review and reply within 12 hours.
          </p>

          {isSubmitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Letter Received!</h4>
              <p className="text-sm text-zinc-400 font-light max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Roopam Shopping Mall. Your enquiry details have been logged. We will contact you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Rahul Patil"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Mobile Contact *</label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. +91 95271 86469"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. name@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Preference Department</label>
                  <select
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-gold-400 transition-all cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">Your Message / Custom Sizing details</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us what you are looking to purchase or book for wedding trial fitting sessions..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-4 rounded-full bg-[#C5A059] text-obsidian-950 hover:bg-gold-300 font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry Message</span>
              </button>

            </form>
          )}

        </div>

      </div>

      {/* Google Interactive Map */}
      <section id="contact-map" className="space-y-6">
        <div className="text-left">
          <h3 className="font-serif text-2xl font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-gold-400" />
            <span>Interactive Google Map Location</span>
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Station Road, Raver, Maharashtra 425508. Use controls below to navigate or find driving directions.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-lg h-[400px] w-full bg-neutral-900">
          <iframe
            id="google-maps-iframe"
            title="Roopam Shopping Mall Google Maps Location"
            src={STORE_INFO.mapEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
};
