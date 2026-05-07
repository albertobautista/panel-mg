"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type StatItemProps = {
  value: number;
  label: string;
  description: string;
  icon: string; // 🔥 aquí definimos el tipo del icono
  animate: boolean;
};

const stats = [
  {
    value: 40,
    label: "aliados",
    description: "Y distribuidores en toda la república mexicana",
    icon: "📍",
  },
  {
    value: 25000,
    label: "m²",
    description: "En ventas mensuales en todo tipo de paneles",
    icon: "📈",
  },
  {
    value: 37,
    label: "años",
    description: "Brindando el mejor servicio y atención al cliente",
    icon: "🏆",
  },
];

// función contador animado
function animateCounter(target: number, callback: (n: number) => void) {
  let current = 0;
  const duration = 2000; // 2 segundos
  const increment = target / (duration / 16); // 60 FPS aprox

  function update() {
    current += increment;
    if (current < target) {
      callback(Math.floor(current));
      requestAnimationFrame(update);
    } else {
      callback(target);
    }
  }

  requestAnimationFrame(update);
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="w-full bg-creama py-20 px-6 md:px-20">
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
      >
        {stats.map((item, index) => (
          <StatItem
            key={index}
            value={item.value}
            label={item.label}
            description={item.description}
            icon={item.icon}
            animate={isInView}
          />
        ))}
      </div>
    </section>
  );
}

function StatItem({ value, label, description, icon, animate }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (animate && ref.current) {
      animateCounter(value, (v) => {
        ref.current!.innerText = v.toString();
      });
    }
  }, [animate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {/* Ícono */}
      <div className="text-red text-5xl mb-4">{icon}</div>

      {/* Número animado */}
      <div className="text-5xl text-red font-semibold font-inter">
        +<span ref={ref}>0</span> {label}
      </div>

      {/* Descripción */}
      <p className="text-lg text-gray-600 font-montserrat mt-2">
        {description}
      </p>
    </motion.div>
  );
}
