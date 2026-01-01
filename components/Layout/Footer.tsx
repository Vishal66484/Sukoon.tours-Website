
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Send, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E1E2C] text-white pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Main Links */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-[#FFD801] w-fit pb-2">Main Links</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              {['Home', 'Group Tours', 'Customized Holidays', 'Corporate Travel', 'Asia Specials', 'Europe Tours', 'About Sukoon Tours', 'Blog'].map(link => (
                <li key={link} className="hover:text-[#FFD801] transition-colors cursor-pointer">• {link}</li>
              ))}
            </ul>
          </div>

          {/* Guest Services */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-[#FFD801] w-fit pb-2">Guest Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              {['Guest Corner', 'How to Book', 'Online Payment', 'Guest Feedback', 'Testimonials', 'Privacy Policy', 'Terms & Conditions'].map(link => (
                <li key={link} className="hover:text-[#FFD801] transition-colors cursor-pointer">• {link}</li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-[#FFD801] w-fit pb-2">Connect With Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-[#FFD801]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Toll Free</p>
                  <p className="text-sm font-black">95111 71797</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FFD801]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-sm font-black">sukoon.tours@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFD801]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Head Office</p>
                  <p className="text-sm font-medium leading-relaxed">Level 4, Sky Tower, Pune, MH 411001</p>
                </div>
              </div>
            </div>
          </div>

          {/* eBrochures */}
          <div>
            <h4 className="text-lg font-black mb-8 border-b-2 border-[#FFD801] w-fit pb-2">Latest Brochure</h4>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-2xl">
              <img src="https://picsum.photos/seed/brochure/300/400" alt="Brochure" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-[#FFD801] text-[#0E1E2C] px-4 py-2 rounded-full text-xs font-black">DOWNLOAD PDF</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm font-bold mb-4">Newsletter</p>
              <div className="flex bg-white/5 p-2 rounded-xl border border-white/10">
                <input type="text" placeholder="Email Address" className="bg-transparent border-none outline-none text-xs flex-1 px-3 text-white" />
                <button className="bg-[#FFD801] text-[#0E1E2C] p-2 rounded-lg hover:scale-105 transition-transform"><Send className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Facebook className="w-5 h-5 text-white/60 hover:text-[#FFD801] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-white/60 hover:text-[#FFD801] cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-white/60 hover:text-[#FFD801] cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-white/60 hover:text-[#FFD801] cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-white/60 hover:text-[#FFD801] cursor-pointer transition-colors" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
             {/* Visa */}
            <div className="bg-white h-8 px-2 rounded flex items-center justify-center shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 w-auto" />
            </div>
            {/* Mastercard */}
            <div className="bg-white h-8 px-2 rounded flex items-center justify-center shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 w-auto" />
            </div>
            {/* PayPal */}
            <div className="bg-white h-8 px-2 rounded flex items-center justify-center shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 w-auto" />
            </div>
            {/* Maestro */}
            <div className="bg-white h-8 px-2 rounded flex items-center justify-center shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Maestro_logo.svg" alt="Maestro" className="h-5 w-auto" />
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] md:text-xs font-bold text-slate-500">© 2025 Sukoon Tours Private Limited. All Rights Reserved.</p>
            <p className="text-[10px] font-bold text-slate-600 mt-1">Designed and Developed by <span className="text-[#FFD801]">Ethics Branding Hub</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
