"use client";

import { useMemo } from "react";
import { sections } from "../data";
import { Hero } from "../Hero";
import { ProcessSection } from "../ProcessSection";
import { SectionNav } from "../SectionNav";
import { VisualGuide } from "../VisualGuide";
import { TechnicalSheet } from "../TechnicalSheet";

export default function ProcesoConstructivoPanelMG() {
  const processSections = useMemo(() => sections, []);

  return (
    <div className="w-full bg-white text-[#0d1b2a] scroll-smooth">
      <Hero />
      <SectionNav />
      <div className="w-full px-4 sm:px-6 md:px-20">
        <div className="mx-auto max-w-7xl">
          {processSections.map((section) => (
            <ProcessSection key={section.id} section={section} />
          ))}
        </div>
      </div>
      <VisualGuide />
      <TechnicalSheet />
    </div>
  );
}
