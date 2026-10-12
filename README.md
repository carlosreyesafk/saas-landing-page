# Spendly — SaaS Landing Page

A complete, production-quality SaaS landing page built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**. It presents a fictional expense-tracking product ("Spendly") with realistic copy — no lorem ipsum.

> Screenshots: add `screenshots/desktop.png` and `screenshots/mobile.png` here after deploying.

## What it demonstrates

- **Modern landing structure**: sticky nav with mobile menu, hero with social proof stats, logo strip, features grid, how-it-works, pricing, testimonials, FAQ accordion, final CTA, footer.
- **Reusable components**: `SectionHeading`, `Navbar`, `Hero`, `LogoStrip`, `Features`, `HowItWorks`, `Pricing`, `Testimonials`, `FAQ`, `FinalCTA`, `Footer` — each self-contained in `/components`.
- **Interactivity**: monthly/yearly pricing toggle and an accessible FAQ accordion (`aria-expanded`, keyboard-friendly buttons).
- **Responsive, mobile-first**: layouts adapt from mobile to desktop via Tailwind breakpoints; sticky blurred navbar; smooth scroll to anchors.
- **Lucide icons** throughout (no emoji icons), SEO metadata in `app/layout.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repo.
3. Keep the defaults (Framework Preset: Next.js, Build Command: `npm run build`).
4. Click **Deploy** — done. No environment variables needed.

## Project structure

```
app/
  layout.tsx        # SEO metadata + global styles
  page.tsx          # assembles all sections
  globals.css       # Tailwind v4 theme + base styles
components/         # one self-contained component per section
```

## Customization

Swap the copy in each component, change the indigo accent (`indigo-600`) to the brand color, and replace the fictional testimonials/logos with real ones.
