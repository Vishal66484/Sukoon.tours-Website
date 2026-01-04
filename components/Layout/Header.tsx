
import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic, User, Phone, ChevronDown, Menu, X, Star, Sparkles, ChevronRight, MapPin, ArrowRight, Flame, Compass, Mail, Coins } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

// Data structure for the India Mega Menu
const INDIA_REGIONS = {
  "North India": {
    "Himachal Pradesh": ["Manali", "Shimla", "Dalhousie", "Dharamshala", "Spiti Valley", "Kasol"],
    "Kashmir": ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    "Leh-Ladakh": ["Leh", "Nubra Valley", "Pangong Tso", "Kargil"],
    "Uttarakhand": ["Nainital", "Mussoorie", "Jim Corbett", "Rishikesh", "Haridwar", "Chardham Yatra"],
    "Uttar Pradesh": ["Varanasi", "Ayodhya", "Agra", "Lucknow", "Mathura", "Vrindavan"]
  },
  "South India": {
    "Kerala": ["Munnar", "Alleppey", "Thekkady", "Kovalam", "Wayanad"],
    "Tamil Nadu": ["Ooty", "Kodaikanal", "Rameswaram", "Madurai", "Kanyakumari"],
    "Karnataka": ["Coorg", "Mysore", "Hampi", "Gokarna", "Bangalore"],
    "Andhra & Telangana": ["Tirupati", "Hyderabad", "Visakhapatnam"]
  },
  "East & North East India": {
    "North East": ["Gangtok", "Pelling", "Darjeeling", "Shillong", "Kaziranga", "Tawang"],
    "West Bengal": ["Kolkata", "Sundarbans", "Digha"],
    "Odisha": ["Puri", "Bhubaneswar", "Konark"],
    "Andaman": ["Port Blair", "Havelock", "Neil Island"]
  },
  "Rajasthan, West & Central": {
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Ranthambore"],
    "Gujarat": ["Rann of Kutch", "Gir", "Somnath", "Dwarka", "Statue of Unity"],
    "Maharashtra": ["Mahabaleshwar", "Lonavala", "Shirdi", "Aurangabad", "Konkan"],
    "Madhya Pradesh": ["Indore", "Ujjain", "Khajuraho", "Kanha", "Bandhavgarh"]
  }
};

// Top Recommendations Data for India
const INDIA_RECOMMENDATIONS = {
  "North India": ["Vaishno Devi & Kashmir", "Shimla Manali Honeymoon", "Golden Triangle (Delhi-Agra-Jaipur)", "Char Dham Yatra"],
  "South India": ["Kerala Houseboat Specials", "Tirupati Balaji Darshan", "Mysore Coorg Ooty", "Rameswaram & Kanyakumari"],
  "East & North East India": ["Gangtok & Darjeeling", "Sundarbans Cruise", "Puri Jagannath Yatra", "Kaziranga Wildlife Safari"],
  "Rajasthan, West & Central": ["Royal Rajasthan on Wheels", "Rann Utsav Packages", "Ashtavinayak Darshan", "Statue of Unity & Gujarat"]
};

// Data structure for the World Mega Menu
const WORLD_REGIONS = {
  "Europe": {
    "France": ["Paris", "Nice", "Lyon", "Bordeaux"],
    "Switzerland": ["Zurich", "Lucerne", "Interlaken", "Zermatt", "Geneva"],
    "Italy": ["Rome", "Venice", "Florence", "Milan", "Naples"],
    "United Kingdom": ["London", "Edinburgh", "Manchester", "Glasgow"],
    "Spain": ["Barcelona", "Madrid", "Seville", "Valencia"]
  },
  "South East Asia": {
    "Thailand": ["Bangkok", "Pattaya", "Phuket", "Krabi", "Chiang Mai"],
    "Singapore": ["Sentosa", "Marina Bay", "City Tour"],
    "Malaysia": ["Kuala Lumpur", "Genting Highlands", "Langkawi"],
    "Vietnam": ["Hanoi", "Ho Chi Minh City", "Halong Bay", "Da Nang"],
    "Indonesia": ["Bali", "Jakarta", "Ubud"]
  },
  "Middle East": {
    "UAE": ["Dubai", "Abu Dhabi", "Sharjah"],
    "Turkey": ["Istanbul", "Cappadocia", "Antalya", "Pamukkale"],
    "Jordan": ["Amman", "Petra", "Dead Sea", "Wadi Rum"],
    "Oman": ["Muscat", "Nizwa", "Wahiba Sands"]
  },
  "Africa": {
    "Egypt": ["Alexandria", "Aswan", "Cairo", "Hurghada", "Luxor", "Nile Cruise"],
    "Kenya": ["Masai Mara", "Lake Nakuru", "Nairobi"],
    "Mauritius": ["Port Louis", "Ile Aux Cerfs"],
    "Seychelles": ["Mahe", "Praslin", "La Digue"],
    "South Africa": ["Cape Town", "George", "Johannesburg", "Knysna", "Sun City"],
    "Tanzania": ["Serengeti", "Ngorongoro", "Zanzibar"]
  },
  "America": {
    "USA": ["New York", "Las Vegas", "Los Angeles", "San Francisco", "Orlando"],
    "Canada": ["Toronto", "Vancouver", "Banff", "Montreal", "Niagara Falls"]
  },
  "Australia & New Zealand": {
    "Australia": ["Sydney", "Melbourne", "Gold Coast", "Cairns", "Great Barrier Reef"],
    "New Zealand": ["Auckland", "Queenstown", "Rotorua", "Christchurch"]
  },
  "Asia": {
    "Japan": ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    "South Korea": ["Seoul", "Busan", "Jeju Island"],
    "Sri Lanka": ["Colombo", "Kandy", "Bentota", "Nuwara Eliya"],
    "Bhutan": ["Thimphu", "Paro", "Punakha"]
  },
  "Antarctica": {
    "Antarctica": ["Antarctica Peninsula", "South Shetland Islands", "Weddell Sea"]
  }
};

