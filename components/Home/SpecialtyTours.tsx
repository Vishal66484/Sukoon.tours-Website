
import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TOURS = [
  { 
    id: 1, 
    title: "Chota Break", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Marigold", 
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Adventure Tour", 
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    title: "My Fair Lady", 
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 5, 
    title: "Second Innings", 
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 6, 
    title: "Super Economy", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 7, 
    title: "Honeymoon Special", 
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 8, 
    title: "Students Special", 
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop" 
  }
];

const SpecialtyTours: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 220; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-white relative border-t border-slate-50">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Header with Navigation */}
        <div className="relative mb-6 md:mb-10 flex flex-col items-center">
            <div className="text-center max-w-2xl mx-auto px-4">
                 <h2 className="text-2xl md:text-4xl font-black text-[#0E1E2C] mb-2 md:mb-3">Sukoon's Speciality Tours</h2>
                 <p className="text-slate-500 text-xs md:text-sm font-bold tracking-wide">Something for every traveller - Journeys curated just for You!</p>
            </div>
            
            {/* Desktop Navigation Arrows */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex gap-2">
                 <button 
                   onClick={() => scroll('left')} 
                   className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#FFD801] hover:border-[#FFD801] hover:text-[#0E1E2C] transition-all shadow-md text-slate-400"
                   aria-label="Scroll left"
                 >
                   <ChevronLeft className="w-6 h-6" />
                 </button>
                 <button 
                   onClick={() => scroll('right')} 
                   className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-[#FFD801] hover:border-[#FFD801] hover:text-[#0E1E2C] transition-all shadow-md text-slate-400"
                   aria-label="Scroll right"
                 >
                   <ChevronRight className="w-6 h-6" />
                 </button>
            </div>
        </div>

        {/* Carousel - Smaller cards on mobile */}
        <div 
          className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory px-2" 
          ref={scrollRef}
        >
          {TOURS.map((tour) => (
            <div 
              key={tour.id} 
              // Size adjusted for better visibility on mobile (140px width, 200px height)
              className="min-w-[140px] md:min-w-[220px] h-[200px] md:h-[300px] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer snap-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-slate-200"
            >
               <img 
                 src={tour.image} 
                 alt={tour.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 loading="lazy"
               />
               
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
               
               {/* Title - Positioned for smaller card */}
               <div className="absolute bottom-4 left-4 right-10 md:right-14 text-white z-10">
                  <h3 className="text-base md:text-xl font-black leading-tight drop-shadow-lg mb-1">{tour.title}</h3>
                  <div className="h-0.5 w-6 md:w-8 bg-[#FFD801] rounded-full group-hover:w-12 md:group-hover:w-16 transition-all duration-300"></div>
               </div>

               {/* Action Button - Centered Arrow in White Box */}
               <div className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-white rounded-tl-xl md:rounded-tl-2xl flex items-center justify-center group-hover:bg-[#FFD801] transition-colors duration-300 z-20">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#0E1E2C] transform group-hover:-rotate-45 transition-transform duration-300" />
               </div>
            </div>
          ))}
        </div>
        
        {/* Mobile hint */}
        <div className="lg:hidden flex justify-center gap-2 mt-2">
             <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
               <div className="w-1/2 h-full bg-[#FFD801] rounded-full"></div>
             </div>
        </div>

      </div>
    </section>
  )
}

export default SpecialtyTours;
