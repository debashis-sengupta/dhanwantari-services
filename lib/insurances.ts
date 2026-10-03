import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { InsuranceCategory, InsuranceProduct } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "insurances");

function slugFromFilename(file: string) {
  return file.replace(/\.md$/, "");
}

function toArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) {
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function readProduct(file: string): InsuranceProduct {
  const fullPath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const category = (data.category as InsuranceCategory) ?? "health";

  return {
    slug: (data.slug as string) || slugFromFilename(file),
    title: (data.title as string) || slugFromFilename(file),
    category,
    summary: (data.summary as string) || "",
    price: data.price ? String(data.price) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    provider: data.provider ? String(data.provider) : undefined,
    features: toArray(data.features),
    tags: toArray(data.tags),
    introducedAt: data.introducedAt ? String(data.introducedAt) : undefined,
    isNew: Boolean(data.isNew),
    purchaseRank:
      typeof data.purchaseRank === "number" ? data.purchaseRank : undefined,
    discussionRank:
      typeof data.discussionRank === "number"
        ? data.discussionRank
        : undefined,
    image: data.image ? String(data.image) : undefined,
    contentHtml: marked.parse(content, { async: false }) as string,
  };
}

/** All products, sorted newest-first by introducedAt. */
export function getAllInsurances(): InsuranceProduct[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const products = files.map(readProduct);

  return products.sort((a, b) => {
    const da = a.introducedAt ? Date.parse(a.introducedAt) : 0;
    const db = b.introducedAt ? Date.parse(b.introducedAt) : 0;
    return db - da;
  });
}

export function getInsurancesByCategory(
  category: InsuranceCategory,
): InsuranceProduct[] {
  return getAllInsurances().filter((p) => p.category === category);
}

export function getInsuranceBySlug(
  slug: string,
): InsuranceProduct | undefined {
  return getAllInsurances().find((p) => p.slug === slug);
}

export function getNewlyIntroduced(limit = 3): InsuranceProduct[] {
  return getAllInsurances()
    .filter((p) => p.isNew)
    .slice(0, limit);
}

export function getMostPurchased(limit = 3): InsuranceProduct[] {
  return getAllInsurances()
    .filter((p) => typeof p.purchaseRank === "number")
    .sort((a, b) => (a.purchaseRank ?? 999) - (b.purchaseRank ?? 999))
    .slice(0, limit);
}

export function getMostDiscussed(limit = 3): InsuranceProduct[] {
  return getAllInsurances()
    .filter((p) => typeof p.discussionRank === "number")
    .sort((a, b) => (a.discussionRank ?? 999) - (b.discussionRank ?? 999))
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return getAllInsurances().map((p) => p.slug);
}
