"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Images,
  MessageCircle,
  Ruler,
  TableProperties
} from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { contact } from "@/data/site";
import type { ProductCategory, ProductImage } from "@/data/products";
import { GalleryModal } from "@/components/gallery-modal";

type ProductDetailTemplateProps = {
  category: ProductCategory;
};

export function ProductDetailTemplate({ category }: ProductDetailTemplateProps) {
  const [gallery, setGallery] = useState<ProductImage[] | null>(null);
  const heroImage = category.galleryImages[0];

  return (
    <article className="product-detail-page">
      <section className="product-detail-hero">
        <ImageWithFallback
          src={heroImage.src}
          fallbackSrc={heroImage.fallbackSrc}
          alt={heroImage.alt}
          fill
          loading="eager"
          priority
          sizes="100vw"
        />
        <div className="detail-hero-overlay" />
        <div className="section-container detail-hero-content">
          <Link className="button button-secondary back-link" href="/#productos">
            <ArrowLeft size={18} aria-hidden="true" />
            Volver al catálogo
          </Link>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
          <div className="detail-hero-actions">
            <a className="button button-primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Solicitar cotización
            </a>
            {category.fichaTecnicaHref ? (
              <a className="button button-secondary" href={category.fichaTecnicaHref}>
                <Download size={20} aria-hidden="true" />
                Descargar ficha técnica
              </a>
            ) : (
              <a className="button button-secondary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
                <Download size={20} aria-hidden="true" />
                Solicitar ficha técnica
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="page-section detail-section">
        <div className="section-container detail-grid">
          <div>
            <span className="section-kicker">
              <Ruler size={18} aria-hidden="true" />
              Ficha del producto
            </span>
            <h2>Descripción y aplicaciones</h2>
            <p className="section-intro">{category.overview}</p>

            <div className="detail-list-grid">
              <div>
                <h3>Beneficios</h3>
                <ul className="check-list">
                  {category.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Aplicaciones</h3>
                <ul className="application-list detail">
                  {category.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="spec-card">
            <div className="spec-card-heading">
              <TableProperties size={22} aria-hidden="true" />
              <h2>Especificaciones iniciales</h2>
            </div>
            <dl>
              {category.specifications.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="page-section detail-gallery-section">
        <div className="section-container">
          <div className="section-heading-row compact">
            <div>
              <span className="section-kicker">
                <Images size={18} aria-hidden="true" />
                Galería
              </span>
              <h2>Referencias visuales</h2>
            </div>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => setGallery(category.galleryImages)}
            >
              <Images size={18} aria-hidden="true" />
              Ver galería completa
            </button>
          </div>

          <div className="detail-gallery-grid">
            {category.galleryImages.map((image, index) => (
              <button
                className="detail-gallery-item"
                type="button"
                key={`${image.src}-${index}`}
                onClick={() => setGallery(category.galleryImages)}
                aria-label={`Abrir imagen ${index + 1} de ${category.title}`}
              >
                <ImageWithFallback
                  src={image.src}
                  fallbackSrc={image.fallbackSrc}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 720px) 45vw, (max-width: 1100px) 30vw, 240px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-cta-band">
        <div className="section-container detail-cta-content">
          <h2>¿Quieres confirmar medidas, colores o disponibilidad?</h2>
          <a className="button button-primary inverse" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <GalleryModal
        isOpen={Boolean(gallery)}
        title={category.title}
        images={gallery ?? []}
        onClose={() => setGallery(null)}
      />
    </article>
  );
}
