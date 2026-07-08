export type ProductImage = {
  src: string;
  sourceSrc?: string;
  fallbackSrc?: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductCategory = {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  highlights: string[];
  applications: string[];
  specifications: ProductSpec[];
  detailHref: string;
  fichaTecnicaHref?: string;
  previewImages: ProductImage[];
  galleryImages: ProductImage[];
};

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1400&q=82`;

const architecturePhotos = [
  "photo-1600585154340-be6161a56a0c",
  "photo-1600573472550-8090b5e0745e",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600566752355-35792bedcfea",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600566753086-00f18fb6b3ea",
  "photo-1600585154526-990dced4db0d",
  "photo-1494526585095-c41746248156",
  "photo-1500530855697-b586d89ba3ee"
];

const interiorPhotos = [
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600566753086-00f18fb6b3ea",
  "photo-1600607687644-c7171b42498b",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1484154218962-a197022b5858",
  "photo-1505693416388-ac5ce068fe85",
  "photo-1497366754035-f200968a6e72",
  "photo-1600566752355-35792bedcfea",
  "photo-1600585154526-990dced4db0d",
  "photo-1518005020951-eccb494ad742"
];

const gardenPhotos = [
  "photo-1416879595882-3373a0480b5b",
  "photo-1501004318641-b39e6451bec6",
  "photo-1466692476868-aef1dfb1e735",
  "photo-1558904541-efa843a96f01",
  "photo-1523413651479-597eb2da0ad6",
  "photo-1441974231531-c6227db76b6e",
  "photo-1513836279014-a89f7a76ae86",
  "photo-1472214103451-9374bd1c798e",
  "photo-1500530855697-b586d89ba3ee",
  "photo-1494526585095-c41746248156"
];

const constructionPhotos = [
  "photo-1504307651254-35680f356dfd",
  "photo-1541888946425-d81bb19240f5",
  "photo-1503387762-592deb58ef4e",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1518005020951-eccb494ad742",
  "photo-1497366754035-f200968a6e72",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600573472550-8090b5e0745e",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600566752355-35792bedcfea"
];

const roadwayPhotos = [
  "photo-1500530855697-b586d89ba3ee",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1504307651254-35680f356dfd",
  "photo-1541888946425-d81bb19240f5",
  "photo-1503387762-592deb58ef4e",
  "photo-1497366754035-f200968a6e72",
  "photo-1518005020951-eccb494ad742",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600573472550-8090b5e0745e",
  "photo-1600566753190-17f0baa2a6c3"
];

const roofPhotos = [
  "photo-1503387762-592deb58ef4e",
  "photo-1541888946425-d81bb19240f5",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600573472550-8090b5e0745e",
  "photo-1494526585095-c41746248156",
  "photo-1500530855697-b586d89ba3ee",
  "photo-1600566753190-17f0baa2a6c3",
  "photo-1600566752355-35792bedcfea",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1504307651254-35680f356dfd"
];

type ProductSeed = Omit<
  ProductCategory,
  "detailHref" | "previewImages" | "galleryImages"
> & {
  photos: string[];
  imageCaptions: string[];
};

function buildImages(
  slug: string,
  title: string,
  photos: string[],
  imageCaptions: string[]
): Pick<ProductCategory, "previewImages" | "galleryImages"> {
  const galleryImages = photos.slice(0, 10).map((photoId, index) => {
    const caption = imageCaptions[index % imageCaptions.length];

    return {
      src: `/images/placeholders/${slug}-${(index % 5) + 1}.svg`,
      sourceSrc: unsplash(photoId),
      fallbackSrc: `/images/placeholders/${slug}-${(index % 5) + 1}.svg`,
      alt: `${caption} - referencia visual para ${title}`,
      caption,
      isPlaceholder: true
    };
  });

  return {
    previewImages: galleryImages.slice(0, 5),
    galleryImages
  };
}

const seeds: ProductSeed[] = [
  {
    id: "decks",
    slug: "decks-pergolados-fachadas-plafones",
    title: "Decks, pergolados, fachadas y plafones",
    description:
      "Sistemas WPC para exterior e interior con apariencia cálida, larga vida útil y bajo mantenimiento.",
    overview:
      "Una línea pensada para terrazas, áreas sociales, fachadas ventiladas, plafones y detalles arquitectónicos donde se busca el aspecto de la madera con mejor desempeño frente al sol, humedad y uso continuo.",
    highlights: [
      "Acabado tipo madera con estabilidad dimensional.",
      "Ideal para proyectos residenciales y comerciales.",
      "Bajo mantenimiento frente a madera tradicional.",
      "Compatible con cortes, fijaciones y modulaciones de obra."
    ],
    applications: ["Terrazas", "Pergolados", "Fachadas", "Plafones", "Áreas exteriores"],
    specifications: [
      { label: "Material", value: "Compuesto WPC de madera y polímero reciclado" },
      { label: "Uso recomendado", value: "Interior y exterior según sistema de instalación" },
      { label: "Mantenimiento", value: "Limpieza periódica con agua y jabón neutro" },
      { label: "Instalación", value: "Sobre bastidor, estructura o fijación especificada por proyecto" },
      { label: "Ficha técnica", value: "Solicitar ficha vigente por WhatsApp" }
    ],
    photos: architecturePhotos,
    imageCaptions: [
      "Terraza con acabado tipo madera",
      "Fachada arquitectónica exterior",
      "Área social con deck",
      "Plafón con textura cálida",
      "Pergolado para sombra"
    ]
  },
  {
    id: "tabla-wpc",
    slug: "tabla-wpc-lambrin",
    title: "Tabla WPC lambrín",
    description:
      "Lambrín de WPC para muros y acentos decorativos con textura de madera y limpieza sencilla.",
    overview:
      "Solución práctica para crear muros con volumen, acentos cálidos y superficies resistentes sin depender del mantenimiento frecuente de un recubrimiento natural.",
    highlights: [
      "Apariencia de madera con mejor resistencia a humedad.",
      "Formato modular para muros y recubrimientos.",
      "Útil en interiores, terrazas cubiertas y fachadas protegidas.",
      "Disponible para proyectos de remodelación y obra nueva."
    ],
    applications: ["Muros decorativos", "Interiores", "Fachadas protegidas", "Locales", "Residencial"],
    specifications: [
      { label: "Material", value: "WPC con acabado lambrín" },
      { label: "Aplicación", value: "Recubrimiento vertical en muros y detalles" },
      { label: "Acabados", value: "Tonos tipo madera sujetos a disponibilidad" },
      { label: "Cuidado", value: "No requiere barniz; limpiar con paño húmedo" },
      { label: "Ficha técnica", value: "Solicitar medidas y colores vigentes" }
    ],
    photos: interiorPhotos,
    imageCaptions: [
      "Muro con lambrín cálido",
      "Detalle decorativo vertical",
      "Recubrimiento para área social",
      "Acabado tipo madera",
      "Aplicación interior contemporánea"
    ]
  },
  {
    id: "pasto",
    slug: "pasto-sintetico",
    title: "Pasto sintético",
    description:
      "Pasto decorativo y funcional para jardines, terrazas, áreas recreativas y espacios de bajo consumo de agua.",
    overview:
      "Alternativa limpia y de apariencia natural para reducir riego y mantenimiento en áreas verdes, patios, terrazas, eventos y zonas de convivencia.",
    highlights: [
      "Ahorro de agua y mantenimiento.",
      "Apariencia verde todo el año.",
      "Opciones para uso decorativo o tránsito moderado.",
      "Instalación adaptable a patios, terrazas y áreas recreativas."
    ],
    applications: ["Jardines", "Terrazas", "Áreas infantiles", "Eventos", "Locales comerciales"],
    specifications: [
      { label: "Material", value: "Fibra sintética con respaldo drenante" },
      { label: "Altura de fibra", value: "Por confirmar según modelo seleccionado" },
      { label: "Drenaje", value: "Requiere base preparada y pendiente adecuada" },
      { label: "Mantenimiento", value: "Cepillado y limpieza periódica" },
      { label: "Ficha técnica", value: "Solicitar modelo disponible" }
    ],
    photos: gardenPhotos,
    imageCaptions: [
      "Área verde de bajo mantenimiento",
      "Jardín residencial",
      "Terraza con acabado natural",
      "Zona recreativa verde",
      "Aplicación decorativa exterior"
    ]
  },
  {
    id: "muros-verdes",
    slug: "muros-verdes",
    title: "Muros verdes",
    description:
      "Paneles verdes decorativos para dar textura vegetal a muros interiores y exteriores protegidos.",
    overview:
      "Una solución visual de alto impacto para crear fondos verdes en terrazas, restaurantes, oficinas, patios y muros decorativos sin el mantenimiento de un jardín natural.",
    highlights: [
      "Mejora visual inmediata en muros existentes.",
      "No requiere riego constante.",
      "Puede combinarse con iluminación o señalética.",
      "Instalación rápida en proyectos residenciales y comerciales."
    ],
    applications: ["Muros decorativos", "Terrazas", "Restaurantes", "Oficinas", "Patios"],
    specifications: [
      { label: "Formato", value: "Panel modular de follaje sintético" },
      { label: "Uso recomendado", value: "Interior y exterior protegido según modelo" },
      { label: "Fijación", value: "Malla, estructura o muro existente preparado" },
      { label: "Mantenimiento", value: "Limpieza superficial ocasional" },
      { label: "Ficha técnica", value: "Solicitar densidad y modelo vigente" }
    ],
    photos: gardenPhotos.slice(2).concat(gardenPhotos.slice(0, 2)),
    imageCaptions: [
      "Muro verde decorativo",
      "Follaje sintético modular",
      "Acento vegetal para terraza",
      "Fondo verde comercial",
      "Panel de textura natural"
    ]
  },
  {
    id: "lambrin-pvc",
    slug: "lambrin-pvc",
    title: "Lambrín PVC",
    description:
      "Recubrimiento ligero de PVC para muros interiores, plafones y remodelaciones de instalación ágil.",
    overview:
      "Producto versátil para renovar superficies con bajo peso, limpieza sencilla y buena apariencia en interiores residenciales, comerciales y de servicio.",
    highlights: [
      "Ligero y fácil de manipular.",
      "Limpieza rápida para espacios de uso continuo.",
      "Reduce tiempos de remodelación.",
      "Variedad de acabados según disponibilidad."
    ],
    applications: ["Muros interiores", "Plafones", "Locales", "Oficinas", "Remodelaciones"],
    specifications: [
      { label: "Material", value: "PVC para recubrimiento decorativo" },
      { label: "Uso recomendado", value: "Interior o áreas protegidas" },
      { label: "Instalación", value: "Sobre superficie nivelada o bastidor ligero" },
      { label: "Limpieza", value: "Paño húmedo y jabón neutro" },
      { label: "Ficha técnica", value: "Solicitar espesores y colores vigentes" }
    ],
    photos: interiorPhotos.slice(1).concat(interiorPhotos.slice(0, 1)),
    imageCaptions: [
      "Recubrimiento interior de PVC",
      "Muro decorativo limpio",
      "Plafón ligero",
      "Acabado para remodelación",
      "Detalle interior de bajo mantenimiento"
    ]
  },
  {
    id: "tabla-pvc",
    slug: "tabla-pvc-plafones-muros",
    title: "Tabla PVC plafones y muros",
    description:
      "Tablas de PVC para cubrir plafones y muros con superficies limpias, ligeras y fáciles de mantener.",
    overview:
      "Pensada para espacios donde se busca rapidez de instalación, limpieza y un acabado continuo en plafones, muros de servicio o áreas interiores.",
    highlights: [
      "Bajo peso para instalación eficiente.",
      "Buena opción para plafones y muros interiores.",
      "Superficie lavable.",
      "Solución práctica para obra nueva o actualización de espacios."
    ],
    applications: ["Plafones", "Muros interiores", "Áreas de servicio", "Locales", "Oficinas"],
    specifications: [
      { label: "Material", value: "PVC en formato tabla" },
      { label: "Uso", value: "Plafón y muro interior" },
      { label: "Resistencia", value: "Adecuada para humedad ambiental controlada" },
      { label: "Mantenimiento", value: "Limpieza simple sin pintura frecuente" },
      { label: "Ficha técnica", value: "Solicitar presentación disponible" }
    ],
    photos: interiorPhotos.slice(2).concat(interiorPhotos.slice(0, 2)),
    imageCaptions: [
      "Plafón con acabado limpio",
      "Muro interior ligero",
      "Tabla PVC decorativa",
      "Renovación de superficie",
      "Detalle en área comercial"
    ]
  },
  {
    id: "plastimadera",
    slug: "plastimadera",
    title: "Plastimadera",
    description:
      "Perfiles de plástico reciclado para mobiliario, cercas, exteriores y aplicaciones con alta exposición.",
    overview:
      "Material robusto para sustituir madera en usos donde importa la resistencia a humedad, plagas y mantenimiento frecuente, especialmente en exteriores y equipamiento urbano.",
    highlights: [
      "Fabricada con plástico reciclado.",
      "No se astilla ni se pudre como madera natural.",
      "Alta resistencia para ambientes exteriores.",
      "Útil para mobiliario, corrales, cercas y elementos de obra."
    ],
    applications: ["Mobiliario", "Cercas", "Jardines", "Equipamiento urbano", "Exteriores"],
    specifications: [
      { label: "Material", value: "Plástico reciclado de alta durabilidad" },
      { label: "Uso recomendado", value: "Exterior, mobiliario y aplicaciones estructurales ligeras" },
      { label: "Trabajo en obra", value: "Corte y perforación con herramientas adecuadas" },
      { label: "Mantenimiento", value: "No requiere barniz ni sellador" },
      { label: "Ficha técnica", value: "Solicitar medidas disponibles" }
    ],
    photos: constructionPhotos,
    imageCaptions: [
      "Perfil reciclado para exterior",
      "Aplicación tipo madera plástica",
      "Material durable para obra",
      "Detalle de equipamiento exterior",
      "Solución reciclada de bajo mantenimiento"
    ]
  },
  {
    id: "plastiteja",
    slug: "plastiteja",
    title: "Plastiteja",
    description:
      "Teja plástica reciclada para cubiertas ligeras con enfoque sustentable y mantenimiento reducido.",
    overview:
      "Alternativa para cubiertas y techumbres donde se busca una solución ligera, resistente y alineada con el aprovechamiento de materiales reciclados.",
    highlights: [
      "Producto con contenido reciclado.",
      "Menor peso frente a soluciones tradicionales.",
      "Buena opción para techumbres ligeras.",
      "Instalación sujeta a pendiente y estructura del proyecto."
    ],
    applications: ["Techumbres", "Cubiertas", "Terrazas", "Áreas exteriores", "Remodelaciones"],
    specifications: [
      { label: "Material", value: "Plástico reciclado en formato teja" },
      { label: "Uso recomendado", value: "Cubiertas ligeras con estructura adecuada" },
      { label: "Pendiente", value: "Definir según ficha técnica y clima del sitio" },
      { label: "Mantenimiento", value: "Inspección y limpieza periódica" },
      { label: "Ficha técnica", value: "Solicitar ficha vigente antes de instalar" }
    ],
    photos: roofPhotos,
    imageCaptions: [
      "Cubierta ligera",
      "Techumbre exterior",
      "Material reciclado para techo",
      "Aplicación en terraza",
      "Detalle de cubierta sustentable"
    ]
  },
  {
    id: "cimbraplay",
    slug: "triplay-plastico-cimbraplay",
    title: "Triplay plástico Cimbraplay",
    description:
      "Panel plástico tipo triplay para usos de construcción, cimbra y superficies reutilizables.",
    overview:
      "Solución diseñada para obra y aplicaciones donde se requiere un panel resistente, lavable y con posibilidad de reutilización mayor que alternativas convencionales.",
    highlights: [
      "Alternativa plástica para usos de cimbra.",
      "Superficie lavable y reutilizable.",
      "Resistente a humedad de obra.",
      "Reduce dependencia de madera convencional."
    ],
    applications: ["Cimbra", "Construcción", "Superficies temporales", "Obra civil", "Paneles de trabajo"],
    specifications: [
      { label: "Material", value: "Panel plástico reutilizable" },
      { label: "Uso recomendado", value: "Cimbra y aplicaciones de construcción" },
      { label: "Reutilización", value: "Depende del cuidado, fijación y limpieza en obra" },
      { label: "Formato", value: "Medidas por confirmar según inventario" },
      { label: "Ficha técnica", value: "Solicitar especificación antes de cuantificar" }
    ],
    photos: constructionPhotos.slice(1).concat(constructionPhotos.slice(0, 1)),
    imageCaptions: [
      "Panel para obra",
      "Aplicación de construcción",
      "Superficie plástica reutilizable",
      "Material para cimbra",
      "Solución resistente a humedad"
    ]
  },
  {
    id: "topes-plastico",
    slug: "topes-reductores-plastico",
    title: "Topes y reductores de plástico",
    description:
      "Elementos viales de plástico para controlar velocidad, organizar tránsito y señalizar áreas de circulación.",
    overview:
      "Productos para estacionamientos, accesos, parques industriales y vialidades internas que requieren instalación práctica y resistencia al uso cotidiano.",
    highlights: [
      "Fabricados para control vial y estacionamientos.",
      "Material plástico resistente y visible.",
      "Instalación modular según trazo del área.",
      "Opción para proyectos comerciales e industriales."
    ],
    applications: ["Estacionamientos", "Accesos", "Parques industriales", "Bodegas", "Vialidad interna"],
    specifications: [
      { label: "Material", value: "Plástico de alta resistencia según modelo" },
      { label: "Uso recomendado", value: "Control de velocidad y delimitación vehicular" },
      { label: "Fijación", value: "Anclaje mecánico sobre superficie preparada" },
      { label: "Color", value: "Sujeto a inventario y señalización requerida" },
      { label: "Ficha técnica", value: "Solicitar medidas, carga y accesorios" }
    ],
    photos: roadwayPhotos,
    imageCaptions: [
      "Control vehicular en estacionamiento",
      "Reductor modular",
      "Elemento vial plástico",
      "Señalización en acceso",
      "Aplicación comercial"
    ]
  },
  {
    id: "topes-hule",
    slug: "topes-reductores-hule",
    title: "Topes y reductores de hule",
    description:
      "Reductores de velocidad de hule para estacionamientos y vialidades internas de uso constante.",
    overview:
      "Opción vial resistente para áreas donde se busca modularidad, absorción y buena visibilidad en control de flujo vehicular.",
    highlights: [
      "Hule resistente para uso vehicular.",
      "Instalación modular.",
      "Buena visibilidad con accesorios reflectivos según modelo.",
      "Útil en estacionamientos, rampas y accesos."
    ],
    applications: ["Estacionamientos", "Rampas", "Accesos", "Naves industriales", "Vialidades privadas"],
    specifications: [
      { label: "Material", value: "Hule de alta resistencia según modelo" },
      { label: "Uso recomendado", value: "Reducción de velocidad vehicular" },
      { label: "Fijación", value: "Anclaje mecánico con herraje compatible" },
      { label: "Visibilidad", value: "Franjas o reflejantes según disponibilidad" },
      { label: "Ficha técnica", value: "Solicitar dimensiones y carga recomendada" }
    ],
    photos: roadwayPhotos.slice(1).concat(roadwayPhotos.slice(0, 1)),
    imageCaptions: [
      "Reductor de hule",
      "Elemento vial de alto tránsito",
      "Acceso vehicular controlado",
      "Instalación modular",
      "Solución para estacionamiento"
    ]
  },
  {
    id: "corral",
    slug: "corral-plastico",
    title: "Corral de plástico",
    description:
      "Sistemas plásticos para corrales y divisiones con resistencia a humedad, limpieza sencilla y larga vida útil.",
    overview:
      "Una alternativa a madera para espacios de manejo, división o confinamiento donde se requiere material resistente, lavable y apto para exposición ambiental.",
    highlights: [
      "Resistente a humedad y limpieza constante.",
      "No se pudre como madera tradicional.",
      "Aprovecha material plástico de larga duración.",
      "Adaptable a medidas y necesidades del proyecto."
    ],
    applications: ["Corrales", "Divisiones", "Áreas rurales", "Jardines", "Equipamiento exterior"],
    specifications: [
      { label: "Material", value: "Plástico reciclado o perfil plástico según sistema" },
      { label: "Uso recomendado", value: "Divisiones y cerramientos no habitacionales" },
      { label: "Instalación", value: "Con postes, bastidor o fijación según proyecto" },
      { label: "Mantenimiento", value: "Lavado y revisión de fijaciones" },
      { label: "Ficha técnica", value: "Solicitar configuración recomendada" }
    ],
    photos: constructionPhotos.slice(2).concat(constructionPhotos.slice(0, 2)),
    imageCaptions: [
      "Perfil plástico para división",
      "Cerramiento exterior",
      "Material resistente a humedad",
      "Aplicación rural o jardín",
      "Sistema modular de plástico"
    ]
  },
  {
    id: "lambrin-acustico",
    slug: "lambrin-acustico",
    title: "Lambrín acústico",
    description:
      "Paneles decorativos acústicos para mejorar la percepción sonora y la estética de muros interiores.",
    overview:
      "Solución para oficinas, salas, estudios, restaurantes y espacios residenciales donde se busca controlar reverberación mientras se suma textura arquitectónica.",
    highlights: [
      "Aporta textura y calidez visual.",
      "Ayuda a mejorar confort acústico en interiores.",
      "Instalación modular en muros seleccionados.",
      "Ideal para oficinas, salas y espacios comerciales."
    ],
    applications: ["Oficinas", "Salas", "Restaurantes", "Estudios", "Muros decorativos"],
    specifications: [
      { label: "Material", value: "Panel decorativo acústico según modelo" },
      { label: "Uso recomendado", value: "Interior" },
      { label: "Instalación", value: "Fijación sobre muro limpio y nivelado" },
      { label: "Acabado", value: "Tonos y listones sujetos a inventario" },
      { label: "Ficha técnica", value: "Solicitar absorción y medidas disponibles" }
    ],
    photos: interiorPhotos.slice(3).concat(interiorPhotos.slice(0, 3)),
    imageCaptions: [
      "Muro acústico con listones",
      "Panel decorativo interior",
      "Textura cálida en sala",
      "Acento acústico para oficina",
      "Recubrimiento de confort interior"
    ]
  },
  {
    id: "placa-pvc",
    slug: "placa-pvc-muros",
    title: "Placa PVC para muros",
    description:
      "Placas de PVC para cubrir muros con acabado limpio, lavable y de mantenimiento sencillo.",
    overview:
      "Opción para revestir muros en espacios que necesitan superficies higiénicas, ligeras y fáciles de limpiar, con instalación eficiente.",
    highlights: [
      "Superficie lavable.",
      "Ligera y práctica para remodelación.",
      "Buena opción para áreas interiores de uso frecuente.",
      "Acabados sujetos a disponibilidad por proyecto."
    ],
    applications: ["Muros interiores", "Áreas de servicio", "Locales", "Oficinas", "Remodelación"],
    specifications: [
      { label: "Material", value: "Placa de PVC para revestimiento" },
      { label: "Uso recomendado", value: "Interior o áreas protegidas" },
      { label: "Instalación", value: "Adhesivo, fijación o sistema recomendado por superficie" },
      { label: "Limpieza", value: "Paño húmedo y limpiador no abrasivo" },
      { label: "Ficha técnica", value: "Solicitar medidas y espesores vigentes" }
    ],
    photos: interiorPhotos.slice(4).concat(interiorPhotos.slice(0, 4)),
    imageCaptions: [
      "Placa PVC en muro",
      "Superficie interior lavable",
      "Acabado limpio para local",
      "Revestimiento ligero",
      "Detalle para remodelación"
    ]
  },
  {
    id: "piso-spc",
    slug: "piso-spc",
    title: "Piso SPC",
    description:
      "Piso rígido SPC para interiores con apariencia de madera o piedra, instalación práctica y fácil limpieza.",
    overview:
      "Piso de núcleo rígido para proyectos residenciales y comerciales que requieren buena apariencia, estabilidad y mantenimiento sencillo en espacios interiores.",
    highlights: [
      "Núcleo rígido para estabilidad.",
      "Apariencia decorativa tipo madera o piedra.",
      "Instalación flotante según modelo.",
      "Fácil limpieza para uso residencial o comercial ligero."
    ],
    applications: ["Interiores", "Residencial", "Oficinas", "Locales", "Remodelaciones"],
    specifications: [
      { label: "Material", value: "Piso SPC de núcleo rígido" },
      { label: "Uso recomendado", value: "Interior residencial y comercial ligero" },
      { label: "Instalación", value: "Sistema click o recomendado por modelo" },
      { label: "Cuidado", value: "Limpieza con trapeador húmedo y productos no abrasivos" },
      { label: "Ficha técnica", value: "Solicitar espesores, capa de uso y colores" }
    ],
    photos: interiorPhotos.slice(5).concat(interiorPhotos.slice(0, 5)),
    imageCaptions: [
      "Piso interior tipo madera",
      "Acabado SPC para sala",
      "Superficie rígida de fácil limpieza",
      "Remodelación de interior",
      "Piso decorativo residencial"
    ]
  }
];

export const productCategories: ProductCategory[] = seeds.map((seed) => {
  const { photos, imageCaptions, ...category } = seed;

  return {
    ...category,
    detailHref: `/productos/${category.slug}`,
    ...buildImages(category.slug, category.title, photos, imageCaptions)
  };
});

export function getProductBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
