import { profile } from "@/data/profile";

/** Site URL without a trailing slash, used for canonical URLs and sitemap entries. */
export const siteUrl = (profile.siteUrl.trim() || "http://localhost:3000").replace(/\/+$/, "");

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}
