
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

export const WORLD_PACKAGES: TourPackage[] = [
  {
    id: 'w1',
    name: "Swiss Paris Dreams",
    days: 7,
    duration: "6N / 7D",
    citiesCount: 4,
    code: "EU_SP",
    tags: ["GROUP TOUR", "Bestseller", "Couple"],
    price: 215000,
    offerPrice: 199000,
    emi: "6,900",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80&w=800",
    departureText: "Weekly Departures",
    highlights: "Eiffel Tower (2nd Lvl), Seine Cruise, Mt. Titlis with Ice Flyer, Lucerne City, Black Forest.",
    rating: 4.9,
    reviews: 1205,
    continent: "Europe",
    visaType: "Paper Visa",
    withFlight: true,
    months: ['May', 'Jun', 'Jul', 'Aug'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 12,
    location: 'Switzerland & France'
  },
  {
    id: 'w2',
    name: "Grand Europe (15 Days)",
    days: 15,
    duration: "14N / 15D",
    citiesCount: 9,
    code: "EU_GR",
    tags: ["PREMIUM", "All Inclusive", "Family"],
    price: 380000,
    offerPrice: 355000,
    emi: "12,500",
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=800",
    departureText: "Apr, May, June Special",
    highlights: "London Eye, Eurostar, Brussels Atomium, Rhine Falls, Swarovski World, Venice Gondola, Vatican City.",
    rating: 4.8,
    reviews: 840,
    continent: "Europe",
    visaType: "Paper Visa",
    withFlight: true,
    months: ['Apr', 'May', 'Jun'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 8,
    location: 'Multiple Countries'
  },
  {
    id: 'w3',
    name: "Dubai Abu Dhabi (Pocket Saver)",
    days: 6,
    duration: "5N / 6D",
    citiesCount: 2,
    code: "UAE_PS",
    tags: ["Value", "Shopping", "Visa Inc."],
    price: 68000,
    offerPrice: 59990,
    emi: "2,100",
    image: "https://images.unsplash.com/photo-1512453979798-5ea90b7cad09?auto=format&fit=crop&q=80&w=800",
    departureText: "Daily Departures",
    highlights: "Burj Khalifa 124th Flr, Desert Safari BBQ, Marina Dhow Cruise, Abu Dhabi City Tour + Ferrari World.",
    rating: 4.7,
    reviews: 2300,
    continent: "Middle East",
    visaType: "E-Visa",
    withFlight: true,
    months: ['Jan', 'Feb', 'Mar', 'Apr'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 30,
    location: 'Dubai & Abu Dhabi'
  },
  {
    id: 'w4',
    name: "Singapore Malaysia",
    days: 7,
    duration: "6N / 7D",
    citiesCount: 3,
    code: "SEA_SM",
    tags: ["Bestseller", "Family Fun", "Theme Parks"],
    price: 95000,
    offerPrice: 88000,
    emi: "3,200",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=800",
    departureText: "Every Tuesday & Friday",
    highlights: "Universal Studios, Sentosa Island, Gardens by the Bay, Genting Highlands Cable Car, Batu Caves.",
    rating: 4.8,
    reviews: 1560,
    continent: "Asia",
    visaType: "Paper Visa",
    withFlight: true,
    months: ['Mar', 'Apr', 'May'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 10,
    location: 'Singapore & Malaysia'
  },
  {
    id: 'w5',
    name: "Thailand Delight (Phuket & Krabi)",
    days: 6,
    duration: "5N / 6D",
    citiesCount: 2,
    code: "SEA_PK",
    tags: ["Beach", "Relaxing", "Visa Free"],
    price: 55000,
    offerPrice: 48500,
    emi: "1,650",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80&w=800",
    departureText: "Daily Departures",
    highlights: "Phi Phi Island Tour by Speedboat, 4 Island Tour Krabi, Phuket City Tour, Fantasea Show.",
    rating: 4.6,
    reviews: 980,
    continent: "Asia",
    visaType: "Visa Free",
    withFlight: true,
    months: ['Jan', 'Feb', 'Nov', 'Dec'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight'],
    departureDates: 25,
    location: 'Thailand'
  },
  {
    id: 'w6',
    name: "Vietnam Explorer",
    days: 9,
    duration: "8N / 9D",
    citiesCount: 4,
    code: "SEA_VN",
    tags: ["Trending", "Culture", "Nature"],
    price: 85000,
    offerPrice: 78990,
    emi: "2,700",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800",
    departureText: "2 Dates in March",
    highlights: "Ha Long Bay Overnight Cruise, Hoi An Ancient Town, Golden Hands Bridge Da Nang, Hanoi, Saigon.",
    rating: 4.8,
    reviews: 420,
    continent: "Asia",
    visaType: "E-Visa",
    withFlight: false,
    months: ['Feb', 'Mar', 'Oct'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport'],
    departureDates: 5,
    location: 'Vietnam'
  },
  {
    id: 'w7',
    name: "Turkey Grand Tour",
    days: 9,
    duration: "8N / 9D",
    citiesCount: 3,
    code: "EU_TR",
    tags: ["History", "Scenic", "Premium"],
    price: 155000,
    offerPrice: 142000,
    emi: "4,900",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800",
    departureText: "Apr & May Special",
    highlights: "Hot Air Balloon (Optional), Pamukkale Thermal Pools, Ephesus Ruins, Bosphorus Cruise, Hagia Sophia.",
    rating: 4.9,
    reviews: 310,
    continent: "Europe",
    visaType: "E-Visa",
    withFlight: true,
    months: ['Apr', 'May', 'Jun'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 4,
    location: 'Turkey'
  },
  {
    id: 'w8',
    name: "Japan Cherry Blossom",
    days: 8,
    duration: "7N / 8D",
    citiesCount: 3,
    code: "AS_JP",
    tags: ["Seasonal", "Premium", "Culture"],
    price: 260000,
    offerPrice: 245000,
    emi: "8,500",
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=800",
    departureText: "Last Few Seats Mar/Apr",
    highlights: "Mt. Fuji 5th Station, Bullet Train Experience, Tokyo City Tour, Kyoto Golden Pavilion, Nara Deer Park.",
    rating: 5.0,
    reviews: 180,
    continent: "Asia",
    visaType: "Paper Visa",
    withFlight: true,
    months: ['Mar', 'Apr'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 2,
    location: 'Japan'
  },
  {
    id: 'w9',
    name: "Australian Dream",
    days: 12,
    duration: "11N / 12D",
    citiesCount: 3,
    code: "AU_DR",
    tags: ["Long Haul", "Adventure", "Family"],
    price: 320000,
    offerPrice: 299000,
    emi: "10,500",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
    departureText: "Diwali Special",
    highlights: "Sydney Opera House, Blue Mountains, Gold Coast Movie World, Sea World, Great Ocean Road, Melbourne.",
    rating: 4.8,
    reviews: 220,
    continent: "Australia",
    visaType: "E-Visa",
    withFlight: true,
    months: ['Oct', 'Nov', 'Dec'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 4,
    location: 'Australia'
  },
  {
    id: 'w10',
    name: "Baku (Azerbaijan)",
    days: 5,
    duration: "4N / 5D",
    citiesCount: 1,
    code: "EU_BK",
    tags: ["Trending", "Nightlife", "Visa Easy"],
    price: 65000,
    offerPrice: 58000,
    emi: "2,000",
    image: "https://images.unsplash.com/photo-1678052952899-2826a761c586?auto=format&fit=crop&q=80&w=800",
    departureText: "Weekly Groups",
    highlights: "Flame Towers, Old City (Icherisheher), Gabala Day Trip, Carpet Museum, Fire Mountain (Yanar Dag).",
    rating: 4.7,
    reviews: 150,
    continent: "Europe",
    visaType: "E-Visa",
    withFlight: true,
    months: ['Mar', 'Apr', 'May'],
    includes: ['Hotel', 'Meal', 'Sightseeing', 'Transport', 'Flight', 'Visa'],
    departureDates: 6,
    location: 'Azerbaijan'
  }
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
