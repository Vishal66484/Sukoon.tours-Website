
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
import IndiaPage from './components/Destinations/IndiaPage';
import WorldPage from './components/Destinations/WorldPage';
import { PhoneCall, Instagram } from 'lucide-react';
import { CurrencyProvider } from './context/CurrencyContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'booking' | 'india' | 'world'>('home');

  const navigateTo = (page: 'home' | 'booking' | 'india' | 'world') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const FloatingButtons = () => (
    <>
      {/* WhatsApp Button - Positioned Higher */}
      <a
        href="https://wa.me/919890171797?text=Hi%20Sukoon%20Tours,%20I'm%20interested%20in%20a%20holiday%20package."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 group flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 group-hover:opacity-50 duration-1000"></div>
        <div className="relative bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
      </a>

      {/* Instagram Button - Positioned Below WhatsApp */}
      <a
        href="https://www.instagram.com/sukoon.tours?igsh=bGd4cnR0aDV5dm10"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
        aria-label="Follow us on Instagram"
      >
        <div className="relative bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(220,39,67,0.4)] hover:scale-110 transition-all duration-300">
          <Instagram className="w-8 h-8 text-white" />
        </div>
      </a>
    </>
  );

  if (currentPage === 'booking') {
    return (
      <div className="min-h-screen bg-[#0E1E2C]">
        <Header onNavigate={navigateTo} />
        {/* Booking page still needs padding to not be hidden by fixed header */}
        <main className="pt-[112px] md:pt-[122px] bg-slate-50 rounded-t-3xl overflow-hidden min-h-screen">
          <BookingPage onBack={() => navigateTo('home')} />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    );
  }

  if (currentPage === 'india') {
    return (
      <div className="min-h-screen bg-[#0E1E2C]">
        <Header onNavigate={navigateTo} />
        <main className="pt-[112px] md:pt-[122px] bg-slate-50 min-h-screen">
          <IndiaPage />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    );
  }

  if (currentPage === 'world') {
    return (
      <div className="min-h-screen bg-[#0E1E2C]">
        <Header onNavigate={navigateTo} />
        <main className="pt-[112px] md:pt-[122px] bg-slate-50 min-h-screen">
          <WorldPage />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E1E2C]">
      <Header onNavigate={navigateTo} />
      
      {/* Adjusted padding-top for balanced header (Mobile: 130px -> 112px, Desktop: 122px) */}
      <main className="pt-[112px] md:pt-[122px] relative">
        <Hero onSearch={() => navigateTo('booking')} />
        
        {/* Main Content Area */}
        <div className="relative z-20">
          <TrendingCollections />
          
          <Destinations />

          <InternationalPackages />
          
          <PackageGrid />

          <SpecialtyTours />
          
          <Achievements />

          <Features />
          
          <GlobalConnectivity />

          <Testimonials />
          
          <SEOFooterContent />

          {/* Call to Action Section */}
          <section className="py-12 bg-slate-50 border-t border-slate-100">
            <div className="max-w-[90rem] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#FFD801] rounded-full flex items-center justify-center">
                  <PhoneCall className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Ready to book your dream holiday?</h3>
                  <p className="text-slate-500 font-medium">Get in touch with our travel advisors at 9890 1717 97</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-black transition-all">TALK TO EXPERT</button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all">FIND OFFICES</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

const App = () => {
  return (
    <CurrencyProvider>
      <AppContent />
    </CurrencyProvider>
  );
};

export default App;
