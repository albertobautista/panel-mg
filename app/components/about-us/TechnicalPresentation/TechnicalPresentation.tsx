"use client";

import { downloadMultiplePDFs, downloadPDF } from "@/app/lib/download-utils";

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
          El panel MG es una estructura tridimensional de alambre de acero
          pulido al bajo carbono (1008) que se compone de una serie de armaduras
          formadas por dos alambres paralelos electrosoldados a un tercero en
          forma de zigzag. A su vez, estas armaduras están separadas entre sí
          por tiras de poliestireno expandido que brindan aislamiento térmico y
          acústico. Mediante un proceso industrial, se electrosoldan por ambas
          caras del panel los alambres que van a lo ancho del mismo con las
          armaduras, dando el terminado del panel MG.
          <br />
          <br />
          Con espesores de 2&quot;, 3&quot; o 4&quot;, y un ancho fijo de 1.22
          m, el panel tiene longitudes que van de 2.44 m hasta los 5.04 m.
          <br />
          <br />
          El sistema constructivo integra al panel MG con varillas de refuerzo y
          mortero cemento-arena o concreto, obteniendo construcciones
          monolíticas al unir en una sola estructura muros y losas. Como
          resultado, tenemos construcciones eficientes, con un comportamiento
          estructural uniforme, aisladas y con terminados iguales a una
          construcción tradicional al poder dar el terminado deseado en el
          mortero.
        </p>
      </div>
      <div className="max-w-lg">
        {/* BOTÓN */}
        <div className="mt-10">
          <button
            onClick={() => {
              downloadMultiplePDFs([
                {
                  filename: "Panel-MG.pdf",
                  path: "/pdfs/productos-2.pdf",
                },
              ]);
            }}
            className="
                                    inline-flex 
                                    cursor-pointer
                                    items-center 
                                    justify-center 
                                    px-8 
                                    py-4 
                                    border 
                                    border-[rgb(13,27,42)]
                                    font-semibold
                                    rounded-lg
                                    bg-[#0d1b2a]
                                    text-white
                                    transition-colors
                                    font-montserrat
                                    w-full
                                  "
          >
            DESCRIPCIÓN GENERAL PANEL MG
          </button>
        </div>
      </div>
    </section>
  );
}
