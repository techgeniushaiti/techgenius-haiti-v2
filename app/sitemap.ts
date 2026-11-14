
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techgeniushaiti.com";

  const pages = [
    "",
    "/about",
    "/reparation-ordinateur",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
  }));
}
