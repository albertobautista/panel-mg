"use client";

import { useEffect, useState } from "react";
import { stripItems } from "../data";

export default function SectionNav() {
  const [activeId, setActiveId] = useState(stripItems[0].id);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: 0.1 },
    );

    stripItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("proceso-constructivo-hero");
      if (!hero) return;

      const { bottom } = hero.getBoundingClientRect();
      setIsSticky(bottom <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] border-b border-slate-200 transition-shadow duration-200 ${
        isSticky
          ? "sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-white/90"
          : "relative z-20 bg-white"
      }`}
    >
      <div className="mx-auto flex w-max min-w-full max-w-7xl items-stretch px-4 sm:px-6 md:px-20 snap-x snap-mandatory md:w-full md:min-w-0 md:justify-center">
        {stripItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className={`-mb-px snap-start whitespace-nowrap h-10 sm:h-12 shrink-0 border-b-2 px-3 sm:px-5 font-montserrat text-[11px] sm:text-xs font-semibold uppercase tracking-[.8px] sm:tracking-[1px] transition hover:bg-slate-100 hover:text-[#0d1b2a] ${
              activeId === item.id
                ? "border-red-600 text-red-600"
                : "border-transparent text-slate-500"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
