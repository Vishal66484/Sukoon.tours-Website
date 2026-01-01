
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SEOFooterContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-12 px-4 bg-white border-t border-slate-100 text-slate-600">
      <div className="max-w-[90rem] mx-auto">
        {/* Standardized Title Size */}
        <h2 className="text-3xl md:text-4xl font-black text-[#0E1E2C] mb-6">
          Find the best travel packages at Sukoon Tours
        </h2>
        
        <div className="space-y-4 text-sm md:text-[15px] leading-relaxed font-medium">
          <p>
            Planning a holiday is not just about booking flights and hotels; it is about crafting an experience that stays with you forever. At <strong>Sukoon Tours</strong>, we believe that travel should be synonymous with peace of mind. As one of the most trusted travel partners in India, we have dedicated over a decade to curating journeys that offer the perfect blend of adventure, relaxation, and cultural immersion. Whether you are dreaming of the snow-capped peaks of the Himalayas or the turquoise waters of Bali, we ensure your journey is seamless from start to finish.
          </p>

          <p>
            We understand that in today's fast-paced world, a vacation is a rare opportunity to disconnect and rejuvenate. That is why our name <em>"Sukoon"</em> (Peace) is our promise. Our meticulously designed tour packages cater to every type of traveler. From <span className="text-slate-900 font-bold">Honeymoon Specials</span> for newlyweds seeking romance, to <span className="text-slate-900 font-bold">Ladies' Special</span> tours for women looking to explore the world with like-minded companions, and <span className="text-slate-900 font-bold">Senior Citizen</span> packages that prioritize comfort and safety—we have something for everyone.
          </p>

          {isExpanded && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-black text-[#0E1E2C] mt-6 mb-2">
                Why choose Sukoon Tours for your next holiday?
              </h3>
              <p>
                What sets us apart is our "All-Inclusive" approach. When you book a group tour with Sukoon, you don't just pay for a ticket; you pay for a complete experience. Our packages typically include premium accommodation, delicious meals (including Indian cuisine on international tours), sightseeing tickets, and the services of an experienced Tour Manager who is with you every step of the way. We take care of the logistics—visas, transfers, and tickets—so you can focus entirely on making memories.
              </p>

              <p>
                With a strong presence across Maharashtra and a growing footprint in the rest of India, Sukoon Tours has successfully served over 9 lakh happy guests. Our "Zero Hidden Cost" policy ensures transparency, building a relationship of trust that brings our guests back to us year after year. We cover a vast array of destinations including domestic favorites like Kerala, Rajasthan, Kashmir, and Ladakh, as well as international hotspots like Europe, South East Asia, Dubai, and Australia.
              </p>

              <h3 className="text-lg font-black text-[#0E1E2C] mt-6 mb-2">
                Bringing the world closer to you
              </h3>
              <p>
                In an era where online booking is common, we retain the human touch. Our dedicated travel advisors are always just a phone call away to help you customize your holiday. Whether you want a private family vacation or wish to join our lively group departures, Sukoon Tours is committed to delivering excellence. 
              </p>
              <p>
                So, if you are looking for the best travel agency that combines luxury, affordability, and reliability, look no further. Pack your bags, leave the worries to us, and get ready to celebrate life with Sukoon Tours!
              </p>
            </div>
          )}
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-[#0E1E2C] font-black text-sm hover:text-[#FFD801] transition-colors underline decoration-dotted underline-offset-4"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
};

export default SEOFooterContent;
