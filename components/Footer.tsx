import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { href: "/legal/terms", label: "Terms of Use" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/refund", label: "Refund & Cancellation" },
];

const quickLinks = [
  { href: "/health-insurances", label: "Health Insurance" },
  { href: "/motor-insurances", label: "Motor Insurance" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, label: "X (Twitter)" },
  { href: siteConfig.social.facebook, label: "Facebook" },
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { legal } = siteConfig;

  return (
    <footer className="mt-20 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-lg font-bold text-white">
                S
              </span>
              <span className="text-lg font-bold text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.tagline} Personal guidance from a licensed advisor.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              <span className="font-semibold text-slate-200">
                {legal.irdaiRegistration}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 transition hover:text-teal-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 transition hover:text-teal-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={legal.irdaiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-teal-400"
                >
                  IRDAI Website
                </a>
              </li>
              <li>
                <a
                  href={legal.consumerEducationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-teal-400"
                >
                  Policyholder Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Corporate Office
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
              <p>{legal.corporateAddress}</p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-teal-400"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-teal-400"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="text-xs">{legal.cin}</p>
            </address>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Follow
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 transition hover:text-teal-400"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-xs leading-6 text-slate-500">
          <p>
            <strong className="text-slate-400">Grievance Redressal:</strong>{" "}
            {legal.grievanceOfficer} &middot;{" "}
            <a
              href={`mailto:${legal.grievanceContact}`}
              className="hover:text-teal-400"
            >
              {legal.grievanceContact}
            </a>
          </p>
          <p className="mt-2">
            {legal.insurerList}. Insurance is the subject matter of solicitation.
            For more details on risk factors, terms and conditions, please read
            the sales brochure / policy wording carefully before concluding a
            sale. Please refer to the policy terms and conditions for complete
            details.
          </p>
          <p className="mt-4">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
