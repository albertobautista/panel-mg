"use client";

import { ProductGallery } from "@/app/components/products/ProductGallery";
import { downloadMultiplePDFs } from "@/app/lib/download-utils";
import React from "react";

const Innovacion = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
              Innovación en Materiales Constructivos
            </h1>

            <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
              Investigación y Desarrollo
            </p>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Laboratorio de Innovación",
                  items: [
                    {
                      label: "",
                      text: "Estamos comprometidos con la investigación continua en nuevos materiales y tecnologías. Nuestro laboratorio de innovación se especializa en desarrollar soluciones adaptadas a las necesidades cambiantes del mercado.",
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
          "/images/construction/products/innovacion/image-1.webp",
          "/images/construction/products/innovacion/image-2.webp",
          "/images/construction/products/innovacion/image-3.webp",
        ]}
      />
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Tecnologías Avanzadas",
                  items: [
                    {
                      label: "Materiales Inteligentes",
                      text: "Incorporamos materiales que responden a cambios ambientales, como aquellos que regulan la temperatura interior o que absorben la humedad. Esto mejora el confort y reduce la necesidad de climatización.",
                    },
                  ],
                },
              ].map((group, index) => (
                <div key={index}>
                  {/* Nivel 1 */}
                  <p className="font-semibold mb-3 text-2xl">• {group.title}</p>

                  {/* Nivel 2 */}
                  <ul className="ml-6 flex w-fullspace-y-3">
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
                  title: "",
                  items: [
                    {
                      label: "Sistemas Ecológicos",
                      text: "Uso de sistemas de captación de agua de lluvia y paneles solares. Estas soluciones no solo reducen el consumo de recursos, sino que también promueven la autosuficiencia energética de las edificaciones.",
                    },
                  ],
                },
              ].map((group, index) => (
                <div key={index}>
                  {/* Nivel 1 */}
                  {/* <p className="font-semibold mb-3 text-2xl">• {group.title}</p> */}

                  {/* Nivel 2 */}
                  <ul className="ml-6 mt-10 space-y-3">
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

export default Innovacion;
