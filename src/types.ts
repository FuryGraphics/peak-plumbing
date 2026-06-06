export type Route =
  | 'home'
  | 'about'
  | 'services'
  | 'repair'
  | 'water-heaters'
  | 'water-softeners'
  | 'drain-cleaning'
  | 'emergency'
  | 'residential'
  | 'commercial'
  | 'areas'
  | 'pocatello'
  | 'chubbuck'
  | 'american-falls'
  | 'blackfoot'
  | 'lava-hot-springs'
  | 'malad'
  | 'mccammon'
  | 'contact'
  | 'quote'
  | 'testimonials'
  | 'faq'
  | 'blog';

export interface Service {
  id: Route;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  imageUrl: string;
  benefits: string[];
}

export interface CitySEO {
  id: Route;
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  distance: string;
  populationInfo: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  service: string;
}
