import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { servicesDetailed } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full Japan study abroad consultancy services — counseling, COE, visa, and pre-departure support in Nepal.",
};

const serviceProcess = [
  "Initial assessment of your profile and goals",
  "Transparent fee and timeline explanation",
  "School application and document preparation",
  "COE tracking and embassy visa support",
  "Pre-departure orientation before you fly",
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        bannerKey="services"
        label="Our services"
        title="Everything you need to study in Japan"
        description="DONG handles the full journey — so you and your family always know what step comes next."
        cta={{ href: "/contact", label: "Book free counseling" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {servicesDetailed.map((service, index) => (
            <article
              key={service.title}
              className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-orange">
                Service {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-xl font-bold text-brand-teal-dark">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <h3 className="mt-4 text-xs font-bold uppercase text-brand-teal">
                Includes
              </h3>
              <ul className="mt-2 space-y-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="text-brand-orange">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-teal-light/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-teal-dark">
            What happens when you visit DONG?
          </h2>
          <ol className="mt-8 space-y-4">
            {serviceProcess.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-foreground">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            Related:{" "}
            <Link href="/process" className="font-semibold text-brand-teal hover:text-brand-orange">
              full application timeline
            </Link>
            {" · "}
            <Link href="/programs" className="font-semibold text-brand-teal hover:text-brand-orange">
              study programs
            </Link>
            {" · "}
            <Link href="/faq" className="font-semibold text-brand-teal hover:text-brand-orange">
              FAQ
            </Link>
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
