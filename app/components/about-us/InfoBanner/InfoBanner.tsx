import Link from "next/link";

export default function InfoBanner() {
  return (
    <section className="w-full px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto rounded-xl py-20 px-10 md:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden bg-red">
        {/* TEXT */}
        <div>
          <p className="text-white/80 text-md tracking-wide mb-2 font-montserrat">
            Estamos Aquí para Ayudarle
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight font-montserrat">
            Solicite más información
          </h2>
        </div>

        {/* BUTTON */}
        <Link
          href="/contacto"
          className="bg-blue font-montserrat text-white px-6 py-3 rounded-md text-base hover:bg-[#021728] transition flex items-center gap-2"
        >
          Contáctenos →
        </Link>
      </div>
    </section>
  );
}
