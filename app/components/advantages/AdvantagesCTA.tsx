import Link from "next/link";

export function AdvantagesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#363536] px-6 py-14 text-center md:px-20 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 10px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="mb-4 font-inter text-3xl font-black uppercase leading-tight text-white md:text-5xl">
          Panel MG estructural
          <span className="block text-red">
            innovación que construye confianza
          </span>
        </h2>
        <p className="mb-8 font-lato text-sm leading-7 text-white/70 md:text-base">
          Cotiza tu proyecto con asesoría técnica y soluciones adaptadas a tu
          tipo de obra.
        </p>
        <Link
          href="/contacto"
          className="inline-flex rounded-md bg-red px-8 py-4 font-inter text-sm font-extrabold uppercase tracking-[1.2px] text-white transition hover:bg-[#8a1820]"
        >
          Habla con un asesor
        </Link>
      </div>
    </section>
  );
}
