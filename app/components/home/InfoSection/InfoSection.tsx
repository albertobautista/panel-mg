export default function InfoSection() {
  return (
    <section className="w-full bg-creama text-[#0d1b2a] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-4xl text-blue md:text-6xl font-bold font-inter leading-tight mb-6">
          Panel MG es líder en la fabricación de paneles estructurales en
          México.
        </h2>

        {/* INTRODUCCIÓN */}
        <p className="text-lg md:text-xl text-[#1b263b] mb-12 font-montserrat">
          Proporcionamos sistemas constructivos innovadores con materiales
          económicos y fáciles de transportar. Nuestra tecnología permite un
          montaje sencillo sin necesidad de equipos ni habilidades
          especializadas.
        </p>

        {/* SUBSECCIÓN: ¿QUÉ ES? */}
        <div className="mb-10">
          <h3 className="text-2xl text-blue md:text-3xl font-semibold mb-3 font-inter">
            ¿Qué es?
          </h3>
          <p className="text-lg text-[#1b263b] leading-relaxed font-montserrat">
            El Panel MG es una estructura tridimensional que combina alambres de
            acero y un núcleo de poliestireno expandido. Su diseño incluye
            armaduras verticales, formadas por alambres de acero pulido
            electrosoldados en zigzag. Estas armaduras se unen mediante alambres
            transversales, creando un panel robusto y versátil.
          </p>
        </div>

        {/* SUBSECCIÓN: ¿CÓMO FUNCIONA? */}
        <div>
          <h3 className="text-2xl text-blue md:text-3xl font-semibold mb-3 font-inter">
            ¿Cómo funciona?
          </h3>
          <p className="text-lg text-[#1b263b] leading-relaxed font-montserrat">
            El Sistema MG consiste básicamente en la integración del Panel MG,
            mallas unión, varilla de acero y mortero cemento-arena y/o concreto,
            generando un cuerpo monolítico de muros y losas armados, con gran
            capacidad estructural. Esto permite la edificación de viviendas de
            hasta dos niveles sin utilizar refuerzos adicionales como castillos
            de varilla de acero.
          </p>
        </div>
      </div>
    </section>
  );
}
