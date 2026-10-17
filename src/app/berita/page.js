import BeritaCard from "@/components/BeritaCard";
import { berita } from "@/data/berita";

export const metadata = {
  title: "Berita & Kegiatan",
  description: "Berita, kegiatan, dan informasi terbaru dari MAN Demak.",
};

export default function BeritaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest">
        <img
          src="/images/prestasi-kejuaraan.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-forest/85" />
        <div className="mx-auto max-w-7xl px-5 py-16 text-white sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-lime">Kabar madrasah</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-.045em] sm:text-7xl">
            Cerita yang bergerak.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Temukan kabar, informasi, dan semangat kegiatan dari lingkungan
            MAN Demak.
          </p>
          <p className="mt-8 text-sm font-semibold text-lime">{berita.length} artikel pilihan</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {berita.map((item) => (
            <BeritaCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
