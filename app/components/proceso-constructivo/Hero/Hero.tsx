import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="proceso-constructivo-hero"
      className="relative flex w-full min-h-[260px] items-center overflow-hidden md:min-h-80 lg:min-h-90"
    >
      <Image
        src="/images/construction/hero.webp"
        alt="Proceso constructivo Panel MG"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-3 font-inter text-4xl font-bold  leading-[1.02] text-white md:mb-4 md:text-6xl">
            Proceso Constructivo
          </h1>
          <div className="h-1 w-[52px] rounded-sm bg-red-600" />
          <p className="mt-4 max-w-4xl font-montserrat text-xs  tracking-[0.2px] text-white/85 sm:text-sm md:mt-5 md:text-base md:tracking-[0.3px]">
            Guía simplificada de la instalación del Panel MG en casas y
            edificios
          </p>
        </div>
      </div>
    </section>
  );
}
