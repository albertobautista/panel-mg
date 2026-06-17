import Image from "next/image";
import { gallery } from "./data";

export function AdvantagesGallery() {
  return (
    <section className="bg-white px-6 py-14 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 inline-block border-b-2 border-red pb-1 font-lato text-[10px] font-bold uppercase tracking-[3px] text-red">
          Proyectos reales
        </p>
        <h2 className="mb-10 font-inter text-3xl font-black uppercase text-blue md:text-5xl">
          Panel MG en <span className="text-red">acción</span>
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:grid-rows-[260px_200px]">
          {gallery.map((image, index) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden rounded-lg border border-blue/10 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className="relative h-[220px] sm:h-[210px] lg:h-full">
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-4 pb-3 pt-8 font-lato text-[11px] font-bold uppercase tracking-[1px] text-white">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
