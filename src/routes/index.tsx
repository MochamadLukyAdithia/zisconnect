import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-zisconnect.png";
import {
  BookOpen, Calculator, Wallet, Activity, FileBarChart, HeartHandshake, Sparkles,
  Leaf, ShieldCheck, Cpu, Link2, ArrowRight, CheckCircle2, Globe2,
  Building2, GraduationCap, Stethoscope, Wheat, Home, Users, CloudRain, TreePine,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZISCONNECT Optimalisasi Zakat Digital berbasis AI" },
      { name: "description", content: "Platform filantropi Islam terintegrasi berbasis AI & Blockchain untuk mendukung Green Economy dan ekosistem halal nasional." },
      { property: "og:title", content: "ZISCONNECT Zakat Digital untuk Green Economy" },
      { property: "og:description", content: "Edukasi, hitung, bayar, pantau, lapor, donasi, dan sedekah dalam satu ekosistem." },
    ],
  }),
  component: Landing,
});

function Nav() {
  const items = [
    ["#tentang", "Tentang"],
    ["#fitur", "Fitur"],
    ["#dampak", "Dampak"],
    ["#green", "Green Economy"],
    // ["#roadmap", "Roadmap"],
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-xl gradient-hero grid place-items-center text-primary-foreground shadow-soft">
            <Leaf className="w-5 h-5" />
          </span>
          <span>ZIS<span className="text-primary">CONNECT</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {items.map(([h, l]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#cta" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition shadow-soft">
          Mulai Berzakat <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-sage/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Inovasi Filantropi Islam 2026
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            <span className="text-gradient">ZISCONNECT</span>
            <span className="block text-foreground mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Optimalisasi Pengelolaan Zakat Digital berbasis AI
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Mendukung transisi <strong className="text-foreground">Green Economy</strong> dan penguatan
            <strong className="text-foreground"> ekosistem halal nasional</strong> melalui satu ekosistem
            digital edukasi, hitung, bayar, pantau, lapor, donasi, dan sedekah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#fitur" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-glow hover:opacity-90 transition">
              Jelajahi Fitur <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#tentang" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold hover:bg-secondary transition">
              Pelajari Selengkapnya
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["327T+", "Potensi zakat/thn"],
              ["7", "Fitur terintegrasi"],
              ["100%", "Transparan on-chain"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-extrabold text-primary">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 gradient-hero opacity-20 blur-2xl rounded-3xl" />
          <img src={heroImg} alt="ZISCONNECT ekosistem zakat digital" width={1536} height={1024}
            className="relative rounded-3xl shadow-glow border border-border/40 object-cover w-full" />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const points = [
    "Potensi zakat ratusan triliun, realisasi masih jauh dari target.",
    "Literasi zakat dan kepercayaan masyarakat masih rendah.",
    "Layanan zakat digital terfragmentasi pada banyak platform.",
    "Distribusi dana kurang transparan dan sulit dipantau muzakki.",
    "Filantropi terkonsentrasi di Ramadan, belum optimal sepanjang tahun.",
    "Bantuan sosial mendesak belum terhubung wadah digital yang mudah.",
  ];
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Latar Belakang</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Mengapa zakat digital butuh ekosistem baru?</h2>
          <p className="mt-4 text-muted-foreground">
            Indonesia memiliki potensi filantropi Islam terbesar di dunia, namun realisasinya terhambat
            oleh fragmentasi layanan, rendahnya transparansi, dan minimnya literasi digital.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <div key={i} className="gradient-card border border-border/60 rounded-2xl p-6 hover:shadow-soft transition">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="py-24 gradient-soft">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Tentang ZISCONNECT</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            Satu platform untuk seluruh perjalanan filantropi Islam Anda.
          </h2>
        </div>
        <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">ZISCONNECT</strong> (Zakat, Infak, Sedekah, dan Donasi Connect)
            adalah platform filantropi Islam terintegrasi berbasis <strong className="text-foreground">AI & Blockchain</strong>
            yang mempermudah masyarakat memahami, menghitung, menyalurkan, memantau, dan mengevaluasi kontribusi sosial.
          </p>
          <p>
            Lebih dari sekadar platform pembayaran zakat ZISCONNECT menjadi
            <strong className="text-foreground"> ekosistem filantropi digital nasional</strong> yang menghubungkan
            muzakki, amil, lembaga zakat, dan penerima manfaat secara transparan dan akuntabel.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {[
              ["AI", "Rekomendasi layanan personal sesuai profil filantropi"],
              ["Blockchain", "Transparansi distribusi dana real-time"],
              ["Open API", "Integrasi BAZNAS, LAZ, perbankan syariah"],
              ["Nasional", "Menjangkau hingga tingkat desa"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">{k}</div>
                  <div className="text-sm">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const mainFeatures = [
  { icon: BookOpen, title: "Edukasi & Informasi", desc: "Pusat literasi filantropi Islam: zakat fitrah/mal, infak, sedekah, artikel, video, infografis, kalender zakat nasional, dan FAQ.",
    chips: ["Zakat Fitrah", "Zakat Mal", "Artikel", "Video", "Kalender"] },
  { icon: Calculator, title: "Hitung Nisab", desc: "Kalkulator zakat cerdas untuk fitrah, penghasilan, emas, perdagangan, pertanian, investasi, dan zakat mal.",
    chips: ["Penghasilan", "Emas", "Perdagangan", "Pertanian", "Investasi"] },
  { icon: Wallet, title: "Bayar Zakat", desc: "Pilih jenis, wilayah distribusi (provinsi desa), lembaga/amil, dan metode pembayaran termasuk layanan jemput zakat.",
    chips: ["QRIS", "Bank Syariah", "E-Wallet", "Virtual Account", "Jemput Zakat"] },
  { icon: Activity, title: "Pantau Real-time", desc: "Lacak perjalanan dana: diterima diverifikasi disalurkan dimanfaatkan selesai, dijamin oleh Blockchain.",
    chips: ["Blockchain", "Real-time", "Verified"] },
  { icon: FileBarChart, title: "Lapor Dampak", desc: "Laporan dampak sosial: jumlah & lokasi penerima manfaat, jenis program, dokumentasi, statistik, dan sertifikat digital zakat.",
    chips: ["Dampak Sosial", "Dokumentasi", "Sertifikat Digital"] },
];

function MainFeatures() {
  return (
    <section id="fitur" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Fitur Utama</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Lima pilar perjalanan zakat digital</h2>
          <p className="mt-4 text-muted-foreground">
            Dari literasi hingga laporan dampak semua dalam satu alur yang transparan.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFeatures.map((f, i) => (
            <div key={f.title} className="group relative gradient-card border border-border/60 rounded-3xl p-7 hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl gradient-hero grid place-items-center text-primary-foreground shadow-soft">
                  <f.icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {f.chips.map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const beneficiaries = [
  { icon: CloudRain, title: "Korban Bencana Alam", desc: "Bantuan cepat tanggap untuk penyintas bencana di seluruh Indonesia." },
  { icon: TreePine, title: "Komunitas Peduli Lingkungan", desc: "Dukungan untuk gerakan reboisasi, konservasi, dan ekonomi hijau." },
  { icon: Users, title: "Yatim & Dhuafa", desc: "Santunan rutin dan program pemberdayaan keluarga." },
  { icon: GraduationCap, title: "Pendidikan", desc: "Beasiswa, alat belajar, dan akses sekolah untuk anak kurang mampu." },
  { icon: Stethoscope, title: "Kesehatan", desc: "Bantuan biaya pengobatan dan layanan kesehatan komunitas." },
  { icon: Wheat, title: "Pangan", desc: "Distribusi pangan bergizi untuk daerah rawan pangan." },
  { icon: Home, title: "Rumah Ibadah", desc: "Pembangunan dan renovasi masjid serta fasilitas keagamaan." },
  { icon: Building2, title: "Pemberdayaan UMKM Halal", desc: "Modal mikro untuk pelaku usaha halal & ekonomi syariah." },
];

function PrideFeatures() {
  return (
    <section id="dampak" className="py-24 gradient-soft relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Fitur Kebanggaan</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Donasi & Sedekah berbagi sepanjang tahun</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Selain zakat, ZISCONNECT menghadirkan kanal <strong className="text-foreground">Donasi</strong> dan
            <strong className="text-foreground"> Sedekah</strong> dengan kategori penerima manfaat yang luas             dari korban bencana hingga komunitas peduli lingkungan.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card border border-border/60 p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <HeartHandshake className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold">Donasi</h3>
            </div>
            <p className="mt-4 text-muted-foreground">Mekanisme transparan untuk bantuan di luar skema zakat.</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Masyarakat mengajukan / melaporkan kebutuhan",
                "Tim verifikasi validasi data lapangan",
                "Program dipublikasi via aplikasi & media sosial",
                "Pengguna berdonasi mulai nominal terkecil",
                "Target, dana terkumpul & tersalurkan ditampilkan terbuka",
              ].map((s) => (
                <li key={s} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl gradient-hero p-8 text-primary-foreground shadow-glow">
            <div className="flex items-center gap-3">
              <Sparkles className="w-10 h-10" />
              <h3 className="text-2xl font-bold">Sedekah</h3>
            </div>
            <p className="mt-4 opacity-90">Budaya berbagi tanpa menunggu momentum tertentu.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {["Pendidikan", "Kesehatan", "Pangan", "Bencana", "Yatim", "Rumah Ibadah"].map((s) => (
                <div key={s} className="bg-primary-foreground/10 backdrop-blur rounded-xl px-3 py-2 font-medium">{s}</div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-bold">Kategori Penerima Manfaat</h3>
        <p className="mt-2 text-muted-foreground">Setiap rupiah disalurkan ke pos yang tepat sasaran dan dapat dipantau.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beneficiaries.map((b) => (
            <div key={b.title} className="group bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/40 hover:shadow-soft transition">
              <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center text-accent-foreground group-hover:scale-110 transition">
                <b.icon className="w-6 h-6" />
              </div>
              <h4 className="mt-4 font-bold">{b.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GreenEconomy() {
  const items = [
    { icon: Leaf, title: "Green Economy", desc: "Penyaluran dana ke program lingkungan, energi bersih, dan pertanian berkelanjutan." },
    { icon: Globe2, title: "Ekosistem Halal Nasional", desc: "Memperkuat rantai nilai halal melalui distribusi tepat sasaran." },
    { icon: ShieldCheck, title: "Akuntabilitas", desc: "Transparansi on-chain meningkatkan kepercayaan muzakki & lembaga." },
    { icon: Cpu, title: "AI Personalization", desc: "Rekomendasi program filantropi sesuai profil dan minat pengguna." },
    { icon: Link2, title: "Blockchain", desc: "Audit trail real-time untuk setiap rupiah yang disalurkan." },
    { icon: Globe2, title: "Jangkauan Nasional", desc: "Dari pusat kota hingga desa terpencil satu platform untuk semua." },
  ];
  return (
    <section id="green" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Keunggulan & Kaitan Tema</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Mendukung Green Economy & Ekosistem Halal</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            ZISCONNECT mendorong transformasi filantropi Islam menjadi lebih modern, inklusif, dan berkelanjutan             sejalan dengan agenda ekonomi hijau dan penguatan industri halal nasional.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="p-7 rounded-2xl border border-border/60 bg-card hover:bg-secondary/40 transition">
              <it.icon className="w-9 h-9 text-primary" />
              <h3 className="mt-5 font-bold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    ["01", "Riset & Desain Sistem", "Kajian literatur dan kebutuhan masyarakat."],
    ["02", "Prototipe & UI/UX", "Web & aplikasi sebagai bukti konsep yang ramah pengguna."],
    ["03", "Blueprint AI + Blockchain", "Integrasi teknologi pada arsitektur sistem."],
    ["04", "Kemitraan Strategis", "BAZNAS, LAZ, perbankan syariah, pemda, komunitas."],
    ["05", "Roadmap Nasional", "Implementasi bertahap di seluruh Indonesia."],
    ["06", "Analisis Dampak", "Evaluasi penghimpunan, transparansi & kesejahteraan."],
  ];
  return (
    <section id="roadmap" className="py-24 gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Tindak Lanjut</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Roadmap implementasi ZISCONNECT</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(([n, t, d]) => (
            <div key={n} className="relative gradient-card rounded-2xl p-7 border border-border/60">
              <div className="text-5xl font-extrabold text-primary/15">{n}</div>
              <h3 className="-mt-6 font-bold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-12 lg:p-16 text-primary-foreground shadow-glow">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl">
              Mulai perjalanan filantropi Islam Anda hari ini.
            </h2>
            <p className="mt-5 max-w-2xl opacity-90 text-lg">
              Bergabunglah dengan ekosistem zakat digital nasional yang transparan, berkelanjutan,
              dan mendukung Green Economy Indonesia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-7 py-3.5 font-bold hover:opacity-90 transition">
                Hitung Zakat Sekarang <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#fitur" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 font-semibold hover:bg-primary-foreground/10 transition">
                Pelajari Fitur
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
            <li>Edukasi</li><li>Hitung Nisab</li><li>Bayar Zakat</li><li>Pantau</li><li>Lapor Dampak</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold mb-3">Mitra Strategis</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>BAZNAS & LAZ</li><li>Perbankan Syariah</li><li>Pemerintah Daerah</li><li>Komunitas Sosial</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © 2026 ZISCONNECT Inovasi Filantropi Islam untuk Green Economy & Ekosistem Halal Nasional.
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <About />
        <MainFeatures />
        <PrideFeatures />
        <GreenEconomy />
        {/* <Roadmap /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
