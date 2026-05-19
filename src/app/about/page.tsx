import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutContent, stats } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About DONG Educational Consultancy — Nepal's trusted Japan study abroad advisors.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        bannerKey="about"
        label="About DONG"
        title={siteConfig.name}
        description={aboutContent.story}
      />

      <section className="border-b border-brand-border bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-brand-teal">{stat.value}</p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          label="Our values"
          title="What we stand for"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {aboutContent.values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border-l-4 border-l-brand-teal bg-brand-teal-light/30 p-6"
            >
              <h3 className="font-bold text-brand-teal-dark">{value.title}</h3>
              <p className="mt-2 text-sm text-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-teal-light/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="Our team"
            title="People behind your Japan journey"
            description="Specialists in counseling, documentation, and Japanese language planning."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutContent.team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-lg font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-bold text-brand-teal-dark">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand-orange">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-brand-border p-8">
          <h2 className="text-xl font-bold text-brand-teal-dark">Visit our office</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <strong className="text-foreground">Address:</strong>{" "}
              {siteConfig.address}
            </li>
            <li>
              <strong className="text-foreground">Phone:</strong> {siteConfig.phone}
            </li>
            <li>
              <strong className="text-foreground">Email:</strong> {siteConfig.email}
            </li>
            <li>
              <strong className="text-foreground">Hours:</strong>{" "}
              {siteConfig.officeHours}
            </li>
          </ul>
          <p className="mt-4 text-sm text-brand-teal">
            {siteConfig.taglineSupporting}
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
