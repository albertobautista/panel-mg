import { specs } from "./data";

export function AdvantagesSpecs() {
  return (
    <section className="bg-blue px-6 py-14 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 inline-block border-b-2 border-white/30 pb-1 font-lato text-[10px] font-bold uppercase tracking-[3px] text-white/60">
          Ficha técnica
        </p>
        <h2 className="mb-10 font-inter text-3xl font-black uppercase text-white md:text-5xl">
          Especificaciones <span className="text-red">técnicas</span>
        </h2>

        <div className="grid gap-0.5 overflow-hidden rounded-xl border border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-white/5 px-6 py-8 text-center">
              <p className="font-inter text-3xl font-black leading-tight text-white">
                {spec.value}
              </p>
              <p className="mt-2 font-lato text-[11px] uppercase tracking-[1px] text-white/60">
                {spec.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
