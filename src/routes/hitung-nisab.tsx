import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { Calculator, Coins, TrendingUp, Wheat, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/hitung-nisab")({
  head: () => ({
    meta: [
      { title: "Hitung Nisab Kalkulator Zakat ZISCONNECT" },
      { name: "description", content: "Kalkulator zakat cerdas penghasilan, emas, perdagangan, pertanian, investasi, dan zakat mal." },
    ],
  }),
  component: Page,
});

const categories = [
  { icon: Briefcase, title: "Zakat Penghasilan", desc: "2.5% dari penghasilan bersih bulanan/tahunan." },
  { icon: Coins, title: "Zakat Emas & Perak", desc: "Nisab 85 gram emas, kadar 2.5%." },
  { icon: TrendingUp, title: "Zakat Perdagangan", desc: "Modal + laba dagang yang mencapai nisab." },
  { icon: Wheat, title: "Zakat Pertanian", desc: "5% jika irigasi berbayar, 10% jika tadah hujan." },
  { icon: TrendingUp, title: "Zakat Investasi", desc: "Saham, reksadana, dan instrumen syariah lainnya." },
  { icon: Coins, title: "Zakat Mal", desc: "Harta simpanan yang telah haul dan mencapai nisab." },
];

function MiniCalc() {
  const [income, setIncome] = useState<string>("");
  const num = Number(income.replace(/\D/g, "")) || 0;
  const zakat = num * 0.025;
  return (
    <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft">
      <div className="flex items-center gap-3">
        <Calculator className="w-8 h-8 text-primary" />
        <h3 className="text-xl font-bold">Kalkulator Cepat Zakat Penghasilan</h3>
      </div>
      <label className="block mt-6 text-sm font-medium">Penghasilan bulanan (Rp)</label>
      <input
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="contoh 10.000.000"
        inputMode="numeric"
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
      />
      <div className="mt-6 p-5 rounded-2xl gradient-soft border border-border/60">
        <div className="text-sm text-muted-foreground">Estimasi zakat (2.5%)</div>
        <div className="text-3xl font-extrabold text-primary mt-1">
          Rp {zakat.toLocaleString("id-ID")}
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Estimasi sederhana. Untuk perhitungan lengkap sesuai nisab tahunan, gunakan kalkulator detail di setiap kategori.</p>
    </div>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur 02 Hitung Nisab"
          title="Hitung kewajiban zakat Anda dengan akurat."
          desc="Kalkulator cerdas untuk seluruh jenis zakat sesuai nisab dan kadar syariah."
        />
        <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10">
          <MiniCalc />
          <div>
            <h3 className="text-2xl font-bold">Pilih jenis zakat</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {categories.map((c) => (
                <div key={c.title} className="gradient-card border border-border/60 rounded-2xl p-5 hover:shadow-soft transition">
                  <c.icon className="w-7 h-7 text-primary" />
                  <h4 className="mt-3 font-bold">{c.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/bayar-zakat" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:opacity-90 transition">
              Lanjut Bayar Zakat <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
