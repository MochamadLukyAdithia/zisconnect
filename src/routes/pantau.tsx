import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { Activity, ShieldCheck, Link2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/pantau")({
  head: () => ({
    meta: [
      { title: "Pantau Distribusi Zakat Real-time Blockchain ZISCONNECT" },
      { name: "description", content: "Lacak perjalanan dana zakat Anda secara real-time dengan jaminan transparansi blockchain." },
    ],
  }),
  component: Page,
});

const stages = [
  { label: "Diterima", desc: "Dana masuk ke rekening lembaga amil." },
  { label: "Diverifikasi", desc: "Pengecekan keabsahan transaksi & data muzakki." },
  { label: "Disalurkan", desc: "Disebar ke program & lokasi penerima manfaat." },
  { label: "Dimanfaatkan", desc: "Penerima manfaat menggunakan bantuan." },
  { label: "Selesai", desc: "Laporan akhir dipublikasikan ke muzakki." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur 04 Pantau Real-time"
          title="Setiap rupiah dapat Anda lacak."
          desc="Transparansi penuh perjalanan dana zakat dari muzakki hingga mustahik, diamankan oleh teknologi blockchain."
        />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Activity, t: "Real-time Tracking", d: "Status diperbarui otomatis di setiap tahap." },
              { icon: Link2, t: "Blockchain Ledger", d: "Catatan transaksi tidak dapat diubah." },
              { icon: ShieldCheck, t: "Audit Publik", d: "Laporan terbuka untuk masyarakat & regulator." },
            ].map((x) => (
              <div key={x.t} className="gradient-card border border-border/60 rounded-3xl p-7">
                <x.icon className="w-10 h-10 text-primary" />
                <h3 className="mt-4 font-bold text-lg">{x.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold">Tahapan Perjalanan Dana</h2>
          <div className="mt-8 relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-6">
              {stages.map((s, i) => (
                <div key={s.label} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10">
                  <div className={`md:text-right ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <div className="rounded-2xl bg-card border border-border/60 p-5 shadow-soft inline-block">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <CheckCircle2 className="w-5 h-5" /> {s.label}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <span className="absolute left-2 top-5 w-5 h-5 rounded-full gradient-hero shadow-glow md:left-1/2 md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
