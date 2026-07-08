import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tag, Calendar, Gift, Check, Copy, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { OFFERS, STORE_INFO } from '../data';

export const OffersView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Scratch card game states
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const [secretPrize, setSecretPrize] = useState({
    discount: "Flat ₹1,500 Off",
    code: "RAVERGOLD1500",
    desc: "Applicable on custom tailoring suits or wedding sarees over ₹10,000."
  });

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleScratchAction = () => {
    setIsRevealed(true);
  };

  const handleResetScratch = () => {
    setIsRevealed(false);
    // Randomize secret prize pool
    const prizes = [
      { discount: "Flat ₹1,500 Off", code: "RAVERGOLD1500", desc: "Applicable on custom tailoring suits or wedding sarees over ₹10,000." },
      { discount: "Complimentary Silk Shawl", code: "SILKSHAWLCOMP", desc: "Unlock a custom matching pure handloom raw silk shawl with any sherwani buy." },
      { discount: "Additional 5% Off", code: "ROOPAMEXTRA5", desc: "Gets stackable 5% discount on top of ongoing festive reductions." }
    ];
    const randomIndex = Math.floor(Math.random() * prizes.length);
    setSecretPrize(prizes[randomIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-20 text-zinc-100">
      
      {/* Header */}
      <div id="offers-header" className="text-center max-w-2xl mx-auto mt-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">Festive Privilege</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
          Exclusive Offers
        </h1>
        <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
          Copy exclusive coupon codes or play our VIP mystery scratch card to unlock custom gifts. Redeem these at our billing counter in Raver.
        </p>
        <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
      </div>

      {/* Main Grid: Standard Offers Column & Interactive Card Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Active Festive Coupons List */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h3 className="font-serif text-2xl font-bold text-white flex items-center space-x-2">
            <Tag className="w-5 h-5 text-gold-400" />
            <span>Active Store Coupons</span>
          </h3>

          <div className="space-y-6">
            {OFFERS.map((offer) => (
              <div
                id={`offer-block-${offer.id}`}
                key={offer.id}
                className="glass-panel border border-white/5 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden"
              >
                {/* Visual side accent */}
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-gold-600 to-gold-400" />

                <div className="space-y-3 max-w-md">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-md bg-gold-400/10 text-gold-400 font-mono text-xs font-bold uppercase tracking-wider">
                      {offer.discount}
                    </span>
                    <span className="text-zinc-400 font-mono text-xs flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      <span>Expires {offer.validUntil}</span>
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {offer.title}
                  </h4>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                    {offer.description}
                  </p>
                  <p className="text-[10px] text-zinc-500 italic font-mono leading-normal pt-1 border-t border-white/5">
                    * {offer.finePrint}
                  </p>
                </div>

                <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
                  <div className="bg-white/[0.03] border border-dashed border-white/10 rounded-xl px-4 py-2 text-center flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold text-zinc-300 tracking-wider">
                      {offer.code}
                    </span>
                    <button
                      id={`copy-btn-${offer.id}`}
                      onClick={() => handleCopyCode(offer.id, offer.code)}
                      className="text-gold-400 hover:text-gold-300 cursor-pointer"
                    >
                      {copiedId === offer.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">
                    {copiedId === offer.id ? 'Copied code!' : 'Click to copy'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Gamified Luxury Scratch Card Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-obsidian-950 to-obsidian-900 border border-gold-400/20 rounded-3xl p-6 sm:p-8 text-center text-white relative shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">Interactive Privilege</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">Roopam Scratch Card</h3>
            <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
              Touch/click the metallic silver cover block below to claim your personalized VIP checkout reward.
            </p>
          </div>

          {/* Interactive Playground Box */}
          <div className="my-8 relative h-64 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isRevealed ? (
                /* Metallic Scratch Layer */
                <motion.div
                  id="scratch-cover"
                  key="cover"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={handleScratchAction}
                  className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex flex-col items-center justify-center cursor-pointer select-none border-4 border-gold-400/40"
                >
                  {/* Metallic overlay texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/10" />
                  
                  <Gift className="w-12 h-12 text-gray-100 mb-3 animate-bounce" />
                  <span className="font-serif text-lg font-bold text-gray-900 tracking-wider">
                    REVEAL MY GIFT
                  </span>
                  <span className="text-[10px] font-mono text-gray-800 uppercase tracking-wider mt-1 block">
                    Click to Scratch Card
                  </span>
                </motion.div>
              ) : (
                /* Revealed Prize Container */
                <motion.div
                  id="scratch-prize-vault"
                  key="prize"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 flex flex-col justify-between h-full w-full text-center"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-400/10 text-gold-400 mb-1">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block">Mystery Coupon Unlocked</span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {secretPrize.discount}
                    </h4>
                    <p className="text-gray-300 text-xs font-light leading-relaxed max-w-xs mx-auto">
                      {secretPrize.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-col items-center space-y-2 shrink-0">
                    <div className="inline-flex items-center gap-4 bg-white/10 border border-gold-300/30 rounded-xl px-4 py-2 font-mono text-sm text-gold-300 font-bold">
                      <span>{secretPrize.code}</span>
                      <button
                        onClick={() => handleCopyCode('secret', secretPrize.code)}
                        className="text-white hover:text-gold-400"
                      >
                        {copiedId === 'secret' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">
                      {copiedId === 'secret' ? 'Copied to clipboard' : 'Click paperclip icon to copy'}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="flex justify-between items-center text-left">
            <div className="flex items-center space-x-2 text-[10px] text-gray-400">
              <AlertCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Redeemable at billing counter.</span>
            </div>
            {isRevealed && (
              <button
                id="reset-scratch-card"
                onClick={handleResetScratch}
                className="flex items-center space-x-1 text-xs text-gold-400 hover:text-gold-300 cursor-pointer font-semibold uppercase tracking-wider"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Try Another</span>
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
