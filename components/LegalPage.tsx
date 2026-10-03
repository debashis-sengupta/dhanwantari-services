import { siteConfig } from "@/lib/site-config";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white">{title}</h1>
          {updated ? (
            <p className="mt-2 text-sm text-slate-400">
              Last updated: {updated}
            </p>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-teal-700">
          {children}
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>
            {siteConfig.legal.irdaiRegistration} &middot;{" "}
            {siteConfig.legal.corporateAddress}
          </p>
          <p className="mt-1">
            For grievances, write to {siteConfig.legal.grievanceContact}.
          </p>
        </div>
      </section>
    </>
  );
}
