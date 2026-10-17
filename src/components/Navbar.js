"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Profil" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-50 border-b border-forest/10 bg-cream">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="MAN Demak, beranda"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/logo-man-demak.png"
            alt=""
            className="h-11 w-11 object-contain"
          />
          <span>
            <span className="block text-[15px] font-extrabold tracking-[.12em] text-forest">
              MAN DEMAK
            </span>
            <span className="mt-0.5 block text-[9px] font-semibold tracking-[.19em] text-forest/55">
              MADRASAH HEBAT BERMARTABAT
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-leaf ${
                  active ? "text-leaf" : "text-forest/70"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/berita"
            className="rounded-full bg-forest px-5 py-3 text-sm font-bold text-white transition hover:bg-leaf"
          >
            Jelajahi madrasah <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-forest/15 text-forest md:hidden"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navigasi seluler"
          className="absolute left-0 right-0 top-full border-t border-forest/10 bg-cream px-5 py-4 shadow-lg md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-forest hover:bg-forest/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
