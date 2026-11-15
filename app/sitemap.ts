

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.techgeniushaiti.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/reparation-ordinateur",
    "/reparation-iphone",
    "/software-installation",
    "/business-solutions",
    "/marketing",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
  }));
}
