"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Productos", href: "/productos" },
  { label: "Sistema Constructivo", href: "/sistema" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-30">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold tracking-wide ">
            PANEL <span className="text-red">MG</span>
          </span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-md font-inter uppercase hover:text-red transition"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-red origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
              />
            </motion.a>
          ))}

          {/* BOTÓN */}
          <a
            href="/contacto"
            className="bg-red hover:bg-red/90 text-md font-semibold px-4 py-2 rounded-md transition"
          >
            Contacto
          </a>
        </nav>

        {/* BOTÓN MOBILE */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-neutral-900 px-6 py-4 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm font-medium text-neutral-300 hover:text-red transition"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contacto"
            className="block bg-red hover:bg-red/90 text-sm font-semibold px-4 py-2 rounded-md transition text-center"
          >
            Contacto
          </a>
        </motion.div>
      )}
    </header>
  );
}
