import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";
import { sekolah } from "@/data/sekolah";

export default function HomePage() {
  return (
    <>
      <section className="hero-image relative isolate min-h-[620px] overflow-hidden sm:min-h-[690px]">
        <div className="absolute inset-0 -z-10 bg-forest/20" />
        <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:min-h-[690px] sm:px-8">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Selamat datang di MAN Demak
            </span>
            <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-[-.045em] sm:text-7xl lg:text-[88px]">
              Tumbuh dalam
              <br />
              <span className="text-lime">ilmu & karakter.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Madrasah Hebat Bermartabat, Mandiri Berprestasi. Bersama
              membangun generasi berilmu, berakhlak, dan siap melangkah ke masa
              depan.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="rounded-full bg-lime px-6 py-3.5 text-sm font-extrabold text-forest transition hover:bg-white"
              >
                Kenali madrasah <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/berita"
                className="rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Lihat kabar terbaru
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden max-w-[210px] rounded-2xl border border-white/20 bg-forest/35 p-5 text-white backdrop-blur-md lg:block">
            <span className="text-3xl text-lime" aria-hidden="true">✳</span>
            <p className="mt-3 text-sm font-bold leading-6">
              Belajar hari ini,
              <br />
              memimpin esok hari.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-forest/30 to-transparent" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-20 md:py-28">
        <div className="relative">
          <div className="pattern-grid absolute -left-4 -top-4 h-28 w-28 rounded-3xl sm:-left-6 sm:-top-6" />
          <div className="relative overflow-hidden rounded-[28px]">
            <div className="bg-[#343982]">
            <img
              src="/images/kepala-man-demak.png"
              alt={`Kepala MAN Demak, ${sekolah.kepalaMadrasah}`}
              className="aspect-[1.9] w-full object-contain"
              loading="lazy"
            />
            </div>
            <div className="bg-cream p-5 sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-leaf">Kepala madrasah</p>
              <p className="mt-2 text-base font-bold leading-6 text-forest sm:text-lg">
                {sekolah.kepalaMadrasah}
              </p>
              <p className="mt-1 text-xs text-forest/55">MAN Demak</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Tentang kami</p>
          <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-.04em] text-forest sm:text-5xl">
            Tempat setiap potensi menemukan jalannya.
          </h2>
          <p className="mt-5 text-base leading-8 text-forest/65">
            Dengan visi membentuk generasi saleh, cerdas, terampil dalam
            teknologi, berprestasi, dan berwawasan ekoteologi, MAN Demak
            memadukan pendidikan akademik, riset, dan penguatan karakter.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-leaf"
          >
            Lebih lanjut tentang MAN Demak <span aria-hidden="true">→</span>
          </Link>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4">
            {[
              ["01", "Belajar dengan rasa ingin tahu"],
              ["02", "Berkarya dengan percaya diri"],
              ["03", "Bertumbuh dalam akhlak"],
              ["04", "Melangkah bersama masyarakat"],
            ].map(([number, text]) => (
              <div key={number} className="rounded-2xl border border-forest/10 bg-white/70 p-4 sm:p-5">
                <span className="text-xs font-black text-leaf">{number}</span>
                <p className="mt-2 text-sm font-bold leading-5 text-forest">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf0e5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Cerita dari madrasah</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-forest sm:text-5xl">Kabar & kegiatan</h2>
            </div>
            <Link href="/berita" className="text-sm font-extrabold text-leaf">
              Semua berita <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {berita.slice(0, 3).map((item) => (
              <BeritaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-forest px-7 py-9 text-white sm:px-10 md:flex-row md:items-center md:px-14 md:py-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-lime">Langkah berikutnya</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-[-.03em] sm:text-4xl">
              Temukan cerita dan semangat MAN Demak.
            </h2>
          </div>
          <Link
            href="/about"
            className="shrink-0 rounded-full bg-lime px-6 py-3.5 text-sm font-extrabold text-forest transition hover:bg-white"
          >
            Jelajahi profil <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
