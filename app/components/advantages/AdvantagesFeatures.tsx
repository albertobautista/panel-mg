import { features } from "./data";

export function AdvantagesFeatures() {
  return (
    <section className="bg-creama px-6 py-14 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 inline-block border-b-2 border-red pb-1 font-lato text-[10px] font-bold uppercase tracking-[3px] text-red">
          Caracteristicas del producto
        </p>
        <h2 className="mb-10 font-inter text-3xl font-black uppercase text-blue md:text-5xl">
          Tecnologia que marca <span className="text-red">la diferencia</span>
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="relative rounded-xl border border-blue/10 bg-white p-7 shadow-[0_8px_22px_rgba(12,69,114,0.06)]"
            >
              <span className="absolute right-5 top-3 font-inter text-5xl font-black text-blue/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-4 h-1 w-10 rounded bg-red" />
              <h3 className="mb-3 pr-10 font-inter text-sm font-extrabold uppercase tracking-[0.3px] text-blue">
                {feature.title}
              </h3>
              <p className="mb-3 font-lato text-sm leading-6 text-gray">
                {feature.description}
              </p>

              {feature.bullets ? (
                <ul className="space-y-2 border-t border-creama pt-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-gray">
                      <span className="mt-1 text-blue">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {feature.highlight ? (
                <div className="mt-4 rounded-lg bg-creama p-4 text-center">
                  <p className="font-inter text-4xl font-black leading-none text-red">
                    {feature.highlight.value}
                  </p>
                  <p className="mt-1 font-lato text-xs text-gray">
                    {feature.highlight.label}
                  </p>
                </div>
              ) : null}

              {feature.certs ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {feature.certs.map((cert) => (
                    <span
                      key={cert}
                      className="rounded border border-blue px-2 py-1 font-inter text-[10px] font-bold text-blue"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
