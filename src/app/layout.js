import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "MAN Demak — Madrasah Hebat Bermartabat",
    template: "%s | MAN Demak",
  },
  description:
    "Website profil MAN Demak. Madrasah Hebat Bermartabat, Mandiri Berprestasi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
