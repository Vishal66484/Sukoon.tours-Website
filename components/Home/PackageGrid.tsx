
import React from 'react';
import { MOCK_PACKAGES } from '../../constants';
import { Plane, ChevronLeft, ChevronRight, MessageCircle, Mail, BedDouble, Utensils, Camera, Bus } from 'lucide-react';

const PackageGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-[90rem] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#0E1E2C]">All Group Tour Packages</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-500" />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-500" />
          </button>
          <button className="ml-2 px-6 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-full text-sm transition-colors">
            View all
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_PACKAGES.map((pkg: any) => (
          <div key={pkg.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200 overflow-hidden flex flex-col h-full group">
            
            {/* Image Section - Reduced height */}
            <div className="relative h-44 overflow-hidden">
              <img 
                src={pkg.image} 
                alt={pkg.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Badges Overlay */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1">
                 <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                   {pkg.code}
                 </span>
                 <span className="bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                   {pkg.duration}
                 </span>
              </div>
            </div>

            {/* Content Section - Compact Padding */}
            <div className="p-3 flex flex-col flex-grow">
              
              {/* Title */}
              <h3 className="text-[15px] font-bold text-slate-900 mb-2 line-clamp-2 leading-snug min-h-[2.5rem]">
                {pkg.name}
              </h3>

              {/* Includes - Compact */}
              <div className="mb-3">
                <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wide">Tour Includes</p>
                <div className="flex gap-3 text-red-500">
                   <BedDouble className="w-4 h-4" />
                   <Utensils className="w-4 h-4" />
                   <Camera className="w-4 h-4" />
                   <Bus className="w-4 h-4" />
                   {pkg.includes.includes('Flight') && <Plane className="w-4 h-4" />}
                </div>
              </div>

              {/* Price Section */}
              <div className="mt-auto pt-3 border-t border-slate-100">
                 <div className="flex justify-between items-end mb-3">
                    <div>
                      <p className="text-[10px] text-slate-500 font-medium">Starts from</p>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">₹{pkg.price.toLocaleString()}</h4>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full mb-0.5">{pkg.datesCount} Dates</span>
                 </div>

                 {/* Book Button */}
                 <button className="w-full bg-[#EF4444] hover:bg-red-700 text-white font-bold py-2 rounded text-xs mb-3 transition-colors uppercase tracking-wide">
                   Book Online
                 </button>

                 {/* Footer Actions */}
                 <div className="flex items-center justify-between">
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-green-600 transition-colors">
                       <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                       <span className="underline decoration-slate-200 underline-offset-2 decoration-2">Request Callback</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors">
                       <span className="underline decoration-slate-200 underline-offset-2 decoration-2">Get Itinerary</span>
                       <Mail className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                 </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageGrid;
