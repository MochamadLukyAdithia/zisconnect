import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { BookOpen, Video, Calendar, HelpCircle, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/edukasi")({
  head: () => ({
    meta: [
      { title: "Edukasi & Informasi Zakat ZISCONNECT" },
      { name: "description", content: "Pusat literasi filantropi Islam zakat fitrah, mal, infak, sedekah artikel, video, infografis, dan kalender zakat." },
    ],
  }),
  component: Page,
});

const topics = [
  { icon: BookOpen, title: "Zakat Fitrah", desc: "Panduan lengkap zakat fitrah, waktu, kadar, dan tata cara." },
  { icon: BookOpen, title: "Zakat Mal", desc: "Penjelasan zakat harta, jenis, syarat, dan cara perhitungan." },
  { icon: FileText, title: "Artikel & Infografis", desc: "Bacaan ringkas dan visual edukatif tentang filantropi Islam." },
  { icon: Video, title: "Video Pembelajaran", desc: "Tutorial dan kajian singkat dari ustadz dan praktisi zakat." },
  { icon: Calendar, title: "Kalender Zakat Nasional", desc: "Jadwal kegiatan dan momentum zakat di seluruh Indonesia." },
  { icon: HelpCircle, title: "FAQ Filantropi", desc: "Tanya jawab populer seputar zakat, infak, dan sedekah." },
];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur 01 Edukasi & Informasi"
          title="Belajar filantropi Islam dari satu pintu."
          desc="Tingkatkan literasi zakat, infak, dan sedekah lewat konten yang ringkas, kredibel, dan mudah diakses kapan saja."
        />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="gradient-card border border-border/60 rounded-3xl p-7 hover:shadow-soft transition">
                <div className="w-12 h-12 rounded-xl gradient-hero grid place-items-center text-primary-foreground shadow-soft">
                  <t.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl gradient-hero p-10 text-primary-foreground shadow-glow flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Siap menghitung kewajiban zakat Anda?</h3>
              <p className="opacity-90 mt-2">Lanjut ke kalkulator nisab untuk hasil cepat dan akurat.</p>
            </div>
            <Link to="/hitung-nisab" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3 font-bold hover:opacity-90 transition">
              Hitung Nisab <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
