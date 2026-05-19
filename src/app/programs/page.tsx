import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Japanese language school, vocational, undergraduate and graduate programs in Japan for students from Nepal.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        bannerKey="programs"
        label="Study pathways"
        title="Programs in Japan"
        description="Choose the route that fits your education level, Japanese ability, and career goals. We guide each pathway from counseling to departure."
        cta={{ href: "/contact", label: "Get program advice" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <article
              key={program.slug}
              id={program.slug}
              className="scroll-mt-24 rounded-2xl border border-brand-border bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-bold text-brand-orange">
                    Pathway {index + 1}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-brand-teal-dark">
                    {program.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-teal-light px-3 py-1 text-xs font-semibold text-brand-teal-dark">
                    {program.duration}
                  </span>
                  <span className="rounded-full bg-brand-orange-light px-3 py-1 text-xs font-semibold text-brand-orange">
                    Intake: {program.intake}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted">{program.summary}</p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-brand-teal">
                Key highlights
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {program.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm">
                    <span className="text-brand-orange">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-border bg-brand-teal-light/50 p-6">
          <h3 className="font-bold text-brand-teal-dark">Not sure which program?</h3>
          <p className="mt-2 text-sm text-muted">
            Many students start at language school even if their goal is university.
            Book a free session — we will map the best timeline for your +2 or
            Bachelor profile.
          </p>
          <Link href="/contact" className="btn-primary mt-4 inline-flex text-sm">
            Book free counseling
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
