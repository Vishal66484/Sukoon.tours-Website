
import React, { useState, useEffect } from 'react';
import { Smile, Trophy, Award, MapPin, Rocket } from 'lucide-react';

const Achievements: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "win hearts and make you Celebrate Life!",
    "create memories that last a Lifetime!",
    "turn your dream holidays into Reality!",
    "bring the whole world Closer to You!"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Adjust speed: faster when deleting, normal when typing
      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullText) {
        // Finished typing, pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <section className="relative bg-[#0E1E2C] py-20 px-4 overflow-hidden border-t border-white/5">
      
      {/* World Map Background - Solid, Gray, No Blur, No Borders */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            // Using a solid map without borders
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // Cover ensures it fills the space. 
            backgroundSize: 'cover',
            // Opacity 0.3 ensures it is clearly visible
            opacity: 0.3, 
            // invert(1) makes it white, brightness(0.6) turns it gray. REMOVED BLUR.
            filter: 'invert(1) brightness(0.6)', 
          }}
        />
      </div>
      
      <div className="max-w-[90rem] mx-auto relative z-10">
        
        {/* Tagline Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-16 items-start">
          <div className="w-1.5 h-16 bg-[#FFD801] hidden md:block rounded-full"></div>
          <div>
            <p className="text-slate-300 text-lg font-medium mb-1">We're curating experiences that</p>
            <h2 className="text-3xl md:text-4xl font-sans text-white leading-tight min-h-[80px] md:min-h-[auto]">
              {/* Dynamic Typing Text */}
              <span className="font-black text-[#FFD801]">
                {text}
              </span>
              <span className="animate-pulse text-white font-light ml-1">|</span>
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4 border-t border-white/10 pt-10">
          
          {/* Stat 1 */}
          <div className="flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFD801] transition-colors bg-[#0E1E2C]/80 backdrop-blur-sm relative z-10">
              <Smile className="w-5 h-5 text-[#FFD801] transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1 drop-shadow-md">2100</h3>
              <p className="text-sm font-medium text-slate-400">Happy guests</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFD801] transition-colors bg-[#0E1E2C]/80 backdrop-blur-sm relative z-10">
              <Trophy className="w-5 h-5 text-[#FFD801] transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1 drop-shadow-md">822</h3>
              <p className="text-sm font-medium text-slate-400">Tours completed</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFD801] transition-colors bg-[#0E1E2C]/80 backdrop-blur-sm relative z-10">
              <Award className="w-5 h-5 text-[#FFD801] transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1 drop-shadow-md">5+</h3>
              <p className="text-sm font-medium text-slate-400">Tour Experts</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFD801] transition-colors bg-[#0E1E2C]/80 backdrop-blur-sm relative z-10">
              <MapPin className="w-5 h-5 text-[#FFD801] transition-colors" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1 drop-shadow-md">500+</h3>
              <p className="text-sm font-medium text-slate-400">Tour destinations</p>
            </div>
          </div>

          {/* Stat 5 - Vision/Lakshya */}
          <div className="flex flex-col gap-3 group col-span-2 lg:col-span-1 mt-4 lg:mt-0 lg:border-l lg:border-white/10 lg:pl-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFD801] transition-colors bg-[#0E1E2C]/80 backdrop-blur-sm relative z-10">
              <Rocket className="w-5 h-5 text-[#FFD801]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white mb-1 drop-shadow-md">Our Lakshya</h3>
              <p className="text-sm font-medium text-slate-400 leading-snug">
                Bharat Ki Sabse Behtareen Travel Company
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
