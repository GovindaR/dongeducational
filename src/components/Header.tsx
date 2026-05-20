import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { DesktopNav } from "@/components/DesktopNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-6 sm:py-3">
        <Logo size="header" />
        <nav
          className="hidden items-center gap-0.5 overflow-visible lg:flex"
          aria-label="Main navigation"
        >
          <DesktopNav />
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <MobileNav />
          <Link
            href="/contact"
            className="btn-primary hidden px-4 py-2 text-xs lg:inline-flex lg:py-2.5 lg:text-sm lg:px-5"
          >
            Free Counseling
          </Link>
        </div>
      </div>
    </header>
  );
}
