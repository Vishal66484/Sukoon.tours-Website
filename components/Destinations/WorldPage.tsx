
import React, { useState } from 'react';
import { MapPin, Filter, Search, CheckCircle2, Star, Info, RefreshCw, MessageCircle, ChevronDown, ChevronRight, X, Heart, Plane, FileCheck, ArrowRight, Globe } from 'lucide-react';
import { WORLD_PACKAGES } from '../../constants';
import { TourPackage } from '../../types';
import { useCurrency } from '../../context/CurrencyContext';

// Data for the top Destination Cards
const WORLD_DESTINATIONS_DATA = [
  { id: 1, name: "Africa", basePrice: 189785, tours: 7, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "America", basePrice: 195000, tours: 11, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Australia New Zealand", basePrice: 291240, tours: 5, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Bhutan", basePrice: 98990, tours: 1, image: "https://images.unsplash.com/photo-1578564969244-93c683b51909?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Dubai and Middle East", basePrice: 81670, tours: 10, image: "https://images.unsplash.com/photo-1512453979798-5ea90b7cad09?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Eurasia", basePrice: 103000, tours: 5, image: "https://images.unsplash.com/photo-1528659157262-581335b7501a?auto=format&fit=crop&q=80&w=600" },
  { id: 7, name: "Europe", basePrice: 170000, tours: 36, image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?auto=format&fit=crop&q=80&w=600" },
  { id: 8, name: "Japan China", basePrice: 253000, tours: 8, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600" },
  { id: 9, name: "Mauritius", basePrice: 143000, tours: 3, image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?auto=format&fit=crop&q=80&w=600" },
  { id: 10, name: "Middle East", basePrice: 326000, tours: 1, image: "https://images.unsplash.com/photo-1597983073453-2c1813b28b57?auto=format&fit=crop&q=80&w=600" },
  { id: 11, name: "Nepal", basePrice: 80990, tours: 3, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600" },
  { id: 12, name: "South East Asia", basePrice: 66000, tours: 23, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600" },
  { id: 13, name: "SriLanka Maldives", basePrice: 76670, tours: 3, image: "https://images.unsplash.com/photo-1586861635167-e5223aeb4227?auto=format&fit=crop&q=80&w=600" },
];

const WorldPage: React.FC = () => {
  // Advanced Filter States
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [selectedVisa, setSelectedVisa] = useState<string[]>([]);
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [priceRange, setPriceRange] = useState<number>(500000); // Increased default range
  
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
    <div className="bg-[#f2f4f7] min-h-screen pb-20 font-sans">
      
      {/* Hero Section - World Travel */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
          alt="World Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
          <div className="max-w-[90rem] mx-auto px-6 pb-12 w-full">
            <div className="text-white animate-fade-in-up">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold opacity-90 mb-3 tracking-wide">
                <span>Home</span> <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#FFD801]" /> <span className="text-[#FFD801]">World</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-2 leading-tight tracking-tight">Discover the World</h1>
              <p className="text-slate-300 font-medium max-w-2xl">Explore international destinations with our premium, all-inclusive group tours.</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Destination Cards Grid */}
      <section className="max-w-[85rem] mx-auto px-4 md:px-6 py-8 pb-4">
          <h2 className="text-xl md:text-2xl font-black text-[#0E1E2C] mb-6 flex items-center gap-2">
             <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#FFD801]" /> Explore Popular Destinations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {WORLD_DESTINATIONS_DATA.map((dest) => (
               <div key={dest.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-md bg-slate-900 border border-slate-100">
                 <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="font-bold text-[13px] md:text-[14px] leading-tight mb-1 truncate drop-shadow-sm">{dest.name}</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end text-[10px] md:text-[11px] font-medium text-slate-300 gap-0.5 md:gap-0">
                       <span className="leading-tight">Starting: <span className="text-[#FFD801] font-bold block md:inline">{formatPrice(dest.basePrice)}*</span></span>
                       <span className="font-bold bg-white/10 px-1.5 py-0.5 rounded backdrop-blur-sm mt-1 md:mt-0 w-fit">{dest.tours} Tours</span>
                    </div>
                 </div>
               </div>
            ))}
          </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-[85rem] mx-auto px-4 md:px-6 py-8 flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Advanced Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-[280px] flex-shrink-0 space-y-5 sticky top-[135px] h-fit z-30">
          
          <div className="flex justify-between items-center px-1">
             <h3 className="font-bold text-[16px] text-[#0E1E2C] flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filters
             </h3>
             <button 
                onClick={() => {setSelectedContinents([]); setSelectedVisa([]); setPriceRange(500000);}}
                className="text-[12px] font-bold text-slate-500 underline decoration-dotted hover:text-slate-900"
             >
                Reset All
             </button>
          </div>

          {/* Smart Switch: Flights */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-slate-900 text-[13px] flex items-center gap-2">
                    <Plane className="w-3.5 h-3.5" /> With Flights
                </h3>
                <div 
                    onClick={() => setIncludeFlights(!includeFlights)}
                    className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${includeFlights ? 'bg-[#0E1E2C]' : 'bg-slate-300'}`}
                >
                    <div className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-all ${includeFlights ? 'left-6' : 'left-1'}`}></div>
                </div>
             </div>
             <p className="text-[10px] text-slate-400 font-medium mt-2">Show prices including round-trip airfare.</p>
          </div>

          {/* Visa Type Filter */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 text-[13px] flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5" /> Visa Preference
                </h3>
             </div>
             <div className="flex flex-wrap gap-2">
                 {['Visa Free', 'Visa on Arrival', 'E-Visa', 'Paper Visa'].map((type) => (
                     <span 
                        key={type}
                        onClick={() => toggleFilter(type, selectedVisa, setSelectedVisa)}
                        className={`text-[10px] font-bold px-2 py-1.5 rounded-md cursor-pointer border transition-all ${selectedVisa.includes(type) ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400'}`}
                     >
                        {type}
                     </span>
                 ))}
             </div>
          </div>

          {/* Dynamic Price Range */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 text-[13px]">Max Budget</h3>
                <span className="text-[12px] font-black text-[#0E1E2C]">{formatPrice(priceRange)}</span>
             </div>
             <input 
                type="range" 
                min="30000" 
                max="500000" 
                step="10000"
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FFD801]"
             />
             <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-2">
                <span>{formatPrice(30000)}</span>
                <span>{formatPrice(500000)}+</span>
             </div>
          </div>

          {/* Continent Filter */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 text-[13px]">Region</h3>
                <ChevronDown className="w-4 h-4 text-slate-400" />
             </div>
             <div className="space-y-3">
               {['Europe', 'Asia', 'Middle East', 'Australia'].map((region, i) => (
                 <label key={i} className="flex items-center gap-3 cursor-pointer group">
                   <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-all ${selectedContinents.includes(region) ? 'bg-[#FFD801] border-[#FFD801]' : 'border-slate-300 bg-white group-hover:border-slate-400'}`}>
                        {selectedContinents.includes(region) && <CheckCircle2 className="w-3 h-3 text-black" />}
                   </div>
                   <span className="text-[13px] font-medium text-slate-700 group-hover:text-slate-900">{region}</span>
                 </label>
               ))}
             </div>
          </div>

        </aside>

        {/* Content Area */}
        <div className="flex-1 w-full">
          
          {/* Header Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
             <div>
                <h2 className="text-[18px] font-black text-[#0E1E2C]">
                    {filteredPackages.length} International Packages
                </h2>
                <p className="text-slate-400 text-[11px] font-bold">Showing curated results based on your filters</p>
             </div>
             <div className="flex items-center gap-3">
                <select className="bg-slate-50 border border-slate-200 text-slate-700 text-[12px] font-bold py-2 px-3 rounded-lg outline-none focus:border-[#FFD801]">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
             </div>
          </div>

          {/* Packages List */}
          <div className="space-y-6">
            {filteredPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-[16px] border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden flex flex-col md:flex-row p-4 gap-6 group relative"
              >
                
                {/* Visual Section (Static Image Only) */}
                <div className="w-full md:w-[320px] h-56 md:h-[240px] relative shrink-0 rounded-[12px] overflow-hidden bg-slate-100 group-hover:scale-[1.01] transition-transform">
                  
                  {/* Base Image */}
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover transition-transform duration-500" 
                  />
                  
                  {/* Gradient & Badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                     <span className="bg-[#FFD801] text-[#0E1E2C] text-[10px] font-black uppercase px-2 py-1 rounded shadow-sm">{pkg.visaType}</span>
                     {pkg.withFlight && <span className="bg-slate-900 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm flex items-center gap-1"><Plane className="w-2.5 h-2.5" /> Flight Incl.</span>}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all text-white">
                     <Heart className="w-4 h-4" />
                  </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col min-w-0 py-1">
                   
                   <div className="flex justify-between items-start mb-2">
                       <div>
                           <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{pkg.continent}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{pkg.code}</span>
                           </div>
                           <h3 className="text-[20px] font-black text-[#0E1E2C] group-hover:text-blue-700 transition-colors leading-tight">{pkg.name}</h3>
                       </div>
                       
                       {/* Rating */}
                       <div className="flex flex-col items-end">
                            <div className="flex text-[#FFD801] gap-0.5 mb-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(pkg.rating || 5) ? 'fill-current' : 'text-slate-200'}`} />
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-slate-400">{pkg.reviews} reviews</span>
                       </div>
                   </div>

                   {/* Key Features */}
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-3">
                       <div className="bg-slate-50 p-2 rounded border border-slate-100 text-center">
                           <span className="block text-[10px] font-bold text-slate-400 uppercase">Duration</span>
                           <span className="font-bold text-[#0E1E2C] text-[12px]">{pkg.duration}</span>
                       </div>
                       <div className="bg-slate-50 p-2 rounded border border-slate-100 text-center">
                           <span className="block text-[10px] font-bold text-slate-400 uppercase">Cities</span>
                           <span className="font-bold text-[#0E1E2C] text-[12px]">{pkg.citiesCount} Cities</span>
                       </div>
                       <div className="bg-slate-50 p-2 rounded border border-slate-100 text-center col-span-2">
                           <span className="block text-[10px] font-bold text-slate-400 uppercase">Next Departure</span>
                           <span className="font-bold text-[#0E1E2C] text-[12px]">{pkg.departureText}</span>
                       </div>
                   </div>

                   {/* Highlights */}
                   <div className="mt-1 mb-4">
                      <p className="text-[12px] text-slate-600 leading-relaxed">
                         <span className="text-green-600 font-bold mr-1">Highlights:</span>
                         {pkg.highlights}
                      </p>
                   </div>

                   <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 cursor-pointer group/compare">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${compareList.includes(pkg.id) ? 'bg-[#FFD801] border-[#FFD801]' : 'border-slate-300 bg-white group-hover/compare:border-[#FFD801]'}`}>
                                    <CheckCircle2 className={`w-3 h-3 ${compareList.includes(pkg.id) ? 'text-[#0E1E2C]' : 'text-transparent'}`} />
                                </div>
                                <input type="checkbox" className="hidden" onChange={() => toggleCompare(pkg.id)} checked={compareList.includes(pkg.id)} />
                                <span className="text-[11px] font-bold text-slate-500 group-hover/compare:text-[#0E1E2C]">Add to Compare</span>
                            </label>
                       </div>
                       <button className="text-[11px] font-bold text-blue-600 flex items-center gap-1 hover:underline">
                           View Itinerary <ArrowRight className="w-3 h-3" />
                       </button>
                   </div>
                </div>

                {/* Price & Booking (Right) */}
                <div className="md:w-[200px] shrink-0 flex flex-col justify-center md:border-l border-slate-100 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
                    <div className="text-right mb-4">
                        {pkg.originalPrice && <span className="text-[11px] font-bold text-slate-400 line-through mr-2">{formatPrice(pkg.originalPrice)}</span>}
                        <h3 className="text-[24px] font-black text-[#0E1E2C] leading-none mb-1">{formatPrice(pkg.offerPrice || 0)}</h3>
                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wide">per person</span>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full bg-[#FFD801] hover:bg-black hover:text-[#FFD801] text-[#0E1E2C] font-black py-3 rounded-lg text-[12px] transition-all shadow-md shadow-[#FFD801]/20 uppercase tracking-wide">
                           Book Now
                        </button>
                        <button className="w-full bg-white border border-slate-200 hover:border-[#0E1E2C] text-slate-700 font-bold py-3 rounded-lg text-[12px] transition-all uppercase tracking-wide">
                           Enquire
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
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.1)] border-t border-slate-200 p-4 z-50 animate-slide-up">
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                      <span className="text-sm font-black text-[#0E1E2C] uppercase tracking-wide">{compareList.length} Packages Selected</span>
                      <div className="flex -space-x-2">
                          {compareList.map(id => {
                              const p = WORLD_PACKAGES.find(x => x.id === id);
                              return (
                                  <div key={id} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden" title={p?.name}>
                                      <img src={p?.image} className="w-full h-full object-cover" alt="" />
                                  </div>
                              )
                          })}
                      </div>
                  </div>
                  <div className="flex gap-3">
                      <button 
                        onClick={() => {setCompareList([]); setShowCompareBar(false)}}
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wide hover:text-red-500"
                      >
                          Clear All
                      </button>
                      <button className="bg-[#0E1E2C] text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#FFD801] hover:text-[#0E1E2C] transition-colors">
                          Compare Now
                      </button>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};

export default WorldPage;
