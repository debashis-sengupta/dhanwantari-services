import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="3 October 2026">
      <p>
        Your privacy matters. This policy explains what personal information we
        collect, why we collect it, and how we handle it.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>Contact details you submit (name, email, phone number).</li>
        <li>
          Information about the insurance you are interested in and any message
          you send us.
        </li>
        <li>
          Basic technical data such as browser type, collected automatically.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and provide suitable plan options.</li>
        <li>To help you purchase and service a policy.</li>
        <li>To comply with applicable legal and regulatory obligations.</li>
      </ul>

      <h2>3. Sharing with insurers</h2>
      <p>
        To arrange a policy or assist with a claim, we may share your details
        with the relevant insurer(s) and their authorised service providers.
        We do not sell your personal information.
      </p>

      <h2>4. Data retention &amp; security</h2>
      <p>
        We retain enquiry data only as long as needed for the purposes above or
        as required by law, and we take reasonable measures to protect it.
      </p>

      <h2>5. Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information by writing to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        This website may use minimal cookies or local storage required for it to
        function. You can control cookies through your browser settings.
      </p>
    </LegalPage>
  );
}
