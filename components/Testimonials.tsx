import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "I used to lose a full weekend every quarter to bookkeeping. Now my tax report is literally one click. Spendly paid for itself in the first month.",
    name: "Mariana Duarte",
    role: "Brand designer, São Paulo",
    initials: "MD",
  },
  {
    quote:
      "The receipt scanner is scary good. I photograph receipts at lunch and they're categorized before I'm back at my desk.",
    name: "Tom Becker",
    role: "Web developer, Berlin",
    initials: "TB",
  },
  {
    quote:
      "Finally I know which clients are actually profitable. I raised my rates with two of them after seeing the real numbers.",
    name: "Aisha Khan",
    role: "Marketing consultant, Toronto",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by freelancers everywhere"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {t.name}
                  </span>
                  <span className="block text-sm text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
