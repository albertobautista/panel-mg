import Edificios from "./components/construction/Products/Edificios/Edificios";
import Innovacion from "./components/construction/Products/Innovacion/Innovacion";
import Losa from "./components/construction/Products/Losa/Losa";
import Muros from "./components/construction/Products/Muros/Muros";
import Viviendas from "./components/construction/Products/Viviendas/Viviendas";
import { ProductGallery } from "./components/products/ProductGallery";

export const pillars = [
  {
    title: "Cimentación de Losa Corrida",
    subtitle:
      "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
    image: "/images/construction/products/losa/image-1.webp",
    slug: "cimentacion-de-losa-corrida",
    content: <Losa />,
  },
  {
    title: "Anclaje de Muros",
    image: "/images/construction/products/muro/image-1.webp",
    slug: "anclaje-de-muros",
    content: <Muros />,
  },
  {
    title: "Construccion de Viviendas",
    image: "/images/construction/products/viviendas/image-1.webp",
    slug: "construccion-de-viviendas",
    content: <Viviendas />,
  },
  {
    title: "Fachadas, Muros Divisorios y Volúmenes en Edificios",
    image: "/images/construction/products/edificios/image-1.webp",
    slug: "fachadas-muros-divisorios-y-volumenes-en-edificios",
    content: <Edificios />,
  },
  {
    title: "Cúpulas y Bóvedas",
    image: "/images/construction/products/cupulas/image-1.webp",
    slug: "cupulas-y-bovedas",
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
    title: "Detalles arquitectónicos",
    subtitle: "Investigación y Desarrollo",
    image: "/images/construction/products/innovacion/image-1.webp",
    slug: "detalles-arquitectonicos",
    content: <Innovacion />,
  },
];
