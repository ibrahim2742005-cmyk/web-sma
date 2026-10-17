import Link from "next/link";
import { notFound } from "next/navigation";
import { berita } from "@/data/berita";

export function generateStaticParams() {
  return berita.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const item = berita.find((article) => article.id === params.id);
  if (!item) return { title: "Berita tidak ditemukan" };

  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default function BeritaDetailPage({ params }) {
  const item = berita.find((article) => article.id === params.id);
  if (!item) notFound();

  return (
    <article>
      <header className="bg-forest">
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14">
          <Link href="/berita" className="text-sm font-semibold text-lime hover:text-white">
            <span aria-hidden="true">←</span> Kembali ke berita
          </Link>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/60">
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-lime">{item.category}</span>
            <time>{item.date}</time>
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-.04em] text-white sm:text-6xl">
            {item.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            {item.excerpt}
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="relative -mt-2 overflow-hidden rounded-[24px] sm:-mt-3">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="aspect-[1.9] w-full object-cover"
          />
        </div>
        <div className="mx-auto mt-9 max-w-3xl">
          <div className="space-y-6 text-base leading-8 text-forest/75 sm:text-lg sm:leading-9">
            {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {item.source && (
            <p className="mt-7 text-sm text-forest/55">
              Sumber informasi:{" "}
              <a
                href={item.source}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-leaf underline underline-offset-2"
              >
                publikasi resmi MAN Demak ↗
              </a>
            </p>
          )}
          <div className="mt-12 border-t border-forest/10 pt-7">
            <Link href="/berita" className="inline-flex items-center gap-2 text-sm font-extrabold text-leaf">
              <span aria-hidden="true">←</span> Lihat semua berita
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
