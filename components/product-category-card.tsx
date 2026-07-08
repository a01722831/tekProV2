"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import type { ProductCategory } from "@/data/products";

type ProductCategoryCardProps = {
  category: ProductCategory;
  onOpenGallery: () => void;
};

export function ProductCategoryCard({
  category,
  onOpenGallery
}: ProductCategoryCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const previewImages = category.previewImages.slice(0, 5);

  useEffect(() => {
    if (isPaused || previewImages.length < 2) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewImages.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused, previewImages.length, activeIndex]);

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + previewImages.length) % previewImages.length
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % previewImages.length);
  };

  const activeImage = previewImages[activeIndex];

  return (
    <article
      className="product-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="product-carousel">
        <ImageWithFallback
          src={activeImage.src}
          fallbackSrc={activeImage.fallbackSrc}
          alt={activeImage.alt}
          fill
          sizes="(max-width: 720px) 92vw, (max-width: 1200px) 45vw, 360px"
        />
        <div className="carousel-gradient" />
        <div className="carousel-controls">
          <button
            className="icon-button translucent"
            type="button"
            aria-label={`Ver imagen anterior de ${category.title}`}
            onClick={goToPrevious}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            className="icon-button translucent"
            type="button"
            aria-label={`Ver imagen siguiente de ${category.title}`}
            onClick={goToNext}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="carousel-dots" aria-hidden="true">
          {previewImages.map((image, index) => (
            <span
              className={index === activeIndex ? "is-active" : ""}
              key={`${image.src}-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="product-card-body">
        <div className="product-card-title-row">
          <h3>{category.title}</h3>
          <Sparkles size={20} aria-hidden="true" />
        </div>
        <p>{category.description}</p>
        <ul className="application-list" aria-label={`Aplicaciones de ${category.title}`}>
          {category.applications.slice(0, 4).map((application) => (
            <li key={application}>{application}</li>
          ))}
        </ul>
        <div className="product-card-actions">
          <Link className="button button-small button-primary" href={category.detailHref}>
            Más información
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="button button-small button-gallery"
            type="button"
            onClick={onOpenGallery}
          >
            <Images size={17} aria-hidden="true" />
            Ver galería
          </button>
        </div>
      </div>
    </article>
  );
}
