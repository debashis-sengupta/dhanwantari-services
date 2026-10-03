import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="3 October 2026">
      <h2>Insurance is the subject matter of solicitation</h2>
      <p>
        This website is intended to provide general information about health and
        motor insurance products. It does not constitute an offer, invitation or
        recommendation to purchase any specific product.
      </p>

      <h2>Regulatory status</h2>
      <p>
        {siteConfig.owner} is an IRDAI-registered insurance agent (
        {siteConfig.legal.irdaiRegistration}). Insurance products listed on this
        website are underwritten by respective insurers. {siteConfig.name} acts
        as an intermediary and is not the insurer.
      </p>

      <h2>Accuracy of product information</h2>
      <p>
        Premiums, benefits, exclusions and terms displayed are indicative and
        subject to change without notice. The policy wording, prospectus and
        sales brochure of the insurer are the authoritative documents. Please
        read them carefully before concluding a sale.
      </p>

      <h2>No guarantee of claims</h2>
      <p>
        Claim settlement is at the sole discretion of the insurer, subject to
        the policy terms and conditions. This website does not guarantee claim
        acceptance, amount or turnaround time.
      </p>

      <h2>Grievance redressal</h2>
      <p>
        For any complaint, write to {siteConfig.legal.grievanceContact}. If your
        grievance is not resolved to your satisfaction, you may approach the
        insurer&apos;s grievance officer and, if needed, the IRDAI or the
        Insurance Ombudsman.
      </p>
    </LegalPage>
  );
}
