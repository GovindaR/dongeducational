import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  programs: [
    { href: "/programs", label: "All programs" },
    { href: "/programs#language-school", label: "Language school" },
    { href: "/programs#vocational", label: "Vocational" },
    { href: "/programs#undergraduate", label: "University" },
  ],
  company: [
    { href: "/about", label: "About us" },
    { href: "/company-in-japan", label: "Company in Japan" },
    { href: "/why-japan", label: "Why Japan" },
    { href: "/process", label: "Application process" },
    { href: "/faq", label: "FAQ" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-teal-darker bg-brand-teal-darker text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="footer" variant="onDark" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-orange">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm text-white/75">
              {siteConfig.taglineSupporting}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Programs
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.programs.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
              <li>{siteConfig.address}</li>
              <li className="text-white/60">{siteConfig.officeHours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
