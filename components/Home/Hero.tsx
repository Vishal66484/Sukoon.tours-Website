
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearch: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <div className="relative h-[65vh] min-h-[600px] w-full overflow-hidden bg-[#0E1E2C]">
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Premium Background Video - International Destination (Dolomites / Alps - Lago di Braies) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2574&auto=format&fit=crop"
        >
          {/* Cinematic International Travel Video (Lago di Braies - Italy/Alps) */}
          <source src="https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays for Maximum Text Visibility (Content Uthun Disel) */}
        <div className="absolute inset-0 bg-[#0E1E2C]/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E2C]/60 via-transparent to-[#0E1E2C]"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-[90rem] mx-auto px-6 flex flex-col items-center justify-center text-center z-10 pb-10">
        <div className="animate-fade-in-up space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-[#FFD801] text-[12px] font-black border border-white/20 shadow-2xl tracking-[0.3em] uppercase hover:bg-white/20 transition-all cursor-default">
            <Sparkles className="w-4 h-4" />
            Sukoon Tours - Luxury Awaits
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-2xl tracking-tighter leading-tight">
            Experience the<br />
            <span className="text-[#FFD801]">Extraordinary</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-100 font-bold mb-4 max-w-3xl mx-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] italic">
            "Chalo Bag Bharo Nikal Pado!" <br className="hidden md:block" /> 
            Curating world-class journeys for your peace of mind.
          </p>
          
          {/* Premium CTA Button */}
          <button 
            onClick={onSearch}
            className="group relative px-10 py-5 bg-[#FFD801] text-[#0E1E2C] rounded-full font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_-15px_rgba(250,204,21,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(250,204,21,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            Explore Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
