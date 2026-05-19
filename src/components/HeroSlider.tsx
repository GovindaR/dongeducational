"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BannerBackground } from "@/components/BannerBackground";
import { Logo } from "@/components/Logo";
import { heroSlides } from "@/lib/banners";

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 48;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
      setProgressKey((k) => k + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setPaused(true);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    setPaused(false);

    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) next();
    else prev();
  }

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${active * 100}%)` }}
        aria-live="polite"
      >
        {heroSlides.map((slide, index) => (
          <SlidePanel
            key={slide.id}
            slide={slide}
            isActive={index === active}
            isFirst={index === 0}
          />
        ))}
      </div>

      <SliderControls
        active={active}
        paused={paused}
        progressKey={progressKey}
        onPrev={prev}
        onNext={next}
        onSelect={goTo}
      />
    </section>
  );
}

function SlidePanel({
  slide,
  isActive,
  isFirst,
}: {
  slide: (typeof heroSlides)[number];
  isActive: boolean;
  isFirst: boolean;
}) {
  return (
    <div className="relative flex-[0_0_100%] overflow-hidden">
      <BannerBackground
        image={slide.background}
        accent={slide.accent}
        priority={isFirst}
        kenBurns={isActive}
      />

      <div
        className={`relative z-[1] mx-auto flex min-h-[min(560px,92dvh)] max-w-6xl flex-col justify-center px-4 py-12 pb-36 sm:min-h-[520px] sm:px-6 sm:py-16 sm:pb-32 md:min-h-[580px] md:py-20 lg:min-h-[620px] ${
          isActive ? "hero-slide-enter" : ""
        }`}
      >
        <Logo
          size="hero"
          variant="onDark"
          className="mb-5 max-w-[min(100%,220px)] sm:mb-6 sm:max-w-none"
        />
        <p className="w-fit max-w-full self-start rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase leading-snug tracking-wide text-brand-orange-light shadow-sm backdrop-blur-sm sm:px-3.5 sm:text-xs sm:tracking-wider">
          {slide.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-[clamp(1.65rem,5vw,3rem)] font-extrabold leading-[1.12] tracking-tight sm:mt-6 lg:text-5xl">
          {slide.title}
        </h2>
        {slide.subtitle ? (
          <p className="mt-3 max-w-2xl text-base font-medium text-white/90 sm:mt-4 sm:text-lg">
            {slide.subtitle}
          </p>
        ) : null}
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:max-w-xl lg:max-w-2xl">
          {slide.description}
        </p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
          <Link
            href={slide.ctaPrimary.href}
            className="btn-primary w-full justify-center text-center sm:w-auto"
          >
            {slide.ctaPrimary.label}
          </Link>
          {slide.ctaSecondary ? (
            <Link
              href={slide.ctaSecondary.href}
              className="btn-secondary w-full justify-center text-center sm:w-auto"
            >
              {slide.ctaSecondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SliderControls({
  active,
  paused,
  progressKey,
  onPrev,
  onNext,
  onSelect,
}: {
  active: number;
  paused: boolean;
  progressKey: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/55 via-black/25 to-transparent pt-16 pb-5 sm:pb-7">
      <div className="pointer-events-auto mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div
          className="flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Slide navigation"
        >
          {heroSlides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Go to slide ${index + 1}: ${s.title}`}
              onClick={() => onSelect(index)}
              className={`relative h-2 overflow-hidden rounded-full transition-all duration-300 ${
                index === active
                  ? "w-10 bg-white/25 sm:w-12"
                  : "w-2 bg-white/45 hover:bg-white/75"
              }`}
            >
              {index === active ? (
                <span
                  key={progressKey}
                  className={`hero-dot-progress absolute inset-0 origin-left rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-light ${
                    paused ? "hero-dot-paused" : ""
                  }`}
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                  aria-hidden
                />
              ) : null}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/15 text-lg backdrop-blur-md transition hover:bg-white/30 active:scale-95 sm:h-11 sm:w-11"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/15 text-lg backdrop-blur-md transition hover:bg-white/30 active:scale-95 sm:h-11 sm:w-11"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
