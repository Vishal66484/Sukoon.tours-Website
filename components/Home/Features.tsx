
import React from 'react';
import { FEATURES } from '../../constants';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#0E1E2C] mb-2">Why Sukoon Tours?</h2>
          <p className="text-slate-500 text-base">Travel with Trust. Travel with Sukoon.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 px-4">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {/* Icons are now pre-styled composite components for the dual-tone red/black look */}
                {feature.icon}
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3 leading-tight px-4">{feature.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed font-medium max-w-xs mx-auto">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
