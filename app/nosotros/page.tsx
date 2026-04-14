import { BannerCTA } from "../components/about-us/BannerCTA";
import { CompanyInfo } from "../components/about-us/CompanyInfo";
import { TechnicalPresentation } from "../components/about-us/TechnicalPresentation";
import { ProductGallery } from "../components/products/ProductGallery";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <TechnicalPresentation />
      <ProductGallery
        images={[
          "/images/us/image-1.webp",
          "/images/us/image-2.webp",
          "/images/us/image-3.webp",
          "/images/us/image-4.webp",
          "/images/us/image-5.webp",
          "/images/us/image-6.webp",
          "/images/us/image-7.webp",
          "/images/us/image-8.webp",
          "/images/us/image-9.webp",
          "/images/us/image-10.webp",
        ]}
      />

      <BannerCTA />
    </div>
  );
}
