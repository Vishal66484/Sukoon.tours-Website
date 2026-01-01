
import React, { useState, useEffect } from 'react';
import { MOCK_TESTIMONIALS } from '../../constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = MOCK_TESTIMONIALS.length;
  // Calculate total number of "pages" or "slides" based on groups of 3
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      // Advance to the next "page" of 3 items
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(timer);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="py-12 md:py-24 px-4 bg-[#0E1E2C] text-white relative overflow-hidden">
       {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-2 md:mb-4">My Sukoon Story!</h2>
          <p className="text-slate-400 text-xs md:text-base font-medium max-w-2xl mx-auto">Customer satisfaction is our major goal. See what our customers are saying about us.</p>
        </div>

        <div className="relative group px-0 md:px-12">
          {/* Carousel Viewport */}
          <div className="overflow-hidden md:-mx-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Render items in groups of 3 (handled by flex sizing) */}
              {MOCK_TESTIMONIALS.map((test, index) => (
                <div 
                  key={test.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-white rounded-[20px] md:rounded-[24px] p-6 md:p-8 text-slate-900 relative shadow-2xl h-full flex flex-col">
                    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-[#FFD801] opacity-30" />
                    
                    <div className="flex items-center gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 md:w-3.5 md:h-3.5 ${i < test.rating ? 'fill-[#FFD801] text-[#FFD801]' : 'text-slate-200'}`} />
                      ))}
                      <span className="text-xs font-bold text-slate-400 ml-1">({test.rating}.0)</span>
                    </div>

                    <h3 className="text-base md:text-lg font-black mb-2 md:mb-3 leading-tight line-clamp-2">{test.title}</h3>
                    <div className="mb-4 md:mb-6 flex-grow">
                      <Quote className="w-3 h-3 md:w-4 md:h-4 text-slate-300 inline mr-2 transform rotate-180" />
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed inline italic">
                        {test.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 md:pt-4 mt-auto">
                      <div className="flex items-center gap-2 md:gap-3">
                        <img src={test.userImage} alt={test.userName} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover ring-2 ring-[#FFD801]" />
                        <div>
                          <h4 className="text-xs md:text-sm font-bold text-slate-900">{test.userName}</h4>
                          <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">{test.travelDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Tour Lead</p>
                        <p className="text-[10px] md:text-xs font-black text-blue-600 hover:underline cursor-pointer">
                          {index % 2 === 0 ? 'Nikhil Shewale' : 'Anushka Ingulkar'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on Mobile, dots below could be better or keep small arrows */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-900 items-center justify-center shadow-xl hover:bg-[#FFD801] transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-900 items-center justify-center shadow-xl hover:bg-[#FFD801] transition-all z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Mobile Nav Indicators */}
           <div className="md:hidden flex justify-center gap-2 mt-4">
            {[...Array(totalPages)].map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-[#FFD801]' : 'w-2 bg-white/20'}`} />
            ))}
           </div>
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <button className="bg-[#FFD801] hover:bg-[#e6c200] text-[#0E1E2C] px-6 py-3 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-black shadow-xl shadow-[#FFD801]/20 transition-all hover:-translate-y-1 text-xs md:text-base">
            Read all Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
