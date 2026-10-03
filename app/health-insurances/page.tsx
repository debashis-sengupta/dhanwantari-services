import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { getInsurancesByCategory } from "@/lib/insurances";

export const metadata: Metadata = {
  title: "Health Insurance Plans",
  description:
    "Compare health insurance plans — individual, family floater and senior citizen covers.",
};

export default function HealthInsurancesPage() {
  const products = getInsurancesByCategory("health");

  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Health Insurance
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Cover for you and your family
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Hospitalisation, surgery, day-care and more — choose a health plan
            that fits your family&apos;s needs and budget.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ProductGrid
          products={products}
          emptyMessage="Health insurance plans will appear here once added."
        />
      </section>
    </>
  );
}
