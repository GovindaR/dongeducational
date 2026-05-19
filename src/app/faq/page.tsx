import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHeader } from "@/components/PageHeader";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about studying in Japan from Nepal — costs, visa, COE, and DONG consultancy.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        bannerKey="faq"
        label="FAQ"
        title="Frequently asked questions"
        description="Answers for students and parents about Japan study abroad, visas, costs, and our consultancy services."
        cta={{ href: "/contact", label: "Still have questions? Contact us" }}
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FAQAccordion items={faqs} />
        <p className="mt-8 text-center text-sm text-muted">
          Every situation is different. For advice based on your education and
          budget, book a free counseling session.
        </p>
      </section>

      <CTABanner />
    </>
  );
}
