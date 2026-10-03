import type { FaqGroup } from "@/components/FaqAccordion";

export const faqGroups: FaqGroup[] = [
  {
    category: "General",
    items: [
      {
        q: "Are you a licensed insurance advisor?",
        a: "Yes. I am an IRDAI-registered insurance agent. My registration details are listed in the footer of every page, and you can verify them on the IRDAI website.",
      },
      {
        q: "Do you charge a fee for consultation?",
        a: "No. My consultation and plan comparison is completely free. I am remunerated by the insurer through standard commission when you purchase a policy through me.",
      },
      {
        q: "How do I get a quote or buy a policy?",
        a: "Use the contact form or reach out on phone/WhatsApp with your basic details. I will share suitable options, and once you decide, help you complete the purchase.",
      },
    ],
  },
  {
    category: "Health Insurance",
    items: [
      {
        q: "What is the difference between individual and family floater plans?",
        a: "An individual plan covers one person with their own sum insured. A family floater shares a single sum insured among all insured members, which is usually more cost-effective for families.",
      },
      {
        q: "What is a waiting period?",
        a: "A waiting period is the time before certain covers become available. Pre-existing diseases typically have a waiting period of 2–4 years, while specific illnesses or maternity may have their own waiting periods.",
      },
      {
        q: "What is cashless hospitalisation?",
        a: "At network hospitals, the insurer settles the bill directly with the hospital, so you do not pay upfront (except non-covered items). At non-network hospitals you pay and then claim reimbursement.",
      },
      {
        q: "Can I port my existing health policy?",
        a: "Yes. You can port to another insurer while retaining accrued benefits, provided you apply at least 30 days before renewal. I can help you with the paperwork.",
      },
    ],
  },
  {
    category: "Motor Insurance",
    items: [
      {
        q: "Is motor insurance mandatory in India?",
        a: "Yes. Third-party liability cover is mandatory for all vehicles under the Motor Vehicles Act. A comprehensive policy additionally covers damage to your own vehicle.",
      },
      {
        q: "What is zero depreciation cover?",
        a: "Also called bumper-to-bumper, it means you do not have to pay for depreciation on replaced parts during a claim, so you receive the full value of the parts without deduction.",
      },
      {
        q: "What is No Claim Bonus (NCB)?",
        a: "NCB is a discount on your own-damage premium for every claim-free year, starting around 20% and going up to 50%. It is usually carried over when you renew or switch insurers.",
      },
      {
        q: "How is a claim settled after an accident?",
        a: "Inform the insurer immediately, file a police complaint if required, and get the vehicle surveyed. Cashless settlement is available at network garages; otherwise you claim reimbursement.",
      },
    ],
  },
  {
    category: "Claims & Support",
    items: [
      {
        q: "Do you help with claims?",
        a: "Yes. I assist with documentation, coordination with the insurer and follow-ups so your claim is processed as smoothly as possible.",
      },
      {
        q: "What documents are needed to raise a claim?",
        a: "Typically the policy document, ID proof, hospital/garage paperwork and bills, plus any specific forms the insurer requires. I will guide you through the exact list for your case.",
      },
    ],
  },
];
