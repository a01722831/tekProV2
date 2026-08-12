export type ProductImageAsset = {
  filename: string;
  alt: string;
  caption: string;
};

const image = (filename: string, description: string): ProductImageAsset => ({
  filename,
  alt: description,
  caption: description
});

/**
 * Uploaded product photography, ordered intentionally.
 *
 * The first image is used for the product detail hero and Open Graph metadata.
 * The first five images are used by the homepage card carousel. Every image is
 * included in the product gallery. Filenames must match public/images exactly,
 * including capitalization, spaces, and extensions.
 */
export const productImageAssets: Readonly<
  Record<string, readonly ProductImageAsset[]>
> = {
  "decks-pergolados-fachadas-plafones": [
    image(
      "5.3-ALBERCA TECA1.jpeg",
      "Deck WPC color teca alrededor de una alberca residencial"
    ),
    image(
      "18.8-PERGOLADO VIGA 120H60.jpeg",
      "Pergolado WPC sobre una terraza con área de asador"
    ),
    image(
      "1.4.3-PLAFON GRIS-1.jpg",
      "Plafón WPC gris en una cocina exterior"
    ),
    image(
      "1.7-FACHADA.png",
      "Lambrín WPC vertical en una fachada residencial"
    ),
    image(
      "3.9-VIGAS TERRAZA TV.jpg",
      "Terraza equipada con vigas y plafón WPC"
    ),
    image(
      "2.0-TERRAZA VOLADA.jpg",
      "Deck WPC en una terraza con vista a Monterrey"
    ),
    image(
      "5.4-FACHADAS.jpg",
      "Aplicaciones WPC en fachadas y portones residenciales"
    ),
    image(
      "4.2-CIELO.png",
      "Plafón exterior con acabado de lambrín WPC"
    ),
    image(
      "22.16-PERGOLADOS.jpg",
      "Pergolados WPC con estructura metálica"
    ),
    image(
      "1.2-TERRAZA TECA  BAR CASINO.jpg",
      "Deck WPC color teca en una terraza social"
    ),
    image(
      "1.4.5-PLAFON TERRAZA NOGAL.jpg",
      "Plafón WPC color nogal en una terraza exterior"
    ),
    image(
      "2.11-PLAFON ABANICOS.png",
      "Plafón WPC con iluminación y ventiladores de techo"
    ),
    image(
      "2.16-PLAFON.png",
      "Plafón WPC color madera en una terraza contemporánea"
    ),
    image(
      "1.8-FACHADA.jpg",
      "Detalle de lambrín WPC en fachada residencial"
    ),
    image(
      "5.3.1-FACHADA EN GRIS.png",
      "Fachada y acceso revestidos con WPC gris"
    ),
    image(
      "7.13-PORTON.jpg",
      "Portón residencial con paneles de apariencia madera"
    ),
    image(
      "8-PUERTA-1.png",
      "Puerta revestida con lambrín WPC vertical"
    ),
    image(
      "5.5-PUERTA FACHADA TECA.jpg",
      "Puerta y fachada con acabado WPC color teca"
    ),
    image(
      "5.18-FACHADA CHURCHS.png",
      "Aplicación comercial de WPC en fachada"
    ),
    image(
      "1.9.1 GABINETES.jpg",
      "Gabinetes exteriores con paneles de apariencia madera"
    ),
    image(
      "9.5-TERRAZA TV.jpg",
      "Muro de televisión con lambrín WPC en terraza"
    ),
    image(
      "4.1 VIGAS EXTERIOR TECHO.jpeg",
      "Vigas WPC instaladas en el exterior de una residencia"
    ),
    image(
      "3.4-VIGAS EXT 2.jpeg",
      "Vigas WPC bajo cubierta exterior"
    ),
    image(
      "7.22-PORTON GRIS.jpg",
      "Portón residencial gris de diseño horizontal"
    ),
    image(
      "5.12-ALBERCA.jpg",
      "Deck WPC instalado junto a una alberca"
    ),
    image(
      "1.7-PORTICO.jpg",
      "Deck WPC en pórtico de acceso residencial"
    ),
    image(
      "10-LAMBRIN MAS FOLLAJE.png",
      "Lambrín WPC combinado con follaje decorativo"
    ),
    image(
      "3.5-INTERIOR BAR.jpg",
      "Barra en proceso de revestimiento con lambrín WPC"
    ),
    image(
      "18.6.1-PERGOLADO.jpg",
      "Pergolado WPC durante su instalación"
    ),
    image(
      "2.1.1-FACHADA.jpg",
      "Estructura WPC de fachada durante su instalación"
    ),
    image(
      "1.4.3-PLAFON GRIS.jpg",
      "Detalle de plafón WPC gris con ventilador"
    )
  ],
  "tabla-wpc-lambrin": [
    image(
      "3.11-LAMBRIN BARRA.jpg",
      "Barra exterior revestida con lambrín WPC"
    ),
    image(
      "1.7-FACHADA.png",
      "Lambrín WPC vertical en una fachada residencial"
    ),
    image(
      "1.6-FACHADA.jpg",
      "Fachada superior revestida con lambrín WPC"
    ),
    image(
      "4.2-CIELO.png",
      "Plafón exterior con acabado de lambrín WPC"
    ),
    image(
      "2.2-FOLLAJE Y LAMBRIN 2.jpeg",
      "Lambrín WPC y follaje en una terraza equipada"
    ),
    image(
      "3.6-INTERIOR BAR.jpg",
      "Detalle de barra revestida con lambrín WPC"
    ),
    image(
      "Captura de Pantalla 2026-04-24 a las 17.14.24.png",
      "Fachada residencial con panel de lambrín WPC"
    )
  ],
  "muros-verdes": [
    image(
      "2-MURO OFICINA.png",
      "Muro verde con acentos de lambrín WPC en patio residencial"
    ),
    image(
      "3-MURO TERRAZA.png",
      "Muro verde decorativo en una terraza"
    ),
    image(
      "8-MURO C LAMBRIN.jpg",
      "Muro verde modular con acentos verticales de lambrín"
    ),
    image(
      "6-FOLLAJE TERRAZA INTERIOR.png",
      "Diseño de follaje sintético y revestimiento WPC"
    ),
    image(
      "9-FOLLAJE CIELO .jpg",
      "Follaje sintético integrado en plafón de terraza"
    ),
    image(
      "5-TERRAZA TV.png",
      "Muro verde y lambrín en terraza con televisión"
    ),
    image(
      "4.1-FOLLAJE Y LAMBRIN.jpeg",
      "Follaje sintético combinado con lambrín en área de televisión"
    )
  ],
  "pasto-sintetico": [
    image(
      "12-PASTO LARRALDE.jpeg",
      "Pasto sintético en un patio con pérgola iluminada"
    ),
    image(
      "4.1- PASTO MARIO.jpg",
      "Pasto sintético en un jardín residencial"
    ),
    image(
      "5-JARDIN ALBERCA RIGO.jpg",
      "Pasto sintético junto a una alberca"
    ),
    image(
      "8-47a51d9-6ec3-49b8-ac6d-43c6be249a67.jpg",
      "Pasto sintético y deck alrededor de una alberca"
    ),
    image(
      "2-JARDINERA.png",
      "Pasto sintético en una jardinera elevada"
    ),
    image(
      "7-23c75e5-d487-438a-997c-28a14498c69f.jpg",
      "Pasto sintético en un patio con muro verde"
    ),
    image(
      "10-79447cc-a17e-4b57-8754-c2db9ca85e77.jpg",
      "Instalación de pasto sintético junto a una alberca"
    )
  ]
};
