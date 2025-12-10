"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Paneles Estructurales de Alta Calidad para un Futuro Sostenible.",
    image: "/images/home/slider/image-1.webp",
  },
  {
    id: 2,
    title:
      "El Sistema MG ofrece una construcción eficiente y estructuralmente sólida.",
    image: "/images/home/slider/image-2.webp",
  },
  {
    id: 3,
    title:
      "Nos destacamos por la simplicidad de nuestra tecnología, que permite su montaje sin la necesidad de equipos sofisticados ni habilidades específicas.",
    image: "/images/home/slider/image-3.webp",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);

    return () => clearInterval(interval);
  }, [index]);

  const slide = slides[index];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXTO CENTRADO */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <motion.h1
          key={`title-${slide.id}`}
          className="text-4xl md:text-6xl font-bold font-inter text-white max-w-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {slide.title}
        </motion.h1>
      </div>

      {/* FLECHAS */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-10">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition"
        >
          <ChevronRight />
        </button>
      </div>

      {/* PUNTOS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-red" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
