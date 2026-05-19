import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CTABanner } from "@/components/CTABanner";
import { PageHeader } from "@/components/PageHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DONG Educational Consultancy for free Japan study abroad counseling in Nepal.",
};

const contactReasons = [
  "Free first counseling — no obligation",
  "Sessions available in English and local language support",
  "Parents welcome to join meetings",
  "Office visits and phone inquiries accepted",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        bannerKey="contact"
        label="Contact"
        title="Book your free counseling session"
        description="Tell us about your education background and goals. We respond within 1–2 business days."
      />

      <section className="container-main section-pad">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-brand-teal-dark">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="rounded-xl border border-brand-border p-4">
                <span className="font-semibold text-brand-teal">Phone / WhatsApp</span>
                <p className="mt-1">{siteConfig.phone}</p>
              </li>
              <li className="rounded-xl border border-brand-border p-4">
                <span className="font-semibold text-brand-teal">Email</span>
                <p className="mt-1">{siteConfig.email}</p>
              </li>
              <li className="rounded-xl border border-brand-border p-4">
                <span className="font-semibold text-brand-teal">Office</span>
                <p className="mt-1">{siteConfig.address}</p>
                <p className="mt-1 text-muted">{siteConfig.officeHours}</p>
              </li>
            </ul>
            <ul className="mt-8 space-y-2">
              {contactReasons.map((reason) => (
                <li key={reason} className="flex gap-2 text-sm text-muted">
                  <span className="text-brand-orange">✓</span>
                  {reason}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              Before contacting, you may find answers in our{" "}
              <Link href="/faq" className="font-semibold text-brand-teal hover:text-brand-orange">
                FAQ
              </Link>{" "}
              or{" "}
              <Link href="/process" className="font-semibold text-brand-teal hover:text-brand-orange">
                process guide
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm ring-1 ring-brand-teal/5 sm:p-8">
              <h2 className="text-lg font-bold text-brand-teal-dark">
                Send an inquiry
              </h2>
              <p className="mt-1 text-sm text-muted">
                Your message is saved securely in our database.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Prefer to visit in person?"
        description={`Walk in during office hours at ${siteConfig.address} — no appointment needed for initial questions.`}
      />
    </>
  );
}
