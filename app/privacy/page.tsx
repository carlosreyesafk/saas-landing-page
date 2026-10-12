import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Spendly collects, uses, and protects your data. Read our privacy policy for expense data, account information, cookies, and your rights.",
};

const sections = [
  { id: "information-we-collect", label: "1. Information we collect" },
  { id: "how-we-use", label: "2. How we use your information" },
  { id: "sharing", label: "3. How we share your information" },
  { id: "retention", label: "4. Data retention" },
  { id: "security", label: "5. Security" },
  { id: "your-rights", label: "6. Your rights" },
  { id: "cookies", label: "7. Cookies and tracking" },
  { id: "third-parties", label: "8. Third-party services" },
  { id: "children", label: "9. Children's privacy" },
  { id: "international", label: "10. International transfers" },
  { id: "changes", label: "11. Changes to this policy" },
  { id: "contact", label: "12. Contact us" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-900 first:mt-0 dark:text-slate-100"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
      {children}
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Page header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Legal
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
              Privacy Policy
            </h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Last updated: October 12, 2026
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            {/* Table of contents */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Privacy policy sections"
                className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  On this page
                </p>
                <ol className="mt-4 space-y-2.5">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Policy body */}
            <article className="max-w-3xl">
              <P>
                Spendly Inc. (&ldquo;Spendly&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;) provides expense tracking for freelancers. This
                Privacy Policy explains what personal information we collect,
                how we use it, and the choices you have. It applies to our
                website and the Spendly application (together, the
                &ldquo;Service&rdquo;).
              </P>

              <H2 id="information-we-collect">
                1. Information we collect
              </H2>
              <P>
                We collect information in three ways: you provide it to us, we
                collect it automatically, and we receive it from third parties.
              </P>
              <P>
                <strong className="text-slate-900 dark:text-slate-100">
                  Account information.
                </strong>{" "}
                When you create an account we collect your name, email address,
                and password (stored as a salted hash — we never see your plain
                password).
              </P>
              <P>
                <strong className="text-slate-900 dark:text-slate-100">
                  Financial and expense data.
                </strong>{" "}
                The core of the Service: expense amounts, categories, merchant
                names, dates, payment methods, notes, and receipt images you
                upload. Connecting a bank account is optional; if you do, we
                receive transaction data through our licensed data aggregator
                and store read-only access tokens.
              </P>
              <P>
                <strong className="text-slate-900 dark:text-slate-100">
                  Usage and device information.
                </strong>{" "}
                We automatically log pages visited, features used, time spent,
                browser type, operating system, and approximate location
                derived from your IP address. We use this to keep the Service
                reliable and to understand which features matter.
              </P>
              <P>
                <strong className="text-slate-900 dark:text-slate-100">
                  Payment information.
                </strong>{" "}
                Paid plans are processed by our payment provider. We receive a
                token and your billing country; we never store full card
                numbers on our servers.
              </P>

              <H2 id="how-we-use">2. How we use your information</H2>
              <P>We use your information to:</P>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-400">
                <li>Provide, maintain, and improve the Service;</li>
                <li>
                  Categorize expenses automatically and generate tax-ready
                  reports;
                </li>
                <li>Process payments and send invoices and receipts;</li>
                <li>
                  Send product updates, security alerts, and support messages;
                </li>
                <li>
                  Detect fraud, abuse, and security incidents, and enforce our
                  Terms of Service;
                </li>
                <li>
                  Comply with legal obligations such as tax and accounting laws.
                </li>
              </ul>
              <P>
                We do <em>not</em> sell your personal information or your
                expense data. We do not use your financial data for advertising
                targeting.
              </P>

              <H2 id="sharing">3. How we share your information</H2>
              <P>
                We share information only in these limited situations:
              </P>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-400">
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    Service providers:
                  </strong>{" "}
                  hosting, database, email delivery, analytics, and payment
                  processing vendors, bound by contracts that restrict them to
                  processing data on our behalf;
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    With your direction:
                  </strong>{" "}
                  when you export a report, connect an accounting tool, or
                  share data with your accountant;
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    Legal requirements:
                  </strong>{" "}
                  when we believe disclosure is reasonably necessary to comply
                  with a law, court order, or lawful government request;
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    Business transfers:
                  </strong>{" "}
                  if Spendly is acquired or merged, your data transfers to the
                  successor, which must honor this policy.
                </li>
              </ul>

              <H2 id="retention">4. Data retention</H2>
              <P>
                We keep your account and expense data while your account is
                active. If you delete your account, we permanently delete your
                personal data within 30 days, except where the law requires
                longer retention (for example, tax records we must keep for 7
                years). Backups containing deleted data are purged within 90
                days. Anonymous, aggregated statistics may be kept indefinitely.
              </P>

              <H2 id="security">5. Security</H2>
              <P>
                We protect your data with encryption in transit (TLS 1.2+) and
                at rest (AES-256), role-based access controls, audit logging,
                and regular security reviews. Bank connections use read-only
                tokens; we cannot move money. No method of transmission over the
                internet is 100% secure, so we cannot guarantee absolute
                security — but we design for it and investigate every report.
                Reach out to{" "}
                <a
                  href="mailto:security@spendly.app"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  security@spendly.app
                </a>{" "}
                if you discover a vulnerability.
              </P>

              <H2 id="your-rights">6. Your rights</H2>
              <P>
                Depending on where you live, you may have the right to access,
                correct, export, or delete your personal data, to restrict or
                object to certain processing, and to withdraw consent at any
                time. You can exercise most of these rights directly in the app
                under <strong className="text-slate-900 dark:text-slate-100">Settings → Privacy</strong>.
                For anything else, email{" "}
                <a
                  href="mailto:privacy@spendly.app"
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  privacy@spendly.app
                </a>{" "}
                and we will respond within 30 days.
              </P>

              <H2 id="cookies">7. Cookies and tracking</H2>
              <P>
                We use a small set of cookies and similar technologies:
              </P>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-400">
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    Strictly necessary:
                  </strong>{" "}
                  session and theme-preference cookies. The Service cannot work
                  without these;
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    Analytics:
                  </strong>{" "}
                  privacy-friendly, cookieless analytics to understand aggregate
                  usage. No cross-site tracking;
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100">
                    Preferences:
                  </strong>{" "}
                  remembers settings like your dashboard layout and currency.
                </li>
              </ul>
              <P>
                You can block cookies in your browser; strictly necessary
                functions (such as staying signed in) will stop working if you
                do.
              </P>

              <H2 id="third-parties">8. Third-party services</H2>
              <P>
                The Service integrates with providers who process data on our
                behalf: cloud hosting and database (US and EU regions),
                payment processing, transactional email, and optional bank
                aggregation. Each provider is vetted for security practices and
                contractually limited to the purposes we instruct. Links to
                third-party websites in our content are not covered by this
                policy — review their policies before sharing information with
                them.
              </P>

              <H2 id="children">9. Children&apos;s privacy</H2>
              <P>
                Spendly is a business tool for freelancers and is not directed
                at children under 16. We do not knowingly collect personal
                information from children under 16. If you believe a child has
                provided us with personal information, contact us and we will
                delete it promptly.
              </P>

              <H2 id="international">10. International transfers</H2>
              <P>
                We are based in the United States and our infrastructure runs in
                US and EU data centers. If you use the Service from outside
                these regions, your data will be transferred and processed
                there, under safeguards such as Standard Contractual Clauses
                where required by law.
              </P>

              <H2 id="changes">11. Changes to this policy</H2>
              <P>
                We may update this policy as the Service evolves. Material
                changes will be announced by email at least 14 days before they
                take effect, and the &ldquo;Last updated&rdquo; date above will
                reflect the change. Continued use of the Service after the
                effective date constitutes acceptance of the updated policy.
              </P>

              <H2 id="contact">12. Contact us</H2>
              <P>
                Questions about this policy or your data? We&apos;re a small
                team and a human will answer:
              </P>
              <ul className="mt-4 list-none space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:privacy@spendly.app"
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    privacy@spendly.app
                  </a>
                </li>
                <li>Spendly Inc., 548 Market St, San Francisco, CA 94104</li>
              </ul>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
