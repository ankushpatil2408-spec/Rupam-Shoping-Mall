export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women' | 'kids';
  price: string;
  originalPrice?: string;
  rating: number;
  description: string;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  sizes: string[];
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  code: string;
  validUntil: string;
  finePrint: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'fashion' | 'festive' | 'display';
  image: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  count: string;
}
