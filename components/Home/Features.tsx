
import React from 'react';
import { FEATURES } from '../../constants';

const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white border-t border-slate-100">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-[#0E1E2C] mb-2">Why Sukoon Tours?</h2>
          <p className="text-sm md:text-base text-slate-500 font-medium">Travel with Trust. Travel with Sukoon.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10 md:gap-x-8 md:gap-y-16 px-1 md:px-4 [&>*:nth-child(odd):last-child]:col-span-2">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-3 md:mb-6 transition-transform duration-300 group-hover:scale-110">
                <div className="scale-[0.85] md:scale-100 origin-bottom">
                   {feature.icon}
                </div>
              </div>
              <h3 className="text-[13px] md:text-[17px] font-bold text-slate-900 mb-2 md:mb-3 leading-tight px-1 md:px-4">{feature.title}</h3>
              <p className="text-slate-500 text-[10px] md:text-[13px] leading-relaxed font-medium max-w-[140px] md:max-w-xs mx-auto">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
