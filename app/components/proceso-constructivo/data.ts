export const stripItems = [
  {
    id: "cimentacion",
    label: "Cimentación",
  },
  {
    id: "muros",
    label: "Muros",
  },
  {
    id: "puertas",
    label: "Puertas y Ventanas",
  },
  {
    id: "losas",
    label: "Losas",
  },
  {
    id: "instalaciones",
    label: "Instalaciones",
  },
  {
    id: "mortero",
    label: "Mortero y Concreto",
  },
];

export type Photo = { src: string; alt: string; caption: string };

export type Subsection = {
  title: string;
  paragraphs: string[];
  photos?: Photo[];
  reverse?: boolean;
};

export type Section = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs?: string[];
  photos?: Photo[];
  reverse?: boolean;
  subsections: Subsection[];
  gridPhotos?: Photo[];
  banner: { title: string; paragraphs: string[] } | null;
  bannerAfterSubsectionTitle?: string;
};

export const sections: Section[] = [
  {
    id: "cimentacion",
    eyebrow: "Instalación Panel MG en Viviendas",
    title: "Cimentación",
    paragraphs: [
      "La ligereza del sistema nos permite menor refuerzo de la cimentación, derivado en un ahorro significativo de materiales, mano de obra y tiempo de ejecución.",
      'La cimentación cambiará dependiendo de la resistencia del terreno, pero la más común es la losa corrida de concreto f´c=200Kg/cm², de 8 cm (3") a 10 cm (4") de espesor, reforzado con malla electrosoldada 6x6/10-10 y castillos prefabricados tipo "ARMEX" mr bajo los ejes de los muros.',
      'Para la fijación de los paneles a la losa, hay que amarrar a los castillos tipo ARMEX una serie de bastones de varilla de 3/8" para que trabajen como recibidores de cortante. Los bastones deberán separarse entre sí 40 cm y dejarlos con una altura mínima de 40 cm.',
    ],
    photos: [
      {
        src: "/images/proceso-constructivo/proceso-1.webp",
        alt: "Cimentación con bastones de varilla",
        caption: "Cimentación con bastones de varilla",
      },
    ],
    reverse: false,
    subsections: [],
    banner: null,
    gridPhotos: [],
  },
  {
    id: "muros",
    eyebrow: "Instalación Panel MG en Viviendas",
    title: "Muros",
    subsections: [
      {
        title: "Ensamblado",
        paragraphs: [
          "Los paneles de los muros se ensamblan entre sí por ambas caras con mallas unión de alambre de acero pulido calibre 14. En las uniones rectas se usan mallas de 2.44 x 10 cm. En los esquineros interiores, mallas de 2.44 x 20 cm, mientras que en los exteriores de 2.44 x 30 cm.",
          "El no usar dichas mallas en las uniones de paneles provoca la aparición posterior de fisuras o grietas una vez aplicado el mortero. Para las uniones en esquina las mallas se doblan en la obra a 90° o en el ángulo necesario.",
          "NOTA: Se pueden fabricar paneles con longitudes variables en caso de que alguien quiera mayor altura en su casa.",
        ],
        photos: [
          {
            src: "/images/proceso-constructivo/proceso-2.webp",
            alt: "Ensamblado de paneles en muros",
            caption: "Ensamblado de paneles en muros",
          },
        ],
        reverse: true,
      },
      {
        title: "Colocación del Panel en Muros",
        paragraphs: [
          "Las varillas que previamente se dejaron ahogadas en la cimentación servirán de recibidor de cortante. Estas se fijan al panel con alambre recocido. Posteriormente se plomean los muros y se alinean conforme a los trazos del proyecto.",
          "La colocación correcta del panel en muros es ubicando el zigzag del panel perpendicularmente al plano del piso, de modo que las hojas del panel se ubicarán con el lado de 1.22 m apoyando en la cimentación.",
        ],
        photos: [
          {
            src: "/images/proceso-constructivo/proceso-3.webp",
            alt: "Colocación y alineación de muros",
            caption: "Colocación y alineación de muros",
          },
        ],
      },
    ],
    banner: null,
    gridPhotos: [],
  },
  {
    id: "puertas",
    eyebrow: "Instalación Panel MG en Viviendas",
    title: "Puertas y Ventanas",
    paragraphs: [
      "Los vanos de las ventanas se obtienen trazando con un marcador el hueco y recortando el panel con unas pinzas alicatas o pinzas corta pernos; los sobrantes pueden ser utilizados en los cerramientos de las puertas.",
      "Para reforzar el marco de las ventanas y puertas se retiran 5 cm de poliestireno para formar un marco rígido de mortero cemento-arena cuando se aplique en los muros.",
      "Es igualmente necesario colocar tiras de mallas de 4 cuadros, con una longitud de 60 cm en un ángulo de 45° en las cuatro esquinas de las ventanas para reforzar el marco. Procedimiento que se repetirá de igual forma en los vanos de las puertas (esquinas superiores).",
    ],
    photos: [
      {
        src: "/images/proceso-constructivo/proceso-4.webp",
        alt: "Marco de puertas y ventanas",
        caption: "Marco de puertas y ventanas",
      },
    ],
    reverse: true,
    subsections: [],
    banner: null,
    gridPhotos: [],
  },
  {
    id: "losas",
    eyebrow: "Instalación Panel MG en Viviendas",
    title: "Losas",
    subsections: [
      {
        title: "Preensamblado de Losa",
        paragraphs: [
          "La ligereza del panel permite que las losas puedan armarse en el piso, y posteriormente se eleven y coloquen sobre los muros. Al igual que la unión de los paneles en muros, es necesario colocar mallas unión esquineras para fijar el panel de la losa con el de muro.",
          "El panel MG se fabrica en diferentes longitudes, desde 2.44 hasta 5.04 m. Por lo que con una sola pieza se cubre el claro corto de la losa, colocando el zigzag del panel en dirección de este.",
        ],
        photos: [
          {
            src: "/images/proceso-constructivo/proceso-5.webp",
            alt: "Preensamblado de losa Panel MG",
            caption: "Preensamblado de losa Panel MG",
          },
        ],
      },
      {
        title: "Armado de la Losa",
        paragraphs: [
          'El refuerzo de la losa se proporciona con varillas de 3/8" en la misma dirección del zigzag del panel, las cuales se ubicarán en la parte inferior de la losa, para tomar los esfuerzos de tensión generados sobre la retícula del panel. En los casos en los cuales la losa se apoye en forma continua, será indicado reforzar con varillas de 3/8" en la parte superior de la losa para tomar los momentos negativos en los apoyos intermedios.',
          'Cuando las condiciones estructurales del proyecto requieren de elementos adicionales de concreto, tales como trabes integrados o peraltados, estas se pueden forjar del mismo panel, removiendo el poliestireno y colocando acero de refuerzo (varillas de 3/8") dentro de la estructura del panel.',
        ],
      },
      {
        title: "Cimbrado de la Losa",
        paragraphs: [
          "La losa se monta sobre los muros y de nuevo se utilizan mallas unión para fijar los muros con las losas en la parte inferior y superior de la misma. Posteriormente se coloca una cimbra temporal que soporte el vaciado del concreto en la losa.",
          "Esta cimbra se compone de madrinas de madera (polín de 4x4) a cada metro en dirección perpendicular al zigzag del panel, a su vez apoyadas en puntales o pies derechos, que son repartidos en distancias de 2.40 m, formando así el sistema de apuntalamiento que soportará la losa durante el tiempo de fraguado del concreto, normalmente a 10 días, antes de poder retirar el apuntalamiento.",
          "Con los puntales se da la contraflecha necesaria para que al descimbrar la losa tome la horizontalidad requerida.",
        ],
      },
    ],
    banner: null,
    gridPhotos: [],
  },
  {
    id: "instalaciones",
    eyebrow: "Instalación Panel MG en Viviendas",
    title: "Instalaciones",
    subsections: [
      {
        title: "Colocación de Instalaciones Eléctricas y Sanitarias",
        paragraphs: [
          "Para la colocación de las instalaciones, ya sean eléctricas, sanitarias, hidráulicas, o de cualquier tipo, se retira el poliestireno por donde pasarán utilizando una navaja o quemando el poliestireno con un mechero o soplete, cuidando eliminar solo lo necesario para poder introducir el ducto.",
          "En el caso de tuberías de mayor diámetro se corta una sección del panel y se introduce en el mismo. Posteriormente se usa una malla unión para reforzar el área afectada y seguir con la continuidad estructural que brinda el panel. Cuando se trate de tubería de cobre, es necesario aislarla del contacto con el acero de refuerzo para evitar la corrosión.",
        ],
        photos: [
          {
            src: "/images/proceso-constructivo/proceso-6.webp",
            alt: "Colocación de Instalaciones Eléctricas y Sanitarias",
            caption: "Instalaciones eléctricas embutidas",
          },
        ],
        reverse: true,
      },
      {
        title: "Cajas, Registros y Centros de Carga",
        paragraphs: [
          "Se recorta el área necesaria para el empotramiento del accesorio y se elimina el poliestireno, amarrando la pieza del panel con alambre recocido, tomando en cuenta la aplicación de mortero y los acabados finales.",
          "Donde se requiera una especial resistencia en el empotramiento, debe recortarse el panel y el poliestireno de tal manera que se tenga un colado de concreto que envuelva a la caja.",
        ],
        photos: [
          {
            src: "/images/proceso-constructivo/proceso-7.webp",
            alt: "Colocación de Instalaciones Eléctricas y Sanitarias",
            caption: "Instalaciones y acabado de muros",
          },
        ],
      },
      {
        title: "Empotramiento de Muebles y Accesorios",
        paragraphs: [
          "Las áreas donde vayan a ser empotrados los muebles y accesorios que así lo requieran, se cubrirán con cartón para que, una vez aplicado el mortero a los muros, se coloque el mueble o accesorio y se reciba con mortero cemento-arena.",
          "Si el mueble por su peso necesita acero de refuerzo, este se anclará al panel para dar el empotramiento requerido.",
        ],
      },
      {
        title: "Fijación de Muebles y Accesorios",
        paragraphs: [
          "Para este caso entenderemos como mueble fijado el que se soporte a través de pijas o taquetes sobre el muro.",
          "El muro de Panel MG es prácticamente un muro de concreto y se deben usar taquetes y clavos de concreto. En el caso de cuadros y otros objetos se tiene experiencia de un buen comportamiento del recubrimiento del panel.",
        ],
      },
    ],
    banner: null,
    gridPhotos: [],
  },
  {
    id: "mortero",
    eyebrow: "Instalación Panel MG en Viviendas",
    title: "Aplicación de Mortero y Concreto",
    paragraphs: [],
    photos: [],
    reverse: false,
    subsections: [
      {
        title: "Primera Capa de Mortero en Muros",
        paragraphs: [
          "Con las instalaciones ya listas, se aplica una primera capa de mortero cemento-arena proporción 1:4, con espesor de 1 cm, quedando a nivel de la retícula del panel.",
          "Esta primera capa rigidizará los muros para poder soportar el colado de la capa de compresión de la losa. Se debe cuidar el 'curado' del mortero como cualquier aplicación que lleve cemento.",
        ],
      },
      {
        title: "Concreto en Losas",
        paragraphs: [
          'Las losas de panel nos sirven como "cimbra muerta", pues colamos directamente sobre ella la capa de compresión de 10 cm de espesor (f´c = 200 Kg/cm²) que proporcionará la capacidad de la misma como elemento estructural horizontal. Se utiliza grava de ½" para garantizar que esta penetre en la malla de alambre y el poliestireno.',
          "No se deberá quitar la cimbra durante los siguientes 10 días (tiempo de fraguado del concreto).",
        ],
      },
      {
        title: "Mortero en Lecho Inferior de la Losa y Segunda Capa en Muros",
        paragraphs: [
          "Una vez que la capa de compresión ha fraguado, se prosigue con la aplicación de mortero en la parte inferior de la losa aplicando mortero cemento-arena proporción 1:4, en dos capas: la primera de 1 cm, y la segunda de 1.5 cm, para hacer un total de 2.5 cm que junto a los 5 cm de la capa de compresión formarán el sistema de la losa.",
          "Una vez completada esta etapa se finalizará con la segunda aplicación de mortero en los muros, que igualmente sumará un total de 2.5 cm de mortero cemento-arena, por ambas caras del panel.",
        ],
      },
      {
        title: "Anclaje con Varillas",
        paragraphs: [
          'Las varillas de 3/8" son fijadas en la estructura existente perforando orificios en la losa inferior, superior, columnas y cerramientos, y se introducen con un martillo. En el caso de estructuras de acero, las varillas se sueldan a la estructura. En ambos casos se recomienda separar las varillas 40 cm y dejar una altura libre de entre 40 y 60 cm.',
        ],
      },
    ],
    banner: {
      title: "Instalación Panel MG en Edificios",
      paragraphs: [
        "El empleo del panel MG en edificios sigue básicamente el mismo procedimiento que en las viviendas, solo que la gran variedad de condiciones implica soluciones específicas para la fijación del panel a la estructura existente. Por lo general el factor de mayor consideración es la carga por viento, por lo que la separación de los puntos de fijación o la colocación de acero como refuerzo dependerá de esta.",
      ],
    },
    bannerAfterSubsectionTitle:
      "Mortero en Lecho Inferior de la Losa y Segunda Capa en Muros",
    gridPhotos: [
      {
        src: "/images/proceso-constructivo/proceso-8.webp",
        alt: "Instalación en edificio — fachada",
        caption: "Instalación en edificio — fachada",
      },
      {
        src: "/images/proceso-constructivo/proceso-9.webp",
        alt: "Anclaje con varillas a estructura existente",
        caption: "Anclaje con varillas a estructura existente",
      },
    ],
  },
];
