import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/thank-you" },
    sitemap: "https://landing-site-nine-sable.vercel.app/sitemap.xml",
  };
}
