import Link from "next/link";

export default function TechnicalSheet() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-20 py-14 sm:py-16 md:py-20 bg-dark-gray text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-3 font-inter text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold uppercase tracking-[-.2px] text-white">
          Descargar Ficha Técnica
        </h2>
        <p className="mx-auto mb-9 max-w-[560px] font-montserrat text-base leading-[1.78] text-white/70">
          Especificaciones técnicas, tablas de resistencia, datos de aislamiento
          térmico y acústico del Panel MG.
        </p>
        <Link
          href="/pdfs/ficha-tecnica.pdf"
          download
          className="inline-flex items-center gap-3 rounded-md bg-red px-8 md:px-11 py-4 font-montserrat text-sm font-bold uppercase tracking-[1.5px] text-white shadow-[0_6px_24px_rgba(220,38,38,.35)] transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,.45)]"
        >
          Descargar Ficha Técnica (PDF)
        </Link>
      </div>
    </section>
  );
}
