import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export const metadata = {
  title: "Profil Madrasah",
  description: "Kenali identitas, visi, misi, dan lingkungan belajar MAN Demak.",
};

const values = [
  ["01", "Integritas", "Menjunjung kejujuran, tanggung jawab, dan keteladanan."],
  ["02", "Keunggulan", "Terus belajar, berusaha, dan mengembangkan potensi terbaik."],
  ["03", "Kepedulian", "Menghargai sesama serta menjaga lingkungan dan kebersamaan."],
];

const learningPhotos = [
  {
    src: "/images/gedung-man-demak.jpg",
    alt: "Gedung utama MAN Demak pada siang hari",
    label: "Gedung MAN Demak",
  },
  {
    src: "/images/upacara-man-demak.jpg",
    alt: "Siswa MAN Demak mengikuti upacara di halaman madrasah",
    label: "Upacara di halaman madrasah",
  },
  {
    src: "/images/peduli-lingkungan.jpg",
    alt: "Siswa MAN Demak bergotong royong membersihkan lingkungan sekolah",
    label: "Gotong royong menjaga lingkungan",
  },
  {
    src: "/images/kegiatan-literasi.jpg",
    alt: "Siswa MAN Demak mengikuti pawai kegiatan literasi dan budaya",
    label: "Kegiatan literasi dan budaya",
  },
  {
    src: "/images/prestasi-kejuaraan.jpg",
    alt: "Siswa MAN Demak dan pendamping berfoto bersama setelah menerima penghargaan",
    label: "Prestasi siswa",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <div className="pattern-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 text-white sm:px-8 sm:py-20 lg:grid-cols-[1fr_.85fr] lg:gap-14 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-lime">Mengenal kami</p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.045em] sm:text-7xl">
              Identitas yang tumbuh bersama.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Mengenal semangat, nilai, dan lingkungan belajar yang menjadi bagian
              dari perjalanan MAN Demak.
            </p>
          </div>
          <figure className="relative">
            <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-3xl border border-lime/40 sm:-bottom-4 sm:-left-4 sm:h-32 sm:w-32" />
            <img
              src="/images/gedung-samping.jpg"
              alt="Gedung madrasah MAN Demak"
              className="relative aspect-[1.55] w-full rounded-[24px] object-cover shadow-2xl sm:rounded-[30px]"
            />
            <figcaption className="mt-3 text-xs text-white/55">
              Gedung MAN Demak
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_.8fr] md:gap-20 md:py-24">
        <article>
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Profil madrasah</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.04em] text-forest sm:text-4xl">
            Pendidikan yang membuka ruang untuk bertumbuh.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-forest/70">
            <p>
              MAN Demak adalah lembaga pendidikan menengah berciri khas Islam
              di bawah Kementerian Agama Republik Indonesia. Madrasah
              memadukan pembelajaran akademik, riset, spiritual, dan
              keterampilan teknologi.
            </p>
            <p>
              Berawal dari Madrasah Aliyah Islamic Centre, MAN Demak tumbuh
              menjadi ruang belajar yang mendorong peserta didik untuk
              mengembangkan ilmu, karakter, dan potensi masing-masing.
            </p>
            <p>
              Setiap siswa memiliki potensi dan perjalanan yang berbeda.
              Karena itu, pendidikan di madrasah bukan hanya tentang capaian
              akademik, tetapi juga tentang membangun kepercayaan diri,
              tanggung jawab, dan kepedulian terhadap sesama.
            </p>
          </div>
          <Link href="/berita" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-leaf">
            Lihat cerita terbaru <span aria-hidden="true">→</span>
          </Link>
        </article>
        <aside className="h-fit rounded-[26px] border border-forest/10 bg-white p-6 sm:p-8">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-xl font-black text-forest">
            MD
          </span>
          <h2 className="mt-6 text-2xl font-black text-forest">Identitas madrasah</h2>
          <dl className="mt-6 divide-y divide-forest/10">
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">Nama</dt>
              <dd className="mt-1.5 font-bold text-forest">{sekolah.nama}</dd>
            </div>
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">Jenjang</dt>
              <dd className="mt-1.5 font-bold text-forest">Madrasah Aliyah</dd>
            </div>
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">Alamat</dt>
              <dd className="mt-1.5 font-bold text-forest">{sekolah.alamat}</dd>
            </div>
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">NPSN / NSM</dt>
              <dd className="mt-1.5 font-bold text-forest">{sekolah.npsn} / {sekolah.nsm}</dd>
            </div>
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">Akreditasi</dt>
              <dd className="mt-1.5 font-bold text-forest">{sekolah.akreditasi}</dd>
              <dd className="mt-1 text-xs text-forest/50">SK No. {sekolah.nomorAkreditasi}</dd>
            </div>
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">Kepala madrasah</dt>
              <dd className="mt-1.5 font-bold text-forest">{sekolah.kepalaMadrasah}</dd>
            </div>
            <div className="py-4">
              <dt className="text-xs font-semibold uppercase tracking-[.12em] text-forest/45">Telepon</dt>
              <dd className="mt-1.5 font-bold text-forest">{sekolah.telepon}</dd>
              <dd className="mt-1 text-xs leading-5 text-forest/50">{sekolah.catatanTelepon}</dd>
            </div>
          </dl>
          <a
            href="https://mandemak.sch.id/profil-singkat-madrasah/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-xs font-bold text-leaf underline underline-offset-2"
          >
            Rujuk profil resmi MAN Demak ↗
          </a>
        </aside>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-[.7fr_1.3fr] md:gap-16 md:py-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Perjalanan kami</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-forest sm:text-4xl">
              Sejarah MAN Demak
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-forest/70">
            <p>
              Sejarah MAN Demak berawal dari Madrasah Aliyah Islamic Centre
              yang didirikan pada 1987 di bawah Yayasan Pendidikan Islamic
              Centre Sultan Fattah. Pada 1993, yayasan mengajukan proses
              penegerian setelah mendapat dukungan dari instansi terkait.
            </p>
            <ol className="space-y-5 border-l-2 border-leaf/20 pl-5">
              {sekolah.sejarah.map((peristiwa) => (
                <li key={peristiwa.tahun} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-leaf ring-2 ring-leaf/20" />
                  <p className="text-xs font-extrabold uppercase tracking-[.12em] text-leaf">{peristiwa.tahun}</p>
                  <h3 className="mt-1 font-bold text-forest">{peristiwa.judul}</h3>
                  <p className="mt-1 text-sm leading-6 text-forest/60">{peristiwa.deskripsi}</p>
                </li>
              ))}
            </ol>
            <p className="text-xs leading-5 text-forest/45">
              Sumber:{" "}
              <a
                href="https://mandemak.sch.id/bcd31-home/sejarah-singkat/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-leaf"
              >
                Sejarah Singkat MAN Demak
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Suasana belajar</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-forest sm:text-4xl">
              Ruang untuk terus bertumbuh.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-forest/55">
            Dokumentasi gedung dan kegiatan warga MAN Demak.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learningPhotos.map((photo) => (
            <figure key={photo.label} className="group overflow-hidden rounded-[22px] bg-forest/5">
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[1.35] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-bold text-forest">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#edf0e5]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Arah & tujuan</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-forest sm:text-5xl">Visi dan misi</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-[24px] bg-forest p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-lime">Visi</p>
              <p className="mt-5 text-xl font-bold leading-relaxed sm:text-2xl">
                “{sekolah.visi}”
              </p>
              <p className="mt-5 text-sm leading-7 text-white/65">
                Visi MAN Demak menekankan kesalehan, kecerdasan, keterampilan
                teknologi, prestasi, dan kepedulian terhadap lingkungan.
              </p>
            </div>
            <div className="rounded-[24px] bg-white p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-leaf">Misi dalam keseharian</p>
              <ul className="mt-5 space-y-4">
                {[
                  "Membiasakan ibadah, akhlak terpuji, moderasi beragama, dan kemandirian.",
                  "Meningkatkan kualitas pembelajaran dan kompetensi lulusan sesuai standar nasional.",
                  "Mengembangkan keterampilan digital dan pemanfaatan teknologi secara positif.",
                  "Mendorong prestasi akademik maupun nonakademik serta kepedulian ekoteologi.",
                  "Menguatkan tata kelola madrasah yang efektif dan bertanggung jawab.",
                ].map((mission, index) => (
                  <li key={mission} className="flex gap-4 text-sm leading-6 text-forest/75">
                    <span className="font-black text-leaf">0{index + 1}</span>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Tahun ajaran 2026/2027</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-forest sm:text-5xl">
              Program pilihan siswa.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-forest/55">
            Kuota mengikuti angka yang dipublikasikan portal PMBM. Rincian
            jumlah kelas reguler di portal memuat angka berbeda; silakan
            konfirmasi kepada panitia untuk informasi terbaru.
          </p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sekolah.program.map((program, index) => (
            <article key={program.nama} className="rounded-[22px] border border-forest/10 bg-white p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/60 text-xs font-black text-forest">
                  0{index + 1}
                </span>
                <span className="rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-leaf">
                  Kuota {program.kuota} siswa
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-forest">{program.nama}</h3>
              <p className="mt-1 text-xs font-semibold text-forest/45">{program.kepanjangan}</p>
              <p className="mt-4 text-sm leading-6 text-forest/65">{program.fokus}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-forest/45">
          Total kuota berdasarkan rincian program: 432 siswa.{" "}
          <a
            href="https://pmbm.mandemak.sch.id/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-leaf"
          >
            Lihat portal PMBM MAN Demak
          </a>
        </p>
      </section>

      <section className="bg-[#edf0e5]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Capaian 2026</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-forest sm:text-5xl">
                Prestasi warga madrasah.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-forest/55">
              Angka merangkum capaian yang dilaporkan; jalur seleksi berbeda
              bisa saja memuat siswa yang sama.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {sekolah.prestasi.map((capaian) => (
              <article key={capaian.label} className="rounded-[22px] bg-white p-6 sm:p-8">
                <p className="text-4xl font-black tracking-[-.04em] text-leaf">{capaian.angka}</p>
                <h3 className="mt-3 font-extrabold leading-6 text-forest">{capaian.label}</h3>
                <p className="mt-3 text-sm leading-6 text-forest/60">{capaian.keterangan}</p>
                <a
                  href={capaian.sumber}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-xs font-bold text-leaf underline underline-offset-2"
                >
                  Baca publikasi resmi <span aria-hidden="true" className="ml-1">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-leaf">Nilai yang kami rawat</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-forest sm:text-5xl">Bertumbuh dengan makna.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {values.map(([number, title, description]) => (
            <div key={number} className="rounded-[22px] border border-forest/10 bg-white p-6 sm:p-8">
              <span className="text-sm font-black text-leaf">{number}</span>
              <h3 className="mt-5 text-xl font-extrabold text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-forest/60">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
