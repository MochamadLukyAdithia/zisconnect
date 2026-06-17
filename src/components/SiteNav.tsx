import { Link } from "@tanstack/react-router";
import { Leaf, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const menu = [
  { to: "/edukasi", label: "Edukasi" },
  { to: "/hitung-nisab", label: "Hitung Nisab" },
  { to: "/bayar-zakat", label: "Bayar Zakat" },
  { to: "/pantau", label: "Pantau" },
  { to: "/lapor-dampak", label: "Lapor Dampak" },
  { to: "/donasi", label: "Donasi" },
  { to: "/sedekah", label: "Sedekah" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <span className="w-9 h-9 rounded-xl gradient-hero grid place-items-center text-primary-foreground shadow-soft">
            <Leaf className="w-5 h-5" />
          </span>
          <span>ZIS<span className="text-primary">CONNECT</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {menu.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {m.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/bayar-zakat"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition shadow-soft"
        >
          Mulai Berzakat <ArrowRight className="w-4 h-4" />
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm">
            {menu.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                onClick={() => setOpen(false)}
                className="py-1 text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {m.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-xl gradient-hero grid place-items-center text-primary-foreground">
              <Leaf className="w-5 h-5" />
            </span>
            ZIS<span className="text-primary">CONNECT</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Platform filantropi Islam terintegrasi untuk Indonesia yang lebih hijau dan halal.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Platform</div>
          <ul className="space-y-2 text-muted-foreground">
            {menu.map((m) => (
              <li key={m.to}><Link to={m.to} className="hover:text-foreground">{m.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Mitra Strategis</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>BAZNAS & LAZ</li>
            <li>Perbankan Syariah</li>
            <li>Pemerintah Daerah</li>
            <li>Komunitas Sosial</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © 2026 ZISCONNECT Inovasi Filantropi Islam untuk Green Economy & Ekosistem Halal Nasional.
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-soft border-b border-border/60">
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
          <span className="text-gradient">{title}</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{desc}</p>
      </div>
    </section>
  );
}
