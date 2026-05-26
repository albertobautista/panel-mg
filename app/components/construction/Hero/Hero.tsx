import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] flex items-center">
      {/* IMAGEN DE FONDO */}
      <Image
        src="/images/construction/hero-2.webp"
        alt="Construcción"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-inter text-left">
            Fotogalería
          </h1>
        </div>
      </div>
    </section>
  );
}
