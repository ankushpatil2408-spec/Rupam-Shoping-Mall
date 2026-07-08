import { Product, Offer, Testimonial, GalleryItem, Collection } from './types';

export const STORE_INFO = {
  name: "Roopam Shopping Mall",
  location: "Station Road, Raver, Jalgaon, Maharashtra 425508",
  phone: "+91 95271 86469",
  whatsapp: "+919527186469",
  hours: "10:00 AM to 9:00 PM",
  closedDay: "Wednesday",
  aboutShort: "Roopam Shopping Mall is one of the most popular shopping destinations in Raver. It offers fashionable clothing for men, women, and kids along with accessories and a comfortable shopping experience.",
  aboutFull: "Established as the benchmark of premium retail in Raver, Jalgaon, Roopam Shopping Mall has redefined family shopping. Our spacious air-conditioned aisles showcase meticulously curated fashion labels, traditional Indian ethnic wear, contemporary Western wear, and designer accessories. We strive to offer an exquisite shopping experience where quality meets unparalleled customer hospitality. From handcrafted wedding attire to playful children's fashion, Roopam remains the household choice for fashion-forward families across Maharashtra.",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14872.246473183592!2d76.02325357321589!3d21.2492166579308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd91522caec3b53%3A0xc3f0b2f69fb4d8b0!2sStation%20Rd%2C%20Raver%2C%20Maharashtra%20425508!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin"
};

export const HERO_BANNER_IMAGE = "/src/assets/images/luxury_mall_hero_1783487328684.jpg";

export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    title: "Men's Luxury Couture",
    subtitle: "Regal Bandhgalas, Sherwanis, and Contemporary Suits",
    image: "/src/assets/images/mens_fashion_curated_1783487348115.jpg",
    link: "men",
    count: "120+ Items Available"
  },
  {
    id: 'c2',
    title: "Women's Royal Heritage",
    subtitle: "Exquisite Bridal Lehengas, Designer Sarees, and Modern Gowns",
    image: "/src/assets/images/womens_fashion_curated_1783487363850.jpg",
    link: "women",
    count: "250+ Items Available"
  },
  {
    id: 'c3',
    title: "Premium Kids Ensemble",
    subtitle: "Adorable and Comfortable Festive and Daily Casual wear",
    image: "/src/assets/images/kids_wear_curated_1783487377944.jpg",
    link: "kids",
    count: "95+ Items Available"
  }
];

