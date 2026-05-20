"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { isNavGroupActive, type NavGroupItem } from "@/lib/navigation";

type MobileNavGroupProps = {
  group: NavGroupItem;
  onNavigate: () => void;
};

export function MobileNavGroup({ group, onNavigate }: MobileNavGroupProps) {
  const pathname = usePathname();
  const active = isNavGroupActive(pathname, group);
  const [expanded, setExpanded] = useState(active);

  return (
    <li className="rounded-xl border border-transparent">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
          active
            ? "bg-brand-teal-light text-brand-teal-dark"
            : "text-foreground hover:bg-brand-teal-light/60"
        }`}
        aria-expanded={expanded}
      >
        {group.label}
        <svg
          className={`h-4 w-4 shrink-0 transition ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <ul className="mb-2 ml-3 space-y-0.5 border-l-2 border-brand-orange/40 pl-3">
          {group.children.map((child) => (
            <li key={child.href}>
              <NavLink
                href={child.href}
                label={child.label}
                variant="mobile"
                onClick={onNavigate}
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
