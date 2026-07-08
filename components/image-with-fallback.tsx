"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const currentSrc =
    failedSrc === src && fallbackSrc && fallbackSrc !== src ? fallbackSrc : src;

  const shouldBypassOptimizer =
    currentSrc.startsWith("https://images.unsplash.com") ||
    currentSrc.endsWith(".svg");

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      unoptimized={props.unoptimized ?? shouldBypassOptimizer}
      onError={() => setFailedSrc(src)}
    />
  );
}
