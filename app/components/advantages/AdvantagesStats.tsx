import { stats } from "./data";

export function AdvantagesStats() {
  return (
    <section className="bg-red px-6 py-7 md:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-md border border-white/20 bg-white/5 px-5 py-4 text-center"
          >
            <p className="font-inter text-3xl font-black leading-none text-white">
              {item.value}
            </p>
            <p className="mt-2 font-lato text-[11px] uppercase tracking-[1px] text-white/80">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
