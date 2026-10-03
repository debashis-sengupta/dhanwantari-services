/**
 * Central place for all site-wide / corporate details.
 * Update these with your real business information before going live.
 */
export const siteConfig = {
  name: "SecureCover",
  tagline: "Health & Motor Insurance, made simple.",
  owner: "Your Name",
  role: "IRDAI Licensed Insurance Agent",
  description:
    "Compare and buy health and motor insurance plans from India's leading insurers. Personal guidance from a licensed advisor.",

  // --- Contact ---
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "hello@securecover.example",

  // --- Corporate / Regulatory (India / IRDAI) ---
  legal: {
    irdaiRegistration: "IRDAI Agent Code: AG-XXXXXX", // <-- replace
    insurerList: "Insurers: list of partner insurers available on request", // <-- replace
    grievanceOfficer: "Grievance Officer: Your Name",
    grievanceContact: "grievance@securecover.example",
    corporateAddress:
      "123 Example Business Park, Sector 18, Gurugram, Haryana 122001, India",
    cin: "CIN: UXXXXXXXXXXXXXXX", // <-- replace if incorporated
    // IRDAI consumer education link
    irdaiUrl: "https://irdai.gov.in/",
    consumerEducationUrl: "https://policyholder.gov.in/",
  },

  social: {
    linkedin: "https://linkedin.com/in/your-handle",
    twitter: "https://twitter.com/your-handle",
    facebook: "https://facebook.com/your-handle",
    instagram: "https://instagram.com/your-handle",
    youtube: "https://youtube.com/@your-handle",
  },
};

export type SiteConfig = typeof siteConfig;
