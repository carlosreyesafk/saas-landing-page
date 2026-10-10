import {
  Hexagon,
  Zap,
  Cpu,
  PenTool,
  Sun,
  Layers,
  Command,
  Feather,
  type LucideIcon,
} from "lucide-react";

type Company = {
  name: string;
  icon: LucideIcon;
};

const companies: Company[] = [
  { name: "Northwind Studio", icon: Hexagon },
  { name: "Brightline Co.", icon: Zap },
  { name: "PixelForge", icon: Cpu },
  { name: "Craftwork", icon: PenTool },
  { name: "Lumen Labs", icon: Sun },
  { name: "Bold & Co.", icon: Layers },
  { name: "Vantia Systems", icon: Command },
  { name: "Quill & Fern", icon: Feather },
];

function LogoList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={ariaHidden || undefined}>
      {companies.map(({ name, icon: Icon }) => (
        <span
          key={name}
          className="flex shrink-0 items-center gap-2 text-slate-400 transition-colors duration-200 hover:text-slate-600"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          <span className="whitespace-nowrap text-lg font-bold tracking-tight">
            {name}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function LogoStrip() {
  return (
    <section
      className="border-y border-slate-200/70 bg-white py-10"
      aria-label="Companies that trust this product"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by freelancers and studios at
        </p>
      </div>
      <div className="logo-marquee relative mt-8 overflow-hidden">
        <div className="logo-marquee-track flex w-max">
          <LogoList />
          <LogoList ariaHidden />
        </div>
      </div>
    </section>
  );
}
