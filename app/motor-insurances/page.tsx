import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { getInsurancesByCategory } from "@/lib/insurances";

export const metadata: Metadata = {
  title: "Motor Insurance Plans",
  description:
    "Compare motor insurance plans — car, two-wheeler, comprehensive and third-party covers.",
};

export default function MotorInsurancesPage() {
  const products = getInsurancesByCategory("motor");

  return (
    <>
      <section className="bg-gradient-to-br from-slate-800 to-teal-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Motor Insurance
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Protect your car &amp; two-wheeler
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Comprehensive and third-party covers with add-ons like zero
            depreciation, roadside assistance and engine protection.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ProductGrid
          products={products}
          emptyMessage="Motor insurance plans will appear here once added."
        />
      </section>
    </>
  );
}
