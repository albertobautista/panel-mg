"use client";

import React from "react";
import { ProductGallery } from "@/app/components/products/ProductGallery";
import { downloadPDF } from "@/app/lib/download-utils";

const Losa = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
              Cimentación de Losa Corrida
            </h1>

            <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
              La cimentación de losa corrida es un método ampliamente utilizado
              en la construcción moderna que proporciona una base robusta y
              homogénea para la edificación. Su diseño se adapta a terrenos
              variados, logrando una excelente distribución de cargas.
            </p>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Materiales",
                  items: [
                    {
                      label: "Concreto",
                      text: "Utilizamos concreto de alta resistencia con una capacidad de f’c = 200 Kg/cm², asegurando que la base responda adecuadamente ante cualquier carga vertical o lateral.",
                    },
                    {
                      label: "Espesor",
                      text: "Se recomienda un espesor que varía entre 8 cm (3”) y 10 cm (4”) dependiendo del tipo de carga y el suelo donde se aplique.",
                    },
                  ],
                },
                {
                  title: "Refuerzo",
                  items: [
                    {
                      label: "Malla Electrosoldada",
                      text: "Incorporamos malla de refuerzo 6x6/10-10 que mejora la resistencia a la tracción y limita el desarrollo de fisuras, contribuyendo a la longevidad de la losa.",
                    },
                    {
                      label: "Trabes y Castillos",
                      text: "Se utilizan trabes y castillos prefabricados tipo “ARMEX”, que se colocan bajo los ejes de los muros, proporcionando soporte adicional y aumentando la capacidad de carga del sistema.",
                    },
                  ],
                },
              ].map((group, index) => (
                <div key={index}>
                  {/* Nivel 1 */}
                  <p className="font-semibold mb-3 text-2xl">• {group.title}</p>

                  {/* Nivel 2 */}
                  <ul className="ml-6 space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 text-sm">○</span>
                        <p className="text-xl">
                          <strong>
                            {item.label !== "" ? `${item.label}:` : ""}
                          </strong>{" "}
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ProductGallery
        images={[
          "/images/construction/products/losa/image-1.webp",
          "/images/construction/products/losa/image-2.webp",
          "/images/construction/products/losa/image-3.webp",
          "/images/construction/products/losa/image-4.webp",
          "/images/construction/products/losa/image-5.webp",
        ]}
      />
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Ventajas",
                  items: [
                    {
                      label: "",
                      text: "Proporciona una distribución uniforme de las cargas, lo que previene la aparición de puntos débiles.",
                    },
                    {
                      label: "",
                      text: "Reduce significativamente el riesgo de asentamientos diferenciales, crucial para la estabilidad estructural a largo plazo.",
                    },
                  ],
                },
              ].map((group, index) => (
                <div key={index}>
                  {/* Nivel 1 */}
                  <p className="font-semibold mb-3 text-2xl">• {group.title}</p>

                  {/* Nivel 2 */}
                  <ul className="ml-6 space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 text-sm">○</span>
                        <p className="text-xl">
                          <strong>
                            {item.label !== "" ? `${item.label}:` : ""}
                          </strong>{" "}
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Consideraciones Adicionales",
                  items: [
                    {
                      label: "",
                      text: "Se recomienda realizar un análisis geotécnico del terreno previo a la construcción para adaptar el diseño de la losa a las características específicas del suelo.",
                    },
                  ],
                },
              ].map((group, index) => (
                <div key={index}>
                  {/* Nivel 1 */}
                  <p className="font-semibold mb-3 text-2xl">• {group.title}</p>

                  {/* Nivel 2 */}
                  <ul className="ml-6 space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 text-sm">○</span>
                        <p className="text-xl">
                          <strong>
                            {item.label !== "" ? `${item.label}:` : ""}
                          </strong>{" "}
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Losa;
