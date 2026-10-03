import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch for a free, no-obligation health or motor insurance consultation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s find your right cover
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Fill in the form and I&apos;ll get back to you with personalised
            recommendations — completely free.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <Suspense fallback={<p className="text-sm text-slate-500">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Direct contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Phone
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium hover:text-teal-700"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-teal-700"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium hover:text-teal-700"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wide text-slate-400">
                    Office
                  </span>
                  <span className="font-medium">
                    {siteConfig.legal.corporateAddress}
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-bold text-slate-900">
                {siteConfig.legal.irdaiRegistration}
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Always verify an advisor&apos;s registration on the IRDAI
                website before purchasing a policy.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
