
import React, { useState, useEffect, useRef } from 'react';
import { Search, Mic, User, Phone, ChevronDown, Menu, X, Star, Sparkles, ChevronRight } from 'lucide-react';

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

  const mobileMenuItems = [
    "Group Tours",
    "Specialty Tours",
    "Sukoon Mice Corporate Tours",
    "Customise Holidays",
    "Inbound",
    "Experiences",
    "Deals",
    "More"
  ];

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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full text-white font-medium bg-[#0E1E2C] shadow-xl transition-all duration-300">
        
        {/* Top Utility Strip - Off-White Background with Red/Black Text */}
        <div className="hidden md:block border-b border-slate-200 py-1.5 relative z-[51] bg-slate-100">
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

        {/* Main Header Container - Reduced Vertical Padding for Mobile (pb-1) */}
        <div className="max-w-[90rem] mx-auto px-4 pt-3 pb-1 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 relative z-50">
          
          {/* Row 1: Logo, Menu, Actions */}
          <div className="flex items-center justify-between w-full md:w-auto">
              
              <div className="flex items-center gap-3 md:hidden">
                  <button onClick={() => setIsMenuOpen(true)} className="text-white p-1">
                      <Menu className="w-6 h-6" />
                  </button>
                  {/* Mobile Logo - Increased size to h-16 (64px) */}
                  <img 
                      src="https://sukoon.tours/wp-content/uploads/2026/01/Sukoon.-Tours-1.png" 
                      alt="Sukoon Tours" 
                      className="h-16 w-auto object-contain"
                      style={{ 
                      filter: 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(6646%) hue-rotate(359deg) brightness(102%) contrast(107%)' 
                      }}
                  />
              </div>

              {/* Desktop Logo - Container height increased to h-[70px] */}
              <div className="hidden md:block z-50 relative w-48 h-[70px]">
                  <img 
                      src="https://sukoon.tours/wp-content/uploads/2026/01/Sukoon.-Tours-1.png" 
                      alt="Sukoon Tours" 
                      className="absolute top-1/2 left-0 -translate-y-1/2 w-auto h-[80px] max-w-none object-contain drop-shadow-2xl"
                      style={{ 
                      filter: 'brightness(0) saturate(100%) invert(86%) sepia(28%) saturate(6646%) hue-rotate(359deg) brightness(102%) contrast(107%)' 
                      }}
                  />
              </div>

              <div className="flex items-center gap-3 md:hidden">
                  <a href="tel:9511171797" className="flex items-center gap-1.5 bg-white/10 hover:bg-[#FFD801] hover:text-[#0E1E2C] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm border border-white/20 transition-all group backdrop-blur-md">
                      <Phone className="w-3 h-3 text-[#FFD801] group-hover:text-[#0E1E2C]" />
                      <span>Call</span>
                  </a>
                  <div className="p-1">
                      <User className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
              </div>
          </div>

          {/* Desktop Search Bar - Solid White as per reference */}
          <div className="hidden md:flex flex-1 max-w-xl relative px-4">
            <div className="w-full flex items-center bg-white rounded-full transition-all px-5 py-2.5 shadow-lg">
              <Search className="w-4 h-4 mr-3 text-slate-400" />
              <input 
                type="text" 
                placeholder={`Search "${searchDestinations[placeholderIndex]}"`}
                className="bg-transparent border-none outline-none w-full text-sm font-medium text-slate-900 placeholder:text-slate-400"
              />
              <Mic className="w-4 h-4 ml-3 cursor-pointer text-slate-400 hover:text-[#0E1E2C]" />
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2 md:gap-6 ml-auto md:ml-0">
            
            {/* Phone Number Button - Transparent with Border */}
            <div className="hidden lg:flex items-center gap-3 border border-white/20 rounded-full p-1 pr-5 hover:border-[#FFD801] transition-all cursor-pointer group bg-transparent">
               <div className="w-9 h-9 rounded-full bg-[#FFD801] flex items-center justify-center shrink-0 shadow-lg shadow-[#FFD801]/20">
                  <Phone className="w-4 h-4 text-[#0E1E2C]" />
               </div>
               <span className="text-sm font-bold text-white tracking-wide">95111 71797</span>
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/10">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                   <span className="hidden sm:block text-xs font-medium text-slate-300">Welcome</span>
                   <span className="hidden sm:block text-sm font-bold text-white">Sign In</span>
              </div>
            </div>

            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="w-full md:hidden mt-2">
              <div className="flex items-center bg-white rounded-full px-4 py-2.5 shadow-lg">
                  <Search className="w-4 h-4 text-slate-400 mr-2" />
                  <input 
                      type="text" 
                      placeholder={`Search "${searchDestinations[placeholderIndex]}"`} 
                      className="bg-transparent border-none outline-none w-full text-sm font-medium text-slate-900 placeholder:text-slate-400 transition-all duration-300"
                  />
                  <Mic className="w-4 h-4 text-slate-400" />
              </div>
          </div>
        </div>

        {/* Sub-nav - Adjusted Height (h-[26px]) for Bigger Text */}
        <nav className={`hidden md:block transition-all duration-500 ease-in-out overflow-hidden ${isSubMenuVisible ? 'max-h-[26px] opacity-100' : 'max-h-0 opacity-0'} border-t border-white/10 bg-[#0c1a26]`}>
          <div className="max-w-[90rem] mx-auto px-4 overflow-x-auto no-scrollbar flex justify-center">
            <ul className="flex items-center gap-8 h-[26px] text-[13px] font-bold text-white whitespace-nowrap">
              {['India', 'World', 'Specialty Tours', 'Customized Holidays', 'Corporate Travel', 'Inbound', 'Forex', 'Gift Cards', 'Contact Us'].map((item) => (
                <li key={item} className="group flex items-center gap-1.5 cursor-pointer hover:text-[#FFD801] transition-colors h-full relative">
                  {item}
                  {(item === 'India' || item === 'World' || item === 'Specialty Tours' || item === 'Customized Holidays') && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer - Slide from Left */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
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

        {/* Scrollable Menu Items */}
        <div className="flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col">
            {mobileMenuItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center px-5 py-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors group">
                <span className="text-[15px] font-bold text-slate-700 group-hover:text-[#0E1E2C]">{item}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0E1E2C]" />
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 shrink-0">
           <div className="mb-4">
             <p className="text-sm font-bold text-slate-500 mb-1">Contact</p>
             <div className="flex items-center gap-2 text-[#0E1E2C]">
                <Phone className="w-5 h-5 fill-current" />
                <span className="text-xl font-black">95111 71797</span>
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
