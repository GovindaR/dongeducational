"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { isNavActive } from "@/components/NavLink";
import {
  isNavGroupActive,
  type NavGroupItem,
  type NavLinkItem,
} from "@/lib/navigation";

type NavDropdownProps = {
  group: NavGroupItem;
};

export function NavDropdown({ group }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = isNavGroupActive(pathname, group);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const triggerClass = active
    ? "rounded-lg bg-brand-teal-light px-2 py-2 text-xs font-semibold text-brand-teal-dark ring-1 ring-brand-teal/20 xl:px-2.5 xl:text-sm"
    : "rounded-lg px-2 py-2 text-xs font-medium text-muted transition hover:bg-brand-teal-light hover:text-brand-teal-dark xl:px-2.5 xl:text-sm";

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 ${triggerClass}`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {group.label}
        <Chevron open={open} />
      </button>

      {/* pt-2 bridges the gap so moving to the menu does not fire mouseleave */}
      <div
        className={`absolute left-0 top-full z-[60] min-w-[220px] pt-2 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul
          id={menuId}
          className="overflow-hidden rounded-xl border border-brand-border bg-white py-1.5 shadow-lg"
          role="menu"
        >
          {group.children.map((child) => (
            <SubmenuLink
              key={child.href}
              item={child}
              pathname={pathname}
              onSelect={() => setOpen(false)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SubmenuLink({
  item,
  pathname,
  onSelect,
}: {
  item: NavLinkItem;
  pathname: string;
  onSelect: () => void;
}) {
  const active = isNavActive(pathname, item.href);

  return (
    <li role="none">
      <Link
        href={item.href}
        role="menuitem"
        aria-current={active ? "page" : undefined}
        onClick={onSelect}
        className={`block px-4 py-2.5 text-sm transition ${
          active
            ? "bg-brand-teal-light font-semibold text-brand-teal-dark"
            : "text-foreground hover:bg-brand-teal-light/60 hover:text-brand-teal-dark"
        }`}
      >
        {item.label}
      </Link>
    </li>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
