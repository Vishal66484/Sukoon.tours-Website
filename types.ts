
export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  months: string[];
  includes: string[];
  departureDates: number;
  location: string;
  rating?: number;
  reviews?: number;
}

export interface Destination {
  id: string;
  name: string;
  tours: number;
  departures: number;
  guests: string;
  image: string;
}

export interface Testimonial {
  id: string;
  userName: string;
  userImage: string;
  title: string;
  content: string;
  rating: number;
  travelDate: string;
  tourName: string;
  guideName: string;
}

export enum TourType {
  GROUP = 'Group Tours',
  SPECIALTY = 'Specialty Tours',
  CUSTOMIZED = 'Customized Holidays',
  CORPORATE = 'Corporate Travel'
}
