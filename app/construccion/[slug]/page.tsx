import { notFound } from "next/navigation";
import { pillars } from "@/app/data";
import { ConstructionDetailLayout } from "@/app/components/construction/ConstructionDetailLayout";
import ProductGallery from "@/app/components/products/ProductGallery/ProductGallery";
import { InfoBanner } from "@/app/components/about-us/InfoBanner";
import { RelatedSolutions } from "@/app/components/construction/RelatedSolutions";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ConstructionDetailPage({ params }: Props) {
  const { slug } = await params;
  console.log(slug);
  const item = pillars.find((el) => el.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white">
      <ConstructionDetailLayout
        title={item.title}
        subtitle={item.subtitle}
        bullets={item.bullets}
        downloadUrl="/files/fichas/metales-ferroaleaciones.pdf"
      />
      <ProductGallery />
      <InfoBanner />
      <RelatedSolutions
        items={[
          {
            title: "Cañones de Aire & Kit de Optimización",
            image: "/images/construction/hero.webp",
            href: "/soluciones/canones-de-aire",
          },
          {
            title: "Metales y Ferroaleaciones",
            image: "/images/construction/hero.webp",
            href: "/soluciones/metales-ferroaleaciones",
          },
          {
            title: "Sistemas de Tensado",
            image: "/images/construction/hero.webp",
            href: "/soluciones/sistemas-tensado",
          },
        ]}
      />
    </section>
  );
}
