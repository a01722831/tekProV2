import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = join(process.cwd(), "public", "images", "products");

const categories = [
  ["decks-pergolados-fachadas-plafones", "Decks y fachadas", "planks"],
  ["tabla-wpc-lambrin", "Tabla WPC lambrín", "verticals"],
  ["pasto-sintetico", "Pasto sintético", "grass"],
  ["muros-verdes", "Muros verdes", "leaves"],
  ["lambrin-pvc", "Lambrín PVC", "panels"],
  ["tabla-pvc-plafones-muros", "Tabla PVC", "panels"],
  ["plastimadera", "Plastimadera", "planks"],
  ["plastiteja", "Plastiteja", "roof"],
  ["triplay-plastico-cimbraplay", "Cimbraplay", "sheet"],
  ["topes-reductores-plastico", "Topes plástico", "road"],
  ["topes-reductores-hule", "Topes hule", "road"],
  ["corral-plastico", "Corral plástico", "fence"],
  ["lambrin-acustico", "Lambrín acústico", "slats"],
  ["placa-pvc-muros", "Placa PVC", "sheet"],
  ["piso-spc", "Piso SPC", "floor"]
];

const palettes = [
  ["#166534", "#22c55e", "#dcfce7", "#f8fafc"],
  ["#14532d", "#16a34a", "#bbf7d0", "#f1f5f9"],
  ["#0f766e", "#34d399", "#ccfbf1", "#f8fafc"],
  ["#365314", "#84cc16", "#ecfccb", "#f7fee7"],
  ["#334155", "#22c55e", "#e2e8f0", "#ffffff"]
];

function escapeText(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function pattern(kind, accent, dark, light, index) {
  const offset = index * 18;

  if (kind === "grass" || kind === "leaves") {
    return Array.from({ length: 22 }, (_, item) => {
      const x = 38 + item * 54;
      const y = 210 + ((item * 37 + offset) % 250);
      const rotate = -28 + ((item * 11 + offset) % 56);
      const rx = kind === "leaves" ? 30 : 10;
      const ry = kind === "leaves" ? 58 : 112;
      return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${item % 3 === 0 ? accent : dark}" opacity="${item % 4 === 0 ? 0.78 : 0.92}" transform="rotate(${rotate} ${x} ${y})" />`;
    }).join("");
  }

  if (kind === "road") {
    return `
      <path d="M-40 560 L450 80 L650 80 L250 560 Z" fill="#1f2937" opacity="0.88" />
      <path d="M112 520 L505 116" stroke="${light}" stroke-width="20" stroke-dasharray="54 38" opacity="0.86" />
      <rect x="650" y="105" width="330" height="82" rx="8" fill="${accent}" opacity="0.9" transform="rotate(-12 650 105)" />
      <rect x="720" y="256" width="330" height="82" rx="8" fill="#facc15" opacity="0.88" transform="rotate(-12 720 256)" />
    `;
  }

  if (kind === "roof") {
    return Array.from({ length: 8 }, (_, row) =>
      Array.from({ length: 9 }, (_, col) => {
        const x = -80 + col * 155 + (row % 2) * 70;
        const y = 72 + row * 70;
        return `<path d="M${x} ${y + 56} Q${x + 76} ${y - 16} ${x + 152} ${y + 56} L${x + 132} ${y + 92} Q${x + 76} ${y + 38} ${x + 20} ${y + 92} Z" fill="${row % 2 ? accent : dark}" opacity="${0.56 + (col % 3) * 0.1}" />`;
      }).join("")
    ).join("");
  }

  if (kind === "fence") {
    return Array.from({ length: 9 }, (_, item) => {
      const x = 80 + item * 110;
      return `<rect x="${x}" y="120" width="58" height="360" rx="10" fill="${item % 2 ? accent : dark}" opacity="0.88" />
        <rect x="40" y="${210 + item * 2}" width="960" height="44" rx="8" fill="${light}" opacity="0.76" />
        <rect x="20" y="${370 - item * 2}" width="980" height="44" rx="8" fill="${light}" opacity="0.62" />`;
    }).join("");
  }

  const vertical = kind === "verticals" || kind === "slats" || kind === "panels";
  const count = vertical ? 13 : 10;
  return Array.from({ length: count }, (_, item) => {
    const size = vertical ? 72 : 122;
    const x = vertical ? 40 + item * 78 : -60 + item * 140;
    const y = vertical ? 72 : 118 + (item % 3) * 98;
    const transform = vertical ? "" : `transform="rotate(${-8 + (item % 4) * 5} ${x} ${y})"`;
    return `<rect x="${x}" y="${y}" width="${vertical ? 56 : 128}" height="${vertical ? 430 : 72}" rx="10" fill="${item % 2 ? accent : dark}" opacity="${0.58 + (item % 4) * 0.08}" ${transform} />`;
  }).join("");
}

function makeSvg(slug, label, kind, index) {
  const [dark, accent, soft, paper] = palettes[(index + slug.length) % palettes.length];
  const title = escapeText(label);
  const subtitle = escapeText(`Imagen referencial ${index}`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="860" viewBox="0 0 1200 860" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">Placeholder visual para ${title}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${paper}" />
      <stop offset="0.48" stop-color="${soft}" />
      <stop offset="1" stop-color="#ffffff" />
    </linearGradient>
  </defs>
  <rect width="1200" height="860" fill="url(#bg)" />
  <circle cx="1010" cy="130" r="150" fill="${accent}" opacity="0.14" />
  <circle cx="170" cy="730" r="220" fill="${dark}" opacity="0.08" />
  <g>
    <rect x="72" y="82" width="1056" height="624" rx="28" fill="#ffffff" opacity="0.86" />
    <g clip-path="inset(94 84 166 84 round 22)">
      ${pattern(kind, accent, dark, soft, index)}
      <rect x="84" y="94" width="1032" height="500" fill="none" stroke="${accent}" stroke-width="7" opacity="0.55" />
    </g>
  </g>
  <g>
    <rect x="92" y="630" width="520" height="88" rx="44" fill="${dark}" opacity="0.92" />
    <text x="132" y="684" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800">${title}</text>
    <text x="132" y="724" fill="${soft}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700">${subtitle}</text>
  </g>
  <g transform="translate(990 650)">
    <circle cx="0" cy="0" r="54" fill="${accent}" />
    <path d="M-22 2 C-5 -38 34 -30 24 4 C18 26 -3 34 -24 23" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
  </g>
</svg>`;
}

await mkdir(outputDir, { recursive: true });

for (const [slug, label, kind] of categories) {
  const categoryOutputDir = join(outputDir, slug, "placeholders");
  await mkdir(categoryOutputDir, { recursive: true });

  for (let index = 1; index <= 5; index += 1) {
    await writeFile(
      join(categoryOutputDir, `${String(index).padStart(2, "0")}.svg`),
      makeSvg(slug, label, kind, index),
      "utf8"
    );
  }
}
