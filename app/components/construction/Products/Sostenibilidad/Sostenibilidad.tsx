import { ProductGallery } from "@/app/components/products/ProductGallery";
import React from "react";

const Sostenibilidad = () => {
  return (
    <>
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* COLUMNA IZQUIERDA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
              Compromiso con la Sostenibilidad
            </h1>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between h-full">
            {/* BULLETS */}
            <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
              {[
                {
                  title: "Política Ambiental",
                  items: [
                    {
                      label: "",
                      text: "Nuestra empresa adopta prácticas que minimizan el impacto ambiental en todas las fases de la construcción, desde la selección de materiales hasta la gestión de residuos.",
                    },
                  ],
                },
                {
                  title: "Certificaciones Sostenibles",
                  items: [
                    {
                      label: "",
                      text: "Trabajamos para cumplir con certificaciones de construcción sostenible como LEED (Leadership in Energy and Environmental Design), asegurando que nuestras edificaciones sean respetuosas con el medio ambiente.",
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
          "/images/construction/products/sostenibilidad/image-1.webp",
          "/images/construction/products/sostenibilidad/image-2.webp",
          "/images/construction/products/sostenibilidad/image-3.webp",
          "/images/construction/products/sostenibilidad/image-4.webp",
          "/images/construction/products/sostenibilidad/image-5.webp",
        ]}
      />
      <section className="w-full px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1  gap-12 items-start">
          <div>
            <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
              En nuestra búsqueda de la excelencia en sistemas constructivos,
              ofrecemos soluciones integrales que combinen calidad, seguridad y
              sostenibilidad. Nuestra experiencia en el sector, junto con un
              enfoque en la innovación y el uso de tecnologías avanzadas, nos
              permite proporcionar a nuestros clientes edificaciones duraderas y
              eficientes que satisfacen sus necesidades y superan sus
              expectativas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sostenibilidad;
