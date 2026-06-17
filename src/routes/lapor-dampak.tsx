import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { FileBarChart, MapPin, Image as ImageIcon, Award, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/lapor-dampak")({
  head: () => ({
    meta: [
      { title: "Lapor Dampak Sosial Zakat ZISCONNECT" },
      { name: "description", content: "Laporan dampak sosial penerima manfaat, lokasi, program, dokumentasi, statistik, dan sertifikat digital." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: BarChart3, t: "Statistik Penerima", d: "Jumlah penerima per program, wilayah, dan periode." },
  { icon: MapPin, t: "Lokasi Distribusi", d: "Peta interaktif lokasi penyaluran bantuan." },
  { icon: FileBarChart, t: "Jenis Program", d: "Kategori program: pendidikan, kesehatan, lingkungan, dll." },
  { icon: ImageIcon, t: "Dokumentasi Lapangan", d: "Foto & video kegiatan dari amil di lapangan." },
  { icon: Award, t: "Sertifikat Digital Zakat", d: "Bukti zakat resmi dapat diunduh dan dibagikan." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur 05 Lapor Dampak"
          title="Lihat dampak nyata dari zakat Anda."
          desc="Laporan dampak sosial yang lengkap, terdokumentasi, dan dapat dipertanggungjawabkan."
        />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((x) => (
              <div key={x.t} className="gradient-card border border-border/60 rounded-3xl p-7 hover:shadow-soft transition">
                <div className="w-12 h-12 rounded-xl gradient-hero grid place-items-center text-primary-foreground">
                  <x.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold">{x.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {[
              ["12.500+", "Penerima manfaat"],
              ["320", "Program aktif"],
              ["34", "Provinsi terjangkau"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-3xl gradient-hero p-8 text-primary-foreground shadow-glow text-center">
                <div className="text-4xl font-extrabold">{n}</div>
                <div className="mt-2 opacity-90">{l}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
