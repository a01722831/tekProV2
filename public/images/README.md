# Image organization

Files inside `public` are served from the site root, so a file stored at
`public/images/branding/logo.svg` is referenced in code as
`/images/branding/logo.svg`.

## Folders

- `branding/`: official company logos and brand artwork.
- `site/`: general images that are not tied to one product category.
  - `hero/`: homepage hero backgrounds or supporting artwork.
  - `about/`: company, team, showroom, or project images.
  - `misc/`: other shared site imagery.
- `products/<category-slug>/`: real images for that product category.
- `products/<category-slug>/placeholders/`: generated temporary artwork used
  while real product photography is unavailable.

Keep product folder names aligned with the slugs in `data/products.ts`. Use
lowercase, hyphenated filenames where practical. Product image paths are also
configured in `data/product-images.ts`; adding a file alone does not yet add it
to a gallery. Within each category manifest, the first image becomes the detail
hero and social-sharing image, the first five appear in the homepage carousel,
and the full list appears in the gallery.

Run `npm run generate:placeholders` if the temporary SVGs need to be rebuilt.
