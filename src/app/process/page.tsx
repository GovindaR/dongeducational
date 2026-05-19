import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { intakeDates, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Application Process",
  description:
    "Step-by-step Nepal to Japan study abroad process — counseling, COE, visa, and departure.",
};

const documentsChecklist = [
  "Valid passport (or application in progress)",
  "+2 / SEE / Bachelor transcripts & certificates",
  "Passport-size photos (Japan specification)",
  "Bank balance certificate (sponsor or self)",
  "Sponsorship letter & relationship proof (if applicable)",
  "Japanese language certificate (if any — JLPT, NAT)",
  "Resume / CV for university applicants",
  "Research plan (graduate applicants)",
] as const;

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        bannerKey="process"
        label="How it works"
        title="From first visit to flying to Japan"
        description="A transparent 6-step process. Average timeline: 6–10 months depending on intake and school."
        cta={{ href: "/contact", label: "Start step 1 — free counseling" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ol className="relative space-y-0">
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative flex gap-6 pb-12 last:pb-0">
              {index < processSteps.length - 1 && (
                <span
                  className="absolute left-5 top-12 h-full w-0.5 bg-brand-border"
                  aria-hidden
                />
              )}
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                {step.step}
              </span>
              <div className="flex-1 rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-brand-teal-dark">
                    {step.title}
                  </h2>
                  <span className="rounded-full bg-brand-teal-light px-3 py-0.5 text-xs font-semibold text-brand-teal">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-teal-light/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-teal-dark">
            Document checklist
          </h2>
          <p className="mt-2 text-muted">
            Start gathering these early. Exact requirements vary by school — we
            give you a personalized list after counseling.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {documentsChecklist.map((doc) => (
              <li
                key={doc}
                className="flex gap-2 rounded-xl bg-white px-4 py-3 text-sm shadow-sm"
              >
                <span className="text-brand-orange">□</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-teal-dark">Intake planning</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {intakeDates.map((item) => (
            <article
              key={item.intake}
              className="rounded-2xl border border-brand-border p-6"
            >
              <h3 className="font-bold text-brand-orange">{item.intake}</h3>
              <p className="mt-2 text-sm">
                <strong>Apply by:</strong> {item.applyBy}
              </p>
              <p className="mt-1 text-sm text-muted">{item.bestFor}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
