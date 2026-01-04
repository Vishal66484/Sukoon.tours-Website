
import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Star, ChevronDown, ChevronRight, Filter, Search, CheckCircle2, ArrowRight, Heart, Info, RefreshCw, MessageCircle, X } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

// Real Data specific for India Page
const INDIA_PACKAGES = [
  {
    id: 1,
    title: "Kashmir - Paradise on Earth",
    days: 7,
    citiesCount: 4,
    code: "DI-KSH",
    tags: ["HONEYMOON", "Nature", "Popular"],
    price: 42000,
    offerPrice: 38500,
    emi: "1,280",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop",
    departureText: "Daily Departures",
    highlights: "Shikara Ride on Dal Lake, Gulmarg Gondola (Phase 1), Pahalgam Valley, Sonmarg Day Trip, Houseboat Stay.",
    rating: 4.9,
    reviews: 2150
  },
  {
    id: 2,
    title: "Kerala - God's Own Country",
    days: 6,
    citiesCount: 3,
    code: "DI-KER",
    tags: ["Relaxing", "Family", "Nature"],
    price: 35000,
    offerPrice: 28990,
    emi: "990",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    departureText: "Weekly Departures",
    highlights: "Munnar Tea Gardens, Thekkady Spice Plantation, Alleppey Premium Houseboat, Kathakali Show.",
    rating: 4.8,
    reviews: 1840
  },
  {
    id: 3,
    title: "Himachal - Manali & Shimla",
    days: 7,
    citiesCount: 3,
    code: "DI-HIM",
    tags: ["Adventure", "Snow", "Group"],
    price: 28000,
    offerPrice: 24500,
    emi: "850",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    departureText: "Every Saturday",
    highlights: "Solang Valley Snow Point, Atal Tunnel, Shimla Mall Road, Kufri Fun World, River Rafting in Kullu.",
    rating: 4.7,
    reviews: 1560
  },
  {
    id: 4,
    title: "Rajasthan - Royal Heritage",
    days: 8,
    citiesCount: 4,
    code: "DI-RAJ",
    tags: ["Culture", "History", "Premium"],
    price: 45000,
    offerPrice: 39990,
    emi: "1,350",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
    departureText: "2 Dates in Mar/Apr",
    highlights: "Jaipur Amber Fort, Udaipur City Palace, Jodhpur Mehrangarh Fort, Jaisalmer Desert Safari & Camp.",
    rating: 4.9,
    reviews: 980
  },
  {
    id: 5,
    title: "Andaman - Beach & Bliss",
    days: 6,
    citiesCount: 2,
    code: "DI-AND",
    tags: ["Beach", "Water Sports", "Summer"],
    price: 52000,
    offerPrice: 46500,
    emi: "1,550",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    departureText: "Daily Flights",
    highlights: "Havelock Radhanagar Beach, Cellular Jail Light & Sound, Elephant Beach Snorkeling, Neil Island.",
    rating: 4.8,
    reviews: 750
  },
  {
    id: 6,
    title: "Leh Ladakh - Adventure",
    days: 7,
    citiesCount: 3,
    code: "DI-LEH",
    tags: ["Adventure", "Biking", "Trending"],
    price: 38000,
    offerPrice: 32990,
    emi: "1,100",
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=800&auto=format&fit=crop",
    departureText: "May/June Special",
    highlights: "Pangong Tso Lake Camping, Nubra Valley Double Hump Camel, Khardung La Pass, Magnetic Hill.",
    rating: 4.9,
    reviews: 1120
  },
  {
    id: 7,
    title: "North East - Seven Sisters",
    days: 8,
    citiesCount: 4,
    code: "DI-NE",
    tags: ["Nature", "Offbeat", "Scenic"],
    price: 55000,
    offerPrice: 49990,
    emi: "1,700",
    image: "https://images.unsplash.com/photo-1589041120903-b5f7cc74a05d?q=80&w=800&auto=format&fit=crop",
    departureText: "Weekly Departures",
    highlights: "Gangtok Tsomgo Lake, Darjeeling Toy Train (Joyride), Pelling Skywalk, Cherrapunji Root Bridges.",
    rating: 4.7,
    reviews: 620
  },
  {
    id: 8,
    title: "Char Dham Yatra",
    days: 12,
    citiesCount: 5,
    code: "DI-CHD",
    tags: ["Spiritual", "Senior Citizen", "Pilgrimage"],
    price: 48000,
    offerPrice: 42500,
    emi: "1,450",
    image: "https://images.unsplash.com/photo-1605649487215-285f338956ea?q=80&w=800&auto=format&fit=crop",
    departureText: "May/June Registrations Open",
    highlights: "Yamunotri, Gangotri, Kedarnath Trek/Heli, Badrinath Darshan, Haridwar Aarti.",
    rating: 4.8,
    reviews: 3500
  }
];

