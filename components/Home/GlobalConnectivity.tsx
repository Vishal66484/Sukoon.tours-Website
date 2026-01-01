
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Wifi, Clock, ShieldCheck, MapPin } from 'lucide-react';

// Calibrated locations for Equirectangular projection (0-100% width/height)
const locations = [
  { id: 1, cx: "29%", cy: "36%", name: "New York", type: "City", temp: "12°C", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80" },
  { id: 2, cx: "49%", cy: "28%", name: "London", type: "Heritage", temp: "8°C", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80" },
  { id: 3, cx: "51%", cy: "31%", name: "Paris", type: "Romance", temp: "10°C", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" },
  { id: 4, cx: "62%", cy: "45%", name: "Dubai", type: "Luxury", temp: "32°C", img: "https://images.unsplash.com/photo-1512453979798-5ea90b7cad09?auto=format&fit=crop&w=400&q=80" },
  { id: 5, cx: "88%", cy: "39%", name: "Tokyo", type: "Future", temp: "18°C", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80" },
  { id: 6, cx: "92%", cy: "78%", name: "Sydney", type: "Beach", temp: "25°C", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80" },
  { id: 7, cx: "34%", cy: "72%", name: "Rio", type: "Party", temp: "28°C", img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=400&q=80" },
  { id: 8, cx: "70%", cy: "58%", name: "Maldives", type: "Island", temp: "29°C", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80" },
  { id: 9, cx: "74%", cy: "46%", name: "Mumbai", type: "Hub", temp: "30°C", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=400&q=80" }, // Central Hub
];

// Helper to calculate a curved path (Quadratic Bezier)
const getCurvePath = (p1: {x: number, y: number}, p2: {x: number, y: number}) => {
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;
  // Curve upwards (lower Y value) for a flight path arc effect
  const curveY = midY - 60; // Increased arch for better visibility on map
  return `M${p1.x},${p1.y} Q${midX},${curveY} ${p2.x},${p2.y}`;
};

const GlobalConnectivity: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<number | null>(null);

  // Parse percentages to numbers for SVG calculations (assuming 1000x500 viewBox)
  const getCoords = (loc: typeof locations[0]) => ({
    x: parseFloat(loc.cx) * 10, // 100% -> 1000
    y: parseFloat(loc.cy) * 5   // 100% -> 500
  });

  const hub = locations.find(l => l.name === "Mumbai");
  const hubCoords = hub ? getCoords(hub) : { x: 740, y: 460 };

  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100 font-sans">
      {/* Background Tech Grid - Subtle on White */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              <span className="text-[#FFD801] font-sans font-black uppercase tracking-[0.25em] text-xs">Live Operations</span>
            </div>
            {/* Standardized Title Size */}
            <h2 className="text-3xl md:text-4xl font-sans font-black text-[#0E1E2C] leading-tight">Global Connectivity</h2>
          </div>
          
          {/* Live Stats Ticker - Light Mode - Smaller Text */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-6 text-[10px] font-mono text-slate-500 bg-white p-3 rounded-lg border border-slate-200 shadow-sm uppercase tracking-wider">
             <div className="flex items-center gap-2">
               <Wifi className="w-3 h-3 text-green-600" />
               <span>Network: Secured</span>
             </div>
             <div className="flex items-center gap-2">
               <Clock className="w-3 h-3 text-gold-600" />
               <span>UTC {new Date().getUTCHours()}:{new Date().getUTCMinutes().toString().padStart(2, '0')}</span>
             </div>
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-3 h-3 text-blue-600" />
               <span>Status: Active</span>
             </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto w-full aspect-[2/1] bg-slate-50 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden group">
          
          {/* 1. Realistic Map Base Layer - Daylight Blue Marble */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/1280px-Blue_Marble_2002.png" 
               alt="Global Operations Map" 
               className="w-full h-full object-cover opacity-90 saturate-[1.1] contrast-[1.05]"
             />
             {/* Light Overlay to ensure content readability */}
             <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-white/5"></div>
          </div>

          {/* 2. Scanning Radar Effect - Gold/White */}
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent z-10 opacity-70 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          />

          {/* 3. SVG Overlay for Connections */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <defs>
                <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
                <filter id="glowLight">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {locations.map((loc, i) => {
                if (loc.name === "Mumbai") return null; // Don't draw to self
                const targetCoords = getCoords(loc);
                const pathData = getCurvePath(hubCoords, targetCoords);
                
                return (
                  <g key={`connection-${i}`}>
                    {/* Faint static path - Darker for visibility on light map */}
                    <path 
                      d={pathData} 
                      fill="none" 
                      stroke="#000000" 
                      strokeOpacity="0.15" 
                      strokeWidth="1" 
                    />
                    {/* Animated Dashed Line - Bright Gold */}
                    <motion.path
                      d={pathData}
                      fill="none"
                      stroke="url(#lineGradientLight)"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: [0, 0.4, 0], opacity: [0, 1, 0], pathOffset: [0, 1, 0] }}
                      transition={{ 
                        duration: 3, 
                        ease: "linear", 
                        repeat: Infinity, 
                        delay: i * 0.8,
                        repeatDelay: 1
                      }}
                      filter="url(#glowLight)"
                    />
                    {/* Moving Particle - White Bright Dot with Shadow */}
                    <circle r="3" fill="#ffffff" stroke="#f59e0b" strokeWidth="1">
                        <animateMotion 
                           dur="3s" 
                           repeatCount="indefinite" 
                           path={pathData} 
                           begin={`${i * 0.8}s`}
                        />
                    </circle>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 4. Interactive Location Markers */}
          {locations.map((loc) => (
            <motion.div
              key={loc.id}
              className="absolute cursor-pointer z-30"
              style={{ left: loc.cx, top: loc.cy }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              onMouseEnter={() => setActiveLoc(loc.id)}
              onMouseLeave={() => setActiveLoc(null)}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2 group/dot">
                {/* Radar Ripple Effect - Darker ripple for visibility */}
                <div className="absolute -inset-4 rounded-full border border-gold-500/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="absolute -inset-8 rounded-full border border-gold-500/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] delay-150"></div>
                
                {/* Core Dot - Gold with White border to pop */}
                <div className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 border-2 border-white shadow-md ${activeLoc === loc.id ? 'bg-white scale-150' : 'bg-gold-500'}`} />
                
                {/* Label - White pill with dark text */}
                <div className={`absolute top-4 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap px-2 py-0.5 rounded-full shadow-lg ${activeLoc === loc.id ? 'text-white bg-slate-900 opacity-100 scale-110' : 'text-slate-800 bg-white/90 backdrop-blur-sm opacity-80'}`}>
                  {loc.name}
                </div>
              </div>
            </motion.div>
          ))}

          {/* 5. Holographic Tooltip - Light Mode Card */}
          <AnimatePresence>
            {activeLoc && (
              <motion.div 
                layoutId="hoverCard"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-6 left-6 md:left-auto md:right-6 w-64 bg-white/95 backdrop-blur-xl rounded-xl p-4 z-40 border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
              >
                {locations.map(loc => loc.id === activeLoc && (
                  <div key={loc.id} className="flex gap-3 items-start">
                    <img src={loc.img} alt={loc.name} className="w-16 h-16 object-cover rounded-lg border border-slate-100 shadow-sm" />
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start">
                         <h4 className="text-slate-900 font-serif text-lg leading-none mb-1">{loc.name}</h4>
                         <span className="text-[10px] font-mono text-gold-700 bg-gold-50 px-1.5 py-0.5 rounded border border-gold-200">{loc.temp}</span>
                      </div>
                      <span className="text-slate-500 text-[10px] uppercase tracking-wider mb-2">{loc.type}</span>
                      
                      <div className="space-y-1">
                         <div className="flex items-center gap-1.5 text-green-600 text-[10px] font-medium">
                            <Wifi className="w-3 h-3" />
                            <span>Signal Strong</span>
                         </div>
                         <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                            <MapPin className="w-3 h-3 text-gold-500" />
                            <span>Partner Hotel</span>
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vignette Overlay - Lighter for white theme */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(255,255,255,0.4)_100%)]" />
        </div>
      </div>
    </section>
  );
};

export default GlobalConnectivity;
