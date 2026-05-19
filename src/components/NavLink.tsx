"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinkProps = {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
};

const styles = {
  desktop: {
    base: "rounded-lg px-2 py-2 text-xs font-medium text-muted transition hover:bg-brand-teal-light hover:text-brand-teal-dark xl:px-2.5 xl:text-sm",
    active:
      "rounded-lg bg-brand-teal-light px-2 py-2 text-xs font-semibold text-brand-teal-dark ring-1 ring-brand-teal/20 xl:px-2.5 xl:text-sm",
  },
  mobile: {
    base: "block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-brand-teal-light hover:text-brand-teal-dark",
    active:
      "block rounded-lg border-l-4 border-brand-orange bg-brand-teal-light py-2.5 pl-2.5 pr-3 text-sm font-semibold text-brand-teal-dark",
  },
} as const;

export function NavLink({
  href,
  label,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const active = isNavActive(pathname, href);
  const variantStyles = styles[variant];

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={active ? variantStyles.active : variantStyles.base}
    >
      {label}
    </Link>
  );
}
