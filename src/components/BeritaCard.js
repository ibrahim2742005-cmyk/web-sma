import Link from "next/link";

export default function BeritaCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-forest/[.08] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,61,46,.11)]">
      <Link href={`/berita/${item.id}`} className="block">
        <div className="relative aspect-[1.55] overflow-hidden bg-forest/10">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-forest">
            {item.category}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-xs font-medium text-forest/45">{item.date}</p>
          <h3 className="mt-3 text-lg font-bold leading-snug text-forest transition-colors group-hover:text-leaf">
            {item.title}
          </h3>
          <p className="line-clamp-3 mt-3 text-sm leading-6 text-forest/60">{item.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf">
            Baca selengkapnya <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
