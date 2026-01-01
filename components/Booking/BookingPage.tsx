
import React, { useState } from 'react';
import { ChevronLeft, CreditCard, ShieldCheck, Plane, Hotel, Utensils } from 'lucide-react';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Explorations
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Traveler Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none outline-none p-4 rounded-xl font-bold text-slate-800" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none outline-none p-4 rounded-xl font-bold text-slate-800" placeholder="Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-none outline-none p-4 rounded-xl font-bold text-slate-800" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border-none outline-none p-4 rounded-xl font-bold text-slate-800" placeholder="+91 98765 43210" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Credit Card', 'UPI / QR', 'Net Banking'].map((method) => (
                  <button key={method} className="p-6 rounded-2xl border-2 border-slate-50 hover:border-[#FFD801] transition-all flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-[#FFD801]/10 transition-colors">
                      <CreditCard className="w-6 h-6 text-slate-400 group-hover:text-[#FFD801]" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest">{method}</span>
                  </button>
                ))}
              </div>
              
              <button className="w-full mt-10 py-5 bg-[#FFD801] hover:bg-black hover:text-[#FFD801] text-slate-900 rounded-2xl font-black transition-all shadow-xl shadow-[#FFD801]/20">
                CONFIRM & PAY NOW
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure 256-bit encrypted payment</span>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 sticky top-28">
              <img src="https://picsum.photos/seed/bali/400/300" alt="Tour" className="w-full aspect-video object-cover rounded-2xl mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-2">Bali Honeymoon Special</h3>
              <p className="text-slate-500 text-sm font-bold mb-6">6 Nights / 7 Days</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Package Price</span>
                  <span className="font-black">₹1,25,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">GST (5%)</span>
                  <span className="font-black">₹6,250</span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between">
                  <span className="text-slate-900 font-black uppercase text-xs">Total Amount</span>
                  <span className="font-black text-2xl text-blue-600">₹1,31,250</span>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inclusions</h4>
                <div className="flex gap-4">
                  <Plane className="w-5 h-5 text-slate-400" />
                  <Hotel className="w-5 h-5 text-slate-400" />
                  <Utensils className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
