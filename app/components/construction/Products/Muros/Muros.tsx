"use client";

import { ProductGallery } from "@/app/components/products/ProductGallery";
import { downloadPDF } from "@/app/lib/download-utils";
import React from "react";

const Muros = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
              Anclaje de Muros
            </h1>

            <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
              El anclaje de muros es un proceso crítico que asegura que los
              muros estén firmemente conectados a la losa de cimentación. Este
              sistema es fundamental para la estabilidad estructural,
              especialmente en áreas propensas a sismos.
            </p>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Proceso",
                  items: [
                    {
                      label: "Materiales de Anclaje",
                      text: "Se utiliza alambre recocido y varillas de refuerzo de ¼”, que sirven para conectar eficazmente los muros a los castillos prefabricados.",
                    },
                    {
                      label: "Sistema de Conexión",
                      text: "Los muros son amarrados mediante un diseño específico, garantizando que cada componente permanezca en su lugar ante cargas laterales o verticales.",
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
          "/images/construction/products/muro/image-1.webp",
          "/images/construction/products/muro/image-2.webp",
          "/images/construction/products/muro/image-3.webp",
          "/images/construction/products/muro/image-4.webp",
          "/images/construction/products/muro/image-5.webp",
        ]}
      />
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Características",
                  items: [
                    {
                      label: "",
                      text: "La separación recomendada entre las varillas es de 35 cm, optimizando la distribución de carga y maximizando la integridad estructural.",
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
                  title: "Ventajas",
                  items: [
                    {
                      label: "",
                      text: "Mejora significativamente la resistencia sísmica al proporcionar una estructura que puede absorber y disipar energía durante un sismo.",
                    },
                    {
                      label: "",
                      text: "Asegura la estabilidad de los muros, minimizando el riesgo de colapso o desplazamiento.",
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

export default Muros;
