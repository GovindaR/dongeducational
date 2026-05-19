"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate child elements one after another */
  stagger?: boolean;
};

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-up ${visible ? "is-visible" : ""} ${
        stagger ? "stagger-children" : ""
      } ${className}`}
      style={{ transitionDelay: stagger ? undefined : `${delay}ms` }}
    >
      {children}
    </div>
  );
}
