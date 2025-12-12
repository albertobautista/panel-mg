"use client";

import { motion } from "framer-motion";

interface Pillars {
  title: string;
  description?: string;
  image: string;
  icon?: string;
}
interface ImageGridProps {
  title?: string;
  data: Pillars[];
}

export default function ImageGrid({ data, title }: ImageGridProps) {
  return (
    <section className="w-full bg-creama py-10 px-6 md:px-20">
      {/* TÍTULO */}
      {title && (
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-2">
            {title}
          </h2>
          <div className="w-147 h-[3px] bg-red"></div>
        </div>
      )}

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, i) => (
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
              {item.icon && (
                <div className="text-red text-4xl mb-2">{item.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-md text-gray-300">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
