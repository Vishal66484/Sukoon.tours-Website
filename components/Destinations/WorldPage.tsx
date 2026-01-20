
import React, { useState } from 'react';
import { Filter, CheckCircle2, Star, ChevronDown, Heart, Plane, FileCheck, ArrowRight, Globe, Sparkles, X } from 'lucide-react';
import { WORLD_PACKAGES } from '../../constants';
import { useCurrency } from '../../context/CurrencyContext';

// Updated Data with High-Performance Image URLs
const WORLD_DESTINATIONS_DATA = [
  { id: 1, name: "Africa", basePrice: 189785, tours: 7, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "America", basePrice: 195000, tours: 11, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Australia", basePrice: 291240, tours: 5, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Bhutan", basePrice: 98990, tours: 1, image: "https://images.unsplash.com/photo-1578564969244-93c683b51909?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Dubai", basePrice: 81670, tours: 10, image: "https://images.unsplash.com/photo-1512453979798-5ea90b7cad09?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Eurasia", basePrice: 103000, tours: 5, image: "https://images.unsplash.com/photo-1528659157262-581335b7501a?auto=format&fit=crop&q=80&w=600" },
  { id: 7, name: "Europe", basePrice: 170000, tours: 36, image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&q=80&w=600" },
  { id: 8, name: "Japan", basePrice: 253000, tours: 8, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600" },
  { id: 9, name: "Mauritius", basePrice: 143000, tours: 3, image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&q=80&w=600" },
  { id: 10, name: "Middle East", basePrice: 326000, tours: 1, image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?auto=format&fit=crop&q=80&w=600" },
  { id: 11, name: "Nepal", basePrice: 80990, tours: 3, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600" },
  { id: 12, name: "South East Asia", basePrice: 66000, tours: 23, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=600" },
  { id: 13, name: "SriLanka", basePrice: 76670, tours: 3, image: "https://images.unsplash.com/photo-1586861635167-e5223aeb4227?auto=format&fit=crop&q=80&w=600" },
];

const WorldPage: React.FC = () => {
  // Advanced Filter States
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [selectedVisa, setSelectedVisa] = useState<string[]>([]);
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [priceRange, setPriceRange] = useState<number>(500000); 
  
  // Compare State
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareBar, setShowCompareBar] = useState(false);
  const { formatPrice, exchangeRate } = useCurrency();

  const toggleFilter = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter(item => item !== id));
      if (compareList.length === 1) setShowCompareBar(false);
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, id]);
        setShowCompareBar(true);
      } else {
        alert("You can only compare up to 3 packages.");
      }
    }
  };

  // Filter Logic
  const filteredPackages = WORLD_PACKAGES.filter(pkg => {
    const matchContinent = selectedContinents.length === 0 || (pkg.continent && selectedContinents.includes(pkg.continent));
    const matchVisa = selectedVisa.length === 0 || (pkg.visaType && selectedVisa.includes(pkg.visaType));
    const matchPrice = pkg.offerPrice ? pkg.offerPrice * exchangeRate <= priceRange * exchangeRate : true;
    const matchFlight = includeFlights ? pkg.withFlight === true : true; 
    
    return matchContinent && matchVisa && matchPrice && matchFlight;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 font-sans selection:bg-[#FFD801] selection:text-[#0E1E2C]">
      
      {/* Hero Section - Video Background with Fallback Color */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden group bg-[#0E1E2C]">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transform scale-105 z-0"
            poster="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
        >
          {/* Using a lighter/more reliable video source */}
          <source src="https://videos.pexels.com/video-files/3252355/3252355-hd_1280_720_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-[#0E1E2C]/30 mix-blend-multiply z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2C]/60 via-transparent to-[#f8fafc] z-0"></div>
        
        <div className="absolute inset-0 flex items-center justify-center relative z-10">
          <div className="text-center px-4 max-w-4xl mx-auto mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
              <Sparkles className="w-3 h-3 text-[#FFD801]" />
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">Premium International Tours</span>
            </div>
            {/* FORCE SANS-SERIF FONT */}
            <h1 className="text-4xl md:text-7xl font-sans font-black text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
              The World Awaits <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD801] to-[#fde047]">You</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md font-sans">
              Curated journeys to the most breathtaking destinations across the globe. Experience luxury, culture, and adventure with Sukoon.
            </p>
          </div>
        </div>
      </div>

      {/* Destination Cards Grid - NO HOVER NEEDED */}
      <section className="max-w-[90rem] mx-auto px-4 md:px-6 -mt-24 md:-mt-32 relative z-20 mb-16">
          <div className="flex items-center gap-3 mb-6 pl-2">
             <div className="h-[3px] w-12 bg-[#FFD801] shadow-[0_0_10px_#FFD801]"></div>
             <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-widest flex items-center gap-2 font-sans drop-shadow-lg">
                Explore Popular Destinations
             </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {WORLD_DESTINATIONS_DATA.map((dest) => (
               <div key={dest.id} className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl shadow-black/40 ring-1 ring-white/10 bg-slate-900">
                 {/* Image */}
                 <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" 
                 />
                 
                 {/* Stronger Gradient for Readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 z-10"></div>
                 
                 {/* Content - Always Visible on top of gradient */}
                 <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="font-sans font-black text-lg md:text-xl text-[#FFD801] leading-tight mb-2 drop-shadow-md tracking-wide">
                        {dest.name}
                    </h3>
                    
                    {/* Divider Line */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-[#FFD801] to-transparent mb-3 opacity-60"></div>
                    
                    <div className="flex justify-between items-end">
                       <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold mb-0.5 font-sans">Starts From</span>
                          <span className="text-sm md:text-base font-black text-white tracking-tight font-sans">{formatPrice(dest.basePrice)}*</span>
                       </div>
                       
                       <div className="bg-[#FFD801] text-[#0E1E2C] px-2.5 py-1.5 rounded-lg shadow-lg transform transition-transform group-hover:scale-105">
                          <span className="text-[10px] md:text-xs font-black block font-sans">{dest.tours} Tours</span>
                       </div>
                    </div>
                 </div>
               </div>
            ))}
          </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Advanced Sidebar Filters */}
        <aside className="hidden lg:block w-[280px] flex-shrink-0 space-y-6 sticky top-[135px] h-fit z-30">
          <div className="flex justify-between items-center px-1 pb-2 border-b border-slate-200">
             <h3 className="font-sans font-bold text-xl text-[#0E1E2C] flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FFD801]" /> Filters
             </h3>
             <button 
                onClick={() => {setSelectedContinents([]); setSelectedVisa([]); setPriceRange(500000);}}
                className="text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-[#FFD801] transition-colors font-sans"
             >
                Reset All
             </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100">
             <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-[#0E1E2C] text-sm flex items-center gap-2 font-sans">
                    <Plane className="w-4 h-4 text-slate-400" /> Flights Included
                </h3>
                <button 
                    onClick={() => setIncludeFlights(!includeFlights)}
                    className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${includeFlights ? 'bg-[#0E1E2C]' : 'bg-slate-200'}`}
                >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-all duration-300 ${includeFlights ? 'left-6' : 'left-1'}`}></div>
                </button>
             </div>
             <p className="text-[10px] text-slate-400 font-medium leading-relaxed font-sans">Toggle to see packages with round-trip airfare included.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100">
             <h3 className="font-bold text-[#0E1E2C] text-sm flex items-center gap-2 mb-4 font-sans">
                <FileCheck className="w-4 h-4 text-slate-400" /> Visa Type
             </h3>
             <div className="flex flex-wrap gap-2">
                 {['Visa Free', 'Visa on Arrival', 'E-Visa', 'Paper Visa'].map((type) => (
                     <span 
                        key={type}
                        onClick={() => toggleFilter(type, selectedVisa, setSelectedVisa)}
                        className={`text-[10px] font-bold px-3 py-2 rounded-lg cursor-pointer border transition-all duration-200 font-sans ${selectedVisa.includes(type) ? 'bg-[#0E1E2C] text-white border-[#0E1E2C] shadow-md' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-[#FFD801] hover:bg-white'}`}
                     >
                        {type}
                     </span>
                 ))}
             </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100">
             <div className="flex justify-between items-center mb-5">
                <h3 className="font-bold text-[#0E1E2C] text-sm font-sans">Budget Per Person</h3>
                <span className="text-xs font-black text-[#FFD801] bg-[#0E1E2C] px-2 py-1 rounded font-sans">{formatPrice(priceRange)}</span>
             </div>
             <input 
                type="range" 
                min="30000" 
                max="500000" 
                step="10000"
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FFD801]"
             />
             <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-3 uppercase tracking-wide font-sans">
                <span>{formatPrice(30000)}</span>
                <span>{formatPrice(500000)}+</span>
             </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 w-full">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
             <div>
                <h2 className="text-xl font-sans font-black text-[#0E1E2C] flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#FFD801]" />
                    {filteredPackages.length} Premium Packages Found
                </h2>
                <p className="text-slate-400 text-xs font-medium mt-1 font-sans">Showing curated results based on your preferences</p>
             </div>
             <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide font-sans">Sort By:</span>
                <div className="relative">
                    <select className="bg-slate-50 border border-slate-200 text-[#0E1E2C] text-xs font-bold py-2.5 pl-4 pr-10 rounded-lg outline-none focus:border-[#FFD801] appearance-none cursor-pointer hover:bg-white transition-colors font-sans">
                        <option>Recommended</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
             </div>
          </div>

          <div className="space-y-8">
            {filteredPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(14,30,44,0.15)] transition-all duration-300 overflow-hidden flex flex-col md:flex-row group relative"
              >
                
                {/* Visual Section (Left) */}
                <div className="w-full md:w-[340px] h-60 md:h-auto relative shrink-0 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E2C]/80 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                     <span className="bg-white/90 backdrop-blur-sm text-[#0E1E2C] text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-sm border border-white/50 font-sans">{pkg.visaType}</span>
                     {pkg.withFlight && <span className="bg-[#0E1E2C]/90 backdrop-blur-sm text-[#FFD801] text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1 border border-white/10 font-sans"><Plane className="w-3 h-3" /> Flight Incl.</span>}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white hover:text-red-500 transition-all text-white border border-white/20">
                     <Heart className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                     <div className="bg-[#FFD801] text-[#0E1E2C] px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider shadow-lg font-sans">
                        {pkg.code}
                     </div>
                  </div>
                </div>

                {/* Info Section (Middle) */}
                <div className="flex-1 flex flex-col min-w-0 p-5 md:p-6 md:pr-0">
                   
                   <div className="flex justify-between items-start mb-3">
                       <div>
                           <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1 font-sans">
                                    <Globe className="w-3 h-3" /> {pkg.continent}
                                </span>
                           </div>
                           <h3 className="text-2xl font-sans font-black text-[#0E1E2C] group-hover:text-blue-700 transition-colors leading-tight">{pkg.name}</h3>
                       </div>
                   </div>

                   <div className="flex gap-4 my-4 pb-4 border-b border-slate-100 overflow-x-auto no-scrollbar">
                       <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 min-w-fit flex flex-col items-center justify-center">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1 font-sans">Duration</span>
                           <span className="font-bold text-[#0E1E2C] text-xs whitespace-nowrap font-sans">{pkg.duration}</span>
                       </div>
                       <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 min-w-fit flex flex-col items-center justify-center">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1 font-sans">Cities</span>
                           <span className="font-bold text-[#0E1E2C] text-xs whitespace-nowrap font-sans">{pkg.citiesCount} Cities</span>
                       </div>
                       <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 min-w-fit flex flex-col items-center justify-center">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1 font-sans">Departure</span>
                           <span className="font-bold text-[#0E1E2C] text-xs whitespace-nowrap font-sans">{pkg.departureText}</span>
                       </div>
                       <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 min-w-fit flex flex-col items-center justify-center">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1 font-sans">Rating</span>
                           <div className="flex items-center gap-1 text-[#FFD801] text-xs font-black font-sans">
                              <span>{pkg.rating}</span> <Star className="w-3 h-3 fill-current" />
                           </div>
                       </div>
                   </div>

                   <div className="mt-1 mb-2">
                      <p className="text-xs text-slate-600 leading-relaxed font-medium font-sans">
                         <span className="text-[#0E1E2C] font-black uppercase tracking-wide text-[10px] mr-2 bg-slate-100 px-1.5 py-0.5 rounded font-sans">Highlights</span>
                         {pkg.highlights}
                      </p>
                   </div>
                   
                   <div className="mt-auto pt-2">
                      <label className="flex items-center gap-2 cursor-pointer group/compare w-fit">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${compareList.includes(pkg.id) ? 'bg-[#FFD801] border-[#FFD801]' : 'border-slate-300 bg-white group-hover/compare:border-[#FFD801]'}`}>
                              <CheckCircle2 className={`w-3 h-3 ${compareList.includes(pkg.id) ? 'text-[#0E1E2C]' : 'text-transparent'}`} />
                          </div>
                          <input type="checkbox" className="hidden" onChange={() => toggleCompare(pkg.id)} checked={compareList.includes(pkg.id)} />
                          <span className="text-[11px] font-bold text-slate-400 group-hover/compare:text-[#0E1E2C] transition-colors font-sans">Compare</span>
                      </label>
                   </div>
                </div>

                {/* Price & Booking (Right) */}
                <div className="md:w-[240px] shrink-0 flex flex-col justify-center bg-slate-50/50 md:bg-white p-5 md:p-6 md:border-l border-slate-100">
                    <div className="text-left md:text-right mb-6">
                        {pkg.originalPrice && <span className="text-xs font-bold text-slate-400 line-through mr-2 font-sans">{formatPrice(pkg.originalPrice)}</span>}
                        <h3 className="text-3xl font-black text-[#0E1E2C] leading-none mb-1 tracking-tight font-sans">{formatPrice(pkg.offerPrice || 0)}</h3>
                        <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wide font-sans">per person + 5% GST</span>
                        <div className="mt-2 inline-block bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase font-sans">
                           Available Now
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full bg-[#FFD801] hover:bg-[#0E1E2C] hover:text-[#FFD801] text-[#0E1E2C] font-black py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-[#FFD801]/20 uppercase tracking-widest flex items-center justify-center gap-2 group/btn font-sans">
                           Book Now <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full bg-white border-2 border-slate-100 hover:border-[#0E1E2C] text-slate-700 hover:text-[#0E1E2C] font-bold py-3.5 rounded-xl text-xs transition-all uppercase tracking-widest font-sans">
                           View Itinerary
                        </button>
                    </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating Compare Bar */}
      {showCompareBar && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0E1E2C] text-white shadow-2xl rounded-full px-6 py-3 z-50 animate-fade-in-up w-[90%] max-w-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FFD801] font-sans">{compareList.length} Selected</span>
                  <div className="flex -space-x-3">
                      {compareList.map(id => {
                          const p = WORLD_PACKAGES.find(x => x.id === id);
                          return (
                              <div key={id} className="w-10 h-10 rounded-full border-2 border-[#0E1E2C] overflow-hidden bg-white relative group/thumb cursor-pointer hover:z-10 transition-all hover:scale-110">
                                  <img src={p?.image} className="w-full h-full object-cover" alt="" />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity" onClick={() => toggleCompare(id)}>
                                    <X className="w-4 h-4 text-white" />
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>
              <div className="flex gap-3">
                  <button 
                    onClick={() => {setCompareList([]); setShowCompareBar(false)}}
                    className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-wider px-3 font-sans"
                  >
                      Clear
                  </button>
                  <button className="bg-white text-[#0E1E2C] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#FFD801] transition-colors shadow-lg font-sans">
                      Compare
                  </button>
              </div>
          </div>
      )}

    </div>
  );
};

export default WorldPage;
