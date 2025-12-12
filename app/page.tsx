import { ContactForm } from "./components/home/ContactForm";
import { FeatureHeroSection } from "./components/home/FeatureHeroSection";
import { HeroSlider } from "./components/home/HeroSlider";
import { ImageGrid } from "./components/home/ImageGrid";
import { InfoSection } from "./components/home/InfoSection";
import { ReviewsSection } from "./components/home/ReviewsSection";
import { StatsSection } from "./components/home/StatsSection";

const pillars = [
  {
    title: "Ligereza",
    description:
      "Reduce cargas muertas entre un 30% y 50% en comparación con sistemas tradicionales. En el transporte, elevaciones y acarreos. El Mt.2 de panel pesa en promedio 3.5 Kg.",
    image: "/images/home/advantages/image-1.webp",
    icon: "🪶",
  },
  {
    title: "Rapidez",
    description:
      "Disminuye el tiempo de ejecución hasta un 50% y permite pre-ensamblaje en obra. Falicita la colocación de instalaciones eléctricas, sanitarias e hidráulicas.",
    image: "/images/home/advantages/image-1.webp",
    icon: "⏱️",
  },
  {
    title: "Versatilidad",
    description:
      "Compatible con materiales constructivos tradicionales, útil para muros, losas de entrepiso y detalles arquitectónicos. Facilita la autoconstrucción sin necesidad de herramientas especializadas. Flexibilidad en modulación y en posibilidades de pre-armado.",
    image: "/images/home/advantages/image-1.webp",
    icon: "🧱",
  },
  {
    title: "Aislamiento",
    description:
      "Eficaz en la reducción del ruido, calor, y humedad, proporcionando un ambiente interior confortable.",
    image: "/images/home/advantages/image-1.webp",
    icon: "❄️",
  },
  {
    title: "Economía",
    description:
      "Ofrece un costo directo por m² más bajo que los sistemas tradicionales, ahorrando en cimentación y estructura. Reduce la mano de obra, por la rapidez de obra reduce el costo financiero y emplea un mínimo de accesorios de instalación.",
    image: "/images/home/advantages/image-1.webp",
    icon: "💰",
  },
  {
    title: "Resistencia Sísmica",
    description:
      "Minimiza la necesidad de castillos y cadenas gracias a su construcción monolítica.",
    image: "/images/home/advantages/image-1.webp",
    icon: "🌎",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <InfoSection />
      <ImageGrid data={pillars} title="Ventajas del Sistema MG:" />
      <StatsSection />
      <ReviewsSection />
      <FeatureHeroSection />
      <ContactForm />
    </div>
  );
}