// Top Recommendations Data for World
const WORLD_RECOMMENDATIONS = {
  "Europe": ["Swiss Paris London", "Italian Delight", "Eastern Europe Highlights", "Scandinavia & Fjords"],
  "South East Asia": ["Singapore & Malaysia Cruise", "Thailand Family Fun", "Vietnam & Cambodia", "Bali Honeymoon Exclusive"],
  "Middle East": ["Dubai Shopping Festival", "Turkey Grand Tour", "Jordan & Petra History", "Abu Dhabi Ferrari World"],
  "Africa": ["Kenya Wildlife Safari", "Egypt & Nile Cruise", "South Africa Garden Route", "Mauritius Luxury Escape"],
  "America": ["USA East & West Coast", "Canadian Rockies", "Alaska Cruise", "Orlando Theme Parks"],
  "Australia & New Zealand": ["Grand Australia", "New Zealand Scenic South", "Great Barrier Reef Experience", "Gold Coast Adventure"],
  "Asia": ["Japan Cherry Blossom", "Sri Lanka Ramayana Trail", "Bhutan Dragon Kingdom", "South Korea K-Pop Tour"],
  "Antarctica": ["Antarctica Expedition Cruise", "South Pole Adventure", "Penguin Safari"]
};

// --- NEW GROUP TOURS DATA ---
const GROUP_TOURS_INTERNATIONAL = [
  "AFRICA", "AMERICA", "AUSTRALIA NEWZEALAND", "BHUTAN", 
  "DUBAI AND MIDDLEEAST", "EURASIA", "EUROPE", "JAPAN CHINA", 
  "MAURITIUS", "NEPAL", "SEYCHELLES", "SOUTH EAST ASIA", "SRILANKA MALDIVES"
];

const GROUP_TOURS_INDIAN = [
  "ANDAMAN", "ANDHRA PRADESH", "CHARDHAM", "CHATTISGARH", "GOA", "GUJARAT", 
  "HIMACHAL", "KAILASH MANASAROV...", "KARNATAKA", "KASHMIR", "KERALA", 
  "LAKSHADWEEP", "LEH LADAKH", "MADHYA PRADESH", "MAHARASHTRA", "NAINITAL", 
  "NORTH EAST", "ORISSA", "PUNJAB", "RAJASTHAN", "SIKKIM DARJEELING", 
  "TAMIL NADU", "UTTAR PRADESH", "WEST BENGAL"
];

interface HeaderProps {
  onNavigate?: (page: 'home' | 'booking' | 'india' | 'world') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  // Use Currency Context
  const { currency, setCurrency } = useCurrency();
  
  // States for Mega Menu - India
  const [activeIndiaRegion, setActiveIndiaRegion] = useState<string>("North India");
  const [activeIndiaState, setActiveIndiaState] = useState<string>("Himachal Pradesh");
  const [isIndiaHovered, setIsIndiaHovered] = useState(false);

  // States for Mega Menu - World
  const [activeWorldRegion, setActiveWorldRegion] = useState<string>("Europe");
  const [activeWorldCountry, setActiveWorldCountry] = useState<string>("France");
  const [isWorldHovered, setIsWorldHovered] = useState(false);

  // States for Mega Menu - Group Tours
  const [isGroupHovered, setIsGroupHovered] = useState(false);

  // States for Mobile Mega Menu
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [mobileExpandedRegion, setMobileExpandedRegion] = useState<string | null>(null);
  
  const lastScrollY = useRef(0);

  const searchDestinations = [
    "Best of Europe",
    "Kerala Backwaters", 
    "Rann of Kutch",
    "Swiss Alps",
    "Dubai Shopping Festival",
    "Rajasthan Heritage",
    "Bali Honeymoon",
    "Singapore Highlights",
    "Kashmir Valley",
    "Vietnam Adventure"
  ];

  const menuItems = [
    "India", 
    "World",
    "Group Tours",
    "Specialty Tours",
    "Sukoon Mice Corporate Tours",
    "Customise Holidays",
    "Inbound",
    "Experiences",
    "Deals",
    "More"
  ];

  // Effect to update sub-selection when main region changes for India
  useEffect(() => {
    if (INDIA_REGIONS[activeIndiaRegion as keyof typeof INDIA_REGIONS]) {
        const states = Object.keys(INDIA_REGIONS[activeIndiaRegion as keyof typeof INDIA_REGIONS]);
        if (states.length > 0) setActiveIndiaState(states[0]);
    }
  }, [activeIndiaRegion]);

