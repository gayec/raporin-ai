import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL('https://raporin.com'),
  title: {
    default: "RaporinAI — ÜCRETSİZ Eczane Rapor Kontrol Programı | Yapay Zeka Destekli SGK Analizi",
    template: "%s | RaporinAI"
  },
  description:
    "RaporinAI, eczaneler için en gelişmiş Yapay Zeka Rapor Kontrol ve Eczane Rapor Kontrol Programıdır. Eczane rapor hatalarını saniyeler içinde bulun ve kesintileri önleyin.",
  keywords: [
    "Eczane Rapor Kontrol Programı",
    "Yapay Zeka Rapor Kontrol",
    "Eczane Yapay Zeka Rapor Kontrol",
    "SGK Rapor Kontrol",
    "Eczane Rapor",
    "SGK rapor analizi",
    "eczane yazılımı",
    "yapay zeka rapor analizi",
    "eczane otomasyon",
    "rapor dijitalleştirme",
    "SGK rapor yönetimi",
    "eczane AI çözümü",
    "RaporinAI",
    "eczane rapor sistemi",
    "Eczane Yapay Zeka",
    "Yapay Zeka Eczane",
    "Sgk Yapay Zeka",
    "Sgk Rapor Yapay Zeka",
    "Eczaneler İçin Yapay Zeka",
    "Eczane SGK Kesinti",
    "eczane yapay zeka programı",
    "SGK rapor kontrol programı",
    "SUT uyum kontrolü",
    "SUT uyum programı",
    "eczane SGK kesinti önleme",
    "SGK kesinti analizi",
    "eczacılar için yapay zeka"
  ],
  authors: [{ name: "RaporinAI" }],
  creator: "RaporinAI",
  publisher: "RaporinAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://raporin.com",
    title: "RaporinAI — ÜCRETSİZ Eczane Rapor Kontrol Programı | Yapay Zeka Destekli SGK Analizi",
    description:
      "RaporinAI, eczaneler için en gelişmiş Yapay Zeka Rapor Kontrol ve Eczane Rapor Kontrol Programıdır. Eczane rapor hatalarını saniyeler içinde bulun.",
    siteName: "RaporinAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RaporinAI - Eczane Rapor Kontrol Programı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaporinAI — ÜCRETSİZ Eczane Rapor Kontrol Programı | Yapay Zeka Destekli SGK Analizi",
    description:
      "RaporinAI, eczaneler için en gelişmiş Yapay Zeka Rapor Kontrol ve Eczane Rapor Kontrol Programıdır.",
    images: ["/og-image.png"],
    creator: "@raporinai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console'dan alınacak
    // yandex: 'yandex-verification-code', // Gerekirse eklenebilir
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18025898979"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18025898979');
          `}
        </Script>
        {/* ✅ Navbar tüm sayfalarda görünür */}
        <Navbar />

        {/* 🎭 Sabit Maskot - Sağ tarafta scroll ile birlikte hareket eder */}
        <div className="fixed right-4 lg:right-8 top-24 z-40 hidden lg:block">
          <Link href="/download" className="block cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="animate-float">
              <Image
                src="/raporin-mascot.png"
                alt="RaporinAI Maskot"
                width={112}
                height={112}
                className="w-28 h-28 drop-shadow-2xl"
                priority
              />
            </div>
          </Link>
        </div>

        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
