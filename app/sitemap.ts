import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://techgeniushaiti.com",
      lastModified: new Date(),
    },
  ];
}