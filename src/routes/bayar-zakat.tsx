import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { Wallet, QrCode, Building2, Smartphone, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/bayar-zakat")({
  head: () => ({
    meta: [
      { title: "Bayar Zakat ZISCONNECT QRIS, Bank Syariah, E-Wallet" },
      { name: "description", content: "Bayar zakat mudah pilih jenis, wilayah, lembaga, dan metode pembayaran termasuk layanan jemput zakat." },
    ],
  }),
  component: Page,
});

const methods = [
  { icon: QrCode, title: "QRIS", desc: "Scan dan bayar dari aplikasi bank/e-wallet apa pun." },
  { icon: Building2, title: "Bank Syariah", desc: "Transfer ke rekening lembaga zakat resmi mitra." },
  { icon: Smartphone, title: "E-Wallet", desc: "GoPay, OVO, DANA, ShopeePay, LinkAja, dan lainnya." },
  { icon: Wallet, title: "Virtual Account", desc: "VA unik untuk setiap transaksi, otomatis terverifikasi." },
  { icon: Truck, title: "Jemput Zakat", desc: "Petugas amil datang ke lokasi Anda di kota terpilih." },
];

const steps = [
  "Pilih jenis zakat (fitrah / mal / penghasilan / lainnya)",
  "Tentukan wilayah distribusi: provinsi hingga desa",
  "Pilih lembaga amil resmi: BAZNAS atau LAZ mitra",
  "Pilih metode pembayaran dan selesaikan transaksi",
  "Dapatkan bukti & sertifikat digital zakat",
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur 03 Bayar Zakat"
          title="Tunaikan zakat dalam hitungan menit."
          desc="Pilih jenis, wilayah distribusi, lembaga amil, dan metode pembayaran semua di satu tempat."
        />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-bold">Metode Pembayaran</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {methods.map((m) => (
              <div key={m.title} className="gradient-card border border-border/60 rounded-2xl p-6 hover:shadow-soft transition">
                <div className="w-12 h-12 rounded-xl gradient-hero grid place-items-center text-primary-foreground">
                  <m.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft">
              <h3 className="text-xl font-bold">Alur 5 Langkah</h3>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="shrink-0 w-8 h-8 rounded-full gradient-hero text-primary-foreground font-bold grid place-items-center">{i + 1}</span>
                    <span className="pt-1 text-foreground/90">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl gradient-hero p-8 text-primary-foreground shadow-glow">
              <h3 className="text-xl font-bold">Mengapa via ZISCONNECT?</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Lembaga terverifikasi & berizin resmi",
                  "Transparansi 100% on-chain",
                  "Distribusi dapat dipantau real-time",
                  "Sertifikat digital sebagai bukti zakat",
                ].map((s) => (
                  <li key={s} className="flex gap-2"><CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />{s}</li>
                ))}
              </ul>
              <Link to="/pantau" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-5 py-2.5 font-semibold hover:opacity-90 transition">
                Pantau distribusi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
