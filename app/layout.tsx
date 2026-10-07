import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://saas-landing-page-olive-iota.vercel.app";
const SITE_NAME = "Spendly";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Expense tracking freelancers actually enjoy`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Spendly captures every expense automatically, categorizes it, and turns it into tax-ready reports. Free 14-day trial, no credit card required.",
  keywords: [
    "expense tracking",
    "freelancer finance",
    "tax-ready reports",
    "SaaS landing page",
  ],
  authors: [{ name: "Spendly" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} — Expense tracking freelancers actually enjoy`,
    description:
      "Spendly captures every expense automatically, categorizes it, and turns it into tax-ready reports. Free 14-day trial, no credit card required.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spendly — expense tracking freelancers actually enjoy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Expense tracking freelancers actually enjoy`,
    description:
      "Spendly captures every expense automatically, categorizes it, and turns it into tax-ready reports. Free 14-day trial.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
