# Branding images

Place the official Tek Products Monterrey logo in this folder. A clear filename
such as `tek-products-monterrey-logo.svg` or
`tek-products-monterrey-logo.webp` is recommended.

The homepage currently contains an empty logo slot with the same footprint as
the temporary text lockup it replaced. Once the logo file is available, it can
be rendered inside `components/hero.tsx` without changing the surrounding hero
layout. The slot already scales an inserted image with `object-fit: contain`, so
the logo keeps its aspect ratio.
