"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureHeroSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/home/feature/image-1.webp"
        alt="Consumibles críticos"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay azul oscuro */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          {/* Texto */}
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-widest text-sm mb-3 font-montserrat opacity-90">
              Panel MG
            </p>

            <h2 className="text-xl md:text-3xl font-bold leading-tight font-inter">
              Nuestra misión es ofrecer sistemas constructivos innovadores y de
              alta calidad que faciliten la construcción mediante materiales
              económicos y fáciles de manejar.
            </h2>
          </div>

          {/* Botón */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="bg-red text-white px-8 py-4 rounded-md text-lg font-medium inline-flex items-center gap-2 transition-colors"
            >
              Solicite más información
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
