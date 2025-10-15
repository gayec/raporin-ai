"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-[#EAF9F5]/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="RaporinAI"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Menü Linkleri */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#0F918B] transition-colors">
            Ana Sayfa
          </Link>
          <Link href="#how-it-works" className="hover:text-[#0F918B] transition-colors">
  Nasıl Çalışır
</Link>

          <Link href="#features" className="hover:text-[#0F918B] transition-colors">
            Özellikler
          </Link>
          <Link href="#pricing" className="hover:text-[#0F918B] transition-colors">
            Ödeme Planı
          </Link>
          <Link href="#contact" className="hover:text-[#0F918B] transition-colors">
            İletişim
          </Link>
        </div>

        {/* CTA Butonu */}
        <div className="hidden md:flex">
          <Link
            href="/download"
            className="px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg transition-all duration-300"
          >
            🚀 Uygulamayı İndir
          </Link>
        </div>
      </div>
    </nav>
  );
}
