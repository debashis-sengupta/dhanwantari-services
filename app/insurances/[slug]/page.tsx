import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsuranceBySlug, getAllSlugs } from "@/lib/insurances";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getInsuranceBySlug(slug);
  if (!product) return { title: "Insurance not found" };
  return {
    title: product.title,
    description: product.summary,
  };
}

export default async function InsuranceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getInsuranceBySlug(slug);
  if (!product) notFound();

  const categoryHref =
    product.category === "health" ? "/health-insurances" : "/motor-insurances";
  const categoryLabel =
    product.category === "health" ? "Health Insurance" : "Motor Insurance";

  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-teal-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-white">
              {categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-white">{product.title}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {product.title}
          </h1>
          {product.provider ? (
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-teal-200">
              {product.provider}
            </p>
          ) : null}
          <p className="mt-4 max-w-3xl text-lg text-slate-200">
            {product.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-100 ring-1 ring-inset ring-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-teal-700"
              dangerouslySetInnerHTML={{ __html: product.contentHtml }}
            />
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Plan snapshot
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                {product.cover ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Sum insured</dt>
                    <dd className="font-semibold text-slate-900">
                      {product.cover}
                    </dd>
                  </div>
                ) : null}
                {product.price ? (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Starting premium</dt>
                    <dd className="font-semibold text-slate-900">
                      {product.price}
                    </dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Category</dt>
                  <dd className="font-semibold text-slate-900">
                    {categoryLabel}
                  </dd>
                </div>
              </dl>

              {product.features.length > 0 ? (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Key features
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {product.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-0.5 text-teal-600">&#10003;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <Link
                href={`/contact?plan=${encodeURIComponent(product.title)}&category=${product.category}`}
                className="mt-6 block rounded-lg bg-teal-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Enquire about this plan
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                  `Hi, I'd like to know more about ${product.title}.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
