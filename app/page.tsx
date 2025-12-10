import { ContactForm } from "./components/home/ContactForm";
import { FeatureHeroSection } from "./components/home/FeatureHeroSection";
import { HeroSlider } from "./components/home/HeroSlider";
import { ImageGrid } from "./components/home/ImageGrid";
import { InfoSection } from "./components/home/InfoSection";
import { ReviewsSection } from "./components/home/ReviewsSection";
import { StatsSection } from "./components/home/StatsSection";

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
