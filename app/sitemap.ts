import type { MetadataRoute } from "next";

const SITE_URL = "https://saas-landing-page-olive-iota.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
