"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLink } from "@/components/NavLink";
import { siteConfig } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-brand-teal-light/50 text-brand-teal-dark transition hover:bg-brand-teal-light"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">{open ? "Close" : "Menu"}</span>
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          {open ? (
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <nav
            className="fixed inset-x-0 top-[57px] z-50 max-h-[calc(100dvh-57px)] overflow-y-auto border-b border-brand-border bg-white shadow-xl sm:top-[61px]"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-0.5 px-4 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    variant="mobile"
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
            <div className="border-t border-brand-border px-4 py-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary flex w-full justify-center"
              >
                Free Counseling
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
