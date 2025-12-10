export default function BannerCTA() {
  return (
    <section className="w-full py-17 px-6 md:px-16">
      <div
        className="
          max-w-7xl mx-auto 
          rounded-xl 
          py-16 px-10 md:px-20 
          flex flex-col md:flex-row 
          items-start md:items-center 
          justify-between gap-8
          bg-gradient-to-r from-red to-red/90
        "
      >
        {/* TEXTOS */}
        <div className="max-w-3xl">
          <p className="text-white text-sm uppercase tracking-widest mb-3 font-montserrat opacity-80">
            Ser su socio estratégico es nuestro propósito.
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-inter font-semibold leading-tight mb-6">
            ¿Cómo podemos trabajar juntos para transformar tus construcciones?
          </h2>

          <a
            href="/contacto"
            className="inline-block font-montserrat bg-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-[#0c3244] transition flex items-center gap-2"
          >
            Contáctenos →
          </a>
        </div>
      </div>
    </section>
  );
}
