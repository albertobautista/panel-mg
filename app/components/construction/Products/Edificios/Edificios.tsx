"use client";
import { ProductGallery } from "@/app/components/products/ProductGallery";
import { downloadPDF } from "@/app/lib/download-utils";
import React from "react";

const Edificios = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
              Fachadas, Muros Divisorios y Volúmenes en Edificios
            </h1>

            <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
              La construcción de edificios abarca una variedad de estructuras.
              Las más comunes incluyen:
            </p>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Estructuras de Acero",
                  items: [
                    {
                      label: "",
                      text: "Ofrecen alta resistencia y flexibilidad, ideales para edificios de gran altura.",
                    },
                    {
                      label: "",
                      text: "Su capacidad para absorber energía sísmica las hace perfectas para regiones propensas a sismos.",
                    },
                  ],
                },
                {
                  title: "Estructuras de Concreto",
                  subtitle:
                    "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
                  items: [
                    {
                      label: "",
                      text: "Proporcionan aislamiento térmico y acústico. El concreto es un material durable, lo que lo convierte en una opción preferida para la construcción de edificios comerciales y residenciales.",
                    },
                  ],
                },
                {
                  title: "Construcción Mixta",
                  subtitle:
                    "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
                  items: [
                    {
                      label: "",
                      text: "Utiliza tanto acero como concreto, combinando las ventajas de ambos materiales para optimizar el rendimiento estructural y arquitectónico.",
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

            {/* BOTÓN */}
            <div className="mt-10">
              <button
                onClick={() =>
                  downloadPDF(
                    "Sistema-mg-en-edificios.pdf",
                    "/pdfs/edificios.pdf",
                  )
                }
                className="
                  inline-flex 
                  items-center 
                  justify-center 
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
      <ProductGallery
        images={[
          "/images/construction/products/edificios/image-1.webp",
          "/images/construction/products/edificios/image-2.webp",
          "/images/construction/products/edificios/image-3.webp",
          "/images/construction/products/edificios/image-4.webp",
          "/images/construction/products/edificios/image-5.webp",
          "/images/construction/products/edificios/image-6.webp",
        ]}
      />
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Normativas y Regulaciones",
                  items: [
                    {
                      label: "Cumplimiento",
                      text: "Nos aseguramos de que todas nuestras construcciones cumplen con las normativas locales e internacionales. Esto incluye:",
                    },
                    {
                      label: "",
                      text: "Códigos de edificación específicos que regulan aspectos como resistencia estructural, seguridad contra incendios y accesibilidad.",
                    },
                    {
                      label: "",
                      text: "Normativas medioambientales que garantizan prácticas sostenibles y el uso eficiente de los recursos.",
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
                  title: "Seguridad Integral",
                  subtitle:
                    "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
                  items: [
                    {
                      label: "",
                      text: "La seguridad es nuestra prioridad. Implementamos:",
                    },
                    {
                      label: "",
                      text: "Planes de evacuación para emergencias.",
                    },
                    {
                      label: "",
                      text: "Sistemas de detección y extinción de incendios.",
                    },
                    {
                      label: "",
                      text: "Resistencia sísmica, asegurando que nuestras estructuras pueden soportar eventos sísmicos.",
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

export default Edificios;
