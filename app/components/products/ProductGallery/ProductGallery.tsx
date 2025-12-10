"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/products/slider/image-1.webp",
  "/images/products/slider/image-2.webp",
  "/images/products/slider/image-3.webp",
  "/images/products/slider/image-1.webp",
  "/images/products/slider/image-2.webp",
  "/images/products/slider/image-3.webp",
];

// Triplicamos el arreglo para crear loop infinito real sin parpadeos
const loop = [...images, ...images, ...images];

export default function ProductGallery() {
  const CARD_WIDTH = 800;
  const GAP = 28;
  const TOTAL = CARD_WIDTH + GAP;

  const base = images.length; // bloque central
  const [index, setIndex] = useState(base);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  const next = () => {
    setAnimationEnabled(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    setAnimationEnabled(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    // Si salimos del rango del bloque central...
    if (index >= base + images.length || index < base) {
      const offset = index % images.length;

      // Esperamos a que acabe la animación (450ms)
      const timeout = setTimeout(() => {
        setAnimationEnabled(false); // teleport SIN animación
        setIndex(base + offset);
      }, 460);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="w-full py-16">
      <div className="w-full px-4 md:px-10 overflow-hidden relative">
        {/* SLIDER */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{ x: -(index * TOTAL) }}
            transition={
              animationEnabled
                ? { duration: 0.45, ease: "easeInOut" }
                : { duration: 0 } // SIN animación → NO HAY PARPADEO
            }
          >
            {loop.map((img, i) => (
              <div
                key={i}
                style={{ width: CARD_WIDTH, marginRight: GAP }}
                className="rounded-xl overflow-hidden flex-shrink-0"
              >
                <img
                  src={img}
                  className="w-full h-[480px] object-cover rounded-xl"
                  alt=""
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* FLECHAS SIN INDICADOR */}
        <div className="flex justify-end mt-6 px-2 gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-full border bg-creama text-red hover:bg-gray-100 border-red"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full bg-creama text-red border hover:bg-gray-100 border-red"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
