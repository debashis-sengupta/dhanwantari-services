import type { InsuranceProduct } from "@/lib/types";
import InsuranceCard from "./InsuranceCard";

export default function ProductGrid({
  products,
  badgeMap,
  emptyMessage = "No insurance products published yet. Please check back soon.",
}: {
  products: InsuranceProduct[];
  badgeMap?: Record<string, string>;
  emptyMessage?: string;
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <InsuranceCard
          key={product.slug}
          product={product}
          badge={badgeMap?.[product.slug]}
        />
      ))}
    </div>
  );
}
