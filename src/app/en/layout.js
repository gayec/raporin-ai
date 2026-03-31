import Image from "next/image";
import Link from "next/link";
import NavbarEN from "../../components/en/NavbarEN";
import StructuredDataEN from "../../components/en/StructuredDataEN";

export const metadata = {
  metadataBase: new URL('https://raporin.com'),
  title: {
    default: "RaporinAI — FREE AI-Powered Pharmacy Report Verification Platform",
    template: "%s | RaporinAI"
  },
  description:
    "RaporinAI is the most advanced AI-powered pharmacy report verification platform. Detect report errors in seconds and prevent insurance deductions. Free during beta.",
  keywords: [
    "Pharmacy Report Verification",
    "AI Report Analysis",
    "Pharmacy AI Software",
    "Insurance Report Control",
    "Pharmacy Report",
    "Insurance claim analysis",
    "pharmacy software",
    "AI report analysis",
    "pharmacy automation",
    "report digitization",
    "insurance report management",
    "pharmacy AI solution",
    "RaporinAI",
    "pharmacy report system",
    "Pharmacy AI",
    "AI Pharmacy",
    "Healthcare AI",
    "Insurance Report AI",
    "AI for Pharmacies",
    "pharmacy insurance deduction",
    "pharmacy AI program",
    "insurance report verification software",
    "regulatory compliance verification",
    "pharmacy insurance deduction prevention",
    "insurance deduction analysis",
    "AI for pharmacists"
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
    locale: "en_US",
    url: "https://raporin.com/en",
    title: "RaporinAI — FREE AI-Powered Pharmacy Report Verification Platform",
    description:
      "RaporinAI is the most advanced AI-powered pharmacy report verification platform. Detect report errors in seconds and prevent insurance deductions.",
    siteName: "RaporinAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RaporinAI - AI-Powered Pharmacy Report Verification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaporinAI — FREE AI-Powered Pharmacy Report Verification Platform",
    description:
      "RaporinAI is the most advanced AI-powered pharmacy report verification platform.",
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
  alternates: {
    canonical: 'https://raporin.com/en',
    languages: {
      'tr': 'https://raporin.com',
      'en': 'https://raporin.com/en',
    },
  },
};

export default function EnLayout({ children }) {
  return (
    <div lang="en">
      {/* English Navbar */}
      <NavbarEN />

      {/* Mascot */}
      <div className="fixed right-4 lg:right-8 top-24 z-40 hidden lg:block">
        <Link href="/en/download" className="block cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="animate-float">
            <Image
              src="/raporin-mascot.png"
              alt="RaporinAI Mascot"
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
    </div>
  );
}
