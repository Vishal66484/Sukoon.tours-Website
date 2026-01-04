
import React, { useRef, useState, useEffect } from 'react';
import { MOCK_PACKAGES } from '../../constants';
import { Plane, ChevronLeft, ChevronRight, MessageCircle, Mail, BedDouble, Utensils, Camera, Bus } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

const PackageGrid: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { formatPrice } = useCurrency();

  // Check scroll position to toggle arrows visibility
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
      const scrollAmount = clientWidth * 0.85; // Scroll 85% of the view width
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-slate-50 relative">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-[#0E1E2C]">All Group Tours</h2>
          <div className="flex gap-2">
            {/* Desktop Arrows (Hidden on Mobile) */}
            <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`hidden md:flex w-10 h-10 rounded-full border border-slate-200 bg-white items-center justify-center hover:bg-slate-50 transition-all ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
              <ChevronLeft className="w-5 h-5 text-slate-500" />
            </button>
            <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`hidden md:flex w-10 h-10 rounded-full border border-slate-200 bg-white items-center justify-center hover:bg-slate-50 transition-all ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            >
              <ChevronRight className="w-5 h-5 text-slate-500" />
            </button>
            <button className="ml-2 px-4 py-1.5 md:px-6 md:py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-full text-[10px] md:text-sm transition-colors">
              View all
            </button>
          </div>
        </div>

        {/* Scrollable Container Wrapper */}
        <div className="relative group">
            
            {/* Mobile Left Arrow (Floating) */}
            {canScrollLeft && (
                <button 
                    onClick={() => scroll('left')}
                    className="md:hidden absolute left-0 top-[40%] -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg rounded-full border border-slate-100 text-slate-700 animate-in fade-in zoom-in duration-200"
                    aria-label="Scroll Left"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            )}

            {/* Mobile Right Arrow (Floating & Animated) */}
            {canScrollRight && (
                <button 
                    onClick={() => scroll('right')}
                    className="md:hidden absolute right-0 top-[40%] -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center bg-[#0E1E2C]/90 backdrop-blur-sm shadow-lg rounded-full border border-white/20 text-white animate-pulse hover:animate-none"
                    aria-label="Scroll Right"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            )}

            {/* Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
            <div 
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide scroll-smooth"
            >
              {MOCK_PACKAGES.map((pkg: any) => (
                <div key={pkg.id} className="min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-center bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 overflow-hidden flex flex-col h-full group">
                  
                  {/* Image Section - Larger on mobile */}
                  <div className="relative h-48 lg:h-44 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Badges Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1">
                       <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                         {pkg.code}
                       </span>
                       <span className="bg-white text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                         {pkg.duration}
                       </span>
                    </div>
                  </div>

                  {/* Content Section - Desktop sizing on mobile */}
                  <div className="p-4 lg:p-3 flex flex-col flex-grow">
                    
                    {/* Title */}
                    <h3 className="text-lg lg:text-[15px] font-bold text-slate-900 mb-2 line-clamp-2 leading-snug min-h-[3rem] lg:min-h-[2.5rem]">
                      {pkg.name}
                    </h3>

                    {/* Includes */}
                    <div className="mb-3">
                      <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Tour Includes</p>
                      <div className="flex gap-3 text-red-500">
                         <BedDouble className="w-4 h-4" />
                         <Utensils className="w-4 h-4" />
                         <Camera className="w-4 h-4" />
                         <Bus className="w-4 h-4" />
                         {pkg.includes.includes('Flight') && <Plane className="w-4 h-4" />}
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="mt-auto pt-3 border-t border-slate-100">
                       <div className="flex justify-between items-end mb-3 gap-1">
                          <div>
                            <p className="text-[10px] text-slate-500 font-medium">Starts from</p>
                            <h4 className="text-xl lg:text-lg font-bold text-slate-900 leading-tight">{formatPrice(pkg.price)}</h4>
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full w-fit">{pkg.datesCount} Dates</span>
                       </div>

                       {/* Book Button */}
                       <button className="w-full bg-[#EF4444] hover:bg-red-700 text-white font-bold py-2 rounded text-xs mb-3 transition-colors uppercase tracking-wide">
                         Book
                       </button>

                       {/* Footer Actions - Visible on mobile now too */}
                       <div className="flex items-center justify-between">
                          <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-green-600 transition-colors">
                             <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                             <span className="underline decoration-slate-200 underline-offset-2 decoration-2">Request Callback</span>
                          </button>
                          <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors">
                             <span className="underline decoration-slate-200 underline-offset-2 decoration-2">Get Itinerary</span>
                             <Mail className="w-3.5 h-3.5 text-slate-400" />
                          </button>
                       </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PackageGrid;
