import { ProductGallery } from "./components/products/ProductGallery";

export const pillars = [
  {
    title: "Cimentación de Losa Corrida",
    subtitle:
      "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
    image: "/images/construction/products/losa/image-1.webp",
    slug: "cimentacion-de-losa-corrida",
    content: (
      <>
        <section className="w-full px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* COLUMNA IZQUIERDA */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
                Cimentación de Losa Corrida
              </h1>

              <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
                La cimentación de losa corrida es un método ampliamente
                utilizado en la construcción moderna que proporciona una base
                robusta y homogénea para la edificación. Su diseño se adapta a
                terrenos variados, logrando una excelente distribución de
                cargas.
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
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
    title: "Anclaje de Muros",
    image: "/images/construction/products/muro/image-1.webp",
    slug: "anclaje-de-muros",
    content: (
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProductGallery
          images={[
            "/images/construction/products/muro/image-1.webp",
            "/images/construction/products/muro/image-2.webp",
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
    title: "Construccion de Viviendas",
    image: "/images/construction/products/viviendas/image-1.webp",
    slug: "construccion-de-viviendas",
    content: (
      <>
        <section className="w-full px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* COLUMNA IZQUIERDA */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
                Construcción de Viviendas
              </h1>

              <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
                La correcta selección de materiales es esencial para garantizar
                la robustez y eficiencia energética de las viviendas. Cada
                material juega un papel crucial en la durabilidad y el
                rendimiento de la estructura.
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProductGallery
          images={[
            "/images/construction/products/viviendas/image-1.webp",
            "/images/construction/products/viviendas/image-2.webp",
            "/images/construction/products/viviendas/image-3.webp",
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
    title: "Fachadas, Muros Divisorios y Volúmenes en Edificios",
    image: "/images/construction/products/edificios/image-1.webp",
    slug: "fachadas-muros-divisorios-y-volumenes-en-edificios",
    content: (
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
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
    title: "Detalles Arquitectonicos",
    subtitle:
      "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
    image: "/images/home/advantages/image-1.webp",
    slug: "detalles-arquitectonicos",
    bullets: [
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
        subtitle:
          "La cimentación de losa corrida es un método ampliamente utilizado en la construcción moderna que proporciona una base robusta y homogénea para la edificación. Su diseño se adapta a terrenos variados, logrando una excelente distribución de cargas.",
        items: [
          {
            label: "Malla Electrosoldada",
            text: "Incorporamos malla de refuerzo 6x6/10-10 que mejora la resistencia a la tracción y limita el desarrollo de fisuras, contribuyendo a la longevidad de la losa.",
          },
          {
            label: "Trabes y Castillos",
            text: " Se utilizan trabes y castillos prefabricados tipo “ARMEX”, que se colocan bajo los ejes de los muros, proporcionando soporte adicional y aumentando la capacidad de carga del sistema.",
          },
        ],
      },
    ],
    description:
      "Las cúpulas y bóvedas representan soluciones arquitectónicas innovadoras que combinan estética y funcionalidad. Utilizando tecnología de paneles, es posible crear estructuras curvas resistentes que ofrecen espacios únicos y eficientes.",
  },
  {
    title: "Innovación en materiales constructivos",
    subtitle: "Investigación y Desarrollo",
    image: "/images/construction/products/innovacion/image-1.webp",
    slug: "innovacion-en-materiales-constructivos",
    content: (
      <>
        <section className="w-full px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* COLUMNA IZQUIERDA */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
                Innovación en materiales constructivos
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
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
                      {
                        label: "Sistemas Ecológicos",
                        text: "Uso de sistemas de captación de agua de lluvia y paneles solares. Estas soluciones no solo reducen el consumo de recursos, sino que también promueven la autosuficiencia energética de las edificaciones.",
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
    title: "Compromiso con la Sostenibilidad",
    image: "/images/home/advantages/image-1.webp",
    slug: "compromiso-con-la-sostenibilidad",
    content: (
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

              {/* BOTÓN */}
              <div className="mt-10">
                <a
                  href="#"
                  download
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
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProductGallery images={["/images/home/advantages/image-1.webp"]} />
        <section className="w-full px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1  gap-12 items-start">
            <div>
              <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
                En nuestra búsqueda de la excelencia en sistemas constructivos,
                ofrecemos soluciones integrales que combinen calidad, seguridad
                y sostenibilidad. Nuestra experiencia en el sector, junto con un
                enfoque en la innovación y el uso de tecnologías avanzadas, nos
                permite proporcionar a nuestros clientes edificaciones duraderas
                y eficientes que satisfacen sus necesidades y superan sus
                expectativas.
              </p>
            </div>
          </div>
        </section>
      </>
    ),
  },
];
