import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "../components/StructuredData";
import LayoutWrapper from "../components/LayoutWrapper";

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
        <LayoutWrapper />

        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
