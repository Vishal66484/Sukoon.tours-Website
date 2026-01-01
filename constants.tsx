
import React from 'react';
import { 
  Plane, Utensils, Hotel, Camera, Bus, Ship, ShieldCheck, Gem, Flag, 
  ClipboardList, Heart, Clock, MapPin, Handshake, UserCheck, ClipboardCheck, 
  Users, CalendarClock, Map, Sparkles, Briefcase, FileText, CheckCircle2, Calendar, User 
} from 'lucide-react';
import { TourPackage, Destination, Testimonial } from './types';

export const PRIMARY_COLOR = '#FFD801';
export const SECONDARY_COLOR = '#0E1E2C';

export const MOCK_DESTINATIONS: Destination[] = [
  { id: '1', name: 'Rajasthan', tours: 48, departures: 143, guests: '69,850', image: 'https://picsum.photos/seed/raj/600/400' },
  { id: '2', name: 'Andaman', tours: 13, departures: 29, guests: '20,517', image: 'https://picsum.photos/seed/andaman/600/400' },
  { id: '3', name: 'Kerala', tours: 36, departures: 129, guests: '55,512', image: 'https://picsum.photos/seed/kerala/600/400' },
  { id: '4', name: 'North East', tours: 23, departures: 37, guests: '16,117', image: 'https://picsum.photos/seed/ne/600/400' },
  { id: '5', name: 'Europe', tours: 198, departures: 412, guests: '1,03,092', image: 'https://picsum.photos/seed/europe/600/400' },
  { id: '6', name: 'South East Asia', tours: 91, departures: 203, guests: '1,49,665', image: 'https://picsum.photos/seed/sea/600/400' },
  { id: '7', name: 'America', tours: 37, departures: 93, guests: '13,823', image: 'https://picsum.photos/seed/america/600/400' },
  { id: '8', name: 'Australia NZ', tours: 50, departures: 36, guests: '13,768', image: 'https://picsum.photos/seed/anz/600/400' },
];

