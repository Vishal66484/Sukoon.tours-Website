
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Globe, Plane, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingCollections: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to toggle arrows
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative z-20 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6">
        
        {/* Header - Unified Style with Website */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#FFD801] font-black text-xs tracking-[0.25em] uppercase mb-3 block">Curated For You</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0E1E2C] leading-tight">Trending Collections</h2>
          </div>
        </div>

        {/* Scrollable Container Wrapper */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => scroll('left')}
                className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-slate-800 hover:text-[#FFD801] border border-white/50 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Right Arrow */}
          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => scroll('right')}
                className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] text-slate-800 hover:text-[#FFD801] border border-white/50 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group/arrow"
              >
                <div className="relative">
                  <ChevronRight className="w-5 h-5 relative z-10" />
                  {/* Subtle pulse animation for the right arrow to encourage scrolling */}
                  <span className="absolute inset-0 rounded-full bg-[#FFD801]/30 animate-ping opacity-75 group-hover/arrow:animate-none"></span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Cards Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >

            {/* Card 1: Last Minute */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-[85vw] md:w-[24rem] snap-center rounded-[2rem] p-8 bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a] relative overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 md:ml-auto"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] font-black text-amber-900 bg-amber-500/10 px-2.5 py-1.5 rounded-lg uppercase tracking-widest border border-amber-500/20">Hot Deals</span>
                   <Clock className="w-4 h-4 text-amber-800 opacity-60" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">Last Minute<br/>Departures</h3>
                <p className="text-slate-800 text-xs mb-6 leading-relaxed font-bold">
                  Limited time? Checkout 100+ soon departing tours.
                </p>

                <div className="space-y-3 mb-8 bg-white/60 p-5 rounded-2xl backdrop-blur-sm border border-white/50 flex-grow shadow-inner">
                  {[
                    "Honeymoon Special Kerala (6D)",
                    "Best of Amritsar (4D)",
                    "Dalhousie Dharamshala (8D)",
                    "Bhubaneswar Puri Konark (6D)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-slate-800 border-b border-amber-900/5 last:border-0 pb-2 last:pb-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      <span className="truncate font-bold">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-slate-900 text-white font-black rounded-xl shadow-lg hover:bg-black hover:shadow-xl transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest group-hover:gap-3">
                  View Departures <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            </motion.div>

            {/* Card 2: Easy Visa */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-[85vw] md:w-[24rem] snap-center rounded-[2rem] p-8 bg-gradient-to-br from-[#0f766e] to-[#115e59] relative overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white"
            >
               <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center mix-blend-overlay" />
               
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] font-black text-teal-100 bg-teal-900/40 px-2.5 py-1.5 rounded-lg uppercase tracking-widest border border-teal-500/30">Hassle Free</span>
                   <Globe className="w-4 h-4 text-teal-200 opacity-60" />
                </div>
                <h3 className="text-2xl font-black mb-2 leading-tight">Travel Made Easy:<br/>Visa-Free</h3>
                <p className="text-teal-50 text-xs mb-6 leading-relaxed opacity-90 font-bold">
                  No time for visa waits? Secure your holiday now!
                </p>

                <div className="mb-8 flex-grow relative bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm shadow-inner">
                  <p className="text-[10px] uppercase text-teal-200 font-black mb-3 tracking-widest border-b border-white/10 pb-2">Top Picks</p>
                  <div className="flex flex-wrap gap-2">
                     {["Georgia", "Kazakhstan", "Morocco", "Bahrain", "Seychelles", "Singapore"].map((c, i) => (
                       <span key={i} className="px-3 py-1.5 bg-teal-950/30 rounded-lg text-[10px] font-bold border border-teal-500/20 hover:bg-teal-900/50 transition-colors cursor-default">
                         {c}
                       </span>
                     ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-[#115e59] font-black rounded-xl shadow-lg hover:bg-teal-50 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest group-hover:gap-3">
                  Explore Tours <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
            </motion.div>

            {/* Card 3: Air Inclusive */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-shrink-0 w-[85vw] md:w-[24rem] snap-center rounded-[2rem] p-8 bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc] relative overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 md:mr-auto"
            >
              <div className="relative z-10 h-full flex flex-col">
                 <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] font-black text-sky-900 bg-sky-500/10 px-2.5 py-1.5 rounded-lg uppercase tracking-widest border border-sky-500/20">All Inclusive</span>
                   <Plane className="w-4 h-4 text-sky-700 opacity-60" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">Customized Holidays<br/>With Flights</h3>
                <p className="text-slate-800 text-xs mb-6 leading-relaxed font-bold">
                  Curated itineraries plus flights, for an all-in-one holiday.
                </p>

                <div className="space-y-3 mb-8 bg-white/60 p-5 rounded-2xl backdrop-blur-sm border border-white/50 flex-grow shadow-inner">
                  {[
                    { dest: "Dubai Air Inclusive", price: "₹1,00,000" },
                    { dest: "Bali Honeymoon", price: "₹1,05,000" },
                    { dest: "Bangkok Pattaya", price: "₹67,000" },
                    { dest: "Sri Lanka Package", price: "₹75,000" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-xs text-slate-800 border-b border-sky-900/5 last:border-0 pb-2 last:pb-0">
                      <span className="font-bold truncate pr-2">{item.dest}</span>
                      <span className="font-black text-slate-900 bg-white/60 px-2 py-0.5 rounded shadow-sm">{item.price}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-slate-900 text-white font-black rounded-xl shadow-lg hover:bg-black hover:shadow-xl transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest group-hover:gap-3">
                  View Holidays <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/40 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections;