const STATES_FILTER = ["Himachal", "Kashmir", "Kerala", "Rajasthan", "Andaman", "North East", "Goa", "Uttarakhand"];

const STATE_IMAGES: Record<string, string> = {
  "Himachal": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=400&fit=crop&q=80",
  "Kashmir": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=400&h=400&fit=crop&q=80",
  "Kerala": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=400&fit=crop&q=80",
  "Rajasthan": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=400&fit=crop&q=80",
  "Andaman": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=400&fit=crop&q=80",
  "North East": "https://images.unsplash.com/photo-1589041120903-b5f7cc74a05d?w=400&h=400&fit=crop&q=80",
  "Goa": "https://images.unsplash.com/photo-1587923485600-d86414777a2e?w=400&h=400&fit=crop&q=80",
  "Uttarakhand": "https://images.unsplash.com/photo-1588893968277-25e11c5f87b8?w=400&h=400&fit=crop&q=80"
};

const IndiaPage: React.FC = () => {
  const [priceRange, setPriceRange] = useState(100000);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const { formatPrice } = useCurrency();

  const toggleState = (state: string) => {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter(s => s !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  };

  return (
    <div className="bg-[#f2f4f7] min-h-screen pb-20 font-sans">
      
      {/* Hero Section - Royal India Image */}
      <div className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop" 
          alt="Royal India Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
          <div className="max-w-[90rem] mx-auto px-6 pb-12 w-full">
            <div className="text-white animate-fade-in-up">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold opacity-90 mb-3 tracking-wide">
                <span>Home</span> <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#FFD801]" /> <span className="text-[#FFD801]">India</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-2 leading-tight tracking-tight">India Tour Packages</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[85rem] mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Sidebar Filters - Desktop - Sticky */}
        <aside className="hidden lg:block w-[260px] flex-shrink-0 space-y-4 sticky top-[135px] h-fit z-30">
          
          {/* Header */}
          <div className="flex justify-between items-center px-1">
             <h3 className="font-bold text-[15px] text-[#000000] flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filter Your Tour
             </h3>
             <button className="text-[12px] font-bold text-slate-500 underline decoration-dotted hover:text-slate-900">Reset</button>
          </div>

          {/* Price Range */}
          <div className="bg-white p-4 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-200">
             <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-900 text-[13px]">Price Range</h3>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
             
             {/* Styled like buttons in ref image */}
             <div className="flex flex-col gap-2">
                <div className="border border-slate-300 rounded-[4px] px-3 py-2 text-[11px] font-bold text-slate-600 text-center cursor-pointer hover:border-[#FFD801] hover:text-black bg-white transition-colors">
                   {formatPrice(20000)} - {formatPrice(35000)}
                </div>
                <div className="border border-slate-300 rounded-[4px] px-3 py-2 text-[11px] font-bold text-slate-600 text-center cursor-pointer hover:border-[#FFD801] hover:text-black bg-white transition-colors">
                   {formatPrice(35000)} - {formatPrice(50000)}
                </div>
                <div className="border border-slate-300 rounded-[4px] px-3 py-2 text-[11px] font-bold text-slate-600 text-center cursor-pointer hover:border-[#FFD801] hover:text-black bg-white transition-colors">
                   {formatPrice(50000)} - {formatPrice(80000)}
                </div>
                <div className="border border-slate-300 rounded-[4px] px-3 py-2 text-[11px] font-bold text-slate-600 text-center cursor-pointer hover:border-[#FFD801] hover:text-black bg-white transition-colors">
                   {formatPrice(80000)} above
                </div>
             </div>
          </div>

          {/* Departure City */}
          <div className="bg-white p-4 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-200">
             <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-900 text-[13px]">Departure City</h3>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
             <div className="space-y-2.5">
               {['Pune (12)', 'Mumbai (28)', 'Delhi (18)', 'Ahmedabad (15)'].map((city, i) => (
                 <label key={i} className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded-[3px] border border-slate-300 bg-white flex items-center justify-center group-hover:border-[#FFD801]"></div>
                   <span className="text-[13px] font-medium text-slate-700 group-hover:text-slate-900">{city}</span>
                 </label>
               ))}
             </div>
          </div>

          {/* Countries */}
          <div className="bg-white p-4 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-200">
             <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-900 text-[13px]">Countries</h3>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
             <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded-[3px] border border-slate-300 bg-[#0E1E2C] flex items-center justify-center">
                     <CheckCircle2 className="w-3 h-3 text-white" />
                   </div>
                   <span className="text-[13px] font-medium text-slate-900">India (50+)</span>
                </label>
             </div>
          </div>

          {/* Cities */}
          <div className="bg-white p-4 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-slate-200">
             <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-900 text-[13px]">Cities</h3>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
            <div className="relative mb-3">
               <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full pl-8 pr-3 py-2 bg-white border border-slate-300 rounded text-[12px] outline-none focus:border-[#FFD801] placeholder:text-slate-400" 
               />
               <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
            <div className="space-y-2.5 max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
              {STATES_FILTER.map((state) => (
                <label key={state} className="flex items-center gap-3 cursor-pointer group select-none">
                  <div className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-all duration-200 ${selectedStates.includes(state) ? 'bg-[#0E1E2C] border-[#0E1E2C]' : 'border-slate-300 bg-white group-hover:border-[#FFD801]'}`}>
                    {selectedStates.includes(state) && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={selectedStates.includes(state)} 
                    onChange={() => toggleState(state)}
                  />
                  <span className={`text-[13px] font-medium transition-colors ${selectedStates.includes(state) ? 'text-[#0E1E2C]' : 'text-slate-700 group-hover:text-slate-900'}`}>{state}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 w-full">
          
          {/* Top Recommendation Grid */}
          <section className="mb-8">
             <h2 className="text-[20px] font-black text-[#0E1E2C] mb-4">Top Recommended Destinations</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {STATES_FILTER.slice(0,6).map((item, idx) => (
                  <div key={idx} className="group cursor-pointer text-center">
                     <div className="w-full aspect-square rounded-full overflow-hidden mb-2 border-2 border-white shadow-sm group-hover:border-[#FFD801] transition-all bg-slate-100">
                        <img 
                          src={STATE_IMAGES[item] || `https://source.unsplash.com/random/400x400/?${item}`}
                          alt={item} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                     </div>
                     <h4 className="font-bold text-slate-700 text-[11px] group-hover:text-[#0E1E2C]">{item}</h4>
                  </div>
                ))}
             </div>
          </section>

          {/* Package List Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-5 pb-4 border-b border-slate-200 gap-4">
            <div className="w-full md:w-auto">
              <h2 className="text-[18px] font-black text-[#0E1E2C]">{INDIA_PACKAGES.length} India Holiday Packages</h2>
              <p className="text-slate-500 font-bold text-[11px] mt-0.5">Showing 1-{INDIA_PACKAGES.length} packages</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
               <div className="flex items-center gap-2">
                 <span className="text-[12px] font-bold text-slate-500">Sort by:</span>
                 <select className="px-3 py-1.5 bg-white border border-slate-300 rounded text-[12px] font-bold outline-none cursor-pointer w-full md:w-auto text-slate-700 hover:border-[#FFD801]">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Popularity</option>
                 </select>
               </div>
               <button className="hidden md:flex items-center gap-1 text-[12px] font-bold text-slate-600 border border-slate-300 px-3 py-1.5 rounded bg-white hover:bg-slate-50">
                  <span className="grid grid-cols-2 gap-0.5"><span className="w-0.5 h-0.5 bg-slate-600"></span><span className="w-0.5 h-0.5 bg-slate-600"></span><span className="w-0.5 h-0.5 bg-slate-600"></span><span className="w-0.5 h-0.5 bg-slate-600"></span></span> Grid View
               </button>
            </div>
          </div>

          {/* Packages List */}
          <div className="space-y-5">
            {INDIA_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-[10px] border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row p-4 gap-5 group">
                
                {/* Image Section (Left) */}
                <div className="w-full md:w-[280px] h-52 md:h-[210px] relative shrink-0 rounded-[8px] overflow-hidden bg-slate-100">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-2 right-2 bg-black/40 p-1.5 rounded-full cursor-pointer hover:bg-black/60 transition-colors">
                     <Heart className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Content (Middle) */}
                <div className="flex-1 flex flex-col min-w-0 py-0.5">
                   {/* Tags Row */}
                   <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-[2px] rounded border border-orange-300 bg-orange-50 text-orange-600">
                          {pkg.tags[0]}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-[2px] rounded bg-orange-500 text-white border border-orange-500">
                          {pkg.code}
                      </span>
                      {pkg.tags[2] && (
                        <span className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-[2px] rounded border border-pink-300 bg-pink-50 text-pink-600">
                            {pkg.tags[2]}
                        </span>
                      )}
                   </div>

                   {/* Title */}
                   <h3 className="text-[18px] font-bold text-[#000000] group-hover:text-blue-700 transition-colors truncate mb-1 leading-tight">{pkg.title}</h3>

                   {/* Rating */}
                   <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-[#FFD801] gap-0.5">
                          {[...Array(5)].map((_, i) => (
                             <Star key={i} className={`w-3 h-3 ${i < Math.floor(pkg.rating) ? 'fill-current' : 'text-slate-200'}`} />
                          ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">({pkg.reviews})</span>
                   </div>

                   {/* Inclusions */}
                   <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800 mb-4 cursor-pointer w-fit group/inc">
                         <span className="bg-[#0E1E2C] text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[9px] font-serif">∞</span>
                         <span className="underline decoration-dotted decoration-slate-400 group-hover/inc:text-blue-600">All Inclusive</span>
                         <Info className="w-3 h-3 text-slate-400" />
                   </div>

                   {/* Metrics Grid */}
                   <div className="grid grid-cols-3 gap-2 border-t border-b border-slate-100 py-2.5 mb-2.5">
                      <div>
                         <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-0.5">Days</span>
                         <span className="font-bold text-[#000000] text-[13px]">{pkg.days} Days</span>
                      </div>
                      <div className="border-l border-slate-200 pl-3">
                         <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-0.5">Destinations</span>
                         <span className="font-bold text-[#000000] text-[13px] underline decoration-dotted decoration-slate-400 cursor-pointer">{pkg.citiesCount} Cities</span>
                      </div>
                      <div className="border-l border-slate-200 pl-3">
                         <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-0.5">Departures</span>
                         <span className="font-bold text-[#000000] text-[13px] underline decoration-dotted decoration-slate-400 cursor-pointer">{pkg.departureText}</span>
                      </div>
                   </div>

                   {/* Highlights */}
                   <div className="mt-auto">
                      <span className="text-green-600 font-bold text-[11px] mr-1">Tour Highlights</span>
                      <p className="text-[11px] text-slate-600 inline line-clamp-1">
                         {pkg.highlights} 
                      </p>
                   </div>
                </div>

                {/* Pricing & Actions (Right) */}
                <div className="md:w-[220px] shrink-0 flex flex-col justify-between md:border-l border-slate-100 md:pl-5 pt-4 md:pt-0 border-t md:border-t-0">
                    <div className="text-left md:text-right">
                        <span className="text-[10px] font-medium text-slate-400 block">Starts from</span>
                        <h3 className="text-[22px] font-bold text-[#000000] leading-none my-0.5">{formatPrice(pkg.offerPrice)}</h3>
                        <span className="text-[10px] text-slate-400 block font-medium">per person</span>
                        <div className="mt-1">
                           <span className="text-[11px] font-bold text-slate-700 underline decoration-dotted cursor-pointer">EMI from ₹{pkg.emi}/mo</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5 mt-4">
                        <button className="w-full bg-[#FFD801] hover:bg-[#eab308] text-[#000000] font-bold py-2 rounded-[4px] text-[13px] transition-colors shadow-sm uppercase">
                          Book Online
                        </button>
                        <button className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-2 rounded-[4px] text-[13px] transition-colors uppercase">
                          View Tour Details
                        </button>
                    </div>

                    <div className="flex justify-between items-center pt-3 text-slate-500 px-0.5">
                       <button className="flex items-center gap-1.5 text-[11px] font-bold hover:text-[#000000] transition-colors">
                          <RefreshCw className="w-3 h-3" /> Compare
                       </button>
                       <button className="flex items-center gap-1.5 text-[11px] font-bold hover:text-[#000000] transition-colors">
                          <MessageCircle className="w-3 h-3" /> Enquire
                       </button>
                    </div>
                </div>

              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
             <button className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm text-sm">
                Load More <ChevronDown className="w-4 h-4" />
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndiaPage;
