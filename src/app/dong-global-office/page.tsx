import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { companiesInJapan, companyInJapanIntro } from "@/lib/content";


export const metadata: Metadata = {
  title: "Dong Global Office",
  description:
    "Partner language schools, vocational colleges, and universities in Japan that DONG Educational Consultancy works with for students from Nepal.",
};

const typeStyles: Record<
  (typeof companiesInJapan)[number]["type"],
  string
> = {
  "Japanese Language School": "bg-brand-teal-light text-brand-teal-dark",
  "Vocational / Senmon": "bg-brand-orange-light text-brand-orange-dark",
  University: "bg-brand-teal/10 text-brand-teal-darker",
};

export default function CompanyInJapanPage() {
  return (
    <>
      <PageHeader
        url="/contact"
        bannerKey="dong-global-office"
        label="Business Culture in Japan"
        title="Companies & schools we work with"
        description="Explore the types of verified institutions DONG partners with across Japan — from prestigious language schools in Osaka to vocational colleges and university programs in major cities and regional regions nationwide."
        cta={{ href: "/contact", label: "Get your school shortlist" }}
        showLogo={true}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title={companyInJapanIntro.title}
          description={companyInJapanIntro.description}
        />
        <p className="mt-6 rounded-xl border border-brand-border bg-brand-teal-light/40 p-4 text-sm text-muted">
          {companyInJapanIntro.note}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companiesInJapan.map((company) => (
            <article
              key={company.name}
              className="card-hover-lift flex flex-col rounded-2xl border border-brand-border bg-white p-5 shadow-sm sm:p-6"
            >
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${typeStyles[company.type]}`}
              >
                {company.type}
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-teal-dark">
                {company.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-orange">
                {company.city}, Japan
              </p>
              <ul className="mt-4 flex-1 space-y-2 border-t border-brand-border pt-4">
                {company.programs.map((program) => (
                  <li key={program} className="flex gap-2 text-sm text-muted">
                    <span className="text-brand-teal">✓</span>
                    {program}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-teal-light/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="How we choose partners"
            title="Not every school fits every student"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-teal-dark">Profile match</h3>
              <p className="mt-2 text-sm text-muted">
                We compare your academic background, Japanese level, and budget
                with each institution&apos;s real requirements.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-teal-dark">City & lifestyle</h3>
              <p className="mt-2 text-sm text-muted">
                Tokyo, Osaka, Fukuoka, and regional cities differ in living costs,
                part-time job options, and community — we explain the trade-offs.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-brand-teal-dark">Long-term pathway</h3>
              <p className="mt-2 text-sm text-muted">
                Language school should connect to your next step — senmon, university,
                or skilled work — not be a dead end.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want a personalized list of schools in Japan?"
        description="Book free counseling and we will shortlist 2–4 partner institutions that match your goals, intake, and family budget."
      />
    </>
  );
}
