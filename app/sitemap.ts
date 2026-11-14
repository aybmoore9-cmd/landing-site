import type { MetadataRoute } from "next";
import { TOWNS } from "@/lib/towns";

const SITE = "https://landing-site-nine-sable.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    ...TOWNS.map((t) => ({ url: `${SITE}/christmas-lights/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
