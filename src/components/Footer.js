import Link from "next/link";
import { alamatMadrasah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr] md:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img
              src="/images/logo-man-demak.png"
              alt=""
              className="h-11 w-11 object-contain"
            />
            <span className="text-sm font-extrabold tracking-[.14em]">MAN DEMAK</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            Madrasah Hebat Bermartabat, Mandiri Berprestasi. Ruang tumbuh untuk
            ilmu, karakter, dan masa depan.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.18em] text-lime">Jelajahi</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
            <Link className="transition hover:text-white" href="/about">Profil madrasah</Link>
            <Link className="transition hover:text-white" href="/berita">Berita & kegiatan</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.18em] text-lime">Alamat</h2>
          <p className="mt-5 text-sm leading-7 text-white/70">
            MAN Demak
            <br />
            {alamatMadrasah}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/50 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} MAN Demak. Semua hak dilindungi.</span>
          <span>Madrasah Hebat Bermartabat</span>
        </div>
      </div>
    </footer>
  );
}
