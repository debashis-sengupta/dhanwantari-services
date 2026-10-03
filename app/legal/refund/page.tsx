import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Refund & Cancellation" };

export default function RefundPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="3 October 2026">
      <p>
        This website provides free consultation and assistance in purchasing
        insurance policies. We do not charge you a fee for browsing the website
        or for requesting a quote.
      </p>

      <h2>1. Premium payments</h2>
      <p>
        All premiums are paid directly to the insurer. Refunds of premium, if
        any, are governed by the free-look period and cancellation terms of the
        respective insurer and the applicable IRDAI regulations.
      </p>

      <h2>2. Free-look period</h2>
      <p>
        Most policies offer a free-look period (typically 15–30 days depending on
        the product and channel) during which you may return the policy. Refunds
        are processed by the insurer after deducting applicable charges.
      </p>

      <h2>3. Cancellation</h2>
      <p>
        To cancel a policy, contact the insurer or reach out to me and I will
        guide you through the process. Cancellation terms are as per the policy
        document.
      </p>

      <h2>4. No separate fee</h2>
      <p>
        Since no separate advisory fee is charged through this website, there is
        nothing to refund on our side. Any refund request relates to premiums
        held by the insurer.
      </p>

      <h2>5. Contact</h2>
      <p>
        For assistance, email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
        {siteConfig.phone}.
      </p>
    </LegalPage>
  );
}
