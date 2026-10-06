import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spendly — Expense tracking freelancers actually enjoy",
  description:
    "Spendly captures every expense automatically, categorizes it, and turns it into tax-ready reports. Free 14-day trial, no credit card required.",
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
