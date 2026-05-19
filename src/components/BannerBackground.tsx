import Image from "next/image";

export type BannerAccent = "teal" | "orange" | "deep";

const overlayClasses: Record<BannerAccent, string> = {
  teal:
    "bg-gradient-to-br from-brand-teal-darker/95 via-brand-teal-dark/78 to-brand-orange/40",
  orange:
    "bg-gradient-to-br from-brand-orange-dark/88 via-brand-teal-darker/82 to-brand-teal/55",
  deep: "bg-gradient-to-br from-slate-950/92 via-brand-teal-darker/88 to-brand-teal-dark/65",
};

const vignetteClass =
  "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,30,40,0.45)_100%)]";

type BannerBackgroundProps = {
  image?: string;
  accent?: BannerAccent;
  priority?: boolean;
  kenBurns?: boolean;
  className?: string;
};

export function BannerBackground({
  image,
  accent = "teal",
  priority = false,
  kenBurns = false,
  className = "",
}: BannerBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover object-center ${kenBurns ? "animate-ken-burns" : ""}`}
        />
      ) : (
        <div className="absolute inset-0 hero-gradient" />
      )}
      <div className={`absolute inset-0 ${overlayClasses[accent]}`} />
      <div className={`absolute inset-0 ${vignetteClass}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>
  );
}
