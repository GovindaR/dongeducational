import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/SectionHeading";
import {
  faqs,
  intakeDates,
  programs,
  processSteps,
  servicesDetailed,
  stats,
  testimonials,
  whyJapan,
} from "@/lib/content";
export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Stats */}
      <AnimateOnScroll>
      <section className="border-b border-brand-border bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:gap-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[clamp(1.5rem,4vw,2rem)] font-extrabold text-brand-teal">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          *Based on students who completed documentation with DONG
        </p>
      </section>
      </AnimateOnScroll>

      {/* Programs preview */}
      <AnimateOnScroll stagger>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          label="Study pathways"
          title="Programs we support"
          description="From zero Japanese to university degrees — choose the pathway that matches your education and career goals."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.slug}
              id={program.slug}
              className="card-hover-lift rounded-2xl border border-brand-border bg-white p-6 shadow-sm hover:border-brand-teal/40 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-teal-light px-3 py-1 text-xs font-semibold text-brand-teal-dark">
                  {program.duration}
                </span>
                <span className="rounded-full bg-brand-orange-light px-3 py-1 text-xs font-semibold text-brand-orange">
                  {program.intake}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand-teal-dark">
                {program.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{program.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground">
                {program.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-brand-orange">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link
          href="/programs"
          className="link-animated mt-8 text-sm font-semibold text-brand-teal hover:text-brand-orange"
        >
          View all program details →
        </Link>
      </section>
      </AnimateOnScroll>

      {/* Why Japan */}
      <AnimateOnScroll stagger>
      <section className="bg-brand-teal-light/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Why Japan?"
            title="A top destination for students from Nepal"
            description="Quality education, part-time work options, and long-term career opportunities."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyJapan.map((item) => (
              <article
                key={item.title}
                className="card-hover-lift rounded-2xl border border-brand-border bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-brand-teal-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/why-japan"
            className="link-animated mt-8 text-sm font-semibold text-brand-teal hover:text-brand-orange"
          >
            Learn more about studying in Japan →
          </Link>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Services */}
      <AnimateOnScroll stagger>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          label="What we do"
          title="Complete consultancy services"
          description="Everything from first meeting to pre-departure — in English and local language support."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesDetailed.map((service) => (
            <article
              key={service.title}
              className="card-hover-lift rounded-2xl border border-brand-border bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-brand-teal-dark">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-foreground">
                {service.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link
          href="/services"
          className="link-animated mt-8 text-sm font-semibold text-brand-teal hover:text-brand-orange"
        >
          See full service breakdown →
        </Link>
      </section>
      </AnimateOnScroll>

      {/* Process */}
      <AnimateOnScroll stagger>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Step by step"
            title="Your journey from Nepal to Japan"
            description="A clear 6-step process — no confusion about what happens next."
          />
          <ol className="mt-10 space-y-4">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="card-hover-lift flex gap-4 rounded-2xl border border-brand-border bg-brand-teal-light/30 p-5 sm:gap-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-brand-teal-dark">{step.title}</h3>
                    <span className="text-xs font-semibold text-brand-orange">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/process"
            className="link-animated mt-8 text-sm font-semibold text-brand-teal hover:text-brand-orange"
          >
            View detailed timeline →
          </Link>
        </div>
      </section>
      </AnimateOnScroll>

      {/* Intake dates */}
      <AnimateOnScroll>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          label="Plan ahead"
          title="Important intake dates"
          description="Apply early — popular schools fill seats months before class starts."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {intakeDates.map((item) => (
            <article
              key={item.intake}
              className="card-hover-lift rounded-2xl border-l-4 border-l-brand-orange bg-brand-orange-light/50 p-6"
            >
              <h3 className="font-bold text-brand-teal-dark">{item.intake}</h3>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Apply by:</span> {item.applyBy}
              </p>
              <p className="mt-1 text-sm text-muted">
                <span className="font-semibold">Best for:</span> {item.bestFor}
              </p>
            </article>
          ))}
        </div>
      </section>
      </AnimateOnScroll>

      {/* Testimonials */}
      <AnimateOnScroll stagger>
      <section className="bg-brand-teal-darker py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Success stories"
            title="What our students say"
            description="Real experiences from students from Nepal who studied in Japan with DONG guidance."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="card-hover-lift rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <p className="text-sm leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-white/20 pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-brand-orange">{t.program}</p>
                  <p className="text-xs text-white/60">{t.location}, Japan</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      {/* FAQ preview */}
      <AnimateOnScroll>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          label="FAQ"
          title="Common questions"
          description="Quick answers — visit our FAQ page for the full list."
        />
        <div className="mt-8">
          <FAQAccordion items={faqs} limit={4} />
        </div>
        <Link
          href="/faq"
          className="mt-6 inline-flex text-sm font-semibold text-brand-teal hover:text-brand-orange"
        >
          Read all FAQs →
        </Link>
      </section>
      </AnimateOnScroll>

      <CTABanner />
    </>
  );
}
