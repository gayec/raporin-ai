import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";
import LayoutWrapper from "../components/LayoutWrapper";
import CookieConsent from "../components/CookieConsent";

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
    default: "RaporinAI — ÜCRETSİZ Eczane Reçete ve Rapor Kontrol Programı | Yapay Zeka Destekli SGK Analizi",
    template: "%s | RaporinAI"
  },
  description:
    "RaporinAI, yapay zeka destekli bir Eczane Reçete ve Rapor Kontrol Programıdır. Dönemin tüm reçetelerini tek tıkla analiz edin, SUT uyumsuzluklarını ve SGK kesintilerini fatura teslim etmeden önce önleyin.",
  keywords: [
    "Eczane Reçete ve Rapor Kontrol Programı",
    "Eczane Rapor Kontrol Programı",
    "Eczane Reçete Kontrol Programı",
    "Medula entegrasyonu",
    "Medula reçete kontrol",
    "toplu reçete kontrolü",
    "toplu rapor kontrolü",
    "Medula rapor kontrol programı",
    "reçete rapor doz kontrolü",
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
    title: "RaporinAI — ÜCRETSİZ Eczane Reçete ve Rapor Kontrol Programı",
    description:
      "Dönemin tüm reçetelerini tek tıkla analiz edin. Reçete ve rapor hatalarını saniyeler içinde bulun, SGK kesintilerini önleyin.",
    siteName: "RaporinAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RaporinAI - Eczane Reçete ve Rapor Kontrol Programı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaporinAI — ÜCRETSİZ Eczane Reçete ve Rapor Kontrol Programı",
    description:
      "Dönemin tüm reçetelerini tek tıkla analiz edin, SGK kesintilerini fatura teslim etmeden önce önleyin.",
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
        {/*
          Google Consent Mode v2 — varsayılan olarak tüm rıza sinyalleri "denied".
          Bu script her şeyden önce çalışmalı; kullanıcı rıza verdiğinde
          CookieConsent bileşeni "consent update" gönderir ve Google Ads etiketini yükler.
        */}
        <script
          id="google-consent-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 500
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `,
          }}
        />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <LayoutWrapper />

        <div>
          {children}
        </div>

        {/* Çerez bandı + çerez yönetim paneli (TR ve EN tüm sayfalarda) */}
        <CookieConsent />
      </body>
    </html>
  );
}
