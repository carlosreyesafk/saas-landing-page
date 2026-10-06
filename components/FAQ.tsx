"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Do I need to connect my bank account?",
    answer:
      "No. Bank sync is optional — you can track everything manually or just by photographing receipts. If you do connect, the connection is read-only: Spendly can see transactions but can never move money.",
  },
  {
    question: "Is my financial data safe?",
    answer:
      "Yes. We use 256-bit encryption, read-only bank connections through regulated providers, and SOC 2 compliant infrastructure. We never sell your data, and you can export and delete everything at any time.",
  },
  {
    question: "Can I use Spendly with my accountant?",
    answer:
      "Absolutely. You can invite your accountant with a free collaborator seat on Pro and Team plans. They get access to your categorized expenses and tax-ready reports without seeing anything else.",
  },
  {
    question: "What happens when the trial ends?",
    answer:
      "Nothing scary. You keep all your data and drop to the free Starter plan automatically. Upgrade whenever you're ready — your expenses, receipts, and reports stay exactly as you left them.",
  },
  {
    question: "Does Spendly work in my country and currency?",
    answer:
      "Spendly supports 40+ currencies and converts everything to your home currency automatically. Bank sync coverage varies by country — check the supported banks list during signup, or use manual entry anywhere in the world.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Monthly plans can be cancelled in two clicks from your settings, and yearly plans are refunded pro-rata within the first 60 days. No retention calls, no dark patterns.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything freelancers usually ask before starting their trial."
        />
        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="px-6 pb-6 text-slate-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
