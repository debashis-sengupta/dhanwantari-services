export type InsuranceCategory = "health" | "motor";

export interface InsuranceProduct {
  /** URL slug, e.g. "health-shield-plus" */
  slug: string;
  /** Display name */
  title: string;
  category: InsuranceCategory;
  /** Short one-line summary for cards */
  summary: string;
  /** Starting / indicative premium, free text e.g. "₹450/month" */
  price?: string;
  /** e.g. "₹5 Lakh", "₹10 Lakh" */
  cover?: string;
  /** Insurer / underwriter name */
  provider?: string;
  /** Feature bullet points shown on cards and detail page */
  features: string[];
  /** Optional tags used for "most discussed" and filtering */
  tags: string[];
  /** ISO date the product was introduced */
  introducedAt?: string;
  /** Mark true for the "Newly introduced" section */
  isNew?: boolean;
  /** Manually curated ranking for "Most purchased" (1 = top) */
  purchaseRank?: number;
  /** Manually curated ranking for "Most discussed" (1 = top) */
  discussionRank?: number;
  /** Optional path in /public for a product image */
  image?: string;
  /** Rendered HTML body from Markdown */
  contentHtml: string;
}
