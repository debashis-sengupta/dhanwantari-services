import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqGroups } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about health insurance, motor insurance, claims and support.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Help Centre
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Straight answers about plans, premiums, claims and everything in
            between.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <FaqAccordion groups={faqGroups} />

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Still have a question?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Reach out and I&apos;ll clarify things personally.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
