import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { url } from "inspector";

type LogoProps = {
  className?: string;
  size?: "header" | "footer" | "hero";
  variant?: "default" | "onDark";
  customImage?: string;
  url?: string;
};

const sizes = {
  header: {
    width: 220,
    height: 74,
    className: "h-11 w-auto sm:h-12",
    priority: true,
  },
  footer: {
    width: 200,
    height: 67,
    className: "h-10 w-auto",
    priority: false,
  },
  hero: {
    width: 360,
    height: 120,
    className: "h-14 w-auto sm:h-20 md:h-24 lg:h-28",
    priority: true,
  },
} as const;

export function Logo({
  className = "",
  size = "header",
  variant = "default",
  customImage="",
  url="",
}: LogoProps) {
  const config = sizes[size];
  const onDark = variant === "onDark";

  return (
    <Link
      href={url?url:"/"}
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label={`${siteConfig.name} — Home`}
    >
      <span
        className={
          onDark
            ? "inline-flex rounded-xl bg-white px-3 py-2 shadow-lg ring-1 ring-white/20"
            : "inline-flex"
        }
      >
        <Image
          src={customImage?customImage:siteConfig.logoPath}
          alt={siteConfig.name}
          width={config.width}
          height={config.height}
          className={`object-contain object-left ${config.className}`}
          priority={config.priority}
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 360px"
        />
      </span>
    </Link>
  );
}
