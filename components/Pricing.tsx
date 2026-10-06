"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Tier = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "For trying things out on a single project.",
    cta: "Start for free",
    features: [
      "Up to 100 expenses / month",
      "Manual expense entry",
      "1 project",
      "Basic reports",
    ],
  },
  {
    name: "Pro",
    monthly: 12,
    yearly: 9,
    description: "For freelancers who want the full picture.",
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Unlimited expenses",
      "Automatic receipt scanning",
      "Bank & card sync",
      "Unlimited projects",
      "Tax-ready reports",
      "Multi-currency",
    ],
  },
  {
    name: "Team",
    monthly: 29,
    yearly: 24,
    description: "For studios and small agencies.",
    cta: "Start 14-day trial",
    features: [
      "Everything in Pro",
      "Up to 5 seats",
      "Client profit dashboards",
      "Approval workflows",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that pays for itself"
          description="One recovered tax deduction usually covers a full year of Spendly."
        />

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${!yearly ? "text-slate-900" : "text-slate-500"}`}
          >
            Monthly
          </span>
          <button
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className={`relative h-7 w-12 rounded-full transition ${yearly ? "bg-indigo-600" : "bg-slate-300"}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${yearly ? "left-6" : "left-1"}`}
            />
          </button>
          <span
            className={`text-sm font-medium ${yearly ? "text-slate-900" : "text-slate-500"}`}
          >
            Yearly
            <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
              Save 25%
            </span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = yearly ? tier.yearly : tier.monthly;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-indigo-600 bg-indigo-50/50 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-600"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
                <p className="mt-5">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${price}
                  </span>
                  <span className="text-slate-500">
                    {" "}
                    / month{yearly && price > 0 ? ", billed yearly" : ""}
                  </span>
                </p>
                <a
                  href="#cta"
                  className={`mt-6 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition ${
                    tier.featured
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                </a>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
