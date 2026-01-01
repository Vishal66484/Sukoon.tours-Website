
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';

const PACKAGES = [
  {
    id: 1,
    title: "Beautiful Bali Escape",
    location: "Indonesia",
    duration: "5 Nights / 6 Days",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000",
    places: ["Kuta", "Ubud", "Nusa Penida", "Tanah Lot"]
  },
  {
    id: 2,
    title: "Dazzling Dubai & Abu Dhabi",
    location: "UAE",
    duration: "5 Nights / 6 Days",
    price: "₹58,000",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=2000",
    places: ["Burj Khalifa", "Desert Safari", "Ferrari World", "Grand Mosque"]
  },
  {
    id: 3,
    title: "Singapore & Malaysia Combo",
    location: "South East Asia",
    duration: "6 Nights / 7 Days",
    price: "₹75,000",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000",
    places: ["Sentosa", "Marina Bay", "Genting Highlands", "KL Tower"]
  },
  {
    id: 4,
    title: "Amazing Thailand",
    location: "Thailand",
    duration: "4 Nights / 5 Days",
    price: "₹30,000",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000",
    places: ["Bangkok", "Pattaya", "Coral Island", "Safari World"]
  },
  {
    id: 5,
    title: "Maldives Luxury",
    location: "Maldives",
    duration: "Customized",
    price: "Customized",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=2000",
    places: ["Water Villa", "Male City", "Snorkeling", "Island Hopping"]
  }
];

const InternationalPackages: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % PACKAGES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + PACKAGES.length) % PACKAGES.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[3px] bg-[#FFD801]"></div>
              <span className="text-[#FFD801] font-sans font-black uppercase tracking-[0.25em] text-xs">Global Bestsellers</span>
          </div>
          {/* Standardized Title Size */}
          <h2 className="text-3xl md:text-4xl font-sans font-black text-[#0E1E2C] leading-tight">Sukoon's Spotlight</h2>
        </div>

        {/* Slider Container with Rounded Corners */}
        <div className="relative w-full h-[400px] md:h-[450px] rounded-[30px] overflow-hidden shadow-2xl group bg-[#0E1E2C]">
          
          {/* Slides */}
          {PACKAGES.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay Gradient - Left aligned for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl">
                <div className="animate-fade-in-up">
                  
                  {/* Location Tag */}
                  <div className="flex items-center gap-2 mb-4 border-l-4 border-[#FFD801] pl-4">
                    <span className="text-[#FFD801] font-sans font-black uppercase tracking-[0.2em] text-sm md:text-base">
                      {pkg.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-4 leading-tight">
                    {pkg.title}
                  </h2>

                  {/* Places List */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-slate-300 text-sm font-bold font-sans">
                    {pkg.places.map((place, i) => (
                      <span key={i} className="flex items-center gap-2">
                        {i > 0 && <span className="w-1 h-1 bg-slate-500 rounded-full"></span>}
                        {place}
                      </span>
                    ))}
                  </div>

                  {/* Details Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 mb-10">
                    <div>
                        <p className="text-slate-400 text-[10px] font-black font-sans uppercase tracking-widest mb-1">Duration</p>
                        <div className="flex items-center gap-2 text-white font-bold font-sans text-lg">
                          <Clock className="w-5 h-5 text-[#FFD801]" />
                          {pkg.duration}
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-400 text-[10px] font-black font-sans uppercase tracking-widest mb-1">Starting From</p>
                        <div className="text-[#FFD801] font-black font-sans text-3xl">
                          {pkg.price}
                        </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-[#FFD801] hover:bg-white text-[#0E1E2C] px-8 py-3 md:px-10 md:py-4 rounded-xl font-black font-sans uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-3 w-fit shadow-lg shadow-[#FFD801]/20 text-sm md:text-base">
                    Book This Package
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-[#FFD801] backdrop-blur-md text-white hover:text-[#0E1E2C] rounded-full flex items-center justify-center transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-[#FFD801] backdrop-blur-md text-white hover:text-[#0E1E2C] rounded-full flex items-center justify-center transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {PACKAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  current === idx ? 'w-8 bg-[#FFD801]' : 'w-2 bg-white/30 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalPackages;
