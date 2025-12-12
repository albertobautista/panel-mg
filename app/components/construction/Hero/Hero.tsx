import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] flex items-center">
      {/* IMAGEN DE FONDO */}
      <Image
        src="/images/construction/hero.webp"
        alt="Construcción"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 font-inter text-left">
            Sistema Constructivo
          </h1>

          <p className="text-white/85 font-montserrat text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl text-left">
            Estrategias de División en Sistemas Constructivos: Innovación y
            Solidez para Infraestructuras Sostenibles
          </p>
        </div>
      </div>
    </section>
  );
}
