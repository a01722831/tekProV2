"use client";

import { useState } from "react";
import { Grid3X3, Leaf } from "lucide-react";
import {
  productCategories,
  type ProductCategory,
  type ProductImage
} from "@/data/products";
import { GalleryModal } from "@/components/gallery-modal";
import { ProductCategoryCard } from "@/components/product-category-card";

export function ProductCatalog() {
  const [gallery, setGallery] = useState<{
    title: string;
    images: ProductImage[];
  } | null>(null);

  const openGallery = (category: ProductCategory) => {
    setGallery({
      title: category.title,
      images: category.galleryImages
    });
  };

  return (
    <section className="page-section products-section" id="productos">
      <div className="section-container">
        <div className="section-heading-row section-heading-row-stacked">
          <div>
            <span className="section-kicker">
              <Grid3X3 size={18} aria-hidden="true" />
              Catálogo
            </span>
            <h2>Productos ecológicos para obra, exterior e interiores.</h2>
          </div>
          <p>
            Cada categoría tiene una ficha de detalle con beneficios,
            aplicaciones, especificaciones iniciales y galería ampliada.
          </p>
        </div>

        <div className="catalog-grid">
          {productCategories.map((category) => (
            <ProductCategoryCard
              category={category}
              key={category.slug}
              onOpenGallery={() => openGallery(category)}
            />
          ))}
        </div>

        <div className="catalog-note">
          <Leaf size={18} aria-hidden="true" />
          <span>
            Las imágenes actuales son referenciales y están listas para
            sustituirse por fotografías reales del catálogo.
          </span>
        </div>
      </div>

      <GalleryModal
        isOpen={Boolean(gallery)}
        title={gallery?.title ?? "Galería"}
        images={gallery?.images ?? []}
        onClose={() => setGallery(null)}
      />
    </section>
  );
}
