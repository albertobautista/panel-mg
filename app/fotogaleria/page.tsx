import { Hero } from "../components/construction/Hero";
import { ImageGrid } from "../components/construction/ImageGrid";
import { pillars } from "../data";

export default function Photogallery() {
  return (
    <div className="bg-white">
      <Hero />
      <ImageGrid data={pillars} />
    </div>
  );
}
