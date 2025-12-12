import { Hero } from "../components/construction/Hero";
import { ImageGrid } from "../components/construction/ImageGrid";
import { pillars } from "../data";

export default function Construction() {
  return (
    <div className="bg-white">
      <Hero />
      <section className="w-full px-6 md:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#0d1b2a] font-montserrat text-base md:text-lg lg:text-xl leading-relaxed">
            <strong>
              Bienvenido a nuestra guía sobre sistemas constructivos.
            </strong>{" "}
            Aquí exploramos las tecnologías y métodos utilizados para edificar
            tanto viviendas como grandes edificios, con un enfoque en la
            eficiencia, sostenibilidad y seguridad.
          </p>
        </div>
      </section>
      <ImageGrid data={pillars} />
    </div>
  );
}
