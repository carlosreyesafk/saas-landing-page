import { Camera, Link2, PieChart } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Link2,
    step: "Step 1",
    title: "Connect your accounts",
    description:
      "Link your bank and cards with read-only access in under two minutes. We never see your login credentials.",
  },
  {
    icon: Camera,
    step: "Step 2",
    title: "Capture as you spend",
    description:
      "Expenses import automatically, or snap receipts on the go. Spendly categorizes everything for you.",
  },
  {
    icon: PieChart,
    step: "Step 3",
    title: "See the full picture",
    description:
      "Dashboards show profit per client and project. Export tax-ready reports whenever you need them.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in minutes, not days"
          description="No onboarding calls, no spreadsheets to migrate. Just connect and go."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.title} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-indigo-200 md:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25">
                  <item.icon className="h-8 w-8" />
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                  {item.step}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
