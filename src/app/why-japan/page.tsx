import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { whyJapan } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Japan",
  description:
    "Why students from Nepal choose Japan for language study, vocational training, and university education.",
};

const additionalReasons = [
  {
    title: "Scholarship opportunities",
    body: "MEXT and university scholarships can reduce tuition for strong academic performers. We guide eligible students on application timing and documents.",
  },
  {
    title: "Technology & industry hub",
    body: "Japan leads in automotive, robotics, IT, anime, and hospitality — sectors where skilled graduates find employment.",
  },
  {
    title: "Cultural exchange",
    body: "Living in Japan builds discipline, language fluency, and global perspective — valued by employers in Nepal and abroad.",
  },
  {
    title: "Community support from home",
    body: "Growing student communities from Nepal in major cities mean peer support for housing, jobs, and adapting to life in Japan.",
  },
] as const;

export default function WhyJapanPage() {
  return (
    <>
      <PageHeader
        bannerKey="why-japan"
        label="Why Japan?"
        title="Build your future in one of Asia's strongest economies"
        description="Japan combines quality education, part-time work rights, and clear pathways from language school to skilled careers."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Top reasons students from Nepal choose Japan"
          description="Whether your goal is a degree, vocational skill, or Japanese fluency — Japan offers structured options."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {whyJapan.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-border p-6"
            >
              <h3 className="text-lg font-bold text-brand-teal-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-teal-light/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="More benefits"
            title="Beyond the classroom"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {additionalReasons.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border-l-4 border-l-brand-orange bg-white p-6 shadow-sm"
              >
                <h3 className="font-bold text-brand-teal-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-brand-teal-darker p-8 text-white sm:p-10">
          <h2 className="text-xl font-bold">Is Japan right for you?</h2>
          <p className="mt-3 max-w-2xl text-white/85 text-sm leading-relaxed">
            Japan suits motivated students who are ready to learn Japanese, follow
            visa rules, and invest 1–4 years in education. If you are unsure, our
            free counseling compares Japan with other destinations honestly — no
            pressure to apply.
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            <li>✓ +2 or Bachelor graduates</li>
            <li>✓ Career-focused mindset</li>
            <li>✓ Family support for initial costs</li>
            <li>✓ Willing to learn Japanese</li>
          </ul>
        </div>
      </section>

      <CTABanner
        title="Talk to us about your Japan plan"
        description="We help you decide if Japan matches your budget, timeline, and career goals — in a free counseling session in English."
      />
    </>
  );
}
