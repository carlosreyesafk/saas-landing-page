const companies = [
  "Northwind Studio",
  "Brightline Co.",
  "PixelForge",
  "Craftwork",
  "Lumen Labs",
  "Bold & Co.",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by freelancers and studios at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-tight text-slate-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
