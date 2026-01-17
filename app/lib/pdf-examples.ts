/**
 * Ejemplo de uso para descargar múltiples PDFs
 *
 * Este archivo muestra cómo usar la función downloadMultiplePDFs
 * para permitir que los usuarios descarguen varios PDFs a la vez
 */

import { downloadMultiplePDFs } from "@/app/lib/download-utils";

// Ejemplo: Descargar todos los PDFs de productos constructivos
export const downloadAllProductPDFs = () => {
  const pdfs = [
    {
      filename: "Cimentacion-Losa-Corrida.pdf",
      path: "/pdfs/cimentacion-losa-corrida.pdf",
    },
    { filename: "Anclaje-Muros.pdf", path: "/pdfs/anclaje-muros.pdf" },
    {
      filename: "Construccion-Viviendas.pdf",
      path: "/pdfs/construccion-viviendas.pdf",
    },
    {
      filename: "Fachadas-Muros-Edificios.pdf",
      path: "/pdfs/fachadas-muros-edificios.pdf",
    },
    { filename: "Cupulas-Bovedas.pdf", path: "/pdfs/cupulas-bovedas.pdf" },
    {
      filename: "Innovacion-Materiales.pdf",
      path: "/pdfs/innovacion-materiales.pdf",
    },
  ];

  downloadMultiplePDFs(pdfs);
};

// Ejemplo: Descargar PDFs de una categoría específica
export const downloadConstructionPDFs = () => {
  const pdfs = [
    {
      filename: "Cimentacion-Losa-Corrida.pdf",
      path: "/pdfs/cimentacion-losa-corrida.pdf",
    },
    { filename: "Anclaje-Muros.pdf", path: "/pdfs/anclaje-muros.pdf" },
    {
      filename: "Construccion-Viviendas.pdf",
      path: "/pdfs/construccion-viviendas.pdf",
    },
  ];

  downloadMultiplePDFs(pdfs);
};
