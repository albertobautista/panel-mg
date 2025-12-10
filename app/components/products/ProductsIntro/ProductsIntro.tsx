export default function ProductsIntro() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* COLUMNA IZQUIERDA */}
        <div>
          <p className="uppercase text-sm tracking-widest font-montserrat text-gray-500 mb-3">
            Sistema MG
          </p>

          <h2 className="text-4xl md:text-5xl font-inter font-bold text-[#0d1b2a] leading-tight mb-6">
            Sistema MG: Innovación en Construcción
          </h2>

          {/* PRIMER PÁRRAFO */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-montserrat">
            Se fabrica el Panel MG en espesores de 2&quot;, 3&quot; o 4&quot;
            con longitudes de 2.44 m a 5.05 m. Una vez aplicado el enjarre, el
            espesor y peso del panel quedan como se muestra en la tabla:
          </p>

          {/* TABLA DE ESPECIFICACIONES */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 font-inter">
              Especificaciones del Panel MG
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm font-montserrat">
                    <th className="p-3 border">Producto</th>
                    <th className="p-3 border">Espesor sin enjarre</th>
                    <th className="p-3 border">Espesor con enjarre</th>
                    <th className="p-3 border">Peso terminado (Mt²)</th>
                  </tr>
                </thead>

                <tbody className="text-gray-800 font-montserrat">
                  <tr>
                    <td className="p-3 border font-medium">Panel MG 2&quot;</td>
                    <td className="p-3 border">2&quot;</td>
                    <td className="p-3 border">3&quot;</td>
                    <td className="p-3 border">—</td>
                  </tr>

                  <tr>
                    <td className="p-3 border font-medium">Panel MG 3&quot;</td>
                    <td className="p-3 border">3&quot;</td>
                    <td className="p-3 border">4.1&quot;</td>
                    <td className="p-3 border">—</td>
                  </tr>

                  <tr>
                    <td className="p-3 border font-medium">Panel MG 4&quot;</td>
                    <td className="p-3 border">4&quot;</td>
                    <td className="p-3 border">5.2&quot;</td>
                    <td className="p-3 border">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA — TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-montserrat">
            El Sistema MG es un sistema constructivo híbrido que combina el
            tradicional método de construcción con paneles de yeso y estructuras
            metálicas. Este enfoque permite una integración efectiva de paneles,
            varillas y mortero, ofreciendo una estructura monolítica de muros y
            losas. Su diseño proporciona una carga de soporte superior y elimina
            la necesidad de refuerzos adicionales, garantizando una construcción
            más eficiente.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-montserrat">
            Además, al comparar con las construcciones de bloques, el Panel MG
            resalta por su capacidad de generar una estructura más fuerte y
            durable. El sistema evita la típica “hueca” del panel de yeso,
            proporcionando mayor integridad estructural mediante el uso de
            mortero, estuco y otros acabados que aseguran calidad y resistencia.
          </p>
        </div>
      </div>
    </section>
  );
}
