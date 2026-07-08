"use client";

import { useState } from "react";
import { CheckCircle2, Leaf, Recycle } from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { aboutCards, materialFeatures } from "@/data/site";
import { productCategories, type ProductImage } from "@/data/products";
import { GalleryModal } from "@/components/gallery-modal";

const aboutImages = productCategories[0].galleryImages.slice(0, 4);

export function AboutSection() {
  const [activeImages, setActiveImages] = useState<ProductImage[] | null>(null);

  return (
    <section className="page-section about-section" id="nosotros">
      <div className="section-container about-grid">
        <div>
          <span className="section-kicker">
            <Leaf size={18} aria-hidden="true" />
            Nosotros
          </span>
          <h2>Construcción más limpia, práctica y durable.</h2>
          <p className="section-intro">
            Trabajamos con materiales pensados para reducir mantenimiento,
            extender la vida útil de los espacios y transformar residuos en
            productos con valor real para la construcción.
          </p>

          <div className="about-card-stack">
            {aboutCards.map((card) => (
              <article className="about-card reveal-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-visual-column">
          <button
            className="about-collage"
            type="button"
            onClick={() => setActiveImages(aboutImages)}
            aria-label="Abrir galería de ejemplos Tek Products"
          >
            {aboutImages.map((image, index) => (
              <span className={`collage-item collage-item-${index + 1}`} key={image.src}>
                <ImageWithFallback
                  src={image.src}
                  fallbackSrc={image.fallbackSrc}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 45vw, 260px"
                />
              </span>
            ))}
          </button>

          <div className="feature-panel">
            <div className="feature-panel-heading">
              <Recycle size={22} aria-hidden="true" />
              <h3>Características de los materiales</h3>
            </div>
            <ul>
              {materialFeatures.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={Boolean(activeImages)}
        title="Ejemplos de aplicaciones"
        images={activeImages ?? []}
        onClose={() => setActiveImages(null)}
      />
    </section>
  );
}
