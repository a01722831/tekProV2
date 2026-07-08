import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FloatingContactActions } from "@/components/floating-contact-actions";
import { ProductDetailTemplate } from "@/components/product-detail-template";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProductBySlug, productCategories } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductBySlug(slug);

  if (!category) {
    return {
      title: "Producto no encontrado | Tek Products Monterrey"
    };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: category.detailHref
    },
    openGraph: {
      title: `${category.title} | Tek Products Monterrey`,
      description: category.description,
      images: [
        {
          url: category.previewImages[0]?.src ?? "",
          alt: category.previewImages[0]?.alt ?? category.title
        }
      ]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const category = getProductBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <ProductDetailTemplate category={category} />
      </main>
      <FloatingContactActions />
      <SiteFooter />
    </>
  );
}
