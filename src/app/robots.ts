import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/private/"], // Shield sensitive routes
    },
    sitemap: "https://yourdomain.com/sitemap.xml",
  };
}