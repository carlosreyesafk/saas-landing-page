import {
  FileText,
  Globe,
  Repeat,
  ScanLine,
  ShieldCheck,
  Tags,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: ScanLine,
    title: "Receipt scanning",
    description:
      "Snap a photo of any receipt and Spendly extracts the merchant, amount, and date in seconds — no manual typing.",
  },
  {
    icon: Tags,
    title: "Automatic categorization",
    description:
      "Every expense is sorted into the right category and project automatically, and it learns from your corrections.",
  },
  {
    icon: FileText,
    title: "Tax-ready reports",
    description:
      "One-click quarterly and annual reports your accountant will love, with every receipt attached as proof.",
  },
  {
    icon: Globe,
    title: "Multi-currency support",
    description:
      "Bill clients in dollars, pay tools in euros, travel in pesos — Spendly converts everything to your home currency.",
  },
  {
    icon: Repeat,
    title: "Recurring expense detection",
    description:
      "We spot your subscriptions and flag price increases, so no SaaS tool quietly bills you twice.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-level security",
    description:
      "256-bit encryption, read-only bank connections, and SOC 2 compliant infrastructure. Your data stays yours.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to master your money"
          description="Built for freelancers who would rather be working than doing bookkeeping."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
