const SITE_URL = "https://saas-landing-page-olive-iota.vercel.app";

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Spendly",
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Expense Tracker",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "Spendly captures every expense automatically, categorizes it, and turns it into tax-ready reports. Free 14-day trial, no credit card required.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      description: "For trying things out on a single project.",
      price: "0",
      priceCurrency: "USD",
      url: `${SITE_URL}/#pricing`,
    },
    {
      "@type": "Offer",
      name: "Pro",
      description: "For freelancers who want the full picture.",
      price: "12",
      priceCurrency: "USD",
      url: `${SITE_URL}/#pricing`,
    },
    {
      "@type": "Offer",
      name: "Team",
      description: "For studios and small agencies.",
      price: "29",
      priceCurrency: "USD",
      url: `${SITE_URL}/#pricing`,
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
