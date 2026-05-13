// src/data/site.ts
// ──────────────────────────────────────────
// Centralised data for Laura Rodríguez Fotografía
// Edit this file to update content across the site
// ──────────────────────────────────────────

export const SITE = {
  name: "Laura Rodríguez Fotografía",
  tagline: "Momentos que perduran para siempre",
  description:
    "Capturo la esencia de cada familia, cada amor, cada nueva vida. Porque los momentos más preciados merecen ser inmortalizados con delicadeza y arte.",
  url: "https://laurarodriguezfotografia.com",
  phone: "+57 300 000 0000",
  whatsapp: "573000000000",
  email: "hola@laurarodriguezfotografia.com",
  location: "Colombia",
  stats: [
    { num: "+800", label: "Sesiones realizadas" },
    { num: "6", label: "Especialidades" },
    { num: "+5", label: "Años de experiencia" },
    { num: "100%", label: "Clientes satisfechos" },
  ],
} as const;

export const ABOUT = {
  quote:
    '"Fotografío lo que el corazón siente antes de que la mente lo recuerde."',
  bio: [
    "Soy fotógrafa profesional con más de 5 años capturando los momentos más preciados de las familias. Me especializo en sesiones de recién nacidos, embarazadas, familias y bodas, siempre con un enfoque delicado, cálido y artístico.",
    "Cada sesión es una historia única. Mi misión es que cuando veas tus fotos, sientas exactamente lo que sentiste en ese momento. Trabajo con luz natural y paletas suaves que dan ese toque atemporal a cada imagen.",
  ],
} as const;

export interface Service {
  id: string;
  num: string;
  icon: string;
  name: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "familia",
    num: "01",
    icon: "👨‍👩‍👧‍👦",
    name: "Familia",
    description:
      "Sesiones cálidas que capturan los vínculos únicos de tu familia. En interiores o exteriores, preservo esos lazos que se construyen con amor.",
  },
  {
    id: "retratos",
    num: "02",
    icon: "🎭",
    name: "Retratos",
    description:
      "Tu personalidad, tu esencia. Retratos artísticos que revelan quién eres realmente, con luz natural y composiciones cuidadas.",
  },
  {
    id: "ninos",
    num: "03",
    icon: "🌸",
    name: "Niños",
    description:
      "La infancia pasa volando. Capturo la espontaneidad, la alegría y esa magia que solo tienen los niños en cada etapa de su crecimiento.",
  },
  {
    id: "bebes",
    num: "04",
    icon: "🍃",
    name: "Bebés",
    description:
      "Newborn y primeros meses. Sesiones delicadas y seguras que inmortalizan esa ternura infinita de los primeros días de vida.",
  },
  {
    id: "embarazadas",
    num: "05",
    icon: "🌿",
    name: "Embarazadas",
    description:
      "La maternidad es la experiencia más sublime. Sesiones que celebran tu plenitud y el milagro que estás creando con amor.",
  },
  {
    id: "bodas",
    num: "06",
    icon: "💍",
    name: "Bodas",
    description:
      "El día más especial merece ser narrado con cada detalle. Cobertura completa: desde los preparativos hasta el último baile.",
  },
];

export interface GalleryItem {
  id: string;
  category: string;
  label: string;
  icon: string;
  /** Replace src with a real image path once available, e.g. /images/gallery/familia-1.jpg */
  src?: string;
  alt: string;
  span?: "wide" | "tall" | "featured";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "bodas",
    label: "Bodas",
    icon: "💍",
    alt: "Fotografía de boda",
    span: "featured",
    src: "/images/foto-boda-1.webp",
  },
  {
    id: "g2",
    category: "bebes",
    label: "Bebés",
    icon: "🍃",
    alt: "Fotografía de bebés",
    src: "/images/foto-bebe1.webp",
  },
  {
    id: "g3",
    category: "embarazadas",
    label: "Embarazadas",
    icon: "🌿",
    alt: "Fotografía de embarazada",
    src: "/images/retrato-naury-black.jpeg",
  },
  {
    id: "g4",
    category: "familia",
    label: "Familia",
    icon: "👨‍👩‍👧‍👦",
    alt: "Fotografía familiar",
    span: "wide",
    src: "/images/foto-familia.webp",
  },
  {
    id: "g5",
    category: "retratos",
    label: "Retratos",
    icon: "👨‍👩‍👧‍👦",
    alt: "Retrato",
    span: "wide",
    src: "/images/foto-retrato.webp",
  },
];

export const GALLERY_FILTERS = [
  { id: "all", label: "Todos" },
  { id: "familia", label: "Familia" },
  { id: "bebes", label: "Bebés" },
  { id: "bodas", label: "Bodas" },
  { id: "retratos", label: "Retratos" },
];

export interface BookingPlatform {
  name: string;
  description: string;
  icon: string;
  url: string;
}

export const BOOKING_PLATFORMS: BookingPlatform[] = [
  {
    name: "Cal.com",
    description: "Gratis, sincroniza con Google Calendar",
    icon: "📅",
    url: "https://cal.com/laura-luisa-fernanda-rodriguez-rojas-qczl7a/sesion-fotografica?user=laura-luisa-fernanda-rodriguez-rojas-qczl7a&overlayCalendar=true",
  },
  // {
  //   name: "Pixieset Studio Manager",
  //   description: "Contratos & pagos todo en uno",
  //   icon: "📷",
  //   url: "https://pixieset.com",
  // },
  // {
  //   name: "Koalendar",
  //   description: "Sesiones con pagos vía Stripe",
  //   icon: "🌿",
  //   url: "https://koalendar.com",
  // },
  {
    name: "WhatsApp",
    description: "Respuesta rápida y directa",
    icon: "💬",
    url: "https://wa.me/573204155075",
  },
];

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/laurarodriguezfotografia_/",
    ariaLabel: "Instagram de Laura Rodríguez Fotografía",
  },
  // {
  //   name: "Facebook",
  //   url: "https://facebook.com/laurarodriguezfoto",
  //   ariaLabel: "Facebook de Laura Rodríguez Fotografía",
  // },
  // {
  //   name: "Pinterest",
  //   url: "https://pinterest.com/laurarodriguezfoto",
  //   ariaLabel: "Pinterest de Laura Rodríguez Fotografía",
  // },
  // {
  //   name: "TikTok",
  //   url: "https://tiktok.com/@laurarodriguezfoto",
  //   ariaLabel: "TikTok de Laura Rodríguez Fotografía",
  // },
  {
    name: "WhatsApp",
    url: "https://wa.me/573204155075",
    ariaLabel: "WhatsApp de Laura Rodríguez Fotografía",
  },
];
