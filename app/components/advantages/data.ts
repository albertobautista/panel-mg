export type StatItem = {
  value: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  bullets?: string[];
  highlight?: {
    value: string;
    label: string;
  };
  certs?: string[];
};

export type SpecItem = {
  value: string;
  label: string;
};

export type GalleryItem = {
  src: string;
  label: string;
};

export type AdvantageItem = {
  title: string;
  text: string;
  icon: string;
};

export const stats: StatItem[] = [
  { value: "3,650", label: "Puntos de soldadura por panel" },
  { value: "120,000 lbs", label: "Resistencia a tension" },
  { value: "10 kg/m3", label: "Densidad EPS" },
  { value: "1 cm", label: "Separacion malla-espuma" },
];

export const features: FeatureItem[] = [
  {
    title: "Estructura reforzada de alto desempeño",
    description:
      "La utilización de estructuras tipo zigzag a lo largo del panel genera:",
    bullets: [
      "Una armadura tridimensional",
      "Alta capacidad de carga",
      "Mayor resistencia estructural",
    ],
  },
  {
    title: "Mayor adherencia y control de materiales",
    description:
      "La separación uniforme de 1 cm entre la malla del panel y la espuma de poliestireno permite:",
    bullets: [
      "Un agarre óptimo del mortero",
      "Una mejor cuantificación del material utilizado",
    ],
  },

  {
    title: "Alta calidad en fabricación",
    description:
      "Cada panel MG estructural en medida estándar (2.44 × 1.22 Mt.) cuenta con:",
    highlight: {
      value: "3,650",
      label:
        "Puntos de soldadura distribuidos en todo su largo y ancho — mayor uniformidad y firmeza.",
    },
  },
  {
    title: "Materiales certificados",
    description: "Se utiliza exclusivamente:",
    bullets: [
      "Alambre calibre 14 (2.03 mm Ø)",
      "Acero al carbono de alta resistencia, fabricado bajo estrictas normas",
      "Poliestireno expandido (EPS) de alta calidad — Densidad 10 kg/m³, con retardante al fuego",
      "Resistencia superior comprobada: hasta 120,000 lbs a tensión",
    ],
    certs: ["ASTM A-82", "ASTM A-85"],
  },
  {
    title: "Poliestireno expandido de alta densidad",
    description: "Densidad 10 kg/m³ con retardante al fuego.",
    bullets: [
      "Aislamiento térmico y acústico",
      "Mayor confort y seguridad en tus construcciones",
    ],
  },
];

export const specs: SpecItem[] = [
  { value: "2.44 x 1.22", label: "Medida estandar (mt.)" },
  { value: "3,650", label: "Puntos de soldadura" },
  { value: "10 kg/m3", label: "Densidad EPS" },
  { value: "120,000 lbs", label: "Resistencia a tension" },
  { value: "1 cm", label: "Separacion malla-espuma" },
  { value: "2.03 mm", label: "Diametro del alambre" },
];

export const gallery: GalleryItem[] = [
  { src: "/images/why-is-better/image-5.webp", label: "Aplicacion en obra" },
  { src: "/images/products/slider/image-3.webp", label: "Montaje de panel" },
  { src: "/images/why-is-better/image-6.webp", label: "Detalle estructural" },
  { src: "/images/why-is-better/image-7.webp", label: "Proyecto terminado" },
  {
    src: "/images/products/slider/image-11.webp",
    label: "Sistema constructivo",
  },
];

export const advantages: AdvantageItem[] = [
  {
    title: "Mayor resistencia",
    text: "Estructura más sólida y segura.",
    icon: "M4 12h16M4 8h16M4 16h10",
  },
  {
    title: "Mejor durabilidad",
    text: "Larga vida útil y bajo mantenimiento.",
    icon: "M12 6v6l4 2M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20Z",
  },
  {
    title: "Excelente rendimiento en obra",
    text: "Instalación rápida y eficiente.",
    icon: "M12 3v18M3 12h18M5 5l14 14M19 5 5 19",
  },
  {
    title: "Máxima calidad y confianza",
    text: "Materiales certificados y procesos controlados.",
    icon: "M4 7h16M4 12h16M4 17h16",
  },
];
