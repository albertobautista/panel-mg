import { advantages } from "./data";

export function AdvantagesBenefits() {
  return (
    <section className="bg-creama px-6 py-14 md:px-20 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 inline-block border-b-2 border-red pb-1 font-lato text-[10px] font-bold uppercase tracking-[3px] text-red">
          ¿Por qué elegirnos?
        </p>
        <h2 className="mb-10 font-inter text-3xl font-black uppercase text-blue md:text-5xl">
          Ventajas del <span className="text-red">sistema MG</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="group rounded-xl border border-blue/10 bg-white p-6 text-center shadow-[0_8px_24px_rgba(12,69,114,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(12,69,114,0.12)]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 stroke-blue stroke-2"
                  aria-hidden="true"
                >
                  <path
                    d={advantage.icon}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-inter text-sm font-extrabold uppercase text-blue">
                {advantage.title}
              </h3>
              <p className="font-lato text-sm leading-6 text-gray">
                {advantage.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
