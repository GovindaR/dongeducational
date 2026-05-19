export const siteConfig = {
  name: "DONG Educational Consultancy",
  shortName: "DONG",
  tagline: "Guiding Your Career in Japan",
  taglineSupporting:
    "Trusted guidance for students from Nepal planning study and work in Japan.",
  description:
    "Nepal-based education consultancy for Japanese language schools, vocational training, and university pathways — counseling in English and local language support.",
  phone: "+977 974-5319528",
  email: "dongeducation98@gmail.com",
  address: "Samakhusi , Kathmandu, Nepal, 44600",
  officeHours: "Sun–Fri: 10:00 AM – 6:00 PM",
  logoPath: "/logo.png",
  faviconPath: "/favicon.png",
  nav: [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/company-in-japan", label: "Company in Japan" },
    { href: "/services", label: "Services" },
    { href: "/why-japan", label: "Why Japan" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const programOptions = [
  "Japanese Language School",
  "Vocational / Technical School",
  "Undergraduate University",
  "Graduate / Research",
  "Work & Internship",
  "Not sure yet",
] as const;
