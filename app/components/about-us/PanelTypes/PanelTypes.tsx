import Image from "next/image";

export default function PanelTypes() {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-10">
        Tipos de redes
      </h2>

      {/* IMAGEN CON NEXT/IMAGE */}
      <div className="w-full rounded-xl overflow-hidden relative h-[380px] md:h-[480px] lg:h-[620px]">
        <Image
          src="/images/products/panel-types/image-1.webp" // coloca tu imagen aquí
          alt="Tipos de redes"
          fill
          priority
          //   className="object-cover"
        />
      </div>
    </section>
  );
}
