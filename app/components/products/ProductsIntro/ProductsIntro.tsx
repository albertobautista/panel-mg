"use client";

import { downloadPDF } from "@/app/lib/download-utils";
import Link from "next/link";

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
            con longitudes de 2.44 m a 5.05 m.
          </p>

          <Link
            href="/ventajas"
            className="inline-flex w-full items-center justify-center px-8 py-4 bg-red hover:bg-red/90 text-white font-semibold rounded-lg transition-colors font-montserrat"
          >
            Ver ventajas del Panel MG
          </Link>
        </div>

        {/* COLUMNA DERECHA — TEXTO */}
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-montserrat">
            El Sistema MG consiste básicamente en la integración del Panel MG,
            mallas de unión, varilla de acero y mortero cemento-arena y/o
            concreto, generando un cuerpo monolítico de muros y losas armados,
            con gran capacidad estructural que permite la edificación de
            viviendas hasta dos niveles sin utilizar refuerzos adicionales como
            castillos de varilla de acero.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed font-montserrat">
            En el Sistema MG los elementos (muros y losas) trabajan como un todo
            al estar armados y conectados entre sí por todo lo largo y ancho de
            la construcción. Como resultado, tenemos que los esfuerzos generados
            en la estructura se reparten de manera uniforme porque no existen
            diferenciales en cuanto a capacidades y características
            estructurales.
          </p>
          {/* BOTÓN */}
          <div className="mt-10">
            <button
              onClick={() =>
                downloadPDF("Presentación-técnica.pdf", "/pdfs/productos-2.pdf")
              }
              className="
                            inline-flex 
                            items-center 
                            justify-center
                            cursor-pointer
                            px-8 
                            py-4 
                            border 
                            border-[#0d1b2a]
                            text-[#0d1b2a]
                            font-semibold
                            rounded-lg
                            hover:bg-[#0d1b2a]
                            hover:text-white
                            transition-colors
                            font-montserrat
                            w-full
                          "
            >
              Descargar ficha técnica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
