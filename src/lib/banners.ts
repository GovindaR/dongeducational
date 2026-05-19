import type { BannerAccent } from "@/components/BannerBackground";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  accent: BannerAccent;
  background?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "career",
    eyebrow: "Trusted Nepal → Japan education consultancy",
    title: "Guiding Your Career in Japan",
    subtitle: "Counseling for you and your family.",
    description:
      "From first counseling to pre-departure — language schools, vocational programs, and university pathways with English and local language support.",
    ctaPrimary: { label: "Book free counseling", href: "/contact" },
    ctaSecondary: { label: "Explore programs", href: "/programs" },
    accent: "teal",
    background: "/graduate.jpeg",
  },
  {
    id: "programs",
    eyebrow: "Study pathways",
    title: "Language school to university",
    description:
      "JLPT-focused language courses, senmon vocational training, and degree programs — we help you choose the right intake and school.",
    ctaPrimary: { label: "View programs", href: "/programs" },
    ctaSecondary: { label: "Our services", href: "/services" },
    accent: "orange",
    background: "/osaka_castle.jpeg",
  },
  {
    id: "process",
    eyebrow: "Step-by-step support",
    title: "A clear path from Nepal to Japan",
    description:
      "Document prep, school applications, visa filing, and pre-departure briefing — no confusion about what happens next.",
    ctaPrimary: { label: "See the process", href: "/process" },
    ctaSecondary: { label: "Why Japan?", href: "/why-japan" },
    accent: "deep",
    background: "/osaka.jpeg",
  },
  {
    id: "intake",
    eyebrow: "April & October intakes",
    title: "Apply early — seats fill fast",
    description:
      "Popular schools close applications months ahead. Talk to us now to plan your timeline, budget, and documents.",
    ctaPrimary: { label: "Book free counseling", href: "/contact" },
    ctaSecondary: { label: "FAQ", href: "/faq" },
    accent: "teal",
    background: "/class.jpeg",
  },
];

export type PageBannerConfig = {
  image: string;
  accent: BannerAccent;
};

export const pageBanners: Record<string, PageBannerConfig> = {
  programs: { image: "/class.jpeg", accent: "teal" },
  services: { image: "/namba.jpeg", accent: "orange" },
  "why-japan": { image: "/osaka_castle.jpeg", accent: "deep" },
  process: { image: "/osaka.jpeg", accent: "teal" },
  about: { image: "/graduate.jpeg", accent: "orange" },
  faq: { image: "/class.jpeg", accent: "deep" },
  contact: { image: "/namba.jpeg", accent: "teal" },
  "company-in-japan": { image: "/osaka_castle.jpeg", accent: "orange" },
};
