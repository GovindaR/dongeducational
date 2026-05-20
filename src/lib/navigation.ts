export type NavLinkItem = {
  href: string;
  label: string;
};

export type NavGroupItem = {
  label: string;
  children: readonly NavLinkItem[];
};

export type NavItem = NavLinkItem | NavGroupItem;

export function isNavGroup(item: NavItem): item is NavGroupItem {
  return "children" in item;
}

/** Top-level nav: 5 items; secondary pages live under About. */
export const mainNav: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/services", label: "Services" },
  {
    label: "About",
    children: [
      { href: "/about", label: "About us" },
      { href: "/why-japan", label: "Why Japan" },
      { href: "/process", label: "Process" },
      { href: "/company-in-japan", label: "Company in Japan" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/contact", label: "Contact" },
] as const;

export function isNavGroupActive(
  pathname: string,
  group: NavGroupItem,
): boolean {
  return group.children.some(
    (child) =>
      pathname === child.href || pathname.startsWith(`${child.href}/`),
  );
}
