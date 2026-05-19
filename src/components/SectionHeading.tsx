type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label && (
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange sm:text-sm">
          {label}
        </p>
      )}
      <h2 className="mt-1 text-[clamp(1.35rem,3.5vw,1.875rem)] font-bold leading-snug text-brand-teal-dark">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
