import { InfoBanner } from "../components/about-us/InfoBanner";
import { PanelTypes } from "../components/about-us/PanelTypes";
import { ProductGallery } from "../components/products/ProductGallery";
import { ProductsIntro } from "../components/products/ProductsIntro";

const productImages = [
  "/images/products/slider/image-1.webp",
  "/images/products/slider/image-2.webp",
  "/images/products/slider/image-3.webp",
  "/images/products/slider/image-4.webp",
  "/images/products/slider/image-5.webp",
  "/images/products/slider/image-6.webp",
  "/images/products/slider/image-7.webp",
  "/images/products/slider/image-8.webp",
  "/images/products/slider/image-9.webp",
];

export default function Productos() {
  return (
    <div className="bg-white">
      <ProductsIntro />
      <ProductGallery images={productImages} />
      <section className="w-full px-6 md:px-20 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-10 font-inter">
          ¿Por qué utilizar el panel MG?
        </h2>
        <div className="flex flex-col gap-8">
          <p className="font-montserrat text-[#0d1b2a] text-lg leading-relaxed">
            El sistema MG se podría considerar que es un sistema constructivo
            híbrido, que se posiciona entre el tradicional a base de ladrillos
            de barro o concreto con estructura de castillos, trabes y
            cerramientos de varilla y concreto; y los sistemas ligeros de
            paneles de Yeso o Fibrocemento con estructura de perfiles metálicos.
            Esto porque tiene la durabilidad y dureza de las construcciones con
            block y de igual forma posee las ventajas de los sistemas modulares
            de construcción rápidos, seguros y ligeros, como los paneles de
            yeso.
          </p>
          <p className="font-montserrat text-[#0d1b2a] text-lg leading-relaxed">
            Una vez que el panel MG está enjarrado y terminado el proceso de
            curado del mortero se obtiene una estructura con más capacidad de
            carga que los muros de block (aun considerando los castillos y
            trabes) porque la estructura del alambre que lo forma está a lo
            largo y ancho de la construcción, a diferencia de los ladrillos que
            solo tienen refuerzos en los castillos y trabes.
          </p>
          <p className="font-montserrat text-[#0d1b2a] text-lg leading-relaxed">
            Por otro lado, al comparar las construcciones del panel MG con las
            de paneles de Yeso la diferencia es abismal. Si se golpea la de
            panel de Yeso el ruido que provoca es como el de un tambor y la
            construcción se siente “hueca y débil”, mientras que la de panel
            suena fuerte y sin resonancia. Por otro lado, los terminados que se
            pueden dar al panel son como los de cualquier obra tradicional que
            utilice mortero, yeso, estuco, etc. y puede ser lisa, apolillada,
            rustica, etc.
          </p>
        </div>
      </section>
      <PanelTypes />
      <InfoBanner />
    </div>
  );
}
