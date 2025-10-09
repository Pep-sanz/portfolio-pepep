// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo.config";

// TODO: ganti data ini dari DB Supabase jika perlu (projects, dll)
const staticRoutes = ["", "/about", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return staticRoutes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
