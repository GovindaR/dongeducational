import Link from "next/link";
import { BannerBackground, type BannerAccent } from "@/components/BannerBackground";
import { pageBanners } from "@/lib/banners";
import { Logo } from "@/components/Logo";


type PageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  cta?: { href: string; label: string };
  image?: string;
  accent?: BannerAccent;
  bannerKey?: keyof typeof pageBanners;
  showLogo?: boolean;
  url?: string;
};

export function PageHeader({
  label,
  title,
  description,
  cta,
  image,
  accent = "teal",
  bannerKey,
  showLogo=false,
  url,
}: PageHeaderProps) {
  const banner = bannerKey ? pageBanners[bannerKey] : null;
  const bgImage = image ?? banner?.image;
  const bgAccent = banner?.accent ?? accent;
  return (
    <section className="relative overflow-hidden text-white">
      <BannerBackground image={bgImage} accent={bgAccent} priority />
      <div className="relative z-[1] mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 page-header-enter">
      {showLogo && <Logo
            url={url}
          customImage="/dong_global.jpeg"
          size="hero"
          variant="onDark"
          className="mb-5 max-w-[min(100%,220px)] sm:mb-6 sm:max-w-none"
        />}
        {label && (
          <p className="w-fit max-w-full self-start rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange-light backdrop-blur-sm">
            {label}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-tight tracking-tight sm:mt-4">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
        )}
        {cta && (
          <Link href={cta.href} className="btn-primary mt-8 inline-flex">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
