
import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic, User, Phone, ChevronDown, Menu, X, Star } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(true);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchDestinations.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
            return;
        }
        
        if (currentScrollY < 100) {
           setIsSubMenuVisible(true);
        } else {
           if (currentScrollY > lastScrollY.current) {
             setIsSubMenuVisible(false);
           } else {
             setIsSubMenuVisible(true);
           }
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0E1E2C] text-white shadow-xl font-medium transition-all duration-300">
      
      {/* Restored Top Utility Strip (Patti) */}
      <div className="hidden md:block bg-[#08121a] border-b border-white/5 py-1.5 relative z-[51]">
        <div className="max-w-[90rem] mx-auto px-4 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1.5 text-[#FFD801]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD801] animate-pulse"></span>
                India's Premium Travel Brand
             </span>
             <span className="hidden lg:inline text-slate-600">|</span>
             <div className="hidden lg:flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                <Star className="w-3 h-3 text-[#FFD801] fill-[#FFD801]" />
                <span>4.8/5 Ratings</span>
             </div>
             <span className="hidden lg:inline text-slate-600">|</span>
             <span className="hidden lg:inline hover:text-white transition-colors cursor-pointer">Support</span>
          </div>
          <div className="flex items-center gap-4">
             <span className="hover:text-white transition-colors cursor-pointer">Agent Login</span>
             <span className="text-slate-600">|</span>
             <span className="hover:text-white transition-colors cursor-pointer">Pay Online</span>
             <span className="text-slate-600">|</span>
             <span className="hover:text-white transition-colors cursor-pointer">Brochures</span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-[90rem] mx-auto px-4 pt-3 pb-3 md:pt-0 md:pb-0 md:h-24 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 relative z-50 bg-[#0E1E2C]">
        
        {/* Row 1: Logo, Menu, Actions */}
        <div className="flex items-center justify-between w-full md:w-auto">
            
            {/* Mobile: Hamburger + Logo */}
            <div className="flex items-center gap-3 md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                {/* Mobile Logo */}
                <img 
                    src="https://sukoon.tours/wp-content/uploads/2025/12/Sukoon.-Tours.png" 
                    alt="Sukoon Tours" 
                    className="h-8 w-auto object-contain"
                    style={{ 
                    filter: 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(6646%) hue-rotate(359deg) brightness(102%) contrast(107%)' 
                    }}
                />
            </div>

            {/* Desktop: Logo (Absolute positioning preserved from original design) */}
            <div className="hidden md:block absolute top-0 md:top-2 left-4 z-50 bg-[#0E1E2C] md:bg-transparent rounded-b-xl px-2 pt-1 pb-2 md:p-0 shadow-lg md:shadow-none">
                <img 
                    src="https://sukoon.tours/wp-content/uploads/2025/12/Sukoon.-Tours.png" 
                    alt="Sukoon Tours" 
                    className="h-24 md:h-40 w-auto object-contain drop-shadow-2xl"
                    style={{ 
                    filter: 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(6646%) hue-rotate(359deg) brightness(102%) contrast(107%)' 
                    }}
                />
            </div>

            {/* Mobile: Right Side Actions (Phone Pill + User) */}
            <div className="flex items-center gap-3 md:hidden">
                {/* Mobile Phone Pill Button - Updated to match Desktop Style */}
                <a href="tel:9511171797" className="flex items-center gap-1.5 bg-white/5 hover:bg-[#FFD801] hover:text-[#0E1E2C] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm border border-white/10 transition-all group">
                    <Phone className="w-3 h-3 text-[#FFD801] group-hover:text-[#0E1E2C]" />
                    <span>95111 71797</span>
                    <ChevronDown className="w-3 h-3 opacity-70" />
                </a>
                
                {/* Mobile User Icon */}
                <div className="p-1">
                    <User className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
            </div>
        </div>

        {/* Desktop Search Bar (Centered) */}
        <div className="hidden md:flex flex-1 max-w-2xl relative ml-44 lg:ml-56">
          <div className="w-full flex items-center border border-white/10 rounded-full bg-white transition-all px-6 py-2.5 shadow-inner">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input 
              type="text" 
              placeholder={`Search "${searchDestinations[placeholderIndex]}"`}
              className="bg-transparent border-none outline-none w-full text-sm font-medium placeholder:text-slate-400 text-slate-900 transition-all duration-300"
            />
            <Mic className="w-5 h-5 text-slate-400 ml-3 cursor-pointer hover:text-slate-600" />
          </div>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2 md:gap-6 ml-auto md:ml-0">
          <div className="hidden lg:flex items-center gap-3 bg-white/5 hover:bg-[#FFD801] hover:text-[#0E1E2C] px-4 py-2 rounded-full cursor-pointer transition-all border border-white/10 group">
            <Phone className="w-4 h-4 text-[#FFD801] group-hover:text-[#0E1E2C]" />
            <span className="text-sm font-bold">95111 71797</span>
            <ChevronDown className="w-4 h-4 opacity-40" />
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FFD801] transition-all">
              <User className="w-5 h-5 text-white group-hover:text-[#0E1E2C]" />
            </div>
            <span className="hidden sm:block text-sm font-bold">Sign In</span>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search Bar (Row 2) */}
        <div className="w-full md:hidden">
            <div className="flex items-center bg-white rounded-full px-4 py-2.5 shadow-lg">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input 
                    type="text" 
                    placeholder={`Search "${searchDestinations[placeholderIndex]}"`} 
                    className="bg-transparent border-none outline-none w-full text-sm font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                />
                <div className="w-px h-4 bg-slate-300 mx-2"></div>
                <Mic className="w-4 h-4 text-slate-400" />
            </div>
        </div>
      </div>

      {/* Sub-nav - HIDES ON SCROLL DOWN, SHOWS ON UP */}
      <nav className={`hidden md:block bg-white/5 border-t border-white/5 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden ${isSubMenuVisible ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-[90rem] mx-auto px-4 overflow-x-auto no-scrollbar pl-56">
          <ul className="flex items-center gap-8 h-12 text-[13px] font-bold text-white/70 whitespace-nowrap">
            {['India', 'World', 'Specialty Tours', 'Customized Holidays', 'Corporate Travel', 'Inbound', 'Forex', 'Gift Cards', 'Contact Us'].map((item) => (
              <li key={item} className="group flex items-center gap-1 cursor-pointer hover:text-[#FFD801] transition-colors py-3 relative">
                {item}
                {(item === 'India' || item === 'World' || item === 'Specialty Tours' || item === 'Customized Holidays') && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD801] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0E1E2C] border-t border-white/10 p-4 flex flex-col gap-4 animate-fade-in absolute top-full left-0 right-0 shadow-2xl h-screen">
          <ul className="flex flex-col gap-4 text-sm font-bold divide-y divide-white/5">
            {['India', 'World', 'Specialty Tours', 'Customized Holidays', 'Corporate Travel', 'Inbound', 'Forex', 'Contact Us'].map(item => (
              <li key={item} className="flex justify-between items-center px-2 hover:text-[#FFD801] cursor-pointer py-3">
                {item} <ChevronDown className="w-4 h-4 opacity-40" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
