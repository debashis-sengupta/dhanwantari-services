import Image from "next/image";
import Link from "next/link";
import type { InsuranceProduct } from "@/lib/types";

const categoryLabel: Record<string, string> = {
  health: "Health",
  motor: "Motor",
};

export default function InsuranceCard({
  product,
  badge,
}: {
  product: InsuranceProduct;
  badge?: string;
}) {
  return (
    <Link
      href={`/insurances/${product.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          {categoryLabel[product.category] ?? product.category}
        </span>
        {badge ? (
          <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            {badge}
          </span>
        ) : null}
      </div>

      {product.image ? (
        <div className="relative mt-4 h-36 w-full overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-teal-700">
        {product.title}
      </h3>
      {product.provider ? (
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {product.provider}
        </p>
      ) : null}
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
        {product.summary}
      </p>

      <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-sm">
        {product.cover ? (
          <div>
            <dt className="text-xs text-slate-400">Cover</dt>
            <dd className="font-semibold text-slate-800">{product.cover}</dd>
          </div>
        ) : null}
        {product.price ? (
          <div>
            <dt className="text-xs text-slate-400">From</dt>
            <dd className="font-semibold text-slate-800">{product.price}</dd>
          </div>
        ) : null}
      </dl>

      <span className="mt-4 inline-flex items-center text-sm font-semibold text-teal-700">
        View details
        <span className="ml-1 transition group-hover:translate-x-1">&rarr;</span>
      </span>
    </Link>
  );
}
