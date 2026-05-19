"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "@/components/NavLink";
import { siteConfig } from "@/lib/site";

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const menuPanel =
    open && mounted ? (
      <>
        <button
          type="button"
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          aria-label="Close menu"
          onClick={close}
        />
        <nav
          id="mobile-nav-panel"
          className="fixed inset-0 z-[110] flex flex-col bg-white"
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
        >
          {/* Sticky bar — always visible on mobile, sits above page content */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-brand-border bg-white px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-teal-dark">
              Menu
            </p>
            <button
              type="button"
              onClick={close}
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl border-2 border-brand-teal/30 bg-brand-teal-light px-4 text-sm font-bold text-brand-teal-dark transition active:scale-95 hover:bg-brand-teal/10"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
              <span>Close</span>
            </button>
          </div>

          <ul className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  variant="mobile"
                  onClick={close}
                />
              </li>
            ))}
          </ul>

          <div className="shrink-0 border-t border-brand-border p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Link
              href="/contact"
              onClick={close}
              className="btn-primary flex min-h-12 w-full items-center justify-center text-base"
            >
              Free Counseling
            </Link>
          </div>
        </nav>
      </>
    ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border bg-brand-teal-light/50 text-brand-teal-dark transition hover:bg-brand-teal-light active:scale-95"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {mounted && menuPanel ? createPortal(menuPanel, document.body) : null}
    </div>
  );
}
