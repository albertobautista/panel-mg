import { InfoBanner } from "../components/about-us/InfoBanner";
import { PanelTypes } from "../components/about-us/PanelTypes";
import { ProductGallery } from "../components/products/ProductGallery";
import { ProductsIntro } from "../components/products/ProductsIntro";

export default function Productos() {
  return (
    <div className="bg-white">
      <ProductsIntro />
      <ProductGallery />
      <PanelTypes />
      <InfoBanner />
    </div>
  );
}
