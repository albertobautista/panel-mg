export default function TechnicalPresentation() {
  return (
    <section className="w-full bg-blue text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* TITULO */}
        <h2 className="text-5xl md:text-7xl font-semibold text-creama font-inter leading-tight mb-8">
          Presentación Técnica
        </h2>

        {/* TEXTO */}
        <p className="text-lg md:text-xl text-[#e5e7eb] font-montserrat leading-relaxed max-w-5xl">
          El Panel MG es un panel constructivo modular que consiste en una
          estructura tridimensional de alambre de acero pulido bajo carbono
          (1008), cumpliendo con normas ASTM A-82, A-85, A-370 y A-510 en
          calibres 14 y 13. Su diseño incluye armaduras de alambres
          electrosoldados en forma de zigzag.
          <br />
          <br />
          Con espesores de <strong>2&quot;, 3&quot; o 4&quot;</strong>, y un
          ancho fijo de <strong>1.22 m</strong>, el panel tiene longitudes que
          van de
          <strong> 2.44 m a 4.04 m</strong>.
          <br />
          <br />
          El Sistema MG integra el Panel MG, varilla de acero, y mortero
          cemento-arena o concreto, creando muros y losas armados para la
          construcción eficiente de viviendas de hasta dos niveles. Esta unión
          asegura un comportamiento estructural uniforme, eliminando debilidades
          en la edificación.
        </p>
      </div>
    </section>
  );
}
