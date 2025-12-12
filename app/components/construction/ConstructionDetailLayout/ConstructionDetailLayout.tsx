interface BulletGroup {
  title: string;
  items: {
    label: string;
    text: string;
  }[];
}

interface DetailLayoutProps {
  title: string;
  subtitle: string;
  bullets: BulletGroup[];
  downloadUrl: string;
}

export default function ConstructionDetailLayout({
  title,
  subtitle,
  bullets,
  downloadUrl,
}: DetailLayoutProps) {
  return (
    <section className="w-full px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* COLUMNA IZQUIERDA */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl font-montserrat text-[#0d1b2a]/80 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col justify-between h-full">
          {/* BULLETS */}
          <div className="space-y-8 text-[#0d1b2a] font-montserrat leading-relaxed">
            {bullets.map((group, index) => (
              <div key={index}>
                {/* Nivel 1 */}
                <p className="font-semibold mb-3 text-2xl">• {group.title}</p>

                {/* Nivel 2 */}
                <ul className="ml-6 space-y-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 text-sm">○</span>
                      <p className="text-xl">
                        <strong>{item.label}:</strong> {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BOTÓN */}
          <div className="mt-10">
            <a
              href={downloadUrl}
              download
              className="
                inline-flex 
                items-center 
                justify-center 
                px-8 
                py-4 
                border 
                border-[#0d1b2a]
                text-[#0d1b2a]
                font-semibold
                rounded-lg
                hover:bg-[#0d1b2a]
                hover:text-white
                transition-colors
                font-montserrat
                w-full
              "
            >
              Descargar ficha técnica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
