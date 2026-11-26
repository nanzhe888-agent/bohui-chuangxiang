"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export function ScrollMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-in");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    root.classList.add("has-motion");
    return () => {
      observer.disconnect();
      root.classList.remove("has-motion");
    };
  }, [pathname]);

  return null;
}
