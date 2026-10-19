import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["", "/work", "/projects"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
