"use client";

import Link from "next/link";

interface RelatedSolution {
  title: string;
  image: string;
  href: string;
}

interface RelatedSolutionsProps {
  items: RelatedSolution[];
}

export default function RelatedSolutions({ items }: RelatedSolutionsProps) {
  return (
    <section className="w-full px-6 md:px-20 py-20">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="block text-sm tracking-widest font-inter text-gray-500 uppercase mb-2">
          Nuestras soluciones
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a]">
          Soluciones relacionadas
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative h-[260px] md:h-[300px] rounded-xl overflow-hidden"
          >
            {/* IMAGEN */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* OVERLAY ROJO (FADE) */}
            <div
              className="
                absolute inset-0 
                bg-red 
                opacity-0 
                group-hover:opacity-90 
                transition-opacity 
                duration-500
              "
            />

            {/* TEXTO (FADE + SLIDE SUAVE) */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <h3
                className="
                  text-white 
                  text-xl 
                  md:text-2xl 
                  font-semibold 
                  font-montserrat
                  text-center
                  opacity-100
                  md:opacity-0
                  md:group-hover:opacity-100
                  transform
                  md:translate-y-2
                  md:group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
