"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: `“Los cuerpos moldeadores han cumplido con nuestras expectativas, mostrando una excelente durabilidad y desgaste uniforme. Esto ha permitido optimizar nuestro proceso de molienda y reducir la frecuencia de los recambios, lo que impacta positivamente en la producción y los costos operativos.”`,
  },
  {
    text: `“El sistema de Panel MG nos permitió acelerar significativamente el proceso constructivo sin necesidad de maquinaria pesada. La resistencia y aislamiento fueron superiores a lo esperado.”`,
  },
  {
    text: `“Las viviendas realizadas con Panel MG demostraron un comportamiento térmico excepcional y una reducción notable en tiempos y costos de obra.”`,
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  const next = () =>
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  useEffect(() => {
    const heights = refs.current.map((el) => (el ? el.scrollHeight : 0));
    setMaxHeight(Math.max(...heights));
  }, []);

  const item = reviews[index];

  return (
    <section className="w-full bg-creama py-20 px-6 md:px-20">
      <div
        className="
          max-w-8xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-0 
          auto-rows-min
        "
      >
        {/* IMAGEN IZQUIERDA MEJORADA */}
        <div className="flex items-center h-full">
          <div className="w-full h-[420px] md:h-[460px]  overflow-hidden shadow-sm">
            <img
              src="/images/home/reviews/image-1.webp"
              className="w-full h-full object-cover object-center"
              alt="Clientes"
            />
          </div>
        </div>

        {/* PANEL DERECHO MÁS BAJO Y ELEGANTE */}
        <div className="bg-white p-20 shadow-md rounded-lg flex flex-col justify-between max-w-4xl min-h-[760px]">
          {/* HEADER */}
          <div className="flex h-full justify-center flex-col">
            <p className="text-lg font-montserrat uppercase tracking-widest text-gray-500 mb-3">
              Testimonios
            </p>

            <h2 className="text-3xl md:text-6xl font-inter font-bold text-[#0d1b2a] leading-tight mb-4">
              Lo que dicen <br /> Nuestros Clientes
            </h2>

            <p className="text-gray-700 mb-6 text-xl font-bold font-montserrat">
              Descubra cómo Panel MG ha transformado proyectos a través de
              historias reales de éxito.
            </p>

            {/* CONTENEDOR DE ALTURA DINÁMICA */}
            <div
              className="relative w-full transition-all duration-300 text-gray-900"
              style={{ minHeight: maxHeight }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-0 left-0 text-xl leading-relaxed font-montserrat"
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                >
                  {item.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-10">
            <div className="text-gray-800 text-base text-xl font-montserrat font-medium flex items-center gap-3">
              {index + 1}
              <span className="w-10 h-[2px] bg-gray-400 inline-block"></span>
              {reviews.length}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
