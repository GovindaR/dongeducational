import { NavDropdown } from "@/components/NavDropdown";
import { NavLink } from "@/components/NavLink";
import { isNavGroup, mainNav } from "@/lib/navigation";

export function DesktopNav() {
  return (
    <>
      {mainNav.map((item) =>
        isNavGroup(item) ? (
          <NavDropdown key={item.label} group={item} />
        ) : (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            variant="desktop"
          />
        ),
      )}
    </>
  );
}
