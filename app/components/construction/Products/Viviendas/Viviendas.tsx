"use client";
import { ProductGallery } from "@/app/components/products/ProductGallery";
import { downloadPDF } from "@/app/lib/download-utils";
import React from "react";

const Viviendas = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
              Construcción de Viviendas
            </h1>

            <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
              La correcta selección de materiales es esencial para garantizar la
              robustez y eficiencia energética de las viviendas. Cada material
              juega un papel crucial en la durabilidad y el rendimiento de la
              estructura.
            </p>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Materiales Comunes",
                  items: [
                    {
                      label: "Concreto Reforzado",
                      text: "Se utiliza en muros y losas debido a su alta capacidad para soportar cargas. Su durabilidad lo hace ideal para la construcción.",
                    },
                    {
                      label: "Ladrillos",
                      text: " Funcionan como aislantes térmicos y acústicos, contribuyendo a la eficiencia energética y al confort interior. Su elección dependerá de factores como clima y ubicación.",
                    },
                    {
                      label: "Materiales Aislantes",
                      text: "Se integran en muros y techos para reducir la transferencia de calor y minimizar el consumo energético.",
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
          "/images/construction/products/viviendas/image-1.webp",
          "/images/construction/products/viviendas/image-2.webp",
          "/images/construction/products/viviendas/image-3.webp",
          "/images/construction/products/viviendas/image-4.webp",
          "/images/construction/products/viviendas/image-5.webp",
          "/images/construction/products/viviendas/image-6.webp",
          "/images/construction/products/viviendas/image-7.webp",
          "/images/construction/products/viviendas/image-8.webp",
        ]}
      />
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Implementación de Técnicas Avanzadas",
                  items: [
                    {
                      label: "Prefabricación",
                      text: "Empleamos elementos prefabricados que se producen en condiciones controladas, garantizando una calidad uniforme y reduciendo los tiempos de construcción en obra.",
                    },
                    {
                      label: "Construcción Modular",
                      text: "Facilita la expansión y modificación de las viviendas, permitiendo que los propietarios ajusten sus espacios según sus necesidades futuras.",
                    },
                    {
                      label: "Tecnología BIM (Building Information Modeling)",
                      text: "Utilizamos esta tecnología para planificar, diseñar y gestionar edificios, mejorando la colaboración entre los equipos de trabajo y reduciendo errores durante la construcción.",
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
                  title: "Enfoque en Sostenibilidad",
                  items: [
                    {
                      label: "",
                      text: "Integramos prácticas que minimizan el impacto ambiental, como la gestión eficiente de residuos, el uso de materiales reciclables y energías renovables.",
                    },
                    {
                      label: "",
                      text: "Optimización del uso del agua y la energía en todas las etapas de la construcción.",
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

export default Viviendas;
