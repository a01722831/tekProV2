"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/components/image-with-fallback";
import type { ProductImage } from "@/data/products";

type GalleryModalProps = {
  isOpen: boolean;
  title: string;
  images: ProductImage[];
  onClose: () => void;
};

export function GalleryModal({ isOpen, title, images, onClose }: GalleryModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      className="gallery-modal"
      ref={dialogRef}
      aria-labelledby="gallery-modal-title"
      onClose={onClose}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="gallery-modal-inner">
        <div className="gallery-modal-header">
          <h2 id="gallery-modal-title">{title}</h2>
          <button
            className="icon-button"
            type="button"
            aria-label="Cerrar galería"
            onClick={onClose}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <figure className="gallery-tile" key={`${image.src}-${index}`}>
              <ImageWithFallback
                src={image.src}
                fallbackSrc={image.fallbackSrc}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 90vw, (max-width: 1100px) 44vw, 310px"
              />
              {image.caption ? <figcaption>{image.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </div>
    </dialog>
  );
}
