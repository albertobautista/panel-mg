import {
  AdvantagesBenefits,
  AdvantagesCTA,
  AdvantagesFeatures,
  AdvantagesGallery,
  AdvantagesHero,
  AdvantagesSpecs,
  AdvantagesStats,
} from "../components/advantages";

export default function Advantages() {
  return (
    <main className="bg-white text-[#363536]">
      <AdvantagesHero />
      <AdvantagesStats />
      <AdvantagesFeatures />
      <AdvantagesSpecs />
      <AdvantagesGallery />
      <AdvantagesBenefits />
      <AdvantagesCTA />
    </main>
  );
}
