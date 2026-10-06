import { Wallet } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Receipt scanning", "Integrations", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Blog", "Tax guides", "Help center", "API docs", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Legal"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Wallet className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Spendly
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm">
              Expense tracking freelancers actually enjoy. Capture, categorize,
              and report — automatically.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Spendly Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
