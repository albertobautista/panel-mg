import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue text-white pt-24 pb-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* -------------------------------- */}
        {/* COLUMNA 1 — LOGO + REDES */}
        {/* -------------------------------- */}
        <div className="flex flex-col gap-5">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold tracking-wide ">
              PANEL <span className="text-red">MG</span>
            </span>
          </div>
          {/* <Image
            src="/images/logo-panelmg-white.png"
            alt="Panel MG"
            width={220}
            height={80}
            className="mb-8"
          /> */}

          <p className="text-lg text-gray-300 font-medium font-inter">
            Síguenos en:
          </p>

          <div className="flex gap-5 mt-4">
            <Link
              href="#"
              className="underline hover:text-gray-200 text-lg font-montserrat"
            >
              LinkedIn
            </Link>
            <span className="text-gray-400 text-lg">/</span>
            <Link
              href="#"
              className="underline hover:text-gray-200 text-lg font-montserrat"
            >
              YouTube
            </Link>
          </div>
        </div>

        {/* -------------------------------- */}
        {/* COLUMNA 2 — DIRECCIÓN */}
        {/* -------------------------------- */}
        <div>
          <h3 className="font-semibold mb-6 text-2xl font-inter">
            Oficina Central
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed font-montserrat">
            Urbano Gómez 1300, La Joya, 44300 <br /> Guadalajara, Jal., Mexico.
          </p>
        </div>

        {/* -------------------------------- */}
        {/* COLUMNA 3 — CONTACTO */}
        {/* -------------------------------- */}
        <div>
          <h3 className="font-semibold mb-6 text-2xl font-inter">
            Contáctenos
          </h3>

          <div className="mb-8">
            <p className="text-lg text-gray-300 font-montserrat">
              Para productos
            </p>
            <Link
              href="mailto:contacto@panelmg.com"
              className="text-lg underline hover:text-gray-200 block mt-1 font-montserrat"
            >
              contacto@panelmg.com
            </Link>
          </div>

          <div>
            <p className="text-lg text-gray-300 font-montserrat">
              Para representación
            </p>
            <Link
              href="mailto:comercial@panelmg.com"
              className="text-lg underline hover:text-gray-200 block mt-1 font-montserrat"
            >
              comercial@panelmg.com
            </Link>
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="border-t border-gray-600 w-full mt-20 mb-8"></div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto font-montserrat flex flex-col md:flex-row justify-between text-lg text-gray-300">
        <p>
          © {new Date().getFullYear()} PANEL MG — Sistema Constructivo. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
