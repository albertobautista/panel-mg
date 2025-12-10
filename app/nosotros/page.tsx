import { BannerCTA } from "../components/about-us/BannerCTA";
import { CompanyInfo } from "../components/about-us/CompanyInfo";
import { TechnicalPresentation } from "../components/about-us/TechnicalPresentation";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <TechnicalPresentation />
      <BannerCTA />
    </div>
  );
}
