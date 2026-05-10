export const NAVIGATION_LINKS = [
  { label: "Collections", href: "/collections" },
  { label: "Keyboards", href: "/collections?category=keyboards" },
  { label: "Accessories", href: "/collections?category=accessories" },
  { label: "Audio", href: "/collections?category=audio" },
  { label: "About", href: "/about" },
];

export const ANNOUNCEMENT_MESSAGES = [
  "Minimal workspace essentials now available",
  "New mechanical keyboard collection in stock",
  "Curated productivity gear for modern creators",
];

export const CATEGORIES = [
  { name: "Mechanical Keyboards", slug: "keyboards", image: "https://images.unsplash.com/photo-1618384852429-e259b09e6904?w=800&q=80" },
  { name: "Workspace Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80" },
  { name: "Audio", slug: "audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" },
  { name: "Desk Setup", slug: "desk-setup", image: "https://images.unsplash.com/photo-1587829741161-75e44d972ed6?w=800&q=80" },
  { name: "Ceramics", slug: "ceramics", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80" },
  { name: "Productivity", slug: "productivity", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  isBestseller?: boolean;
  description: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "nuphy-air75-v2",
    name: "NuPhy Air75 V2",
    brand: "NuPhy",
    price: 149,
    category: "keyboards",
    rating: 4.8,
    reviewCount: 284,
    image: "https://images.unsplash.com/photo-1618384852429-e259b09e6904?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    isNew: true,
    description: "Ultra-slim 75% wireless mechanical keyboard with hot-swappable switches and premium aluminum frame.",
    features: ["Hot-swappable switches", "Wireless & wired", "Aluminum frame", "RGB backlit"],
  },
  {
    id: "2",
    slug: "yunzii-al71",
    name: "Yunzii AL71",
    brand: "Yunzii",
    price: 89,
    category: "keyboards",
    rating: 4.6,
    reviewCount: 147,
    image: "https://images.unsplash.com/photo-1587829741161-75e44d972ed6?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
    description: "Compact 71-key wireless keyboard with a clean aesthetic and satisfying tactile typing experience.",
    features: ["Bluetooth 5.0", "Hot-swappable", "Gasket mount", "POM plate"],
  },
  {
    id: "3",
    slug: "keychron-k3-pro",
    name: "Keychron K3 Pro",
    brand: "Keychron",
    price: 119,
    category: "keyboards",
    rating: 4.7,
    reviewCount: 512,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1618384852429-e259b09e6904?w=800&q=80",
    isBestseller: true,
    description: "Ultra-slim 75% layout with low-profile switches for a laptop-like feel with mechanical key travel.",
    features: ["Low-profile switches", "Multi-device", "Mac/Windows", "RGB"],
  },
  {
    id: "4",
    slug: "lofree-flow",
    name: "Lofree Flow",
    brand: "Lofree",
    price: 199,
    originalPrice: 249,
    category: "keyboards",
    rating: 4.9,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1593642632632-9c8dfccbcbb7?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1587829741161-75e44d972ed6?w=800&q=80",
    isNew: true,
    description: "Premium low-profile keyboard with ghost switches and minimalist, elegant design.",
    features: ["Ghost switches", "Wireless", "CNC aluminum", "Foam dampening"],
  },
  {
    id: "5",
    slug: "varmilo-va87m",
    name: "Varmilo VA87M",
    brand: "Varmilo",
    price: 179,
    category: "keyboards",
    rating: 4.7,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1563191911-e65a8f3e5e9e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    description: "Premium TKL keyboard with custom dye-sub PBT keycaps and smooth, linear switches.",
    features: ["Custom keycaps", "TKL layout", "Multimedia keys", "N-key rollover"],
  },
  {
    id: "6",
    slug: "hhkb-professional",
    name: "HHKB Professional",
    brand: "PFU",
    price: 299,
    category: "keyboards",
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1618384852429-e259b09e6904?w=800&q=80",
    description: "The legendary Happy Hacking Keyboard with electrostatic capacitive switches for the ultimate typing feel.",
    features: ["EC switches", "Topre mechanism", "60% layout", "Bluetooth"],
  },
  {
    id: "7",
    slug: "grovemade-desk-mat",
    name: "Grovemade Desk Mat",
    brand: "Grovemade",
    price: 95,
    category: "accessories",
    rating: 4.8,
    reviewCount: 341,
    image: "https://images.unsplash.com/photo-1593642632632-9c8dfccbcbb7?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1587829741161-75e44d972ed6?w=800&q=80",
    isBestseller: true,
    description: "Premium full-grain leather desk mat that protects your desk and elevates your workspace aesthetic.",
    features: ["Full-grain leather", "Non-slip base", "Multiple colors", "Aged beautifully"],
  },
  {
    id: "8",
    slug: "twelve-south-hirise",
    name: "Twelve South HiRise",
    brand: "Twelve South",
    price: 79,
    category: "accessories",
    rating: 4.6,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1593642632632-9c8dfccbcbb7?w=800&q=80",
    description: "Adjustable laptop stand that raises your screen to eye level for better ergonomics and posture.",
    features: ["Adjustable height", "Premium finish", "Cable management", "Universal fit"],
  },
  {
    id: "9",
    slug: "peak-design-everyday",
    name: "Peak Design Everyday Case",
    brand: "Peak Design",
    price: 69,
    category: "accessories",
    rating: 4.7,
    reviewCount: 428,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1593642632632-9c8dfccbcbb7?w=800&q=80",
    description: "Versatile phone stand and case system with MagSafe compatibility and minimalist design.",
    features: ["MagSafe", "Multiple positions", "Slim profile", "Drop protection"],
  },
  {
    id: "10",
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 349,
    originalPrice: 399,
    category: "audio",
    rating: 4.9,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80",
    isBestseller: true,
    description: "Industry-leading noise canceling headphones with exceptional sound quality for deep work sessions.",
    features: ["ANC", "30hr battery", "Multipoint connect", "Speak-to-chat"],
  },
];

export const FOOTER_LINKS = {
  Shop: [
    { label: "All Products", href: "/collections" },
    { label: "Keyboards", href: "/collections?category=keyboards" },
    { label: "Accessories", href: "/collections?category=accessories" },
    { label: "Audio", href: "/collections?category=audio" },
    { label: "New Arrivals", href: "/collections?filter=new" },
    { label: "Bestsellers", href: "/collections?filter=bestseller" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Warranty", href: "/warranty" },
  ],
};
