import { ProductGallery } from "./components/products/ProductGallery";

export const pillars = [
  {
    title: "Cimentación de Losa Corrida y Anclaje de Muros",
    subtitle:
      "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
    image: "/images/construction/products/cimentacion/image-1.webp",
    slug: "cimentacion-de-losa-corrida-y-anclaje-de-muros",
    galleryImages: [
      "/images/construction/products/cimentacion/image-1.webp",
      "/images/construction/products/cimentacion/image-2.webp",
      "/images/construction/products/cimentacion/image-3.webp",
      "/images/construction/products/cimentacion/image-4.webp",
      "/images/construction/products/cimentacion/image-5.webp",
      "/images/construction/products/cimentacion/image-6.webp",
      "/images/construction/products/cimentacion/image-7.webp",
      "/images/construction/products/cimentacion/image-8.webp",
      "/images/construction/products/cimentacion/image-9.webp",
      "/images/construction/products/cimentacion/image-10.webp",
    ],
  },
  {
    title: "Construccion de Viviendas",
    image: "/images/construction/products/viviendas/image-1.webp",
    slug: "construccion-de-viviendas",
    galleryImages: [
      "/images/construction/products/viviendas/image-1.webp",
      "/images/construction/products/viviendas/image-2.webp",
      "/images/construction/products/viviendas/image-3.webp",
      "/images/construction/products/viviendas/image-4.webp",
      "/images/construction/products/viviendas/image-5.webp",
      "/images/construction/products/viviendas/image-6.webp",
      "/images/construction/products/viviendas/image-7.webp",
      "/images/construction/products/viviendas/image-8.webp",
      "/images/construction/products/viviendas/image-9.webp",
      "/images/construction/products/viviendas/image-10.webp",
      "/images/construction/products/viviendas/image-11.webp",
      "/images/construction/products/viviendas/image-12.webp",
      "/images/construction/products/viviendas/image-13.webp",
      "/images/construction/products/viviendas/image-14.webp",
    ],
  },
  {
    title: "Fachadas, Muros Divisorios y Volúmenes en Edificios",
    image: "/images/construction/products/fachadas/image-1.webp",
    slug: "fachadas-muros-divisorios-y-volumenes-en-edificios",
    galleryImages: [
      "/images/construction/products/fachadas/image-1.webp",
      "/images/construction/products/fachadas/image-2.webp",
      "/images/construction/products/fachadas/image-3.webp",
      "/images/construction/products/fachadas/image-4.webp",
      "/images/construction/products/fachadas/image-5.webp",
      "/images/construction/products/fachadas/image-6.webp",
      "/images/construction/products/fachadas/image-7.webp",
      "/images/construction/products/fachadas/image-8.webp",
      "/images/construction/products/fachadas/image-9.webp",
      "/images/construction/products/fachadas/image-10.webp",
      "/images/construction/products/fachadas/image-11.webp",
      "/images/construction/products/fachadas/image-12.webp",
    ],
  },
  {
    title: "Arcos, Cúpulas y Bóvedas",
    image: "/images/construction/products/cupulas-bobedas/image-1.webp",
    slug: "cupulas-y-bovedas",
    galleryImages: [
      "/images/construction/products/cupulas-bobedas/image-1.webp",
      "/images/construction/products/cupulas-bobedas/image-2.webp",
      "/images/construction/products/cupulas-bobedas/image-3.webp",
      "/images/construction/products/cupulas-bobedas/image-4.webp",
      "/images/construction/products/cupulas-bobedas/image-5.webp",
      "/images/construction/products/cupulas-bobedas/image-6.webp",
      "/images/construction/products/cupulas-bobedas/image-7.webp",
      "/images/construction/products/cupulas-bobedas/image-8.webp",
      "/images/construction/products/cupulas-bobedas/image-9.webp",
      "/images/construction/products/cupulas-bobedas/image-10.webp",
      "/images/construction/products/cupulas-bobedas/image-11.webp",
      "/images/construction/products/cupulas-bobedas/image-12.webp",
      "/images/construction/products/cupulas-bobedas/image-13.webp",
      "/images/construction/products/cupulas-bobedas/image-14.webp",
      "/images/construction/products/cupulas-bobedas/image-15.webp",
      "/images/construction/products/cupulas-bobedas/image-16.webp",
      "/images/construction/products/cupulas-bobedas/image-17.webp",
      "/images/construction/products/cupulas-bobedas/image-18.webp",
      "/images/construction/products/cupulas-bobedas/image-19.webp",
    ],
    content: (
      <>
        <section className="w-full px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* COLUMNA IZQUIERDA */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
                Cúpulas
              </h1>

              <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
                Las cúpulas son elementos arquitectónicos que no solo
                proporcionan un alto nivel estético, sino que también cumplen
                una función estructural significativa. Su forma permite una
                distribución eficiente de las cargas, haciendo posible cubrir
                grandes espacios sin columnas intermedias.
              </p>
            </div>
            {/* COLUMNA DERECHA */}
            <div className="flex flex-col justify-between h-full">
              {/* BULLETS */}
              <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
                {[
                  {
                    title: "Aplicaciones",
                    items: [
                      {
                        label: "Edificios Públicos",
                        text: "Museos, bibliotecas y centros culturales.",
                      },
                      {
                        label: "Centros Comerciales",
                        text: "Espacios amplios y abiertos que mejoran la circulación peatonal.",
                      },
                      {
                        label: "Iglesias y Templos",
                        text: "Estructuras emblemáticas que realzan la estética del sitio.",
                      },
                    ],
                  },
                ].map((group, index) => (
                  <div key={index}>
                    {/* Nivel 1 */}
                    <p className="font-semibold mb-3 text-2xl">
                      • {group.title}
                    </p>

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
            "/images/construction/products/cupulas/image-1.webp",
            "/images/construction/products/cupulas/image-2.webp",
            "/images/construction/products/cupulas/image-3.webp",
            "/images/construction/products/cupulas/image-4.webp",
            "/images/construction/products/cupulas/image-5.webp",
            "/images/construction/products/cupulas/image-6.webp",
          ]}
        />
        <section className="w-full px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* COLUMNA IZQUIERDA */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
                Bóvedas
              </h1>
              <div>
                <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
                  {[
                    {
                      title: "Tipologías",
                      items: [
                        {
                          label: "Bóvedas de Caño",
                          text: "Ideal para espacios industriales y almacenes, estas bóvedas son extremadamente eficientes para cubrir grandes áreas.",
                        },
                        {
                          label: "Bóvedas Semiesféricas",
                          text: "Se utilizan en construcciones monumentales, aportando elegancia y grandiosidad.",
                        },
                      ],
                    },
                  ].map((group, index) => (
                    <div key={index}>
                      {/* Nivel 1 */}
                      <p className="font-semibold mb-3 text-2xl">
                        • {group.title}
                      </p>

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
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6"></h1>
              <div className="space-y-8 pt-11 text-[#0d1b2a] font-montserrat leading-relaxed">
                {[
                  {
                    title: "Ventajas",
                    items: [
                      {
                        label: "",
                        text: "Distribución de carga óptima que permite utilizar materiales más ligeros en la construcción sin sacrificar la estabilidad.",
                      },
                      {
                        label: "",
                        text: "Versatilidad en el diseño arquitectónico, permitiendo a los arquitectos mayor libertad creativa.",
                      },
                    ],
                  },
                ].map((group, index) => (
                  <div key={index}>
                    {/* Nivel 1 */}
                    <p className="font-semibold mb-3 text-2xl">
                      • {group.title}
                    </p>

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
    ),
  },
  {
    title: "Detalles Arquitectónicos",
    subtitle: "Investigación y Desarrollo",
    image: "/images/construction/products/detalles/image-1.webp",
    slug: "detalles-arquitectonicos",
    galleryImages: [
      "/images/construction/products/detalles/image-1.webp",
      "/images/construction/products/detalles/image-2.webp",
      "/images/construction/products/detalles/image-3.webp",
      "/images/construction/products/detalles/image-4.webp",
      "/images/construction/products/detalles/image-5.webp",
      "/images/construction/products/detalles/image-6.webp",
      "/images/construction/products/detalles/image-7.webp",
      "/images/construction/products/detalles/image-8.webp",
      "/images/construction/products/detalles/image-9.webp",
      "/images/construction/products/detalles/image-10.webp",
    ],
  },
];
