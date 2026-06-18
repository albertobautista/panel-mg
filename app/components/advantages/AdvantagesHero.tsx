import Image from "next/image";

export function AdvantagesHero() {
  return (
    <section className="relative overflow-hidden bg-blue px-6 py-14 md:px-20 md:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p className="mb-4 font-lato text-[11px] font-bold uppercase tracking-[3px] text-white/60">
            Panel MG Estructural
          </p>
          <h1 className="mb-5 font-inter text-3xl font-black uppercase leading-tight text-white md:text-5xl">
            ¿Por que es el
            <span className="block text-red">mejor</span>
            <span className="block text-white">del mercado?</span>
          </h1>
          <p className="max-w-xl font-lato text-sm leading-7 text-white/70 md:text-base">
            Diseñado con tecnología y calidad para ofrecerte máxima resistencia,
            rendimiento y durabilidad en cada obra.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-[200px_120px] gap-3 md:grid-rows-[230px_140px]">
          <div className="relative row-span-2 overflow-hidden rounded-lg border border-white/20">
            <Image
              src="/images/why-is-better/image-2.webp"
              alt="Panel MG instalado"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border border-white/20">
            <Image
              src="/images/why-is-better/image-3.webp"
              alt="Montaje de panel MG"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg border border-white/20">
            <Image
              src="/images/why-is-better/image-4.webp"
              alt="Detalle de panel estructural"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
