import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const stats = [
  { value: "12,000+", label: "freelancers tracking" },
  { value: "$48M", label: "expenses tracked" },
  { value: "4.9/5", label: "average rating" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950 dark:via-slate-950 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24 lg:px-8">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm transition hover:border-indigo-300 dark:border-indigo-800 dark:bg-slate-950 dark:text-indigo-300 dark:hover:border-indigo-700"
        >
          <Sparkles className="h-4 w-4" />
          New: automatic receipt scanning is here
          <ArrowRight className="h-4 w-4" />
        </a>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
          Know exactly where your money goes
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
          Spendly captures every expense automatically, categorizes it, and
          turns it into tax-ready reports — so you spend less time on
          bookkeeping and more time on billable work.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="w-full rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 sm:w-auto"
          >
            Start tracking free
          </a>
          <a
            href="#how-it-works"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            <PlayCircle className="h-5 w-5" />
            See how it works
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Free 14-day trial · No credit card required · Cancel anytime
        </p>

        {/* Stats */}
        <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-slate-100">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
