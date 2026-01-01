
import React, { useState } from 'react';
import { Star, Clock, Users } from 'lucide-react';

const DOMESTIC_TOURS = [
  {
    id: 1,
    title: "The Royal Rajasthan",
    price: "₹1,45,000",
    days: "10 DAYS",
    type: "SMALL GROUP",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Serene Kerala",
    price: "₹85,000",
    days: "7 DAYS",
    type: "PRIVATE",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Majestic Ladakh",
    price: "₹65,000",
    days: "8 DAYS",
    type: "ADVENTURE",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Varanasi Spiritual",
    price: "₹35,000",
    days: "4 DAYS",
    type: "GUIDED",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
  }
];

const INTERNATIONAL_TOURS = [
  {
    id: 5,
    title: "Swiss Alps Adventure",
    price: "₹2,45,000",
    days: "8 DAYS",
    type: "GROUP",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Dubai Discovery",
    price: "₹1,15,000",
    days: "5 DAYS",
    type: "FAMILY",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    title: "Bali Bliss",
    price: "₹95,000",
    days: "6 DAYS",
    type: "HONEYMOON",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "Singapore Highlights",
    price: "₹1,25,000",
    days: "5 DAYS",
    type: "CITY BREAK",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800",
  }
];

const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');
  const tours = activeTab === 'domestic' ? DOMESTIC_TOURS : INTERNATIONAL_TOURS;

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
               <div className="w-8 h-[3px] bg-[#FFD801]"></div>
               <span className="text-[#FFD801] font-sans font-black uppercase tracking-[0.25em] text-xs">Exclusive Journeys</span>
            </div>
            {/* Standardized Title Size */}
            <h2 className="text-3xl md:text-4xl font-sans font-black text-[#0E1E2C] leading-tight">Most Loved Tours</h2>
          </div>
          
          {/* Toggle Switch */}
          <div className="bg-slate-50 p-1.5 rounded-full flex items-center font-sans font-black text-xs uppercase tracking-widest border border-slate-100">
            <button 
              onClick={() => setActiveTab('domestic')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'domestic' 
                  ? 'bg-[#0E1E2C] text-white shadow-lg shadow-slate-200' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Domestic
            </button>
            <button 
              onClick={() => setActiveTab('international')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'international' 
                  ? 'bg-[#0E1E2C] text-white shadow-lg shadow-slate-200' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="group cursor-pointer flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6 shadow-lg shadow-slate-100 group-hover:shadow-2xl transition-all duration-500 bg-slate-100">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md py-2 px-3 rounded-xl flex items-center gap-1.5 shadow-sm z-10 border border-white/20">
                  <Star className="w-3.5 h-3.5 text-[#FFD801] fill-[#FFD801]" />
                  <span className="text-xs font-black font-sans text-[#0E1E2C]">{tour.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 px-1 mt-auto">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-sans text-xl font-black text-[#0E1E2C] leading-snug group-hover:text-[#FFD801] transition-colors">
                    {tour.title}
                  </h3>
                  <span className="text-[#0E1E2C] font-sans font-black text-lg whitespace-nowrap bg-slate-50 px-2 py-1 rounded-lg">
                    {tour.price}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FFD801]" />
                    {tour.days}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#FFD801]" />
                    {tour.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