export const MOCK_PACKAGES: (TourPackage & { code: string, datesCount: number })[] = [
  {
    id: 'p1',
    code: 'VK',
    name: 'Kilimanjaro Trek',
    duration: '8N / 9D',
    price: 321000,
    image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=800&auto=format&fit=crop',
    months: ['Aug', 'Jan'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight'],
    departureDates: 3,
    datesCount: 2,
    location: 'Tanzania'
  },
  {
    id: 'p2',
    code: 'UD',
    name: 'Canada Alaska',
    duration: '20N / 21D',
    price: 800000,
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop',
    months: ['May'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight'],
    departureDates: 1,
    datesCount: 1,
    location: 'Canada'
  },
  {
    id: 'p3',
    code: 'SM',
    name: 'Andaman With Swaraj Dweep',
    duration: '4N / 5D',
    price: 59990,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    months: ['Jan', 'Feb', 'Mar'],
    includes: ['Transport', 'Meal', 'Sightseeing', 'Bus', 'Flight'],
    departureDates: 8,
    datesCount: 6,
    location: 'Andaman'
  },
  {
    id: 'p4',
    code: 'W2',
    name: 'Hyderabad Ramoji Film City',
    duration: '4N / 5D',
    price: 50990,
    image: 'https://images.unsplash.com/photo-1572455044327-7348c1be7267?q=80&w=800&auto=format&fit=crop',
    months: ['Jan'],
    includes: ['Transport', 'Meal', 'Sightseeing', 'Bus'],
    departureDates: 4,
    datesCount: 2,
    location: 'Hyderabad'
  },
   {
    id: 'p5',
    code: 'AA',
    name: 'Australian Escape',
    duration: '10N / 11D',
    price: 451490,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop',
    months: ['Feb', 'Mar', 'May', 'Sep'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport'],
    departureDates: 5,
    datesCount: 4,
    location: 'Australia'
  },
  {
    id: 'p6',
    code: 'EU',
    name: 'Swiss Alpine Wonder',
    duration: '7N / 8D',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop',
    months: ['Apr', 'May', 'Jun'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight'],
    departureDates: 12,
    datesCount: 8,
    location: 'Switzerland'
  },
  {
    id: 'p7',
    code: 'KE',
    name: 'Kerala God\'s Own Country',
    duration: '5N / 6D',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    months: ['Sep', 'Oct', 'Nov'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Houseboat'],
    departureDates: 15,
    datesCount: 10,
    location: 'Kerala'
  },
  {
    id: 'p8',
    code: 'JP',
    name: 'Japan Cherry Blossom',
    duration: '9N / 10D',
    price: 375000,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
    months: ['Mar', 'Apr'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight'],
    departureDates: 4,
    datesCount: 2,
    location: 'Japan'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    userName: 'Shruti Sawant',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    title: 'A Birthday to Remember in Dubai!',
    content: 'Our recent Dubai tour with Sukoon Tours was absolutely unforgettable! A huge thank you to our amazing tour leader for making every moment special.',
    rating: 5,
    travelDate: 'Nov 05, 2025',
    tourName: 'Highlights of Dubai',
    guideName: 'Nikhil Shewale'
  },
  {
    id: 't2',
    userName: 'Gauri Deshpande',
    userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    title: 'Kerala - A Journey of Souls',
    content: 'From the backwaters to the misty hills, every detail was perfect. The hospitality was warm and the planning seamless. Best experience ever.',
    rating: 5,
    travelDate: 'Oct 24, 2025',
    tourName: 'Kerala Delights',
    guideName: 'Anushka Ingulkar'
  },
  {
    id: 't3',
    userName: 'Rahul Mehta',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    title: 'Swiss Alps Like Never Before',
    content: 'The scenic beauty of Switzerland was matched only by the flawless execution of Sukoon Tours. Everything was on time and premium.',
    rating: 5,
    travelDate: 'Sep 15, 2025',
    tourName: 'Swiss Alpine Wonder',
    guideName: 'Nikhil Shewale'
  },
  {
    id: 't4',
    userName: 'Priya Sharma',
    userImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    title: 'Bali Bliss with Family',
    content: 'Traveling with kids can be tough, but our tour leader made it a breeze. We enjoyed every sunset and temple visit stress-free.',
    rating: 4,
    travelDate: 'Aug 10, 2025',
    tourName: 'Beautiful Bali Escape',
    guideName: 'Anushka Ingulkar'
  },
  {
    id: 't5',
    userName: 'Amit Verma',
    userImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
    title: 'Majestic Rajasthan',
    content: 'The royal treatment we received in Rajasthan was unparalleled. Great hotels, delicious food, and a very knowledgeable guide.',
    rating: 5,
    travelDate: 'Dec 01, 2025',
    tourName: 'The Royal Rajasthan',
    guideName: 'Nikhil Shewale'
  },
  {
    id: 't6',
    userName: 'Sneha Patil',
    userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    title: 'Unexplored North East',
    content: 'Sukoon Tours showed us the hidden gems of North East India. It was an adventure of a lifetime with great company.',
    rating: 5,
    travelDate: 'Nov 20, 2025',
    tourName: 'North East Explorer',
    guideName: 'Anushka Ingulkar'
  }
];

export const FEATURES = [
  { 
    icon: (
      <div className="relative inline-block p-1">
        <Handshake className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <ShieldCheck className="w-6 h-6 text-red-600 absolute -bottom-1 -right-2 bg-white rounded-full" fill="white" strokeWidth={2} />
      </div>
    ),
    title: 'Legacy of Trust Since 2014', 
    desc: 'Over 10 years of experience in delivering safe, reliable, and joyful travel across 200+ destinations.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <Gem className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <Sparkles className="w-6 h-6 text-red-600 absolute -top-1 -right-2 fill-red-50" strokeWidth={2} />
      </div>
    ), 
    title: 'All-Inclusive Packages', 
    desc: 'Flights, hotels, meals, sightseeing, visa – all included with no hidden costs.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <User className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <Flag className="w-6 h-6 text-red-600 absolute top-0 -right-2 fill-red-600 text-white" strokeWidth={2} />
      </div>
    ), 
    title: 'Expert Tour Leaders', 
    desc: 'Full-time, multilingual tour leaders who guide and assist you throughout your journey.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <Plane className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <Briefcase className="w-5 h-5 text-red-600 absolute bottom-0 -right-1 fill-white" strokeWidth={2} />
      </div>
    ), 
    title: 'One Stop for All Travel Needs', 
    desc: 'From group tours and custom holidays to visas, forex, travel essentials and flights—everything under one roof.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <FileText className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <CheckCircle2 className="w-6 h-6 text-red-600 absolute -bottom-1 -right-2 bg-white rounded-full" strokeWidth={2} />
      </div>
    ), 
    title: 'Thoughtfully Crafted Itineraries', 
    desc: 'Value-added tours with a blend of iconic attractions and hidden gems—for a deeper travel experience.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <Users className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <Heart className="w-5 h-5 text-red-600 absolute -top-1 -right-1 fill-red-600 text-white" strokeWidth={2} />
      </div>
    ), 
    title: 'Specialty Tours for Every Traveller', 
    desc: 'Women-only, senior citizen, student, honeymoon, and spiritual tours designed with care.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <Calendar className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <Clock className="w-5 h-5 text-red-600 absolute -bottom-1 -right-2 bg-white rounded-full" strokeWidth={2} />
      </div>
    ), 
    title: 'Flexible Group Departures', 
    desc: 'Thousands of group departures across the year to suit every season, holiday, and festival.' 
  },
  { 
    icon: (
      <div className="relative inline-block p-1">
        <Map className="w-12 h-12 text-[#0E1E2C]" strokeWidth={1} />
        <MapPin className="w-6 h-6 text-red-600 absolute -top-2 -right-1 fill-red-600 text-white" strokeWidth={2} />
      </div>
    ), 
    title: 'Pan India Presence', 
    desc: 'Sukoon has booking offices and travel consultants across India – making travel planning easy and accessible.' 
  },
];
