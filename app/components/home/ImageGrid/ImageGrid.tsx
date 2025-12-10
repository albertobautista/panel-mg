"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Ligereza",
    description:
      "Reduce cargas muertas entre un 30% y 50% en comparación con sistemas tradicionales. En el transporte, elevaciones y acarreos. El Mt.2 de panel pesa en promedio 3.5 Kg.",
    image: "/images/home/advantages/image-1.webp",
    icon: "🪶",
  },
  {
    title: "Rapidez",
    description:
      "Disminuye el tiempo de ejecución hasta un 50% y permite pre-ensamblaje en obra. Falicita la colocación de instalaciones eléctricas, sanitarias e hidráulicas.",
    image: "/images/home/advantages/image-1.webp",
    icon: "⏱️",
  },
  {
    title: "Versatilidad",
    description:
      "Compatible con materiales constructivos tradicionales, útil para muros, losas de entrepiso y detalles arquitectónicos. Facilita la autoconstrucción sin necesidad de herramientas especializadas. Flexibilidad en modulación y en posibilidades de pre-armado.",
    image: "/images/home/advantages/image-1.webp",
    icon: "🧱",
  },
  {
    title: "Aislamiento",
    description:
      "Eficaz en la reducción del ruido, calor, y humedad, proporcionando un ambiente interior confortable.",
    image: "/images/home/advantages/image-1.webp",
    icon: "❄️",
  },
  {
    title: "Economía",
    description:
      "Ofrece un costo directo por m² más bajo que los sistemas tradicionales, ahorrando en cimentación y estructura. Reduce la mano de obra, por la rapidez de obra reduce el costo financiero y emplea un mínimo de accesorios de instalación.",
    image: "/images/home/advantages/image-1.webp",
    icon: "💰",
  },
  {
    title: "Resistencia Sísmica",
    description:
      "Minimiza la necesidad de castillos y cadenas gracias a su construcción monolítica.",
    image: "/images/home/advantages/image-1.webp",
    icon: "🌎",
  },
];

export default function ImageGrid() {
  return (
    <section className="w-full bg-creama py-10 px-6 md:px-20">
      {/* TÍTULO */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-2">
          Ventajas del Sistema MG:
        </h2>
        <div className="w-147 h-[3px] bg-red"></div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden bg-black text-white h-[300px] md:h-[340px] flex p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* CONTENIDO */}
            <div className="relative z-10 flex flex-col items-start gap-3 font-montserrat">
              <div className="text-red text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-md text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