  // Effect to update sub-selection when main region changes for World
  useEffect(() => {
    if (WORLD_REGIONS[activeWorldRegion as keyof typeof WORLD_REGIONS]) {
        const countries = Object.keys(WORLD_REGIONS[activeWorldRegion as keyof typeof WORLD_REGIONS]);
        if (countries.length > 0) setActiveWorldCountry(countries[0]);
    }
  }, [activeWorldRegion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchDestinations.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Add a small threshold to prevent jitter
        if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
            return;
        }
        
        if (currentScrollY < 50) {
           setIsSubMenuVisible(true);
        } else {
           if (currentScrollY > lastScrollY.current) {
             setIsSubMenuVisible(false); // Hide on scroll down
           } else {
             setIsSubMenuVisible(true); // Show on scroll up
           }
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    if (onNavigate) onNavigate('home');
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (item: string) => {
    if (item === 'India' && onNavigate) {
      onNavigate('india');
      setIsMenuOpen(false); // Close mobile menu if open
    }
    if (item === 'World' && onNavigate) {
      onNavigate('world');
      setIsMenuOpen(false);
    }
    // Add other navigation logic here if needed
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full text-white font-medium bg-[#0E1E2C] shadow-xl transition-all duration-300">
        
        {/* Top Utility Strip */}
        <div className="hidden md:block border-b border-slate-200 py-1 relative z-[51] bg-slate-100">
          <div className="max-w-[90rem] mx-auto px-4 flex justify-between items-center text-[11px] font-bold tracking-wide">
            
            <div className="flex items-center gap-4 cursor-pointer group">
               <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-600 fill-red-600 animate-pulse" />
                  <span className="text-slate-900 font-black uppercase tracking-widest group-hover:text-red-700 transition-colors">New Year Special Tours Packages</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-red-600 font-black underline decoration-red-600/50 underline-offset-2 group-hover:text-red-800 transition-colors uppercase">Click Here</span>
               </div>
            </div>

            <div className="flex items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest">
               {/* Currency Dropdown */}
               <div className="flex items-center gap-1 hover:text-[#0E1E2C] transition-colors cursor-pointer text-slate-900 border-r border-slate-300 pr-3 mr-1">
                  <Coins className="w-3 h-3 text-slate-600" />
                  <select 
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as any)}
                    className="bg-transparent text-slate-900 font-black outline-none border-none cursor-pointer hover:text-red-600 focus:ring-0 text-[10px] uppercase p-0 m-0"
                  >
                    <option value="INR">INR (₹)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="AED">AED</option>
                  </select>
               </div>

               <div className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer text-slate-900">
                  <Star className="w-3 h-3 text-red-600 fill-red-600" />
                  <span>4.8/5 Ratings</span>
               </div>
               <span className="text-slate-300">|</span>
               <span className="hover:text-red-600 transition-colors cursor-pointer text-slate-800">Agent Login</span>
               <span className="text-slate-300">|</span>
               <span className="hover:text-red-600 transition-colors cursor-pointer text-slate-800">Pay Online</span>
            </div>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="max-w-[90rem] mx-auto px-4 pt-1 pb-0.5 md:py-1 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-3 relative z-50">
          
          {/* Row 1: Logo, Actions */}
          <div className="flex items-center justify-between w-full md:w-auto">
              
              <div className="flex items-center gap-3 md:hidden">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-2" onClick={handleLogoClick}>
                      <img 
                          src="https://sukoon.tours/wp-content/uploads/2026/01/Sukoon.-Tours-1.png" 
                          alt="Sukoon Tours" 
                          className="h-14 w-auto object-contain"
                          style={{ 
                          filter: 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(6646%) hue-rotate(359deg) brightness(102%) contrast(107%)' 
                          }}
                      />
                      <div className="flex flex-col">
                          <span className="text-2xl font-black text-white leading-none font-serif tracking-tight">Sukoon</span>
                          <span className="text-[10px] font-bold text-[#FFD801] leading-none tracking-widest uppercase">Tours</span>
                      </div>
                  </div>
              </div>

              {/* Desktop Logo */}
              <div className="hidden md:flex items-center gap-3 min-w-max cursor-pointer" onClick={handleLogoClick}>
                  <img 
                      src="https://sukoon.tours/wp-content/uploads/2026/01/Sukoon.-Tours-1.png" 
                      alt="Sukoon Tours" 
                      className="h-16 w-auto object-contain drop-shadow-md"
                      style={{ 
                      filter: 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(6646%) hue-rotate(359deg) brightness(102%) contrast(107%)' 
                      }}
                  />
                  <div className="flex flex-col justify-center">
                      <span className="text-3xl font-black text-white leading-none font-serif tracking-tight">Sukoon</span>
                      <span className="text-xs font-bold text-[#FFD801] leading-none tracking-[0.4em] uppercase mt-1">Tours</span>
                  </div>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                  <a href="tel:9890171797" className="flex items-center gap-1.5 bg-white/10 hover:bg-[#FFD801] hover:text-[#0E1E2C] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm border border-white/20 transition-all group backdrop-blur-md">
                      <Phone className="w-3 h-3 text-[#FFD801] group-hover:text-[#0E1E2C]" />
                      <span>Call</span>
                  </a>
                  <a href="mailto:sukoon.tours@gmail.com" className="flex items-center gap-1.5 bg-white/10 hover:bg-[#FFD801] hover:text-[#0E1E2C] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm border border-white/20 transition-all group backdrop-blur-md">
                      <Mail className="w-3 h-3 text-[#FFD801] group-hover:text-[#0E1E2C]" />
                      <span>Email</span>
                  </a>
              </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-5xl relative px-8">
            <div className="w-full flex items-center bg-white rounded-full transition-all px-6 py-2 shadow-xl border-2 border-white/10">
              <Search className="w-5 h-5 mr-3 text-slate-400" />
              <input 
                type="text" 
                placeholder={`Search "${searchDestinations[placeholderIndex]}"`}
                className="bg-transparent border-none outline-none w-full text-sm font-medium text-slate-900 placeholder:text-slate-400"
              />
              <Mic className="w-5 h-5 ml-3 cursor-pointer text-slate-400 hover:text-[#0E1E2C]" />
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2 md:gap-5 ml-auto md:ml-0 min-w-max">
            
            {/* Phone Number */}
            <a href="tel:9890171797" className="hidden lg:flex items-center gap-3 border border-white/20 rounded-full p-1 pr-4 hover:border-[#FFD801] transition-all cursor-pointer group bg-transparent">
               <div className="w-10 h-10 rounded-full bg-[#FFD801] flex items-center justify-center shrink-0 shadow-lg shadow-[#FFD801]/20">
                  <Phone className="w-5 h-5 text-[#0E1E2C]" />
               </div>
               <span className="text-base font-bold text-white tracking-wide">9890 1717 97</span>
            </a>
            
            {/* Email Us */}
            <a href="mailto:sukoon.tours@gmail.com" className="flex items-center gap-3 border border-white/20 rounded-full p-1 pr-4 hover:border-[#FFD801] transition-all cursor-pointer group bg-transparent">
              <div className="w-10 h-10 rounded-full bg-[#FFD801] flex items-center justify-center shrink-0 shadow-lg shadow-[#FFD801]/20">
                <Mail className="w-5 h-5 text-[#0E1E2C]" />
              </div>
              <span className="text-sm font-bold text-white tracking-wide">sukoon.tours@gmail.com</span>
            </a>
          </div>

          {/* Mobile Search Bar & Menu (Side by Side) */}
          <div className="w-full md:hidden mt-2 mb-2 flex items-center gap-3 px-1">
              {/* Hamburger */}
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="text-white p-1 shrink-0 active:scale-95 transition-transform"
                aria-label="Open Menu"
              >
                  <Menu className="w-8 h-8" />
              </button>
              
              {/* Search Bar Container with integrated Currency Selector on RIGHT */}
              <div className="flex-1 flex items-center bg-white rounded-full px-3 py-2 shadow-lg h-10 relative z-20">
                  <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input 
                      type="text" 
                      placeholder={`Search "${searchDestinations[placeholderIndex]}"`} 
                      className="bg-transparent border-none outline-none w-full text-xs font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-300 flex-1"
                  />
                  
                   {/* Embedded Currency Selector - Moved to Right */}
                  <div className="relative shrink-0 flex items-center border-l border-slate-300 pl-2 ml-2">
                     <select 
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as any)}
                        className="bg-transparent text-slate-900 font-bold text-[11px] outline-none border-none appearance-none pr-3 py-1 cursor-pointer"
                        style={{ backgroundImage: 'none' }}
                     >
                        <option value="INR">₹ INR</option>
                        <option value="USD">$ USD</option>
                        <option value="EUR">€ EUR</option>
                        <option value="AED">AED</option>
                     </select>
                     <ChevronDown className="w-3 h-3 text-slate-500 absolute right-0 pointer-events-none" />
                  </div>
              </div>
          </div>
        </div>

