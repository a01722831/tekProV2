import type { MetadataRoute } from "next";
import { productCategories } from "@/data/products";

const baseUrl = "https://tekproductsmonterrey.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1
    },
    ...productCategories.map((category) => ({
      url: `${baseUrl}${category.detailHref}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
