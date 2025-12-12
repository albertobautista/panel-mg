import Image from "next/image";

export default function PanelTypes() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-10 font-inter">
        Tipos de paneles
      </h2>

      {/* GRID DE IMÁGENES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {[
          "/images/products/panel-types/image-1-1.webp",
          "/images/products/panel-types/image-2.webp",
          "/images/products/panel-types/image-3.webp",
        ].map((src, index) => (
          <div
            key={index}
            className="
              relative 
              w-full 
              aspect-[4/3] 
              rounded-xl 
              overflow-hidden 
              flex 
              items-center 
              justify-center
            "
          >
            <Image
              src={src}
              alt={`Tipo de panel ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