        {/* Sub-nav - Fixed Clipping, Position and Width */}
        <nav className={`hidden md:block transition-all duration-300 ease-in-out ${isSubMenuVisible ? 'max-h-[46px] opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden'} border-t border-white/10 bg-[#0c1a26]`}>
          <div className="max-w-[90rem] mx-auto px-4 flex justify-center items-center h-[46px] relative">
            <ul className="flex items-center justify-center gap-8 h-full text-[13px] font-bold text-white whitespace-nowrap">
              {menuItems.map((item) => (
                <li 
                    key={item} 
                    className={`group static flex items-center gap-1.5 cursor-pointer transition-colors h-full 
                        ${(item === 'India' && isIndiaHovered) || (item === 'World' && isWorldHovered) || (item === 'Group Tours' && isGroupHovered) ? 'text-[#FFD801]' : 'hover:text-[#FFD801]'}`}
                    onMouseEnter={() => {
                        if (item === 'India') setIsIndiaHovered(true);
                        if (item === 'World') setIsWorldHovered(true);
                        if (item === 'Group Tours') setIsGroupHovered(true);
                    }}
                    onMouseLeave={() => {
                        if (item === 'India') setIsIndiaHovered(false);
                        if (item === 'World') setIsWorldHovered(false);
                        if (item === 'Group Tours') setIsGroupHovered(false);
                    }}
                    onClick={() => handleMenuItemClick(item)}
                >
                  {item}
                  {(item === 'India' || item === 'World' || item === 'Group Tours' || item === 'Specialty Tours' || item === 'More') && 
                    <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform 
                        ${(item === 'India' && isIndiaHovered) || (item === 'World' && isWorldHovered) || (item === 'Group Tours' && isGroupHovered) ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                  }

                  {/* MEGA MENU FOR INDIA */}
                  {item === 'India' && (
                    <div 
                        className={`absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl z-[60] cursor-default transition-all duration-300 origin-top border-t-4 border-[#FFD801] rounded-b-xl overflow-hidden
                            ${isIndiaHovered ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'}`}
                    >
                        {/* Top Tabs - Regions */}
                        <div className="flex bg-slate-50 border-b border-slate-100 px-6">
                            {Object.keys(INDIA_REGIONS).map((region) => (
                                <div 
                                    key={region}
                                    className={`px-8 py-4 cursor-pointer font-bold text-sm border-b-2 transition-all duration-200
                                        ${activeIndiaRegion === region ? 'border-[#FFD801] text-[#0E1E2C] bg-white' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}
                                    onMouseEnter={() => setActiveIndiaRegion(region)}
                                >
                                    {region}
                                </div>
                            ))}
                        </div>

                        <div className="flex h-[450px]">
                            {/* COL 1: Left Sidebar - States (20%) */}
                            <div className="w-[20%] bg-white border-r border-slate-100 py-3 overflow-y-auto custom-scrollbar">
                                <h4 className="px-6 py-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Select State</h4>
                                <ul>
                                    {activeIndiaRegion && INDIA_REGIONS[activeIndiaRegion as keyof typeof INDIA_REGIONS] && 
                                     Object.keys(INDIA_REGIONS[activeIndiaRegion as keyof typeof INDIA_REGIONS]).map((state) => (
                                        <li 
                                            key={state}
                                            className={`px-6 py-3 flex items-center justify-between cursor-pointer font-bold text-[13px] transition-all
                                                ${activeIndiaState === state ? 'text-[#0E1E2C] bg-blue-50/50 border-l-4 border-[#FFD801]' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}
                                            onMouseEnter={() => setActiveIndiaState(state)}
                                        >
                                            {state}
                                            {activeIndiaState === state && <ChevronRight className="w-4 h-4 text-[#FFD801]" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* COL 2: Middle Content - Destinations Grid (55%) */}
                            <div className="w-[55%] p-8 bg-slate-50/30 overflow-y-auto">
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
                                    <MapPin className="w-5 h-5 text-[#FFD801]" />
                                    <div>
                                        <h3 className="text-xl font-black text-[#0E1E2C] leading-none">{activeIndiaState} Destinations</h3>
                                        <p className="text-xs text-slate-500 font-medium mt-1">Explore popular cities and tourist spots</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                                    {activeIndiaRegion && activeIndiaState && 
                                     INDIA_REGIONS[activeIndiaRegion as keyof typeof INDIA_REGIONS] && 
                                     // @ts-ignore
                                     INDIA_REGIONS[activeIndiaRegion][activeIndiaState] && 
                                     // @ts-ignore
                                     INDIA_REGIONS[activeIndiaRegion][activeIndiaState].map((city: string) => (
                                        <a key={city} href="#" className="flex items-start gap-2 group/city hover:-translate-y-0.5 transition-transform duration-200">
                                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-300 group-hover/city:bg-[#FFD801] transition-colors shrink-0"></span>
                                            <span className="text-[13px] font-medium text-slate-600 group-hover/city:text-[#0E1E2C] group-hover/city:font-bold transition-colors leading-tight">
                                                {city}
                                                {city === 'Chardham Yatra' && <span className="block mt-1 bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold w-fit">Trending</span>}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                                
                                <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
                                    <p className="text-xs text-slate-400 font-medium italic">"Chalo Bag Bharo, Nikal Pado!"</p>
                                    <button className="text-sm font-bold text-red-600 hover:text-red-800 flex items-center gap-1 group/btn bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all border border-slate-100">
                                        View all {activeIndiaState} Packages <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>

                            {/* COL 3: Right Sidebar - Top Recommendations (25%) */}
                            <div className="w-[25%] bg-[#fffbeb] p-6 border-l border-[#fef3c7]">
                                <div className="flex items-center gap-2 mb-6">
                                    <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
                                    <h3 className="text-sm font-black text-[#92400e] uppercase tracking-wider">Top Recommended</h3>
                                </div>

                                <div className="space-y-3">
                                    {activeIndiaRegion && INDIA_RECOMMENDATIONS[activeIndiaRegion as keyof typeof INDIA_RECOMMENDATIONS] &&
                                        // @ts-ignore
                                        INDIA_RECOMMENDATIONS[activeIndiaRegion].map((rec: string, index: number) => (
                                        <div key={index} className="group/rec cursor-pointer bg-white p-3 rounded-xl border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 group-hover/rec:bg-orange-100 text-orange-600 font-bold text-xs">
                                                {index + 1}
                                            </div>
                                            <span className="text-[13px] font-bold text-slate-700 group-hover/rec:text-[#0E1E2C] leading-snug">
                                                {rec}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-4 text-white text-center shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
                                    <p className="text-xs font-medium opacity-90 mb-1">Not sure where to go?</p>
                                    <p className="text-sm font-black uppercase tracking-wide flex items-center justify-center gap-1">
                                        Talk to Expert <ArrowRight className="w-4 h-4" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}

                  {/* MEGA MENU FOR WORLD */}
                  {item === 'World' && (
                    <div 
                        className={`absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl z-[60] cursor-default transition-all duration-300 origin-top border-t-4 border-[#FFD801] rounded-b-xl overflow-hidden
                            ${isWorldHovered ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'}`}
                    >
                         {/* Top Tabs - Continents */}
                         <div className="flex bg-slate-50 border-b border-slate-100 px-6">
                            {Object.keys(WORLD_REGIONS).map((region) => (
                                <div 
                                    key={region}
                                    className={`px-8 py-4 cursor-pointer font-bold text-sm border-b-2 transition-all duration-200
                                        ${activeWorldRegion === region ? 'border-[#FFD801] text-[#0E1E2C] bg-white' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}
                                    onMouseEnter={() => setActiveWorldRegion(region)}
                                >
                                    {region}
                                </div>
                            ))}
                        </div>

                        <div className="flex h-[450px]">
                            {/* COL 1: Left Sidebar - Countries (20%) */}
                            <div className="w-[20%] bg-white border-r border-slate-100 py-3 overflow-y-auto custom-scrollbar">
                                <h4 className="px-6 py-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Select Country</h4>
                                <ul>
                                    {activeWorldRegion && WORLD_REGIONS[activeWorldRegion as keyof typeof WORLD_REGIONS] && 
                                     Object.keys(WORLD_REGIONS[activeWorldRegion as keyof typeof WORLD_REGIONS]).map((country) => (
                                        <li 
                                            key={country}
                                            className={`px-6 py-3 flex items-center justify-between cursor-pointer font-bold text-[13px] transition-all
                                                ${activeWorldCountry === country ? 'text-[#0E1E2C] bg-blue-50/50 border-l-4 border-[#FFD801]' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}
                                            onMouseEnter={() => setActiveWorldCountry(country)}
                                        >
                                            {country}
                                            {activeWorldCountry === country && <ChevronRight className="w-4 h-4 text-[#FFD801]" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* COL 2: Middle Content - Destinations Grid (55%) */}
                            <div className="w-[55%] p-8 bg-slate-50/30 overflow-y-auto">
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
                                    <MapPin className="w-5 h-5 text-[#FFD801]" />
                                    <div>
                                        <h3 className="text-xl font-black text-[#0E1E2C] leading-none">{activeWorldCountry} Destinations</h3>
                                        <p className="text-xs text-slate-500 font-medium mt-1">Explore popular cities and tourist spots</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                                    {activeWorldRegion && activeWorldCountry && 
                                     WORLD_REGIONS[activeWorldRegion as keyof typeof WORLD_REGIONS] && 
                                     // @ts-ignore
                                     WORLD_REGIONS[activeWorldRegion][activeWorldCountry] && 
                                     // @ts-ignore
                                     WORLD_REGIONS[activeWorldRegion][activeWorldCountry].map((city: string) => (
                                        <a key={city} href="#" className="flex items-start gap-2 group/city hover:-translate-y-0.5 transition-transform duration-200">
                                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-300 group-hover/city:bg-[#FFD801] transition-colors shrink-0"></span>
                                            <span className="text-[13px] font-medium text-slate-600 group-hover/city:text-[#0E1E2C] group-hover/city:font-bold transition-colors leading-tight">{city}</span>
                                        </a>
                                    ))}
                                </div>
                                
                                <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
                                    <p className="text-xs text-slate-400 font-medium italic">"Explore the Unexplored"</p>
                                    <button className="text-sm font-bold text-red-600 hover:text-red-800 flex items-center gap-1 group/btn bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all border border-slate-100">
                                        View all {activeWorldCountry} Packages <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>

                             {/* COL 3: Right Sidebar - Top Recommendations (25%) */}
                             <div className="w-[25%] bg-[#ecfeff] p-6 border-l border-[#cffafe]">
                                <div className="flex items-center gap-2 mb-6">
                                    <Compass className="w-5 h-5 text-teal-600 animate-spin-slow" />
                                    <h3 className="text-sm font-black text-teal-800 uppercase tracking-wider">Top Recommended</h3>
                                </div>

                                <div className="space-y-3">
                                    {activeWorldRegion && WORLD_RECOMMENDATIONS[activeWorldRegion as keyof typeof WORLD_RECOMMENDATIONS] &&
                                        // @ts-ignore
                                        WORLD_RECOMMENDATIONS[activeWorldRegion].map((rec: string, index: number) => (
                                        <div key={index} className="group/rec cursor-pointer bg-white p-3 rounded-xl border border-teal-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 group-hover/rec:bg-teal-100 text-teal-600 font-bold text-xs">
                                                {index + 1}
                                            </div>
                                            <span className="text-[13px] font-bold text-slate-700 group-hover/rec:text-[#0E1E2C] leading-snug">
                                                {rec}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl p-4 text-white text-center shadow-lg transform hover:scale-[1.02] transition-transform cursor-pointer">
                                    <p className="text-xs font-medium opacity-90 mb-1">Planning a world tour?</p>
                                    <p className="text-sm font-black uppercase tracking-wide flex items-center justify-center gap-1">
                                        Get Visa Assist <ArrowRight className="w-4 h-4" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}

                  {/* MEGA MENU FOR GROUP TOURS */}
                  {item === 'Group Tours' && (
                    <div 
                        className={`absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl z-[60] cursor-default transition-all duration-300 origin-top border-t-4 border-[#FFD801] rounded-b-xl overflow-hidden px-8 py-8
                            ${isGroupHovered ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[#0E1E2C] font-black text-2xl uppercase tracking-tighter">Group Tours</span>
                            <div className="flex-1 h-px bg-slate-200"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                             {/* International Group Tours */}
                             <div>
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b-2 border-[#FFD801] w-fit mb-5 pb-1">International Group Tours</h3>
                                <div className="grid grid-cols-3 gap-y-3 gap-x-4">
                                    {GROUP_TOURS_INTERNATIONAL.map((dest) => (
                                        <a key={dest} href="#" className="text-[13px] font-bold text-slate-600 hover:text-[#0E1E2C] hover:translate-x-1 transition-all uppercase flex items-center gap-2">
                                           <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {dest}
                                        </a>
                                    ))}
                                </div>
                             </div>

                             {/* Indian Group Tours */}
                             <div className="border-l border-slate-100 pl-8">
                                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest border-b-2 border-[#FFD801] w-fit mb-5 pb-1">Indian Group Tours</h3>
                                <div className="grid grid-cols-3 gap-y-3 gap-x-4">
                                    {GROUP_TOURS_INDIAN.map((dest) => (
                                        <a key={dest} href="#" className="text-[13px] font-bold text-slate-600 hover:text-[#0E1E2C] hover:translate-x-1 transition-all uppercase flex items-center gap-2">
                                           <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {dest}
                                        </a>
                                    ))}
                                </div>
                             </div>
                        </div>
                    </div>
                  )}

                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer - Slide from Left */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 bottom-0 z-[61] w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Menu Header with Banner */}
        <div className="relative h-36 w-full shrink-0">
           <img 
             src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop" 
             alt="Menu Banner" 
             className="w-full h-full object-cover"
           />
           {/* Overlay Gradient for text readability if needed, or keeping it clean as per ref */}
           <button 
             onClick={() => setIsMenuOpen(false)} 
             className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white text-slate-800 transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
           
           <div className="absolute bottom-2 right-2">
             <img 
                src="https://sukoon.tours/wp-content/uploads/2026/01/Sukoon.-Tours-1.png" 
                alt="Sukoon"
                className="h-8 w-auto bg-white/90 px-2 py-1 rounded shadow-sm"
             />
           </div>
        </div>

        {/* Scrollable Menu Items - Added py-6 to avoid sticking to top */}
        <div className="flex-1 overflow-y-auto py-6">
          <ul className="flex flex-col">
            <li className="border-b border-slate-100">
               {/* Mobile Currency Switcher - Kept for visibility in menu as well */}
               <div className="flex justify-between items-center px-5 py-4">
                  <span className="text-[15px] font-bold text-slate-700">Currency</span>
                  <div className="flex items-center gap-1 border border-slate-200 rounded px-2 py-1">
                    <Coins className="w-4 h-4 text-slate-500" />
                    <select 
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value as any)}
                      className="bg-transparent text-slate-900 font-bold outline-none border-none text-sm"
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="AED">AED</option>
                    </select>
                  </div>
               </div>
            </li>
            {menuItems.map((item, index) => {
                const isMegaMenu = item === 'India' || item === 'World';
                const isGroupTours = item === 'Group Tours';
                const isExpanded = mobileExpandedMenu === item;

                return (
                    <li key={index} className="border-b border-slate-100">
                        <div
                            className="flex justify-between items-center px-5 py-4 hover:bg-slate-50 transition-colors group"
                        >
                            {/* Text clicks to Navigate immediately */}
                            <span 
                                className={`text-[15px] font-bold flex-1 cursor-pointer ${isExpanded ? 'text-[#FFD801]' : 'text-slate-700'} group-hover:text-[#0E1E2C]`}
                                onClick={() => handleMenuItemClick(item)}
                            >
                                {item}
                            </span>

                            {/* Chevron clicks to Expand (only for Mega Menu) */}
                            {isMegaMenu || isGroupTours ? (
                                <div 
                                    className="p-2 -mr-2 cursor-pointer" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setMobileExpandedMenu(isExpanded ? null : item);
                                        setMobileExpandedRegion(null);
                                    }}
                                >
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-[#FFD801]' : ''}`} />
                                </div>
                            ) : (
                                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0E1E2C]" />
                            )}
                        </div>

                        {/* Level 1 Expansion: Regions */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {isExpanded && item === 'India' && (
                                <div className="bg-slate-50 pb-2">
                                    {Object.keys(INDIA_REGIONS).map((region) => (
                                        <div key={region}>
                                            <div
                                                className="px-8 py-3 flex justify-between items-center cursor-pointer hover:bg-slate-100 border-l-[3px] border-transparent hover:border-[#FFD801]"
                                                onClick={() => setMobileExpandedRegion(mobileExpandedRegion === region ? null : region)}
                                            >
                                                <span className={`text-sm font-bold ${mobileExpandedRegion === region ? 'text-[#0E1E2C]' : 'text-slate-600'}`}>{region}</span>
                                                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileExpandedRegion === region ? 'rotate-180' : ''}`} />
                                            </div>

                                            {/* Level 2 Expansion: States */}
                                            {mobileExpandedRegion === region && (
                                                <div className="bg-white border-y border-slate-100 py-2">
                                                    {Object.keys(INDIA_REGIONS[region as keyof typeof INDIA_REGIONS]).map((state) => (
                                                        <a key={state} href="#" className="block px-12 py-2 text-[13px] font-medium text-slate-500 hover:text-[#0E1E2C] hover:bg-slate-50">
                                                            {state}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="px-8 py-3 mt-2">
                                       <button 
                                          onClick={() => handleMenuItemClick('India')}
                                          className="text-xs font-black text-red-600 hover:text-red-700 uppercase tracking-widest flex items-center gap-1"
                                       >
                                          View All India Packages <ArrowRight className="w-3.5 h-3.5" />
                                       </button>
                                    </div>
                                </div>
                            )}

                            {isExpanded && item === 'World' && (
                                <div className="bg-slate-50 pb-2">
                                    {Object.keys(WORLD_REGIONS).map((region) => (
                                        <div key={region}>
                                            <div
                                                className="px-8 py-3 flex justify-between items-center cursor-pointer hover:bg-slate-100 border-l-[3px] border-transparent hover:border-[#FFD801]"
                                                onClick={() => setMobileExpandedRegion(mobileExpandedRegion === region ? null : region)}
                                            >
                                                <span className={`text-sm font-bold ${mobileExpandedRegion === region ? 'text-[#0E1E2C]' : 'text-slate-600'}`}>{region}</span>
                                                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileExpandedRegion === region ? 'rotate-180' : ''}`} />
                                            </div>

                                            {/* Level 2 Expansion: Countries */}
                                            {mobileExpandedRegion === region && (
                                                <div className="bg-white border-y border-slate-100 py-2">
                                                    {Object.keys(WORLD_REGIONS[region as keyof typeof WORLD_REGIONS]).map((country) => (
                                                        <a key={country} href="#" className="block px-12 py-2 text-[13px] font-medium text-slate-500 hover:text-[#0E1E2C] hover:bg-slate-50">
                                                            {country}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    {/* Added Missing View All Button for World */}
                                    <div className="px-8 py-3 mt-2">
                                       <button 
                                          onClick={() => handleMenuItemClick('World')}
                                          className="text-xs font-black text-red-600 hover:text-red-700 uppercase tracking-widest flex items-center gap-1"
                                       >
                                          View All World Packages <ArrowRight className="w-3.5 h-3.5" />
                                       </button>
                                    </div>
                                </div>
                            )}

                            {isExpanded && item === 'Group Tours' && (
                                <div className="bg-slate-50 pb-4">
                                   {/* International Section */}
                                   <div className="mb-2">
                                      <div 
                                         className="px-8 py-3 flex justify-between items-center cursor-pointer hover:bg-slate-100 border-l-[3px] border-transparent hover:border-[#FFD801]"
                                         onClick={() => setMobileExpandedRegion(mobileExpandedRegion === 'International' ? null : 'International')}
                                      >
                                         <span className={`text-sm font-black uppercase tracking-wide ${mobileExpandedRegion === 'International' ? 'text-[#0E1E2C]' : 'text-slate-700'}`}>International Group Tours</span>
                                         <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileExpandedRegion === 'International' ? 'rotate-180' : ''}`} />
                                      </div>
                                      
                                      {mobileExpandedRegion === 'International' && (
                                         <div className="bg-white border-y border-slate-100 py-2">
                                            {GROUP_TOURS_INTERNATIONAL.map((dest) => (
                                               <a key={dest} href="#" className="block px-12 py-2 text-[12px] font-bold text-slate-500 hover:text-[#0E1E2C] hover:bg-slate-50 uppercase">
                                                  {dest}
                                               </a>
                                            ))}
                                         </div>
                                      )}
                                   </div>
                                   
                                   {/* Indian Section */}
                                   <div>
                                      <div 
                                         className="px-8 py-3 flex justify-between items-center cursor-pointer hover:bg-slate-100 border-l-[3px] border-transparent hover:border-[#FFD801]"
                                         onClick={() => setMobileExpandedRegion(mobileExpandedRegion === 'Indian' ? null : 'Indian')}
                                      >
                                         <span className={`text-sm font-black uppercase tracking-wide ${mobileExpandedRegion === 'Indian' ? 'text-[#0E1E2C]' : 'text-slate-700'}`}>Indian Group Tours</span>
                                         <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileExpandedRegion === 'Indian' ? 'rotate-180' : ''}`} />
                                      </div>
                                      
                                      {mobileExpandedRegion === 'Indian' && (
                                         <div className="bg-white border-y border-slate-100 py-2">
                                            {GROUP_TOURS_INDIAN.map((dest) => (
                                               <a key={dest} href="#" className="block px-12 py-2 text-[12px] font-bold text-slate-500 hover:text-[#0E1E2C] hover:bg-slate-50 uppercase">
                                                  {dest}
                                               </a>
                                            ))}
                                         </div>
                                      )}
                                   </div>
                                </div>
                            )}
                        </div>
                    </li>
                );
            })}
          </ul>
        </div>

        {/* Menu Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 shrink-0">
           <div className="mb-4">
             <p className="text-sm font-bold text-slate-500 mb-1">Contact</p>
             <div className="flex items-center gap-2 text-[#0E1E2C]">
                <Phone className="w-5 h-5 fill-current" />
                <span className="text-xl font-black">9890 1717 97</span>
             </div>
           </div>
           
           <button className="w-full bg-[#EF4444] text-white font-bold py-3.5 rounded text-sm uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
             Book With Expert
           </button>
        </div>
      </div>
    </>
  );
};

export default Header;
