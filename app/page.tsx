import Link from "next/link";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";
import {
  getMostDiscussed,
  getMostPurchased,
  getNewlyIntroduced,
} from "@/lib/insurances";
import { siteConfig } from "@/lib/site-config";

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  href,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  href?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {href ? (
        <Link
          href={href}
          className="text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          View all &rarr;
        </Link>
      ) : null}
    </div>
  );
}

const whyChoose = [
  {
    title: "IRDAI Licensed",
    body: "Every recommendation comes from a registered insurance agent, and you deal with me directly.",
  },
  {
    title: "Unbiased Comparison",
    body: "I compare plans across multiple insurers so you pick what fits your needs and budget — not what pays the highest commission.",
  },
  {
    title: "Claim Support",
    body: "From documentation to follow-up with the insurer, I help you through the claims process.",
  },
  {
    title: "Lifetime Relationship",
    body: "Policies need renewals, reviews and updates. I stay with you long after the sale.",
  },
];

export default function HomePage() {
  const newlyIntroduced = getNewlyIntroduced(3);
  const mostPurchased = getMostPurchased(3);
  const mostDiscussed = getMostDiscussed(3);

  const purchasedBadges = Object.fromEntries(
    mostPurchased.map((p, i) => [p.slug, `#${i + 1} Purchased`]),
  );
  const discussedBadges = Object.fromEntries(
    mostDiscussed.map((p, i) => [p.slug, `#${i + 1} Discussed`]),
  );

  return (
    <>
      {/* Hero with tilted banner */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-200 ring-1 ring-inset ring-white/20">
              {siteConfig.role}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Protect what matters,{" "}
              <span className="text-teal-300">without the confusion.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
              Compare health and motor insurance plans from India&apos;s leading
              insurers, with honest, jargon-free guidance from a licensed
              advisor.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/health-insurances"
                className="rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-400"
              >
                Explore Health Plans
              </Link>
              <Link
                href="/motor-insurances"
                className="rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 transition hover:bg-white/20"
              >
                Explore Motor Plans
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="tilted-panel rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 p-3 shadow-2xl">
              <div className="tilted-photo relative h-72 w-64 overflow-hidden rounded-2xl bg-slate-200 sm:h-80 sm:w-72">
                <Image
                  src="/profile.svg"
                  alt={siteConfig.owner}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newly introduced */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Fresh on the shelf"
          title="Newly Introduced Insurance"
          subtitle="The latest plans added to my catalogue."
        />
        <div className="mt-8">
          <ProductGrid
            products={newlyIntroduced}
            emptyMessage="New plans will appear here as soon as they are added."
          />
        </div>
      </section>

      {/* Most purchased */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Customer favourites"
            title="Most Purchased Insurance"
            subtitle="The plans my clients choose most often."
          />
          <div className="mt-8">
            <ProductGrid
              products={mostPurchased}
              badgeMap={purchasedBadges}
              emptyMessage="Most-purchased plans will be ranked here."
            />
          </div>
        </div>
      </section>

      {/* Most discussed */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Trending"
          title="Most Discussed Insurance"
          subtitle="What people are asking about right now."
        />
        <div className="mt-8">
          <ProductGrid
            products={mostDiscussed}
            badgeMap={discussedBadges}
            emptyMessage="Trending plans will appear here."
          />
        </div>
      </section>

      {/* Why choose me */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
              Why Choose Me
            </p>
            <h2 className="mt-1 text-3xl font-bold text-white">
              Guidance you can actually trust
            </h2>
            <p className="mt-3 text-slate-300">
              Buying insurance is not about the cheapest premium — it is about
              the right cover and support when you need it most.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-sm font-bold text-teal-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-600 to-teal-800 px-8 py-12 text-center shadow-xl sm:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not sure which plan fits you?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-teal-50">
            Tell me a little about yourself and I&apos;ll suggest the right
            health or motor cover — free of cost.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-50"
          >
            Get a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