export const PRODUCTS: Product[] = [
  // Men's Products
  {
    id: 'm1',
    name: 'Royal Champagne Bandhgala Suit',
    category: 'men',
    price: '₹14,999',
    originalPrice: '₹18,500',
    rating: 4.9,
    description: 'A masterpiece of tailored elegance, this champagne-colored premium Bandhgala features hand-embroidered collars and antique brass buttons. Perfect for grand weddings.',
    image: '/src/assets/images/mens_fashion_curated_1783487348115.jpg',
    isNew: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'm2',
    name: 'Imperial Velvet Wedding Sherwani',
    category: 'men',
    price: '₹22,500',
    originalPrice: '₹28,000',
    rating: 5.0,
    description: 'Rich royal velvet sherwani adorned with intricate Zardozi craftsmanship, matching stole, and churidar, designed for the modern groom.',
    image: 'https://picsum.photos/seed/sherwani/600/800',
    isBestSeller: true,
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'm3',
    name: 'Premium Italian Cut Navy Blazer',
    category: 'men',
    price: '₹8,499',
    originalPrice: '₹11,000',
    rating: 4.7,
    description: 'Tailored to absolute precision, this premium structured navy blazer is perfect for formal business gatherings or high-end evening galas.',
    image: 'https://picsum.photos/seed/blazer/600/800',
    isNew: true,
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  {
    id: 'm4',
    name: 'Fine Handcrafted Silk Kurta Set',
    category: 'men',
    price: '₹4,299',
    originalPrice: '₹5,500',
    rating: 4.6,
    description: 'Made from high-grade raw silk, this dual-tone emerald green kurta set features delicate self-embroidery around the placket.',
    image: 'https://picsum.photos/seed/kurta/600/800',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // Women's Products
  {
    id: 'w1',
    name: 'Symphony Bridal Golden Lehenga',
    category: 'women',
    price: '₹45,000',
    originalPrice: '₹55,000',
    rating: 5.0,
    description: 'A breathtaking designer lehenga encrusted with fine gold thread embroidery, sequins, and pearls, accompanied by a double dupatta layout.',
    image: '/src/assets/images/womens_fashion_curated_1783487363850.jpg',
    isNew: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'w2',
    name: 'Royal Heritage Banarasi Silk Saree',
    category: 'women',
    price: '₹12,499',
    originalPrice: '₹16,000',
    rating: 4.8,
    description: 'Handwoven in Varanasi, this pure silk saree features luxurious gold zari floral motifs and an elaborate pallu that whispers age-old heritage.',
    image: 'https://picsum.photos/seed/saree/600/800',
    isBestSeller: true,
    sizes: ['Free Size']
  },
  {
    id: 'w3',
    name: 'Enchanted Emerald Evening Gown',
    category: 'women',
    price: '₹18,999',
    originalPrice: '₹22,500',
    rating: 4.9,
    description: 'A stunning georgette evening gown with an asymmetrical neckline, detailed sequin trail, and delicate sheer sleeves that flatter every curve.',
    image: 'https://picsum.photos/seed/gown/600/800',
    isNew: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'w4',
    name: 'Pastel Meadow Designer Anarkali',
    category: 'women',
    price: '₹9,299',
    originalPrice: '₹11,500',
    rating: 4.7,
    description: 'A dreamy pastel peach Anarkali suit featuring detailed floral prints, delicate mirror work and a fluid organza dupatta.',
    image: 'https://picsum.photos/seed/anarkali/600/800',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // Kids' Products
  {
    id: 'k1',
    name: 'Prince Festive Jacquard Sherwani',
    category: 'kids',
    price: '₹3,499',
    originalPrice: '₹4,500',
    rating: 4.8,
    description: 'A comfortable yet royal jacquard sherwani set with easy button closures and premium inner lining for children aged 2-12 years.',
    image: '/src/assets/images/kids_wear_curated_1783487377944.jpg',
    isNew: true,
    isBestSeller: true,
    sizes: ['2-4Y', '5-7Y', '8-10Y', '11-12Y']
  },
  {
    id: 'k2',
    name: 'Princess Pastel Layered Tulle Dress',
    category: 'kids',
    price: '₹2,999',
    originalPrice: '₹3,800',
    rating: 4.7,
    description: 'A dreamy layered lavender tulle dress with sparkling sequins, soft satin belt bow, and anti-scratch breathable fabric lining.',
    image: 'https://picsum.photos/seed/kidsdress/600/800',
    isBestSeller: true,
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y']
  },
  {
    id: 'k3',
    name: 'Dapper Gent Velvet Tuxedo Suit',
    category: 'kids',
    price: '₹4,199',
    originalPrice: '₹5,200',
    rating: 4.9,
    description: 'A mini formal tuxedo suit set including a velvet blazer, formal trousers, a pre-tied bow, and an elasticated crisp white cotton shirt.',
    image: 'https://picsum.photos/seed/kidstux/600/800',
    isNew: true,
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-12Y']
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'o1',
    title: "Royalty Festive Welcome",
    description: "Get flat discounts on any designer wedding apparel including custom styling assistance from our chief catalog editor.",
    discount: "Flat 15% OFF",
    code: "ROYALWELCOME",
    validUntil: "Aug 15, 2026",
    finePrint: "Applicable on billing above ₹15,000. Valid once per family unit."
  },
  {
    id: 'o2',
    title: "Bridal Couture Package",
    description: "Receive complimentary hand-crafted accessories matching your bridal/groom couture choice.",
    discount: "Free Designer Matching Clutch / Juttis",
    code: "COUTURELOVE",
    validUntil: "Sep 30, 2026",
    finePrint: "Applicable on premium Sherwanis and bridal Lehenga collections."
  },
  {
    id: 'o3',
    title: "Kids Festive Carnival Sale",
    description: "Dress your little princes and princesses in our luxury festive selection and unlock special tier pricing.",
    discount: "Buy 2 Get 1 FREE",
    code: "LITTLEPRINCE",
    validUntil: "Nov 10, 2026",
    finePrint: "Lowest value item from selected kids apparel will be discounted to ₹0 at checkout."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Entrance Lobby',
    category: 'store',
    image: '/src/assets/images/luxury_mall_hero_1783487328684.jpg',
    description: 'A majestic grand lobby under beautiful architectural glass ceilings and warm ambient lighting.'
  },
  {
    id: 'g2',
    title: 'Bridal Couture Vault',
    category: 'display',
    image: 'https://picsum.photos/seed/interior1/800/600',
    description: 'A luxurious private trial room and showcasing deck dedicated for regal weddings and celebrations.'
  },
  {
    id: 'g3',
    title: 'Autumn Fashion Show Launch',
    category: 'festive',
    image: 'https://picsum.photos/seed/event1/800/600',
    description: 'Celebrating high fashion with designers and local fashion influencers in Jalgaon district.'
  },
  {
    id: 'g4',
    title: 'Men’s Elegance Rack',
    category: 'display',
    image: 'https://picsum.photos/seed/interior2/800/600',
    description: 'Custom fitted bandhgalas and tuxedos neatly lined under soft velvet curtains.'
  },
  {
    id: 'g5',
    title: 'Kids Fun Shopping Zone',
    category: 'store',
    image: 'https://picsum.photos/seed/kidszone/800/600',
    description: 'An interactive play and try room designed for children to enjoy shopping alongside parents.'
  },
  {
    id: 'g6',
    title: 'Saree Heritage Showcase',
    category: 'display',
    image: 'https://picsum.photos/seed/sareerack/800/600',
    description: 'A colorful presentation of authentic Kanjeevarams, Banarasis, and Paithani sarees.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aishwarya Patil',
    text: "I bought my wedding lehenga from Roopam Shopping Mall. The luxury experience was amazing! The design is extremely detailed and I felt like a queen. The staff took care of alterations perfectly.",
    rating: 5,
    location: "Raver, Maharashtra",
    date: "May 12, 2026"
  },
  {
    id: 't2',
    name: 'Dr. Rahul Chaudhari',
    text: "Truly a premium shopping destination. I was pleasantly surprised to find top-tier Italian blazers and handcrafted traditional sherwanis right here in Raver. Highly recommended for quality seekers.",
    rating: 5,
    location: "Jalgaon, Maharashtra",
    date: "June 20, 2026"
  },
  {
    id: 't3',
    name: 'Suhasini Deshmukh',
    text: "Excellent kids selection! The tulle dress and kids sherwani we bought fit wonderfully. The fabric is premium, soft, and my children stayed comfortable all evening. Five stars to the management.",
    rating: 5,
    location: "Bhusawal, Maharashtra",
    date: "July 01, 2026"
  }
];

export const LUXURY_BRANDS = [
  { name: 'Armani Casa Inspired', logoText: 'ARMANI' },
  { name: 'Sabyasachi Accents', logoText: 'SABYASACHI' },
  { name: 'Manyavar Collections', logoText: 'MANYAVAR' },
  { name: 'Anita Dongre Style', logoText: 'ANITA' },
  { name: 'Raymond Formals', logoText: 'RAYMOND' },
  { name: 'Ritu Kumar Couture', logoText: 'RITU' }
];
