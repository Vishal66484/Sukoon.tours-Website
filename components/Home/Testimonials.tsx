
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
    <section className="py-24 px-4 bg-[#0E1E2C] text-white relative overflow-hidden">
       {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">My Sukoon Story!</h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto">Customer satisfaction is our major goal. See what our customers are saying about us.</p>
        </div>

        <div className="relative group px-4 md:px-12">
          {/* Carousel Viewport */}
          <div className="overflow-hidden -mx-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Render items in groups of 3 (handled by flex sizing) */}
              {MOCK_TESTIMONIALS.map((test, index) => (
                <div 
                  key={test.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-[24px] p-8 text-slate-900 relative shadow-2xl h-full flex flex-col">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FFD801] opacity-30" />
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < test.rating ? 'fill-[#FFD801] text-[#FFD801]' : 'text-slate-200'}`} />
                      ))}
                      <span className="text-xs font-bold text-slate-400 ml-1">({test.rating}.0)</span>
                    </div>

                    <h3 className="text-lg font-black mb-3 leading-tight line-clamp-2">{test.title}</h3>
                    <div className="mb-6 flex-grow">
                      <Quote className="w-4 h-4 text-slate-300 inline mr-2 transform rotate-180" />
                      <p className="text-slate-600 text-sm leading-relaxed inline italic">
                        {test.content}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                      <div className="flex items-center gap-3">
                        <img src={test.userImage} alt={test.userName} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#FFD801]" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{test.userName}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{test.travelDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Tour Lead</p>
                        <p className="text-xs font-black text-blue-600 hover:underline cursor-pointer">
                          {/* Alternating logic applied here explicitly as requested, redundant if data is already correct but ensures safety */}
                          {index % 2 === 0 ? 'Nikhil Shewale' : 'Anushka Ingulkar'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:bg-[#FFD801] transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:bg-[#FFD801] transition-all z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#FFD801] hover:bg-[#e6c200] text-[#0E1E2C] px-10 py-4 rounded-2xl font-black shadow-xl shadow-[#FFD801]/20 transition-all hover:-translate-y-1">
            Read all Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
