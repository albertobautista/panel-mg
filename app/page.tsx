import { ContactForm } from "./components/general/home/ContactForm";
import { FeatureHeroSection } from "./components/general/home/FeatureHeroSection";
import { HeroSlider } from "./components/general/home/HeroSlider";
import { ImageGrid } from "./components/general/home/ImageGrid";
import { InfoSection } from "./components/general/home/InfoSection";
import { ReviewsSection } from "./components/general/home/ReviewsSection";
import { StatsSection } from "./components/general/home/StatsSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <InfoSection />
      <ImageGrid />
      <StatsSection />
      <ReviewsSection />
      <FeatureHeroSection />
      <ContactForm />
    </div>
  );
}
