import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter, PageHeader } from "@/components/SiteNav";
import { Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/sedekah")({
  head: () => ({
    meta: [
      { title: "Sedekah ZISCONNECT Budaya Berbagi Sepanjang Tahun" },
      { name: "description", content: "Sedekah untuk pendidikan, kesehatan, pangan, bencana, yatim, rumah ibadah dimulai dari nominal terkecil." },
    ],
  }),
  component: Page,
});

const nominal = [10000, 25000, 50000, 100000, 250000, 500000];
const kategori = ["Pendidikan", "Kesehatan", "Pangan", "Bencana", "Yatim & Dhuafa", "Rumah Ibadah", "Lingkungan", "UMKM Halal"];

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fitur Kebanggaan Sedekah"
          title="Sedekah mudah, kapan saja, untuk siapa saja."
          desc="Bangun budaya berbagi tanpa menunggu momentum tertentu. Setiap nominal berarti, setiap niat dicatat."
        />
        <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl gradient-hero p-10 text-primary-foreground shadow-glow">
            <Sparkles className="w-10 h-10" />
            <h2 className="mt-4 text-3xl font-extrabold">Pilih nominal sedekah</h2>
            <p className="mt-2 opacity-90">Mulai dari yang paling ringan, sesuai keikhlasan Anda.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {nominal.map((n) => (
                <button key={n} className="rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur px-4 py-4 font-bold transition">
                  Rp {n.toLocaleString("id-ID")}
                </button>
              ))}
            </div>
            <button className="mt-6 w-full rounded-xl bg-primary-foreground text-primary px-6 py-3.5 font-bold hover:opacity-90 transition">
              Sedekah Sekarang
            </button>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Heart className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-bold">Kategori Sedekah</h2>
            </div>
            <p className="mt-2 text-muted-foreground">Salurkan sedekah ke pos yang Anda pilih, dipantau secara terbuka.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {kategori.map((k) => (
                <div key={k} className="rounded-2xl border border-border/60 bg-card px-5 py-4 font-semibold hover:border-primary/40 hover:shadow-soft transition">
                  {k}
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
