import type { Metadata } from "next";
import { ProcesoConstructivoPanelMG } from "../components/proceso-constructivo/ProcesoConstructivoPanelMG";

export const metadata: Metadata = {
  title: "Proceso Constructivo | Panel MG",
  description:
    "Conoce cada etapa del proceso constructivo con Panel MG, desde la planificación hasta los acabados finales.",
};

export default function ProcesoConstructivoPage() {
  return <ProcesoConstructivoPanelMG />;
}
