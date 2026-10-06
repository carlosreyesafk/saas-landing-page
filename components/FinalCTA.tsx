import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-white px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-600 px-6 py-16 text-center shadow-2xl shadow-indigo-600/25 sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Stop guessing. Start knowing where your money goes.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Join 12,000+ freelancers who traded spreadsheet weekends for one-click
          tax reports.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow transition hover:bg-indigo-50 sm:w-auto"
          >
            Start your free trial
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-4 text-sm text-indigo-200">
          Free 14-day trial · No credit card required
        </p>
      </div>
    </section>
  );
}
