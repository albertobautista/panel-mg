"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Pillar {
  title: string;
  image: string;
  slug: string;
}

interface ImageGridProps {
  title?: string;
  data: Pillar[];
}

export default function ImageGrid({ data, title }: ImageGridProps) {
  return (
    <section className="w-full py-10 px-6 md:px-20">
      {/* TÍTULO */}
      {title && (
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-2">
            {title}
          </h2>
          <div className="w-24 h-[3px] bg-red-600"></div>
        </div>
      )}

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <Link
            key={item.slug}
            href={`/construccion/${item.slug}`}
            className="group"
          >
            <motion.div
              className="relative rounded-xl overflow-hidden bg-black text-white h-[300px] md:h-[340px] flex p-6 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

              {/* CONTENIDO */}
              <div className="relative z-10 flex flex-col items-center w-full justify-center font-montserrat text-center">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
