"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { siteConfig } from "@/lib/site";

type CTABannerProps = {
  title?: string;
  description?: string;
  image?: string;
};

export function CTABanner({
  title = "Ready to start your Japan journey?",
  description = `Book a free counseling session with ${siteConfig.shortName}. We explain costs, timeline, and documents in clear English — your family is welcome to join.`,
  image = "/namba.jpeg",
}: CTABannerProps) {
  return (
    <AnimateOnScroll>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="card-hover-lift relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-brand-teal/10">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal-darker/95 via-brand-teal-dark/88 to-brand-orange/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,124,0,0.25),transparent_55%)]" />
          </div>

          <div className="relative z-[1] px-5 py-8 text-white sm:px-10 sm:py-12 md:px-14 md:py-14">
            <h2 className="max-w-xl text-xl font-extrabold leading-snug sm:text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="btn-primary inline-flex justify-center sm:w-auto"
              >
                Book free counseling
              </Link>
              <Link
                href="/process"
                className="btn-secondary inline-flex justify-center sm:w-auto"
              >
                See full process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
