"use client";

import React, { useState } from "react";
import { AccordionItem } from "../AccordionItem";

const CompanyInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-full px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* COLUMNA IZQUIERDA — TÍTULO */}
        <div>
          <p className="text-lg text-gray-400 uppercase font-inter tracking-wider mb-4">
            Quiénes Somos
          </p>

          <h1 className="text-xl md:text-4xl  text-[#0d1b2a] font-montserrat leading-tight">
            Panel MG es una empresa 100% mexicana, establecida en 1988 en
            Guadalajara, Jalisco, que se ha consolidado como líder en la
            fabricación de paneles estructurales.
          </h1>
        </div>

        {/* COLUMNA DERECHA — TEXTO + ACORDEONES */}
        <div>
          {/* TEXTO SUPERIOR */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8 font-inter">
            Nuestro propósito es proporcionar un sistema constructivo innovador
            que combine materiales económicos y procedimientos de fácil
            transporte. Nos destacamos por la simplicidad de nuestra tecnología,
            que permite su montaje sin la necesidad de equipos sofisticados ni
            habilidades específicas.
          </p>

          {/* ACORDEONES */}
          <AccordionItem
            title="Misión"
            open={openIndex === 1}
            onClick={() => toggleAccordion(1)}
            content={
              <p>
                Ofrecer sistemas constructivos innovadores y de alta calidad que
                faciliten la construcción mediante materiales económicos y
                fáciles de manejar.
              </p>
            }
          />

          <AccordionItem
            title="Visión"
            open={openIndex === 2}
            onClick={() => toggleAccordion(2)}
            content={
              <p>
                Ser líderes en la fabricación de paneles estructurales en México
                y América Latina, destacando por la innovación y el respaldo
                técnico a nuestros clientes.
              </p>
            }
          />

          <AccordionItem
            title="Nuestros Valores"
            open={openIndex === 3}
            onClick={() => toggleAccordion(3)}
            content={
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <strong>Innovación:</strong> Compromiso con la vanguardia en
                  tecnología y procesos constructivos.
                </li>
                <li>
                  <strong>Calidad:</strong> Producción de paneles que cumplen
                  con los más altos estándares.
                </li>
                <li>
                  <strong>Accesibilidad:</strong> Ofrecemos soluciones con
                  diferentes rangos de precio.
                </li>
                <li>
                  <strong>Responsabilidad:</strong> Enfoque en el servicio al
                  cliente y asistencia técnica directa.
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
