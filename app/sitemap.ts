import type { MetadataRoute } from "next";
const routes = ["", "/services", "/work", "/about", "/blog", "/careers", "/contact"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: `https://pykupz.in${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .7 })); }


