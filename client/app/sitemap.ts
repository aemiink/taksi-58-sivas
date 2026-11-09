import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { servicePages } from "@/lib/services-data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
