
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import TrendingCollections from './components/Home/PromotionCards';
import Destinations from './components/Home/Destinations';
import InternationalPackages from './components/Home/InternationalPackages';
import PackageGrid from './components/Home/PackageGrid';
import Features from './components/Home/Features';
import GlobalConnectivity from './components/Home/GlobalConnectivity';
import Testimonials from './components/Home/Testimonials';
import SpecialtyTours from './components/Home/SpecialtyTours';
import Achievements from './components/Home/Achievements';
import SEOFooterContent from './components/Home/SEOFooterContent';
import Footer from './components/Layout/Footer';
import BookingPage from './components/Booking/BookingPage';
import { PhoneCall } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking'>('home');

  if (currentPage === 'booking') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        {/* Adjusted padding: 120px mobile / 128px desktop (md:pt-32) to match taller header with top strip */}
        <main className="pt-[120px] md:pt-32">
          <BookingPage onBack={() => setCurrentPage('home')} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Adjusted padding: 120px mobile / 128px desktop (md:pt-32) to match taller header with top strip */}
      <main className="pt-[120px] md:pt-32">
        <Hero onSearch={() => setCurrentPage('booking')} />
        
        {/* Replaced Antarctica and old promo structure with Trending Collections */}
        <div className="relative z-20">
          <TrendingCollections />
        </div>
        
        <Destinations />

        <InternationalPackages />
        
        <PackageGrid />

        <SpecialtyTours />
        
        {/* Added Achievements Section here as requested */}
        <Achievements />

        <Features />
        
        {/* Added Global Connectivity Section below Features (Why Sukoon Tours?) */}
        <GlobalConnectivity />

        <Testimonials />
        
        {/* Added SEO Content Section */}
        <SEOFooterContent />

        {/* Moved Call to Action Section to the bottom */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[90rem] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#FFD801] rounded-full flex items-center justify-center">
                <PhoneCall className="w-8 h-8 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Ready to book your dream holiday?</h3>
                <p className="text-slate-500 font-medium">Get in touch with our travel advisors at 95111 71797</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-black transition-all">TALK TO EXPERT</button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all">FIND OFFICES</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
