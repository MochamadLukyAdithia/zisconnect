import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { CloudRain, TreePine, Users, GraduationCap, Stethoscope, Wheat, Home, Building2, HeartHandshake, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/donasi")({
  head: () => ({
    meta: [
      { title: "Donasi ZISCONNECT Bantuan Sosial Transparan" },
      { name: "description", content: "Donasi untuk korban bencana, komunitas peduli lingkungan, yatim, pendidikan, kesehatan, pangan, dan lainnya." },
    ],
  }),
  component: Page,
});

const causes = [
  { icon: CloudRain, t: "Korban Bencana Alam", d: "Bantuan cepat tanggap untuk penyintas bencana." },
  { icon: TreePine, t: "Komunitas Peduli Lingkungan", d: "Reboisasi, konservasi, dan ekonomi hijau." },
  { icon: Users, t: "Yatim & Dhuafa", d: "Santunan rutin dan pemberdayaan keluarga." },
  { icon: GraduationCap, t: "Pendidikan", d: "Beasiswa dan alat belajar." },
  { icon: Stethoscope, t: "Kesehatan", d: "Biaya pengobatan & layanan kesehatan komunitas." },
  { icon: Wheat, t: "Pangan", d: "Distribusi pangan bergizi ke daerah rawan." },
  { icon: Home, t: "Rumah Ibadah", d: "Pembangunan & renovasi masjid." },
  { icon: Building2, t: "UMKM Halal", d: "Modal mikro pelaku usaha halal." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur Kebanggaan Donasi"
          title="Berbagi tanpa menunggu momentum."
          desc="Mekanisme donasi transparan untuk bantuan sosial di luar skema zakat dari korban bencana hingga komunitas peduli lingkungan."
        />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <HeartHandshake className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Bagaimana Donasi Bekerja</h2>
            </div>
            <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm">
              {[
                "Masyarakat mengajukan / melaporkan kebutuhan",
                "Tim verifikasi memvalidasi data lapangan",
                "Program dipublikasi di aplikasi & media sosial",
                "Pengguna berdonasi mulai nominal terkecil",
                "Target, dana terkumpul & tersalurkan ditampilkan terbuka",
                "Laporan akhir dibagikan ke seluruh donatur",
              ].map((s) => (
                <li key={s} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>

          <h2 className="mt-14 text-2xl font-bold">Kategori Penerima Manfaat</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {causes.map((c) => (
              <div key={c.t} className="bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:shadow-soft transition">
                <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center text-accent-foreground">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
