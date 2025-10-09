import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // ✅ Navbar'ı global ekliyoruz

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌐 Meta bilgilerini düzenle
export const metadata = {
  title: "Raporin AI — Yapay Zeka Destekli Rapor Analizi",
  description:
    "Raporin AI, SGK raporlarını saniyeler içinde analiz eder, hata riskini ortadan kaldırır ve eczaneler için süreci dijitalleştirir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* ✅ Navbar tüm sayfalarda görünür */}
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
  