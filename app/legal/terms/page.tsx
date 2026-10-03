import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="3 October 2026">
      <p>
        These Terms of Use govern your access to and use of the {siteConfig.name}{" "}
        website. By using this website you agree to these terms. If you do not
        agree, please do not use the website.
      </p>

      <h2>1. Nature of services</h2>
      <p>
        {siteConfig.name} is operated by {siteConfig.owner}, an
        IRDAI-registered insurance agent ({siteConfig.legal.irdaiRegistration}).
        This website provides information about insurance products and enables
        you to request a quote or consultation. It is not an insurer and does
        not underwrite risk.
      </p>

      <h2>2. Accuracy of information</h2>
      <p>
        Product information, premiums and features shown on this website are
        indicative and for general guidance only. Actual terms, conditions,
        exclusions and premiums are governed solely by the insurer&apos;s policy
        wording and the related sales brochure. In case of any conflict, the
        policy document issued by the insurer prevails.
      </p>

      <h2>3. No advice guarantee</h2>
      <p>
        Information on this website does not constitute financial, legal or tax
        advice. Please read all policy documents carefully before concluding a
        sale.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        All content, trademarks and logos on this website are the property of
        their respective owners and may not be reproduced without permission.
      </p>

      <h2>5. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.name} shall not be
        liable for any indirect or consequential loss arising from use of this
        website.
      </p>

      <h2>6. Governing law</h2>
      <p>
        These terms are governed by the laws of India, and disputes are subject
        to the exclusive jurisdiction of the courts at the location of the
        corporate address stated in the footer.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about these terms may be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
